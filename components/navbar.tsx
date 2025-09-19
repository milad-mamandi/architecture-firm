'use client'

import { NAV_ITEMS } from '@/constants'
import { useBoolean } from '@/hooks/use-boolean'
import { motion, spring } from 'motion/react'

import ContactButton from './contact-button'
import { RollingText } from './ui/shadcn-io/rolling-text'

export default function Navbar() {
  const { toggle, value } = useBoolean(false)

  return (
    <nav className="bg-background fixed top-0 z-20 flex h-(--nav-height) w-full items-center backdrop-blur-2xl">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between">
          <div className="flex w-[220px] items-center">
            <a href="#" className="text-xl font-bold text-gray-800">
              Architectura
            </a>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {NAV_ITEMS.map((item) => (
                <a key={item.href} href={item.href}>
                  <RollingText text={item.name} className="text-lg" hoverOnly />
                </a>
              ))}
            </div>
          </div>
          <ContactButton href="#" className="hidden md:block" />
          <div className="flex md:hidden">
            <button
              onClick={toggle}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-100 hover:text-gray-600 focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
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
            <a key={item.href} href={item.href}>
              {item.name}
            </a>
          ))}
          <ContactButton href="#" />
        </div>
      </motion.div>
    </nav>
  )
}
