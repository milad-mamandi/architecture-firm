'use client'

import { Badge } from '@/components/ui/badge'
import { WritingText } from '@/components/ui/shadcn-io/writing-text'
import { PROPERTIES, SERVICES } from '@/constants'
import { motion } from 'framer-motion'

import Gallery from './components/gallery'
import ServiceCard from './components/service-card'

export default function ServicesSection() {
  return (
    <div className="flex min-h-[800px] flex-col items-center justify-center p-4 xl:p-20">
      <div className="flex w-full max-w-[1440px] flex-col gap-8">
        <div className="flex max-w-3xl flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <Badge variant="moto">What We Offer</Badge>
          </motion.div>
          <WritingText
            text="Comprehensive Real Estate Solutions"
            className="mr-2 text-2xl font-medium uppercase lg:mr-4 lg:text-4xl"
            inView
            inViewOnce
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.6,
              delay: 0.075,
            }}
          />
          <p className="font-light lg:text-lg">
            Our comprehensive services encompass luxury property sales,
            sustainable green building investments, and premium vacation
            rentals.
          </p>
        </div>
        <Gallery items={PROPERTIES} />
        <div className="mt-24 flex flex-col items-center justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <Badge variant="moto">Why Choose Us</Badge>
          </motion.div>
          <div className="max-w-xl text-center">
            <WritingText
              text="Explore our range of expert real estate services"
              className="mr-2 text-2xl font-medium uppercase lg:mr-3.5 lg:text-4xl"
              inView
              inViewOnce
              transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.6,
                delay: 0.075,
              }}
            />
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
            {SERVICES.map((item, index) => (
              <ServiceCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
