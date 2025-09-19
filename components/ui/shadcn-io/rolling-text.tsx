'use client'

import {
  type Transition,
  type UseInViewOptions,
  motion,
  useInView,
} from 'motion/react'
import * as React from 'react'

const ENTRY_ANIMATION = {
  initial: { rotateX: 0 },
  animate: { rotateX: 90 },
}

const EXIT_ANIMATION = {
  initial: { rotateX: 90 },
  animate: { rotateX: 0 },
}

const formatCharacter = (char: string) => (char === ' ' ? '\u00A0' : char)

type RollingTextProps = Omit<React.ComponentProps<'span'>, 'children'> & {
  transition?: Transition
  inView?: boolean
  inViewMargin?: UseInViewOptions['margin']
  inViewOnce?: boolean
  hoverOnly?: boolean
  text: string
}

function RollingText({
  ref,
  transition = { duration: 0.2, delay: 0.05, ease: 'easeOut' },
  inView = false,
  inViewMargin = '0px',
  inViewOnce = true,
  hoverOnly = false,
  text,
  ...props
}: RollingTextProps) {
  const localRef = React.useRef<HTMLSpanElement>(null)
  React.useImperativeHandle(ref, () => localRef.current!)

  const inViewResult = useInView(localRef, {
    once: inViewOnce,
    margin: inViewMargin,
  })

  const isInView = !inView || inViewResult

  const [isHovered, setIsHovered] = React.useState(false)

  const characters = React.useMemo(() => text.split(''), [text])

  return (
    <span
      data-slot="rolling-text"
      {...props}
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {characters.map((char, idx) => (
        <span
          key={idx}
          className="relative inline-block w-auto perspective-[9999999px] transform-3d"
          aria-hidden="true"
        >
          <motion.span
            className="absolute inline-block origin-[50%_25%] backface-hidden"
            initial={ENTRY_ANIMATION.initial}
            animate={
              hoverOnly
                ? isHovered
                  ? ENTRY_ANIMATION.animate
                  : undefined
                : isInView
                  ? ENTRY_ANIMATION.animate
                  : undefined
            }
            transition={{
              ...transition,
              delay: idx * (transition?.delay ?? 0) + 0.03,
            }}
          >
            {formatCharacter(char)}
          </motion.span>
          <motion.span
            className="absolute inline-block origin-[50%_100%] backface-hidden"
            initial={EXIT_ANIMATION.initial}
            animate={
              hoverOnly
                ? isHovered
                  ? EXIT_ANIMATION.animate
                  : undefined
                : isInView
                  ? EXIT_ANIMATION.animate
                  : undefined
            }
            transition={{
              ...transition,
              delay: idx * (transition?.delay ?? 0) + 0.03,
            }}
          >
            {formatCharacter(char)}
          </motion.span>
          <span className="invisible">{formatCharacter(char)}</span>
        </span>
      ))}

      <span className="sr-only">{text}</span>
    </span>
  )
}

export { RollingText, type RollingTextProps }
