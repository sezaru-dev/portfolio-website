import React from 'react'
import { footerSocials } from '../../constants/home'
import { motion } from "framer-motion"
import { socialVariants } from '../../utils/motion'

const Left = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-6 text-whiteSecondary'>
      <ul className='flex flex-col items-center gap-6'>
        {footerSocials.map(social => (
          <motion.li variants={socialVariants(-4)} initial="hidden" whileHover="hover" key={social.name}>
            <a href={social.url} target='_blank' rel='noreferrer' className='hover:text-primary transition-colors ease-in-out duration-200'>
              {social.logo}
            </a>
          </motion.li>
        ))}
      </ul>
      <div className='w-[1px] h-24 bg-wht'/>
    </div>
  )
}

export default Left