import { Badge } from '@/components/ui/badge'
import { formatNumber } from '@/lib/utils'
import {
  BathIcon,
  BedIcon,
  MapPinIcon,
  UnfoldHorizontalIcon,
} from 'lucide-react'
import { motion, spring } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

interface PropertyCardProps {
  id: number
  title: string
  location: string
  bedrooms: number
  bathrooms: number
  area: number
  price: number
  images: string[]
  mainTag: string
}

export default function PropertyCard({
  id,
  title,
  location,
  bedrooms,
  bathrooms,
  area,
  price,
  images,
  mainTag,
}: PropertyCardProps) {
  return (
    <Link href={`/property/${id}`} className="no-underline">
      <motion.div
        className="flex flex-col gap-2"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: spring, stiffness: 180, damping: 25 }}
      >
        <div className="relative h-[350px] w-full overflow-hidden rounded-4xl">
          <Image
            src={`/images/properties${images[0]}`}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 ease-in-out hover:scale-120"
          />
          <Badge className="bg-background text-foreground absolute top-4 right-4 rounded-3xl px-4 text-base font-normal">
            {mainTag}
          </Badge>
        </div>
        <div className="mt-2 flex flex-row items-center gap-1">
          <MapPinIcon size={20} />
          <span className="text-muted-foreground">{location}</span>
        </div>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <div className="flex flex-row items-center gap-4 font-light [&_span]:flex [&_span]:flex-row [&_span]:items-center [&_span]:gap-2">
          <span>
            <BedIcon strokeWidth={0.75} size={20} /> {bedrooms}
          </span>
          <span>
            <BathIcon strokeWidth={0.75} size={20} /> {bathrooms}
          </span>
          <span>
            <UnfoldHorizontalIcon strokeWidth={0.75} size={20} />{' '}
            {formatNumber(area)} sq.ft
          </span>
        </div>
        <h4 className="text-xl font-semibold">$ {price.toLocaleString()}</h4>
      </motion.div>
    </Link>
  )
}
