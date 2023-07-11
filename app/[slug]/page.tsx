
import Image from 'next/image'
import styles from '../page.module.css'
import { webEngine } from "sprig/web"
import {kv} from "@vercel/kv";
import Game from "@/app/[slug]/Game";

export default async function Home({params}: {params: {slug: string}}) {
  const code = await fetch(await kv.get<string>(params.slug) || "").then(response => response.text())
  return ( <div style={{display: "flex", justifyContent: "center"}}>
      <div style={{display: "flex", justifyContent: "center", flexDirection: "column" , height: "100vh"}}>
        <Game code={code} />
      </div>
      </div>
  )
}
