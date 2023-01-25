import React from 'react'
import { projects } from '../../constants/home';
import ProjectLeft from '../ProjectLeft';
import ProjectRight from '../ProjectRight';
import { motion } from "framer-motion"
import { staggerContainer, fadeIn } from '../../utils/motion'
import TextSpan from '../TextSpan'

const Projects = () => {
  const sentence = 'Projects'.split("")
  return (
    <section className='min-h-screen scroll-mt-36' id='projects'>
      <motion.div variants={staggerContainer(0.4, 0.2)} initial="hidden" whileInView="show" viewport={{once: 'false', amount: 0.45}} className='mb-12'>
        <motion.h2 variants={fadeIn('up','tween', .1, .6)} className="text-4xl lg:text-5xl text-primary font-bold mb-4 inline-block">
          {sentence.map((letter, index) => (
            <TextSpan key={index}>
              {letter === " " ? "\u00a0" : letter}
            </TextSpan>
          ))}
        </motion.h2>
        <motion.p variants={fadeIn('up','tween', .1, .6)} className='text-lg'>Here are the projects that I&apos;ve built.</motion.p>
      </motion.div>

      <div className='grid grid-cols-1 gap-6 lg:gap-48 mb-8'>
        {projects.slice(0,6).map((project, index) => {
          if (index % 2 === 1) {
            return <ProjectLeft key={index} project={project}/>
          }
          return <ProjectRight key={index} project={project}/>
        })}
      </div>
      <motion.div variants={fadeIn('up','tween', .1, .6)} initial="hidden" whileInView="show" viewport={{once: 'false', amount: 1}} className='w-full flex items-center justify-center'>
        <a href='/projects' target='_blank'  className='px-12 py-2.5 text-lg rounded-md text-wht border-[0.1rem] border-primary bg-primary/10 hover:bg-primary/[.05] font-medium transition-colors ease-in-out duration-200'>
            See more
        </a>
      </motion.div>

    </section>
  )
}

export default Projects