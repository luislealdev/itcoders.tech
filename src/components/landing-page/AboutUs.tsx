'use client';

import Paragraph from "../ui/Paragraph";
import Word from "../ui/Word";
import Character from "../ui/Character";

const paragraph = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."

export const AboutUs = () => {
    const words = paragraph.split(" ");

    return (
        <main>
            <div style={{ height: "100vh" }}></div>
            <Paragraph paragraph={paragraph} />
            <div style={{ height: "100vh" }}></div>
            <Word paragraph={paragraph} />
            <div style={{ height: "100vh" }}></div>
            <Character paragraph={paragraph} />
            <div style={{ height: "100vh" }}></div>
        </main>
    )
}
