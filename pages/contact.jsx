import React from 'react'
import Head from 'next/head';
import { emailLink } from '../constants/home'
import { motion } from "framer-motion"
import { staggerContainer, fadeIn } from '../utils/motion'
import TextSpan from '../components/TextSpan'

const contact = () => {
  const sentence = 'Get In Touch'.split("")
  return (
    <>
      <Head>
        <title>Cezarlito Baguhin</title>
        <meta name="description" content="Cezarlito Baguhin is an aspiring Front-end Web Developer who loves to turn ideas into reality through web development. Current tech skills are React, Vite, Next. Currently learning Typescript. Seeking for an opportunity as a Jr. Front-end Web Developer to be able to apply my skills into real projects and also to learn more technologies." />
        <meta name="keywords" content="sezaru, cezar, cezarlito, baguhin, cezarlito baguhin, cezar baguhin" />
        <meta name='author' content='sezaru'/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cb-icon.svg" />
      </Head>
      <main className='relative max-w-6xl px-5 md:px-10 lg:px-12 xl:px-0 mx-auto z-20'>
        <section className='min-h-screen grid grid-cols-1 place-content-center'>
          <motion.div variants={staggerContainer(0, 0)} initial="hidden" whileInView="show" viewport={{once: 'false', amount: 0.4}} className='max-w-xl mx-auto h-full flex flex-col items-center justify-center'>
            <motion.h2 variants={fadeIn('up','tween', 0.1, .6)} className="text-5xl font-bold mb-4 text-primary inline-flex">
              {sentence.map((letter, index) => (
                <TextSpan key={index}>
                  {letter === " " ? "\u00a0" : letter}
                </TextSpan>
              ))}
            </motion.h2>
            <motion.p variants={fadeIn('up','tween', 0.1, .6)} className='text-center text-whiteSecondary mb-12'>Currently seeking for an opportunity as a Jr. Front-end Web Developer to be able to apply my skills into real projects and also to learn more technologies. If you are interested, feel free to send me an email. My inbox is always open. </motion.p>

            <motion.a variants={fadeIn('up','tween', 0.1, .6)} href={emailLink} target='_blank'  className='px-12 py-2.5 text-lg rounded-md text-wht border-[0.1rem] border-primary bg-primary/10 hover:bg-primary/[.05] font-medium transition-colors ease-in-out duration-200'>
              Say Hello !
            </motion.a>

          </motion.div>
        </section>
      </main>
    </>
  )
}

export default contact