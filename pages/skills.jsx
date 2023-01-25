import React from 'react'
import Head from 'next/head';
import { skills as techSkills } from '../constants/home'
import { motion } from "framer-motion"
import { staggerContainer, fadeIn } from '../utils/motion'
import SkillCard from '../components/SkillCard'
import TextSpan from '../components/TextSpan'

const skills = () => {
  const sentence = 'Skills'.split("")
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
          <div className='w-full'>
            <motion.div variants={staggerContainer(0, 0)} initial="hidden" whileInView="show" viewport={{once: 'false', amount: 0.4}} className='mb-12'>
              <motion.h2 variants={fadeIn('up','tween', .1, .6)} className="text-4xl lg:text-5xl text-primary font-bold mb-4 inline-block">
                {sentence.map((letter, index) => (
                  <TextSpan key={index}>
                    {letter === " " ? "\u00a0" : letter}
                  </TextSpan>
                ))}
              </motion.h2>
              <motion.p variants={fadeIn('up','tween', .1, .6)} className='text-lg'>Technologies and tools that I use in building websites.</motion.p>
            </motion.div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 lg:grid-cols-6'>
              {techSkills.map(skill => (
                <SkillCard key={skill.name} name={skill.name} imgUrl={skill.logo} widthHeight={50}/>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default skills