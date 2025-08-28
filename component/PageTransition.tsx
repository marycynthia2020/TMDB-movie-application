"use client"
import { ReactChildren } from '@/types'
import {motion} from "framer-motion"

const PageTransition = ({children}: ReactChildren) => {
  return (
   <motion.section
    initial={{opacity: 0, x:20}}
    animate={{opacity:1, x:0}}
    exit={{opacity:0, x:-20}}
    transition={{duration:1, ease: "easeInOut"}}

   >{children}</motion.section>
  )
}

export default PageTransition