import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorder'

const Experience = () => {
    return (
        <div id="Work" className="py-20">
            <h1 className="heading text-sky-500">
                Work Experience
            </h1>

            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 cursor-default">
            {workExperience.map((card)=> (
                <Button
                    key={card.id}
                    borderRadius='1.75rem'
                    duration={Math.floor(Math.random() *1000)+10000}
                    className='flex text-white text-center border-neutral-200 dark:border-slate-800 py-2'
                >
                    <div className="">
                        <h1 className='text-center text-xl md:text-2xl font-bold'>
                            {card.title}
                            <p className='text-center text-white-100 mt-3 font-semibold'>
                                {card.desc}
                            </p>
                        </h1>
                    </div>
                </Button>
            ))}
            </div>
        </div>
    )
}

export default Experience