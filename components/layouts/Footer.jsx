import React from 'react'
import { footerSocials } from '../../constants/home'
import { motion } from "framer-motion"
import { socialVariants } from '../../utils/motion'

const Footer = () => {
  return (
    <section className='max-w-[1440px] px-5 md:px-10 py-6 mx-auto text-whiteSecondary'>
      <footer>
        <nav className='mb-4 lg:hidden'>
          <ul className=' flex items-center justify-center gap-8'>
            {footerSocials.map(social => (
              <motion.li variants={socialVariants(-3)} initial="hidden" whileHover="hover" key={social.name}>
                <a href={social.url} target='_blank' rel='noreferrer' className='hover:text-appPurple transition-colors ease-in-out duration-200'>
                  {social.logo}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        <p className='text-sm text-center'>Built by Cezarlito O. Baguhin © 2023</p>
      </footer>
    </section>
  )
}

export default Footer