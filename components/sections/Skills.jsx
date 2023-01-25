import React from 'react'
import { skills } from '../../constants/home'
import { motion } from "framer-motion"
import { staggerContainer, fadeIn } from '../../utils/motion'
import SkillCard from '../SkillCard'
import TextSpan from '../TextSpan'

const Skills = () => {
  const sentence = 'Skills'.split("")
  return (
    <section className='w-full min-h-screen flex flex-col items-start justify-center mb-20 md:mb-0'>
      <div className='w-full'>
        <motion.div variants={staggerContainer(0.8, 0.2)} initial="hidden" whileInView="show" viewport={{once: 'false', amount: 0.4}} className='mb-12'>
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
          {skills.map(skill => (
            <SkillCard key={skill.name} name={skill.name} imgUrl={skill.logo} widthHeight={50}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills