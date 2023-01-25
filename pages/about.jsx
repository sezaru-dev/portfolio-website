import React from 'react'
import Head from 'next/head';
import { aboutData } from '../constants/home'
import { motion } from "framer-motion"
import { staggerContainer, fadeIn } from '../utils/motion'
import TextSpan from '../components/TextSpan'

const about = () => {
  const sentence = 'About'.split("")
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
        <section className='w-full min-h-screen flex flex-col items-start justify-center pt-40 lg:pt-0 mb-14 lg:mb-0'>
          <motion.div variants={staggerContainer(0.3, 0.2)} initial="hidden" whileInView="show" viewport={{once: 'false', amount: 0.45}}>
            
            <motion.h2 variants={fadeIn('up','tween', .1, .6)} className='text-4xl lg:text-5xl font-bold text-primary mb-8 inline-block'>
              {sentence.map((letter, index) => (
                <TextSpan key={index}>
                  {letter === " " ? "\u00a0" : letter}
                </TextSpan>
              ))}
            </motion.h2>
            <div className='grid lg:grid-cols-2 gap-14'>
              <motion.div variants={fadeIn('up','tween', .4, .8)} className='flex flex-col space-y-4 text-justify'>
                {aboutData.heading.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </motion.div>

              <div>
                <motion.div variants={fadeIn('up','tween', .6, .8)} className='mb-4'>
                  <h4 className='text-lg font-semibold'>{aboutData.education.course}</h4>
                  <small className='text-secondaryWhite'>{aboutData.education.school}</small>
                </motion.div>

                <motion.div variants={fadeIn('up','tween', .6, .8)}>
                  <h4 className='text-lg font-semibold'>{aboutData.certification.title}</h4>
                  <small className='text-secondaryWhite'>{aboutData.certification.school}</small>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  )
}

export default about