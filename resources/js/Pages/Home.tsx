import {Head} from "@inertiajs/react";
import React, {useEffect, useState} from "react";
import dayjs from "dayjs";
import Header from "@/components/resume/header";
import Work from "@/components/resume/work";
import Education from "@/components/resume/education";

export default function Home({ title, person, work, studies, volunteering }) {
    return (
        <div>
            <Head title={title}/>
            <Header person={person}/>
            <Work work={work}/>
            <Education studies={studies} />
            <footer className="container px-6 py-12 mx-auto">
                <p className="p-8 text-center text-sm md:p-4">&copy; {(new Date()).getFullYear()} Noah Scharrenberg</p>
            </footer>
        </div>
    )
}
