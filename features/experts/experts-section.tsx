'use client'

import AnimatedBadge from '@/components/animated-badge'
import { Marquee, MarqueeContent } from '@/components/ui/shadcn-io/marquee'
import { WritingText } from '@/components/ui/shadcn-io/writing-text'
import { useIsMobile } from '@/hooks/use-mobile'
import { motion, spring } from 'framer-motion'
import Image from 'next/image'

import { EXPERTS } from './experts'

export default function ExpertsSection() {
  const isMobile = useIsMobile()

  return (
    <section
      className="flex flex-col items-center justify-center gap-4 sm:-mx-4 xl:-mx-20"
      id="agents"
    >
      <AnimatedBadge>Meet Our Experts</AnimatedBadge>
      <div className="max-w-sm text-center lg:max-w-xl">
        <WritingText text="Personalized Guidance, Proven Expertise" />
      </div>
      {!isMobile && (
        <Marquee className="mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: spring, stiffness: 180, damping: 25 }}
            viewport={{ once: true }}
          >
            <MarqueeContent>
              {EXPERTS.map((expert) => (
                <div className="mx-4 space-y-4" key={expert.name}>
                  <Image
                    key={expert.name}
                    src={expert.image}
                    alt={expert.name}
                    width={300}
                    height={250}
                    className="rounded-4xl object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-bold">{expert.name}</h4>
                    <h5 className="text-muted-foreground">{expert.role}</h5>
                  </div>
                </div>
              ))}
            </MarqueeContent>
          </motion.div>
        </Marquee>
      )}
      {isMobile && (
        <div className="flex w-full flex-wrap justify-center gap-6">
          {EXPERTS.map((expert) => (
            <motion.div
              key={expert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-[46%]"
            >
              <div className="space-y-4">
                <Image
                  key={expert.name}
                  src={expert.image}
                  alt={expert.name}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 30vw"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  className="max-h-[200px] rounded-4xl"
                />
                <div>
                  <h4 className="text-lg font-bold">{expert.name}</h4>
                  <h5 className="text-muted-foreground">{expert.role}</h5>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  )
}
