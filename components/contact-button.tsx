import { cn } from '@/lib/utils'
import { ArrowUpRightIcon } from 'lucide-react'
import { MotionProps, motion, spring } from 'motion/react'

type ContactButtonProps = MotionProps & {
  href: string
  className?: string
}

export default function ContactButton({
  href,
  className,
  ...props
}: ContactButtonProps) {
  return (
    <div className="flex w-[220px] justify-end overflow-visible">
      <motion.div
        className={cn(
          'bg-primary text-primary-foreground group w-[200px] cursor-pointer rounded-4xl py-[5px] ps-3 pe-1.5',
          className,
        )}
        initial={{ width: '200px' }}
        whileHover={{
          width: '220px',
          transition: {
            type: spring,
            stiffness: 400,
            damping: 20,
          },
        }}
        whileTap={{
          scale: 0.95,
          transition: { duration: 0.1 },
        }}
        {...props}
      >
        <a href={href}>
          <div className="flex h-full w-full flex-row items-center justify-between gap-4">
            <motion.div
              className="size-2 rounded-full bg-green-400"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="text-base tracking-tight">Contact Us Now</span>
            <div className="bg-background text-foreground relative flex size-8 items-center justify-center overflow-hidden rounded-full">
              <ArrowUpRightIcon className="transition-transform duration-200 group-hover:translate-x-8 group-hover:-translate-y-8" />
              <ArrowUpRightIcon className="absolute -translate-x-8 translate-y-8 transition-transform duration-200 group-hover:translate-0" />
            </div>
          </div>
        </a>
      </motion.div>
    </div>
  )
}
