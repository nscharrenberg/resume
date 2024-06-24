import {Head} from "@inertiajs/react";
import React, {useEffect, useState} from "react";
import dayjs from "dayjs";
import Header from "@/components/resume/header";
import Work from "@/components/resume/work";

export default function Home({ title, person, work, studies, volunteering }) {
    return (
        <div>
            <Head title={title}/>
            <Header person={person}/>
            <Work work={work}/>
            <hr/>
            <h2>Education</h2>
            {studies.map((item, i) => {
                return (
                    <p key={`studies-${i}`}>{item.degree} in {item.title} at {item.institute.title} from {dayjs(item.started_at).format('YYYY-MM-DD')} until {item.graduated_at ? dayjs(item.graduated_at).format('YYYY-MM-DD') : 'Present'}</p>)
            })}
            <hr/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>Volunteering Work</h1>
            {volunteering.map((item, i) => {
                return (
                    <p key={`volunteer-${i}`}>{item.title} at {item.company.title} from {dayjs(item.started_at).format('YYYY-MM-DD')} until {item.ended_at ? dayjs(item.ended_at).format('YYYY-MM-DD') : 'Present'}</p>)
            })}
            <hr/>
        </div>
    )
}
