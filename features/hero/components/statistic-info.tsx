interface StatisticInfoProps {
  number: string
  description: string
}

export default function StatisticInfo({
  number,
  description,
}: StatisticInfoProps) {
  return (
    <div className="text-background flex flex-col">
      <div className="flex flex-row items-start text-4xl">
        {number}
        <span className="-mt-2 font-light">+</span>
      </div>
      <p className="text-sm md:text-base">{description}</p>
    </div>
  )
}
