import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import { fadeIn } from '../utils/motion'

const SkillCard = ({name, imgUrl, widthHeight}) => {
  return (
    <motion.div variants={fadeIn('up','tween', .2, .4)} initial="hidden" whileInView="show" viewport={{once: 'false', amount: 0.1}} whileHover={{scale: 1.05}} className='p-4 bg-skillBadge rounded-lg'>
      <div className='grid grid-cols-1 justify-center items-center'>
        <div className='flex flex-col items-center justify-center gap-3'>
          <div className='mx-auto'>
            <Image src={`/${imgUrl}`} alt="html5.svg" width={widthHeight} height={widthHeight} />
          </div>
          <div className='flex items-center justify-center'>
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default SkillCard