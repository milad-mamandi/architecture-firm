'use client'

import { cn } from '@/lib/utils'
import {
  type Transition,
  type UseInViewOptions,
  motion,
  useInView,
} from 'motion/react'
import * as React from 'react'

type WritingTextProps = Omit<React.ComponentProps<'span'>, 'children'> & {
  className?: string
  transition?: Transition
  inView?: boolean
  inViewMargin?: UseInViewOptions['margin']
  inViewOnce?: boolean
  text: string
}

function WritingText({
  className,
  ref,
  inView = false,
  inViewMargin = '0px',
  inViewOnce = true,
  text,
  transition = { type: 'spring', bounce: 0, duration: 1, delay: 0.15 },
  ...props
}: WritingTextProps) {
  const localRef = React.useRef<HTMLSpanElement>(null)
  React.useImperativeHandle(ref, () => localRef.current as HTMLSpanElement)

  const inViewResult = useInView(localRef, {
    once: inViewOnce,
    margin: inViewMargin,
  })
  const isInView = !inView || inViewResult

  const words = React.useMemo(() => text.split(' '), [text])

  return (
    <span ref={localRef} data-slot="writing-text" {...props}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className={cn(
            'will-change-opacity inline-block will-change-transform',
            className,
          )}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{
            ...transition,
            delay: index * (transition?.delay ?? 0),
          }}
        >
          {word}{' '}
        </motion.span>
      ))}
    </span>
  )
}

export { WritingText, type WritingTextProps }
