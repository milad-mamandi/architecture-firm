import { cn } from '@/lib/utils'

interface StatisticInfoProps {
  className?: string
  number: string
  description: string
  sign?: string
}

export default function StatisticInfo({
  className,
  number,
  description,
  sign = '+',
}: StatisticInfoProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      <div className="flex flex-row items-start">
        {number}
        <span className="-mt-2 font-light">{sign}</span>
      </div>
      <p className="text-sm md:text-base">{description}</p>
    </div>
  )
}
