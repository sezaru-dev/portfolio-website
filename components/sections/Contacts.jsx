import React from 'react'
import { emailLink } from '../../constants/home'
import TextSpan from '../TextSpan'
import { motion } from "framer-motion"
import { staggerContainer, fadeIn } from '../../utils/motion'

const Contacts = () => {
  const sentence = 'Get In Touch'.split("")
  return (
    <section className='h-96 my-16'>
      <motion.div variants={staggerContainer(0.4, 0)} initial="hidden" whileInView="show" viewport={{once: 'false', amount: 0.45}} className='max-w-xl mx-auto h-full flex flex-col items-center justify-center'>
        <motion.h2 variants={fadeIn('up','tween', 0.1, .6)} className="text-5xl font-bold mb-4 text-primary inline-flex">
          {sentence.map((letter, index) => (
            <TextSpan key={index}>
              {letter === " " ? "\u00a0" : letter}
            </TextSpan>
          ))}
        </motion.h2>
        <motion.p variants={fadeIn('up','tween', 0.1, .6)} className='text-center text-whiteSecondary mb-12'>I am seeking for an opportunity as a Jr. Front-end Web Developer to apply my skills to real projects and learn more technologies. If you are interested, feel free to send me an email. My inbox is always open. </motion.p>

        <motion.a variants={fadeIn('up','tween', 0.1, .6)} href={emailLink} target='_blank'  className='px-12 py-2.5 text-lg rounded-md text-wht border-[0.1rem] border-primary bg-primary/10 hover:bg-primary/[.05] font-medium transition-colors ease-in-out duration-200'>
          Say Hello !
        </motion.a>

      </motion.div>
    </section>
  )
}

export default Contacts