'use client'

import { Badge, badgeVariants } from '@/components/ui/badge'
import { VariantProps } from 'class-variance-authority'
import { motion } from 'framer-motion'

export default function AnimatedBadge({
  className,
  variant,
  children,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        opacity: { duration: 0.5, ease: 'easeOut' },
        y: { type: 'spring', stiffness: 400, damping: 36 },
      }}
    >
      <Badge variant="moto" {...props}>
        {children}
      </Badge>
    </motion.div>
  )
}
