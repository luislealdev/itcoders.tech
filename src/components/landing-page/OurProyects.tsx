'use client';

import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Card from '../ui/Card';

const projects = [
    {
        title: "Matthias Leidinger",
        description: "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
        src: "rock.jpg",
        link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
        color: "#BBACAF"
    },
    {
        title: "Clément Chapillon",
        description: "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
        src: "tree.jpg",
        link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
        color: "#977F6D"
    },
    {
        title: "Zissou",
        description: "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
        src: "water.jpg",
        link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
        color: "#C2491D"
    },
]

export const OurProyects = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    // useEffect(() => {
    //     const lenis = new Lenis()

    //     function raf(time: number) {
    //         lenis.raf(time)
    //         requestAnimationFrame(raf)
    //     }

    //     requestAnimationFrame(raf)
    // })

    return (
        <main ref={container} style={{ position: 'relative', marginTop: '50vh' }}>
            {
                projects.map((project, i) => {
                    const targetScale = 1 - ((projects.length - i) * 0.05);
                    return <Card url={''} key={`p_${i}`} i={i} {...project} progress={scrollYProgress.get()} range={[i * .25, 1]} targetScale={targetScale} />
                })
            }
        </main>
    )
}
