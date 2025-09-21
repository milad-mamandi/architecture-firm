'use client'

import { NAV_ITEMS } from '@/constants'
import { useBoolean } from '@/hooks/use-boolean'
import { Menu } from 'lucide-react'
import { motion, spring } from 'motion/react'
import Image from 'next/image'

import AnimatedButton from './animated-button'
import { Button } from './ui/button'
import { RollingText } from './ui/shadcn-io/rolling-text'

export default function Navbar() {
  const { toggle, value } = useBoolean(false)

  return (
    <nav className="bg-background/85 fixed top-0 z-20 flex h-(--nav-height) w-full items-center backdrop-blur-3xl">
      <div className="mx-auto w-full px-4 md:px-8 xl:px-24">
        <div className="flex items-center justify-between">
          <div className="flex w-[220px] items-center">
            <a
              href="/"
              className="flex items-center text-xl font-semibold text-gray-800"
            >
              <Image
                src="/logo.avif"
                alt="logo"
                width={48}
                height={48}
                className="mr-2 inline"
              />
              Architectura
            </a>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-baseline space-x-4">
              {NAV_ITEMS.map((item) => (
                <a key={item.href} href={item.href}>
                  <RollingText text={item.name} className="text-lg" hoverOnly />
                </a>
              ))}
            </div>
          </div>
          <AnimatedButton href="#contact" className="ml-auto hidden lg:block" />
          <div className="flex lg:hidden">
            <Button variant="ghost" size="icon" onClick={toggle}>
              <Menu />
            </Button>
          </div>
        </div>
      </div>
      <motion.div
        className="bg-background absolute top-(--nav-height) left-0 z-10 flex h-full w-full items-start justify-center overflow-hidden backdrop-blur-md"
        initial={{ height: 0 }}
        animate={{ height: value ? 'calc(100vh - var(--nav-height))' : 0 }}
        exit={{ height: 0 }}
        transition={{
          type: spring,
          duration: 0.7,
        }}
      >
        <div className="mt-24 flex flex-col items-center space-y-6 text-xl">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={toggle}>
              {item.name}
            </a>
          ))}
          <AnimatedButton href="#contact" />
        </div>
      </motion.div>
    </nav>
  )
}
