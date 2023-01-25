import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HiX, HiMenuAlt3 } from "react-icons/hi";
import { navLinks } from '../../constants/home'
import { motion, AnimatePresence } from "framer-motion"
import {staggerContainer, headerLinksVariants, fade, mobileMenu, mobileMenuLink} from '../../utils/motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(prev => !prev)
    const body = document.querySelector('body')

    {
      isOpen ? body.classList.remove('overflow-hidden') : body.classList.add('overflow-hidden')
     }
  }

  const closeMenuByNavlist = () => {
    setIsOpen(prevState => prevState = false)
    const body = document.querySelector('body')
    body.classList.remove('overflow-hidden')
  }

  return (
    <header className='fixed top-0 left-0 right-0 z-50 w-full text-white bg-darkPrimary'>
      <div  className='relative max-w-[1536px] px-5 md:px-10 py-8 mx-auto bg-darkPrimary flex items-center justify-between z-40'>
        <motion.div variants={headerLinksVariants} initial="hidden" animate="show" transition={{delay: .2}}>
          <Link href={`/`} className='flex items-center gap-3' onClick={closeMenuByNavlist}>
            <Image src="/cb.svg" alt="/" width={32} height={32} priority className='flex-none'/>
            <h2 className='font-bold text-lg'>Cezar</h2>
          </Link>
        </motion.div>

        <motion.nav variants={staggerContainer(0.4, 0.2)} initial="hidden" animate="show" className='hidden md:block'>
          <ul className='flex gap-8 items-center'>
            {navLinks.map(link => {
              if (link.cName === 'cta_resume') {
                return (
                  <motion.li variants={headerLinksVariants} key={link.title} className={link.cName}>
                    <a href={link.url} target="_blank" rel='noreferrer'>{link.title}</a>
                  </motion.li>
                )
              }
              return (
                <motion.li variants={headerLinksVariants} key={link.title} className={link.cName}>
                  <Link href={link.url}>{link.title}</Link>
                </motion.li>
              )
            })}
          </ul>
        </motion.nav>

        <motion.button variants={headerLinksVariants} initial="hidden" animate="show" transition={{delay: .2}} className='md:hidden' onClick={toggleMenu}>
            {
              isOpen? <HiX size={32}/> : <HiMenuAlt3 size={32}/> 
            }
        </motion.button>
      </div>

      <AnimatePresence>
        {
          isOpen &&
        <motion.div variants={mobileMenu} initial="hidden" animate="show" transition="transition" exit="exit" className={`top-16 absolute left-0 right-0 h-screen bg-darkPrimary flex flex-col items-center`}>
          <nav className='mx-auto px-5 w-full h-full flex'>
            <ul className='flex flex-col items-center justify-center gap-6 w-full text-xl'>
            {navLinks.map((link, index) => {
                if (link.cName === 'cta_resume') {
                  return (
                    <motion.li variants={mobileMenuLink( index * 0.2, .8 - `0.${index}`,index * 0.2)} initial="hidden" animate="show" transition="transition" exit="exit" key={link.title} className={link.cName}>
                      <a href={link.url} target="_blank" rel='noreferrer'>{link.title}</a>
                    </motion.li>
                  )
                }
                return (
                  <motion.li variants={mobileMenuLink(index * 0.2, .8 - `0.${index}`, index * 0.2)} initial="hidden" animate="show" transition="transition" exit="exit" key={link.title} className={link.cName} onClick={closeMenuByNavlist}>
                    <Link href={link.url}>{link.title}</Link>
                  </motion.li>
                )
              })}
            </ul>
          </nav>
        </motion.div>
        }
      </AnimatePresence>
    </header>
  )
}

export default Header