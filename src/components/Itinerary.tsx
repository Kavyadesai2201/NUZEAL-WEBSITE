import { useState } from 'react';
import { Clock, MapPin } from 'lucide-react';

const days = [
  {
    day: 'Day 1',
    date: 'February 19, 2026',
    events: [
      { time: '4:40 PM – 5:00 PM', title: 'Flashmob', venue: 'A/B Lawn', description: 'Energetic opening flashmob performance.' },
      { time: '5:00 PM – 6:00 PM', title: 'Inaugural Ceremony', venue: 'A/B Lawn', description: 'Official inauguration with lighting ceremony and opening address.' },
      { time: '6:00 PM – 7:00 PM', title: 'NUMAISH Performance', venue: 'Dome Stage', description: 'Live musical performance by the NUMAISH band.' },
      { time: '7:00 PM – 9:30 PM', title: 'Group Folk Dance', venue: 'Dome Stage', description: 'Traditional folk dance performances celebrating culture.' },
    ],
  },

  {
    day: 'Day 2',
    date: 'February 20, 2026',
    events: [
      { time: '9:00 AM – 11:00 AM', title: 'Solo-Classical Dance', venue: 'Auditorium – C Block', description: 'Classical solo dance performances.' },
      { time: '9:00 AM – 10:30 AM', title: 'Classical Instrumental', venue: 'NIM Auditorium', description: 'Instrumental classical music performances.' },

      { time: '10:30 AM – 12:30 PM', title: 'Debate', venue: 'A-101 (A Block)', description: 'Competitive debate contest.' },
      { time: '10:30 AM – 12:00 PM', title: 'Non-Classical Instrumental', venue: 'NIM Auditorium', description: 'Fusion and contemporary instrumental music.' },

      { time: '11:00 AM – 1:00 PM', title: 'Solo-Western Dance', venue: 'Auditorium – C Block', description: 'Western style solo dance performances.' },

      { time: '12:30 PM – 3:00 PM', title: 'Solo Singing', venue: 'NIM Auditorium', description: 'Solo vocal performances.' },

      { time: '1:00 PM – 3:00 PM', title: 'Duet Dance', venue: 'Auditorium – C Block', description: 'Duet dance performances.' },
      { time: '1:30 PM – 3:00 PM', title: 'Elocution', venue: 'A-101 (A Block)', description: 'Speech and oratory competition.' },

      { time: '3:00 PM – 4:00 PM', title: 'Duet Singing', venue: 'NIM Auditorium', description: 'Duet vocal performances.' },
      { time: '3:00 PM – 4:30 PM', title: 'Poetry Recitation', venue: 'A-101 (A Block)', description: 'Expressive poetry performances.' },

      { time: '4:00 PM – 6:00 PM', title: 'Group Singing', venue: 'NIM Auditorium', description: 'Group vocal performances.' },
      { time: '6:00 PM – 8:30 PM', title: 'Western Group Dance', venue: 'Dome Ground', description: 'High-energy western group dance showcase.' },
    ],
  },

  {
    day: 'Day 3',
    date: 'February 21, 2026',
    events: [
      { time: '9:00 AM – 10:00 AM', title: 'Rangoli', venue: 'ID Block', description: 'Traditional rangoli art competition.' },
      { time: '9:00 AM – 10:00 AM', title: 'Rap', venue: 'NIM Auditorium', description: 'Rap music performances.' },
      { time: '9:00 AM – 10:30 AM', title: 'Mime', venue: 'Auditorium – C Block', description: 'Silent theatrical mime performances.' },

      { time: '10:00 AM – 11:00 AM', title: 'On The Spot Painting', venue: 'Lawn between C/D', description: 'Live painting competition.' },
      { time: '10:00 AM – 11:00 AM', title: 'Beatbox', venue: 'NIM Auditorium', description: 'Live beatboxing acts.' },
      { time: '10:30 AM – 12:00 PM', title: 'Mimicry', venue: 'Auditorium – C Block', description: 'Voice and character imitation acts.' },

      { time: '11:00 AM – 12:00 PM', title: 'Collage (Vision Board) Making', venue: 'Lawn between C/D', description: 'Creative collage making.' },

      { time: '12:00 PM – 6:00 PM', title: 'Skit', venue: 'Auditorium – C Block', description: 'Theatrical skit performances.' },

      { time: '1:00 PM – 2:00 PM', title: 'Cartooning', venue: 'Lawn between C/D', description: 'Cartoon drawing competition.' },
      { time: '2:00 PM – 3:00 PM', title: 'Poster Making', venue: 'Lawn between C/D', description: 'Poster design competition.' },
      { time: '2:00 PM – 4:00 PM', title: "Battle of Jo’keys", venue: 'Dome Stage', description: 'DJ and music battle event.' },

      { time: '3:00 PM – 4:00 PM', title: 'Mehendi', venue: 'Lawn between C/D', description: 'Henna art competition.' },
      { time: '4:00 PM – 5:00 PM', title: 'Face Painting', venue: 'Lawn between C/D', description: 'Creative face painting.' },
      { time: '4:00 PM – 5:30 PM', title: 'Street Dance Battle', venue: 'Outside A Block', description: 'Freestyle street dance battles.' },

      { time: '6:00 PM – 8:00 PM', title: 'Cultural Walk', venue: 'Dome Stage', description: 'Cultural procession and showcase.' },

    ],
  },
];


const Itinerary = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section
      id="itinerary"
      className="py-20 md:py-32 
      bg-gradient-to-br 
      from-[#2a1c18] 
      via-[#3a2520] 
      to-[#1f1411]"
    >
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-elegant text-lg text-[#e0b973] tracking-widest uppercase mb-2">
            Schedule
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[#f5ede6] mb-4">
            Event <span className="text-[#e0b973]">Itinerary</span>
          </h2>
          <div className="ornament-line mx-auto opacity-70" />
        </div>

        {/* Day Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {days.map((day, index) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(index)}
              className={`px-6 py-3 rounded-xl font-display tracking-wide transition-all duration-300 cursor-pointer
                ${
                  activeDay === index
                    ? 'bg-gradient-to-r from-[#e0b973] to-[#c99a4b] text-[#2a1c18] shadow-lg scale-105'
                    : 'bg-[#3a2520] text-[#e6d5c3] hover:bg-[#4a2f28]'
                }`}
            >
              <span className="block text-sm">{day.day}</span>
              <span className="font-body text-xs opacity-80">{day.date}</span>
            </button>
          ))}
        </div>

        {/* Events Timeline */}
        <div className="max-w-3xl mx-auto">
          {days[activeDay].events.map((event) => (
            <div
              key={event.title}
              className="relative pl-8 pb-10 last:pb-0 border-l border-[#e0b973]/30 ml-4"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-[#e0b973] border-4 border-[#2a1c18]" />

              {/* Event Card */}
              <div className="ml-4 p-6 rounded-2xl 
                bg-gradient-to-br from-[#3a2520] to-[#2a1c18]
                border border-[#e0b973]/20
                hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <span className="flex items-center gap-1 text-sm text-[#e0b973] font-display">
                    <Clock size={14} />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-[#d8c2aa]">
                    <MapPin size={14} />
                    {event.venue}
                  </span>
                </div>

                <h3 className="font-display text-lg text-[#f5ede6] mb-1">
                  {event.title}
                </h3>
                <p className="font-body text-sm text-[#d8c2aa] leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Itinerary;
