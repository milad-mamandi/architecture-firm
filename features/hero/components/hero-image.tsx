'use client'

import { Easing, motion } from 'motion/react'
import Image from 'next/image'

const ANIMATION = {
  duration: 1,
  ease: 'easeOut' as Easing,
  image: {
    ease: 'circOut' as Easing,
    scale: [2, 1],
    rotate: [5, 0],
  },
}

export default function HeroImage() {
  return (
    <>
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: ANIMATION.duration, ease: ANIMATION.ease }}
      />
      <motion.div
        className="absolute inset-0 h-full"
        initial={{
          scale: ANIMATION.image.scale[0],
          rotate: ANIMATION.image.rotate[0],
        }}
        animate={{
          scale: ANIMATION.image.scale[1],
          rotate: ANIMATION.image.rotate[1],
        }}
        transition={{
          duration: ANIMATION.duration,
          ease: ANIMATION.image.ease,
        }}
      >
        <Image
          src="/hero.avif"
          alt="Hero Image"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </>
  )
}
