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
  inView = true,
  inViewMargin = '0px',
  inViewOnce = true,
  text,
  transition = {
    type: 'spring',
    stiffness: 400,
    damping: 36,
    delay: 0.04,
  },
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
            'will-change-opacity mr-2 inline-block text-2xl font-medium uppercase will-change-transform lg:mr-3.5 lg:text-4xl',
            className,
          )}
          initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
          animate={
            isInView ? { opacity: 1, y: 0, filter: 'blur(0)' } : undefined
          }
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
