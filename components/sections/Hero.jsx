import React from 'react'
import { heroData } from '../../constants/home'
import { motion } from "framer-motion"
import { staggerContainer,fade, fadeIn } from '../../utils/motion'
import TextSpan from '../TextSpan'

const sentence = 'Cezarlito Baguhin'.split(" ")

const Hero = () => {
  return (
    <motion.section variants={staggerContainer(0.4, 1.3)} initial="hidden" animate="show" className='relative w-full min-h-screen flex flex-col items-start justify-center mb-20 md:mb-0'>
        <motion.p variants={fade(0.8, .3)} className='text-lg mb-4 text-primary'>Hi there, I am</motion.p>
        <motion.h1 variants={fade(0.8, .4)} className='text-4xl lg:text-7xl font-bold mb-4 inline-block'>
          {heroData.name.split("").map((letter, index) => (
            <TextSpan key={index}>
              {letter === " " ? "\u00a0" : letter}
            </TextSpan>
          ))}
        </motion.h1>
        <motion.h2 variants={fade(0.8, .5)} className='text-3xl lg:text-6xl font-bold mb-4 text-whiteSecondary inline-block whitespace-normal'>
          {heroData.subheading.split("").map((letter, index) => {
            if (letter === " "){
              return "\u00a0"
            }
            return (
              <TextSpan key={index}>
                {letter === " " ? "\u00a0" : letter}
              </TextSpan>
            )
          })}
          
        </motion.h2>
        <motion.p variants={fade(0.8, .7)}  className='max-w-xl text-base md:text-lg mb-6 text-whiteSecondary'>{heroData.description}</motion.p>
        <motion.a variants={fade(0.8, .7)} href="/#projects"  className='px-12 py-2.5 text-lg rounded-md text-whitePrimary border-[0.1rem] border-primary bg-primary/10 hover:bg-primary/[.05] font-medium transition-colors ease-in-out duration-200'>
          Projects
        </motion.a>
        <motion.p variants={fadeIn('right', 'tween', 1.5, 1.5)} className='absolute -bottom-2 -right-2 md:-bottom-6 lg:-bottom-7 lg:right-0 text-8xl md:text-[10rem] font-bold text-watermark select-none'>sezaru</motion.p>
    </motion.section>
  )
}

export default Hero