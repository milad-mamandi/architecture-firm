'use client'

import AnimatedBadge from '@/components/animated-badge'
import AnimatedCard from '@/components/service-card'
import StatisticInfo from '@/components/statistic-info'
import { WritingText } from '@/components/ui/shadcn-io/writing-text'
import { EyeIcon, GoalIcon } from 'lucide-react'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="flex flex-col items-center justify-center" id="about">
      <div className="flex w-full max-w-[1440px] flex-col gap-8 xl:flex-row">
        <div className="space-y-12 xl:max-w-sm">
          <div className="space-y-4">
            <AnimatedBadge>Who We Are</AnimatedBadge>
            <WritingText text="Redefining Excellence in Real Estate" />
          </div>
          <p className="text-muted-foreground text-lg">
            We specialize in luxury properties, sustainable homes, and vacation
            rentals — driven by a passion for exceptional living and a
            commitment to quality, innovation, and client satisfaction.
          </p>
          <div className="grid grid-cols-2 gap-6 text-4xl font-light md:grid-cols-4 md:text-5xl xl:grid-cols-2 xl:gap-8">
            <StatisticInfo description="Projects Complete" number="200" />
            <StatisticInfo description="Happy Clients" number="70" />
            <StatisticInfo description="Project Value" number="$10M" />
            <StatisticInfo
              description="Client Retention Rate"
              number="90"
              sign="%"
            />
          </div>
        </div>
        <div className="w-full space-y-6">
          <div className="relative h-[250px] w-full overflow-hidden rounded-4xl md:h-[400px]">
            <Image
              src={'/images/agents/agents.avif'}
              fill
              alt="about us"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            <AnimatedCard
              icon={EyeIcon}
              title="Our Vision"
              description="To be a leader in the real estate market, offering unparalleled services in luxury, sustainability, and vacation properties.'"
            />
            <AnimatedCard
              icon={GoalIcon}
              title="Our Mission"
              description="To create exceptional living experiences through innovation, sustainability, and personalized service in modern real estate."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
