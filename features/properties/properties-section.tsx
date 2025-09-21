'use client'

import AnimatedBadge from '@/components/animated-badge'
import { WritingText } from '@/components/ui/shadcn-io/writing-text'

import PropertyCard from './components/property-card'
import { PROPERTIES_LIST } from './constants'

export default function PropertiesSection() {
  return (
    <section className="flex items-center justify-center" id="properties">
      <div className="flex w-full max-w-[1440px] flex-col gap-4">
        <div>
          <AnimatedBadge>Featured Properties</AnimatedBadge>
        </div>
        <h3 className="max-w-3xl">
          <WritingText text="Discover homes tailored to your lifestyle and needs" />
        </h3>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
          {PROPERTIES_LIST.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  )
}
