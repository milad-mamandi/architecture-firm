'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { motion, spring } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function ServiceCard({ item }: { item: ServiceCardProps }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: spring, stiffness: 180, damping: 25 }}
    >
      <Card className="bg-accent flex flex-row rounded-4xl border-none py-5 md:flex-col md:py-6">
        <CardHeader>
          <div className="bg-background flex size-12 items-center justify-center rounded-full md:size-16">
            {<item.icon className="text-primary" size={24} />}
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold md:text-2xl">{item.title}</h2>
          <p className="text-muted-foreground md:text-lg">{item.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
