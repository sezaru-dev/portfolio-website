import React from 'react'
import { aboutData } from '../../constants/home'
import { motion } from "framer-motion"
import { staggerContainer, fadeIn } from '../../utils/motion'
import TextSpan from '../TextSpan'


const About = () => {
  const sentence = 'About'.split("")
  return (
    <section className='w-full min-h-screen flex flex-col items-start justify-center mb-20 md:mb-0'>

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

            <motion.div variants={fadeIn('up','tween', 0.8, .8)}>
              <h4 className='text-lg font-semibold'>{aboutData.certification.title}</h4>
              <small className='text-secondaryWhite'>{aboutData.certification.school}</small>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About