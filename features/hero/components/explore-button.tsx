'use client'

import { ArrowUpRightIcon } from 'lucide-react'
import { motion } from 'motion/react'

export default function ExploreButton() {
  return (
    <a href="#properties">
      <div className="group bg-background flex w-fit flex-row items-center justify-between gap-2 rounded-4xl py-1 pr-1 pl-4 transition-all duration-300 ease-in-out hover:gap-6 md:py-2.5 md:pr-1.5 md:pl-4">
        <span>Explore Properties</span>
        <div className="bg-foreground text-background relative flex size-8 items-center justify-center overflow-hidden rounded-full">
          <ArrowUpRightIcon
            size={18}
            strokeWidth={1.5}
            className="transition-transform duration-200 group-hover:translate-x-8 group-hover:-translate-y-8"
          />
          <ArrowUpRightIcon
            size={18}
            strokeWidth={1.5}
            className="absolute -translate-x-8 translate-y-8 transition-transform duration-200 group-hover:translate-0"
          />
        </div>
      </div>
    </a>
  )
}
