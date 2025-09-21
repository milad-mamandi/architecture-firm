'use client'

import AnimatedBadge from '@/components/animated-badge'
import { Badge } from '@/components/ui/badge'
import { WritingText } from '@/components/ui/shadcn-io/writing-text'
import { PROPERTIES, SERVICES } from '@/constants'
import { motion } from 'framer-motion'

import AnimatedCard from '../../components/service-card'
import Gallery from './components/gallery'

export default function ServicesSection() {
  return (
    <section
      className="flex flex-col items-center justify-center"
      id="services"
    >
      <div className="flex w-full max-w-[1440px] flex-col gap-8">
        <div className="flex max-w-3xl flex-col gap-4">
          <AnimatedBadge>What We Offer</AnimatedBadge>
          <WritingText text="Comprehensive Real Estate Solutions" />
          <p className="font-light lg:text-lg">
            Our comprehensive services encompass luxury property sales,
            sustainable green building investments, and premium vacation
            rentals.
          </p>
        </div>
        <Gallery items={PROPERTIES} />
        <div className="mt-24 flex flex-col items-center justify-center gap-4">
          <AnimatedBadge>Why Choose Us</AnimatedBadge>
          <div className="max-w-xl text-center">
            <WritingText text="Explore our range of expert real estate services" />
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
            {SERVICES.map((item, index) => (
              <AnimatedCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
