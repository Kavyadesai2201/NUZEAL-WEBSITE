import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Music,
  Palette,
  BookOpen,
  Theater,
  Sparkles,
  FileText,
} from 'lucide-react';

/* ---------------- EVENTS CONFIG ---------------- */

const events = [
  {
    id: 'music',
    icon: Music,
    title: 'Music',
    category: 'Cultural',
    guidelinePdf: '/guidelines/music.pdf',

    sheetId: '1B4lCwsOfQTzZENBe-ingXVTr8R_mdkwFtGWvEw-JUI8',
    sheetName: 'NUzeal-Music (Responses)',

    type: 'normal',
    subEvents: [
      'Solo Singing',
      'Duet Singing',
      'Group Song',
      'Non-Classical Instrumental',
      'Classical Instrumental',
      "Battle of Jo'keys (New in 2026)",
      'Rap (New in 2026)',
      'Beat Boxing (New in 2026)',
    ],
    color: 'bg-primary',
  },
  {
    id: 'dance',
    icon: Sparkles,
    title: 'Dance',
    category: 'Cultural',
    guidelinePdf: '/guidelines/dance.pdf',

    sheetId: '1EUloU12ebemYMWHGhJTChNRFuzxYGj0HcRcrMD9ypiQ',
    sheetName: 'NUzeal-Dance (Responses)',

    type: 'normal',
    subEvents: [
      'Western Solo Dance',
      'Classical Solo Dance',
      'Duet Dance',
      'Folk/Tribal Dance (Group)',
      'Western Dance (Group)',
      'Street Dance Solo (New in 2026)',
    ],
    color: 'bg-secondary',
  },
  {
    id: 'literary',
    icon: BookOpen,
    title: 'Literary',
    category: 'Academic',
    guidelinePdf: '/guidelines/literary.pdf',

    sheetId: '1FYGWvkwYPFNbLFy91OlNiOTYm-86dhbqrcgly6jwETA',
    sheetName: 'Literary competition (Responses)',

    type: 'normal',
    subEvents: ['Debate', 'Elocution', 'Poetry Recitation'],
    color: 'bg-accent',
  },
  {
    id: 'theatre',
    icon: Theater,
    title: 'Theatre',
    category: 'Cultural',
    guidelinePdf: '/guidelines/theatre.pdf',

    sheetId: '1VobMH0k1d7fm5Q4oO5JOj2rBLYfFJ1uRqb38hahztaM',
    sheetName: 'NUzeal-Theater (Responses)',

    type: 'normal',
    subEvents: ['Skit', 'Mime', 'Mimicry'],
    color: 'bg-primary',
  },
  {
    id: 'fine-arts',
    icon: Palette,
    title: 'Fine Arts',
    category: 'Creative',
    guidelinePdf: '/guidelines/fine_arts.pdf',

    sheetId: '1XeaL4u-L8Y1ab62PLBWeo7ImDKTn15q7udzPa7TO3BY',
    sheetName: 'NUzeal-Art (Responses)',

    type: 'fine',
    subEvents: [
      'On the Spot Painting',
      'Collage',
      'Poster Making',
      'Cartooning',
      'Rangoli',
      'Face Painting',
      'Mehndi',
    ],
    color: 'bg-forest',
  },
  {
    id: 'cultural-showcase',
    icon: Sparkles,
    title: 'Cultural Showcase',
    category: 'Step forward, dress to impress, and be a part of the grand celebration of diversity!',
    guidelinePdf: '/guidelines/cultural-showcase.pdf',

    sheetId: '1Sos-DfAYMFDyBuyZRZPeYvEObysAdRHy5tQiv4w4h1U',
    sheetName: 'cultural showcase (Responses)',

    type: 'normal',
    subEvents: [],
    color: 'bg-secondary',
  },
];

/* ---------------- GOOGLE FORM LINKS ---------------- */

const formLinks: Record<string, string> = {
  music: 'https://docs.google.com/forms/d/e/1FAIpQLScQzkW5BMh-H4adi3YR-RUDfTVdojAyOWY5Is5B-rQ8pbgS1w/viewform?usp=sharing',
  dance: 'https://docs.google.com/forms/d/e/1FAIpQLScoTpUP4u5tc6BLTTiyvKlH4rZ2ftFja_1TVe54SH2gHQHN7Q/viewform?usp=sharing',
  literary: 'https://docs.google.com/forms/d/e/1FAIpQLSc-wEyjGtknxtriYTbFPL8f_I59nRLJBVbA20YG4TmmYUzqTg/viewform?usp=sharing',
  theatre: 'https://docs.google.com/forms/d/e/1FAIpQLSd6QNG9V82SeL4nLsm6mMQgAGMqszCNK3V_nUwWAxB0P9eSyw/viewform?usp=sharing',
  'fine-arts': 'https://docs.google.com/forms/d/e/1FAIpQLSc69P3DTxf_WQxfqX2L87hYy9_jwv07t1ohglOU0w1cJDLzng/viewform?usp=sharing',
  'cultural-showcase': 'https://docs.google.com/forms/d/e/1FAIpQLScu7YrE407z4QBfElsw4wAR0Htr6AzyYvuL6KAY50H1eixSmw/viewform',
};

/* ---------------- MAIN COMPONENT ---------------- */

const Events = () => {

  const [participants, setParticipants] = useState<any[]>([]);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [show, setShow] = useState(false);

  const handleGuidelinesClick = (
    e: React.MouseEvent,
    pdfUrl: string
  ) => {
    e.stopPropagation();
    window.open(pdfUrl, '_blank');
  };

  /* ---------- FETCH NORMAL SHEETS ---------- */

  async function fetchNormalSheet(
    sheetId: string,
    sheetName: string,
    allowedSubEvents: string[]
  ) {
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;
    const res = await fetch(url);
    const text = await res.text();

    const json = JSON.parse(text.substring(47).slice(0, -2));
    const rows = json.table.rows;

    const list: any[] = [];

    rows.forEach((r: any) => {
      const c = r.c;

      const institute = c[2]?.v;
      const category  = c[3]?.v;
      const event     = c[4]?.v;

      if (allowedSubEvents.length > 0 && !allowedSubEvents.includes(event)) return;

      const p1 = c[5]?.v;
      const p2 = c[6]?.v;

      if (p1) list.push({ name: p1, institute, event, category });
      if (p2) list.push({ name: p2, institute, event, category });
    });

    return list;
  }

  /* ---------- FETCH FINE ARTS ---------- */

  async function fetchFineArts(
    sheetId: string,
    sheetName: string,
    allowedSubEvents: string[]
  ) {
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;
    const res = await fetch(url);
    const text = await res.text();

    const json = JSON.parse(text.substring(47).slice(0, -2));
    const rows = json.table.rows;

    const list: any[] = [];

    rows.forEach((r: any) => {
      const c = r.c;

      const institute = c[2]?.v;
      const category  = c[3]?.v;
      const event     = c[4]?.v;

      if (!allowedSubEvents.includes(event)) return;

      for (let i = 5; i <= 9; i++) {
        const name = c[i]?.v;
        if (name) list.push({ name, institute, event, category });
      }
    });

    return list;
  }

  /* ---------- FETCH CULTURAL SHOWCASE ---------- */

  async function fetchCulturalShowcase(
  sheetId: string,
  sheetName: string
) {
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;
  const res = await fetch(url);
  const text = await res.text();

  const json = JSON.parse(text.substring(47).slice(0, -2));
  const rows = json.table.rows || [];

  const list: any[] = [];

 rows.slice(1).forEach((r: any) => {
  const c = r.c;

  const institute = c[1]?.v;
  const name1 = c[2]?.v;
  const name2 = c[3]?.v;

  if (name1) {
    list.push({
      name: name1,
      institute,
      event: 'Cultural Showcase',
      category: 'student',
    });
  }

  if (name2) {
    list.push({
      name: name2,
      institute,
      event: 'Cultural Showcase',
      category: 'student',
    });
  }
});


  return list;
}


  /* ---------- OPEN PARTICIPANTS ---------- */

  async function openParticipants(eventObj: any) {
  let list: any[] = [];

  if (eventObj.id === 'cultural-showcase') {
    list = await fetchCulturalShowcase(
      eventObj.sheetId,
      eventObj.sheetName
    );
  } 
  else if (eventObj.type === 'fine') {
    list = await fetchFineArts(
      eventObj.sheetId,
      eventObj.sheetName,
      eventObj.subEvents
    );
  } 
  else {
    list = await fetchNormalSheet(
      eventObj.sheetId,
      eventObj.sheetName,
      eventObj.subEvents
    );
  }

  setSelectedEvent(eventObj.title);
  setParticipants(list);
  setShow(true);
}


  /* ---------------- UI ---------------- */

  return (
    <section id="events" className="relative py-20 md:py-32 bg-pattern-bohemian-light bg-repeat">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <p className="font-elegant text-sm tracking-widest uppercase text-[#8B5A3C] mb-2">
            Participate
          </p>

          <h2 className="font-display text-4xl md:text-5xl text-[#3F2618] mb-4">
            Featured <span className="text-[#8B5A3C]">Events</span>
          </h2>

          <div className="ornament-line mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {events.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className="flex flex-col p-6 rounded-2xl bg-[#F7EFE7]/90 border border-[#C9A07A]/40 shadow-sm cursor-pointer"
            >

              <div className="flex items-center justify-between mb-4">
                <div className={`w-14 h-14 rounded-xl ${event.color} flex items-center justify-center`}>
                  <event.icon className="w-7 h-7 text-white" />
                </div>

                <button onClick={(e) => handleGuidelinesClick(e, event.guidelinePdf)}
                  className="px-3 py-1.5 text-xs uppercase tracking-wider text-[#8B5A3C] bg-[#EAD5C0] rounded-full">
                  <FileText size={12} className="inline mr-1" />
                  Guidelines
                </button>
              </div>

              <h3 className="font-display text-xl mb-1">{event.title}</h3>
              <p className="text-sm mb-2">{event.category}</p>

              {event.subEvents.length > 0 && (
                <ul className="space-y-2 mb-6">
                  {event.subEvents.map((sub, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#8B5A3C]" />
                      {sub}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-auto">
                <a href={formLinks[event.id]} target="_blank"
                  className="block mb-3 px-6 py-3 text-center rounded-full bg-[#EAD5C0] hover:scale-[1.02] transition">
                  Register Now →
                </a>

                <button onClick={() => openParticipants(event)}
                  className="block w-full text-sm underline text-[#8B5A3C] hover:text-[#5f3a25] transition">
                  View Participants
                </button>
              </div>

            </motion.div>
          ))}

        </div>
      </div>

      <AnimatePresence>
        {show && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 50 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="bg-white w-[420px] max-h-[80vh] rounded-2xl p-6 overflow-y-auto shadow-xl"
            >

              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">
                  Participants – {selectedEvent}
                </h2>
                <button onClick={() => setShow(false)}>✖</button>
              </div>

              {participants.length === 0 ? (
                <p className="text-gray-500 text-sm text-center">
                  No registered participants yet
                </p>
              ) : (
                <>
                  {participants.some(p => (p.category || "").toLowerCase().trim() === "student") && (
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold uppercase tracking-widest text-[#8B5A3C] mb-3">
                        Student Category
                      </h3>

                      {participants
                        .filter(p => (p.category || "").toLowerCase().trim() === "student")
                        .map((p, i) => (
                          <div key={i} className="flex justify-between py-2 border-b last:border-none">
                            <div>
                              <p className="font-medium">{p.name}</p>
                              <p className="text-xs text-gray-500">{p.event}</p>
                            </div>
                            <span className="text-sm text-gray-500">{p.institute}</span>
                          </div>
                        ))}
                    </div>
                  )}

                  {participants.some(p => (p.category || "").toLowerCase().trim() === "faculty") && (
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-widest text-[#8B5A3C] mb-3">
                        Faculty Category
                      </h3>

                      {participants
                        .filter(p => (p.category || "").toLowerCase().trim() === "faculty")
                        .map((p, i) => (
                          <div key={i} className="flex justify-between py-2 border-b last:border-none">
                            <div>
                              <p className="font-medium">{p.name}</p>
                              <p className="text-xs text-gray-500">{p.event}</p>
                            </div>
                            <span className="text-sm text-gray-500">{p.institute}</span>
                          </div>
                        ))}
                    </div>
                  )}
                </>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Events;