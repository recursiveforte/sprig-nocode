'use client'

import {webEngine} from "sprig/web";
import {useEffect, useRef, useState} from "react";
import {set} from "zod";

export default function Game({code}: {code: string}) {
    const ref = useRef(null)
    const [width, setWidth] = useState(160)
    const [height, setHeight] = useState(128)

    useEffect(() => {
        const game = webEngine(ref.current as unknown as HTMLCanvasElement)
        const fn = new Function(...Object.keys(game.api), code)
        fn(...Object.values(game.api))

        const resize = () => {
            if (window.innerWidth/160 > window.innerHeight/128) {
                setWidth(window.innerHeight * 160/128)
                setHeight(window.innerHeight)
            } else {
                setWidth(window.innerWidth)
                setHeight(window.innerWidth * 128/160)
            }
        }

        resize()


        window.addEventListener("resize", resize)

        return () => window.removeEventListener("resize", resize)

    }, [ref])

    return <canvas width={1600} height={1280} style={{
        width: width,
        height: height,
        backgroundColor: "black"
    }} tabIndex={0} ref={ref}></canvas>

}