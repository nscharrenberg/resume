import {motion} from "framer-motion";
import {ProfilePicture} from "@/components/ui/profile-picture";
import {FlipWords} from "@/components/ui/flip-words";
import {IconBrandGithub, IconBrandLinkedin} from "@tabler/icons-react";
import {HeroHighlight} from "@/components/ui/hero-highlight";
import React from "react";

export default function Header({ person }) {
    return (
        <HeroHighlight>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
                <div className="content-center justify-center w-full flex">
                    <ProfilePicture item={{
                        id: 1,
                        name: person.name,
                        designation: person.subtitle,
                        image: person.profile,
                    }} />
                </div>
                <p>Hello, I'm {person.name}.</p>
                <p>I'm a <FlipWords words={person.professions} /></p>
            </motion.h1>
            <div className="content-center justify-center w-full flex gap-x-8 mt-5">
                <a href={`https://github.com/${person.github}`} target="_blank"
                   className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] hover:bg-[linear-gradient(110deg,#333,45%,#5e5c5c,55%,#333)] hover:bg-[length:200%_100%] hover:text-slate-100 px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <IconBrandGithub className="mr-2" /> {person.github}
                </a>
                <a
                    href={`https://linkedin.com/in/${person.linkedin}`} target="_blank"
                    className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] hover:bg-[linear-gradient(110deg,#0077b5,45%,#519cc2,55%,#0077b5)] hover:bg-[length:200%_100%] hover:text-slate-100 px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <IconBrandLinkedin className="mr-2" /> {person.linkedin}
                </a>
            </div>
        </HeroHighlight>
    )
}
