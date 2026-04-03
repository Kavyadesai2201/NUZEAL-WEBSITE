import { Trophy, Medal, Award } from 'lucide-react';
import { useEffect, useState } from 'react';

// 🔗 PUT YOUR GOOGLE SHEET ID HERE
const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1AGlE17CDk59PW8VqAJZe1gu0bEwqfOhln-Sz6L_s09U/gviz/tq?tqx=out:json&sheet=NUZEAL-POINTS";
const POLL_INTERVAL_MS = 30000;

type Institute = {
  id: number;
  name: string;
  shortName: string;
  points: number;
};

type SheetRow = {
  c?: Array<{
    v?: string | number | null;
  }>;
};

type SheetResponse = {
  table?: {
    rows?: SheetRow[];
  };
};

const asText = (value: unknown) => {
  if (typeof value === 'string' || typeof value === 'number') {
    return String(value);
  }

  return undefined;
};

const Leaderboard = () => {
  const [instituteScores, setInstituteScores] = useState<Institute[]>([]);

  // Fetch data from Google Sheets with visibility-aware polling.
  useEffect(() => {
    let isMounted = true;
    let intervalId: ReturnType<typeof setInterval> | null = null;

    const fetchData = async () => {
      const res = await fetch(SHEET_URL);
      const text = await res.text();

      if (!isMounted) return;

      const json = JSON.parse(text.substring(47).slice(0, -2)) as SheetResponse;
      const rows = json.table?.rows ?? [];

      const formatted: Institute[] = rows.map((r, index: number) => ({
        id: index + 1,
        name: asText(r.c?.[6]?.v) ?? '',
        shortName: asText(r.c?.[7]?.v) ?? '',
        points: Number(r.c?.[8]?.v) || 0,
      }));

      setInstituteScores(formatted);
    };

    const startPolling = () => {
      if (intervalId) return;

      intervalId = setInterval(() => {
        void fetchData();
      }, POLL_INTERVAL_MS);
    };

    const stopPolling = () => {
      if (!intervalId) return;
      clearInterval(intervalId);
      intervalId = null;
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        void fetchData();
        startPolling();
        return;
      }

      stopPolling();
    };

    void fetchData();
    startPolling();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      isMounted = false;
      stopPolling();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Sort institutes by points (highest first) — SAME AS BEFORE
  const sortedInstitutes = [...instituteScores].sort((a, b) => b.points - a.points);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      default:
        return <span className="font-display text-lg text-muted-foreground w-6 text-center">{rank}</span>;
    }
  };

  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-500/20 to-yellow-600/10 border-yellow-500/50';
      case 2:
        return 'bg-gradient-to-r from-gray-400/20 to-gray-500/10 border-gray-400/50';
      default:
        return 'bg-card border-border/50';
    }
  };

  return (
    <section id="leaderboard" className="py-20 md:py-32 bg-pattern-bohemian">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-elegant text-lg text-secondary tracking-widest uppercase mb-2">
            Competition
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            <span className="text-primary">Leaderboard</span>
          </h2>
          <div className="ornament-line mb-6" />
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Live rankings of all eight institutes competing in NUZEAL 2026
          </p>
        </div>

        {/* Leaderboard Table */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {sortedInstitutes.map((institute, index) => {
              const rank = index + 1;
              return (
                <div
                  key={institute.id}
                  className={`flex items-center gap-4 p-4 md:p-5 rounded-xl border ${getRankStyle(rank)} transition-all duration-300 hover:scale-[1.02]`}
                >
                  {/* Rank */}
                  <div className="flex items-center justify-center w-10">
                    {getRankIcon(rank)}
                  </div>

                  {/* Institute Badge */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-xs text-primary-foreground">{institute.shortName}</span>
                  </div>

                  {/* Institute Name */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-sm md:text-base text-foreground truncate">
                      {institute.name}
                    </h3>
                    <p className="font-body text-xs text-muted-foreground">{institute.shortName}</p>
                  </div>

                  {/* Points */}
                  <div className="text-right">
                    <p className="font-display text-2xl md:text-3xl text-primary">{institute.points}</p>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Points</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Update Notice */}
          <p className="font-body text-xs text-muted-foreground text-center mt-6">
            Scores are updated in real-time during the event
          </p>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;