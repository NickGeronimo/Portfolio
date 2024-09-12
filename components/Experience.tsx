import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorder'

const Experience = () => {
  const events = [
    {
      date: '2020 - 2024',
      title: 'Web Developer',
      company: 'Fuse Lenses',
      location: 'Clearwater, FL',
      description: 'At Fuse Lenses, I optimized development workflows by implementing GitHub for version control and Asana for ticketing, resulting in a 60% productivity increase during peak seasons. I enhanced efficiency through new procedures, boosting productivity by 20% and accelerating project turnaround times. I conducted rigorous bug testing and used data analysis to drive website enhancements, increasing prescription product sales by over 100%. Additionally, I led a web internship program and consistently wrote clean, maintainable code following industry best practices.',
    },
    {
      date: '2016-2020',
      title: 'Guest Operations - Kilimanjaro Safaris',
      company: 'Walt Disney World',
      location: 'Orlando, Florida',
      description: 'At Kilimanjaro Safaris in Disney World, I provided exceptional guest operations support, ensuring a seamless and enjoyable experience for thousands of visitors daily. My responsibilities included delivering clear and accurate information, managing high-traffic events, and resolving guest issues efficiently, much of which was done while operating a large vehicle and ensuring  guest safety.',
    },
    {
      date: '2014 - 2016',
      title: 'Guest Operations - ESPN WWOS',
      company: 'Walt Disney World',
      location: 'Orlando, FL',
      description: 'At ESPN Wide World of Sports, I provided top-tier guest operations support, ensuring a high-quality experience for visitors during events and daily operations. My duties included operating and leading small teams, coordinating efforts to maintain smooth event execution and enhance overall guest satisfaction.',
    },
    {
      date: '2012-2014',
      title: 'Music Archival',
      company: 'University of Tampa',
      location: 'Tampa, Florida',
      description: 'At the University of Tampa, I managed and preserved extensive music collections, ensuring the accurate organization and accessibility of archival materials. My responsibilities included cataloging music records, digitizing analog formats, and creating comprehensive databases for efficient retrieval. ',
    },

  ];

  return (
    <div className="py-20" id="work">
      <h1 className="heading">
        <span className="text-sky-500">Experience </span>
      </h1>
      <div className="relative flex flex-col items-start md:items-center pt-10">
        <div className="absolute md:left-1/2 md:-translate-x-1/2 left-4 transform w-1 bg-sky-500 h-full"></div>
        {events.map((event, index) => (
          <div
            key={index}
            className={`mb-8 flex w-full relative ${index % 2 === 0 ? 'justify-start md:justify-end ' : 'justify-start'}`}
          >
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'pl-8 md:pl-0 md:pr-8' : 'pl-8'}`}>
              <div className={`relative p-4 bg-slate-900  ${index % 2 === 0 ? 'rounded-tl-none ' : 'rounded-tl-none md:rounded-tl-lg md:rounded-tr-none'} rounded-lg shadow-lg border border-white/[0.2] mx-10`}>

                <h3 className="text-lg font-semibold">{event.title}</h3>
                <h4 className="text-md ">{event.company} {event.location}</h4>
                <time className="text-xs ">{event.date}</time>
                <p className="mt-2 text-sm ">{event.description}</p>
              </div>
            </div>
            <div className={`absolute top-0  transform -translate-y-1/2 left-1.5 md:left-1/2 md:-translate-x-1/2 border-4 bg-slate-950 border-sky-500 w-6 h-6 rounded-full z-10`}></div>
          </div>
        ))}
      </div>
    </div>

  );
};
export default Experience