'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { motion, spring } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface AnimatedCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function AnimatedCard({
  icon: Icon,
  title,
  description,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        scale: { type: spring, stiffness: 400, damping: 50 },
        opacity: { duration: 0.5, ease: 'easeOut' },
      }}
    >
      <Card className="bg-accent flex flex-row rounded-4xl border-none py-5 md:flex-col md:py-6">
        <CardHeader>
          <div className="bg-background flex size-12 items-center justify-center rounded-full md:size-16">
            <Icon className="text-primary" size={24} />
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold md:text-2xl">{title}</h2>
          <p className="text-muted-foreground md:text-lg">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
