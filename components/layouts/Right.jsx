import React from 'react'
import { emailLink } from '../../constants/home'
import { motion } from "framer-motion"
import { socialVariants } from '../../utils/motion'

const Right = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-6 text-whiteSecondary'>
      <motion.a variants={socialVariants(-4)} initial="hidden" whileHover="hover" href={emailLink} target='_blank' rel='noreferrer' className='writing-mode-v-rl text-sm hover:text-primary transition-colors ease-in-out duration-200'>
        cezarbaguhin20@gmail.com
      </motion.a>
      <div className='w-[1px] h-24 bg-wht'/>
    </div>
)
}

export default Right