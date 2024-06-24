import React from "react";
import dayjs from "dayjs";
import {TracingBeam} from "@/components/ui/tracing-beam";
import { Img } from 'react-image';

export default function Work({ work }) {
    return (
        <div className="content-center justify-center w-full flex">
            <div>
                <h1 className="text-5xl font-bold text-center py-14">Work Experience</h1>
                <TracingBeam className="px-6">
                    <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                        {work.map((item, index) => (
                            <div key={`content-${index}`} className="mb-10">
                                <div className="flex w-full gap-4 justify-between">
                                    <div>
                                        <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                                            {dayjs(item.started_at).format('YYYY-MM-DD')} - {item.ended_at === null ? 'Present' : dayjs(item.ended_at).format('YYYY-MM-DD')}
                                        </h2>

                                        <p className="text-xl mb-4">
                                            {item.title} at <a className="text-indigo-400 hover:text-indigo-500"
                                                               href={item.company.website}
                                                               target="_blank">{item.company.title}</a>
                                        </p>
                                    </div>
                                    <div>
                                        {item.company.logo && (
                                            <Img
                                                src={item.company.logo}
                                                alt="blog thumbnail"
                                                height="50"
                                                width="50"
                                                className="rounded-lg mb-10 object-cover"
                                            />
                                        )}
                                    </div>
                                </div>


                                <p className="mb-4">
                                    <div dangerouslySetInnerHTML={{__html: item.description}}/>
                                </p>
                            </div>
                        ))}
                    </div>
                </TracingBeam>
            </div>
        </div>
    )
}
