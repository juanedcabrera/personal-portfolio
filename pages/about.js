import styles from '../styles/About.module.css'
import { useState } from 'react'
// special next.js images that speed up SSR caching and lazy loading
import Image from 'next/image'
import Navbar from '@/components/Navbar'


export default function About() {
    return (
        <div>
            {/* <h1 className={styles.title}>About Me</h1> */}
            <style jsx>{`
                h1 {
                    color: red;
                    font-size: 50px;
                }
                body {
                    background-color: blue;
                }
                `}</style>

            <h1>About Me</h1>
            <p className={styles.green}>I am a super cool software engineer now. 🖥️</p>
            <Image
                src="/next.svg"
                alt="Next Logo"
                width={400}
                height={400}
                priority
            />
        
        </div>
    )
}