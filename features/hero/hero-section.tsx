'use client'

import StatisticInfo from '../../components/statistic-info'
import Agents from './components/agents'
import ExploreButton from './components/explore-button'
import HeroHeading from './components/hero-heading'
import HeroImage from './components/hero-image'

export default function HeroSection() {
  return (
    <section
      className="h-[calc(100vh-(--spacing(18)))] pb-4 md:pt-4 md:pb-10"
      id="home"
    >
      <div className="relative h-full">
        <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-4xl">
          <HeroImage />
          <div className="z-10 flex flex-col gap-6 px-6 sm:max-w-[600px] md:gap-8 md:pl-20 lg:max-w-[800px]">
            <HeroHeading />
            {/* Hero Description */}
            <p className="text-background max-w-[80%] md:text-lg">
              We provide tailored real estate solutions, guiding you through
              every step with personalized experiences that meet your unique
              needs and aspirations.
            </p>
            <ExploreButton />
            <div className="text-background flex flex-row flex-wrap items-start gap-4 text-4xl md:gap-8 md:text-5xl">
              <StatisticInfo number="200" description="Projects Completed" />
              <StatisticInfo number="70" description="Happy Clients" />
              <StatisticInfo number="$10M" description="Project Value" />
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 z-10 flex w-fit flex-col items-end justify-end">
          <div className="size-9 bg-white mask-[radial-gradient(circle_at_top_left,transparent_70%,black_70%)] md:size-12" />
          <div className="flex flex-row items-end">
            <div className="size-9 bg-white mask-[radial-gradient(circle_at_top_left,transparent_70%,black_70%)] md:size-12" />
            <Agents />
          </div>
        </div>
      </div>
    </section>
  )
}
