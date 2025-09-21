import { Badge } from '@/components/ui/badge'
import { WritingText } from '@/components/ui/shadcn-io/writing-text'
import { AmenityBadge } from '@/features/properties/components/amenity-badge'
import PropertyLocation from '@/features/properties/components/location'
import PropertyAgentsCard from '@/features/properties/components/property-agents-card'
import { AMENITIES, PROPERTIES_LIST } from '@/features/properties/constants'
import { cn, formatNumber } from '@/lib/utils'
import {
  BathIcon,
  BedIcon,
  CheckIcon,
  MapPinIcon,
  UnfoldHorizontalIcon,
} from 'lucide-react'
import Image from 'next/image'

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const property = PROPERTIES_LIST.find((prop) => prop.id === parseInt(id))

  if (!property) {
    return <div>Property not found</div>
  }

  return (
    <div className="flex flex-col place-items-center px-4 pt-10 lg:pb-10">
      <div className="flex w-full max-w-[1100px] flex-col gap-10">
        <div className="grid-row-2 grid h-[800px] gap-4 md:h-[550px] md:grid-cols-5">
          {property.images.map((src, index) => (
            <div
              className={cn(
                'relative overflow-hidden rounded-3xl',
                { 'row-span-2 md:col-span-3': index === 0 },
                { 'row-span-1 md:col-span-2': index !== 0 },
              )}
              key={index}
            >
              {index === 0 && (
                <Badge
                  variant="secondary"
                  className="absolute top-4 left-4 rounded-3xl px-3 py-1.5 text-base font-normal"
                >
                  {property.mainTag}
                </Badge>
              )}
              <Image
                src={`${'/images/properties'}${src}`}
                alt={property.title}
                width={0}
                height={0}
                sizes={
                  index === 0
                    ? '(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 66vw'
                    : '(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw'
                }
                style={{ width: '100%', height: '100%' }}
                className={`object-cover`}
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="space-y-8">
            <div className="flex flex-col gap-4">
              <WritingText text={property.title} />
              <div className="flex flex-row items-center gap-1">
                <MapPinIcon size={20} />
                <span className="text-muted-foreground">
                  {property.location}
                </span>
              </div>
              <div className="flex flex-row gap-4">
                <div className="flex flex-row gap-2">
                  <BedIcon size={20} strokeWidth={0.75} />
                  <span className="text-muted-foreground">
                    {property.bedrooms} Beds
                  </span>
                </div>
                <div className="flex flex-row gap-2">
                  <BathIcon size={20} strokeWidth={0.75} />
                  <span className="text-muted-foreground">
                    {property.bathrooms} Baths
                  </span>
                </div>
                <div className="flex flex-row gap-2">
                  <UnfoldHorizontalIcon size={20} strokeWidth={0.75} />
                  <span className="text-muted-foreground">
                    {formatNumber(property.area)} sq.ft
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">Overview</h2>
              <p className="text-muted-foreground">{property.description}</p>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">Features</h2>
              <div className="flex flex-col gap-2">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex flex-row items-center gap-2">
                    <CheckIcon />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">Amenities</h2>
              <div className="flex flex-wrap gap-2">
                {AMENITIES.map((amenity, index) => {
                  const isDisabled = !property.amenities.includes(amenity)
                  return (
                    <AmenityBadge
                      key={index}
                      disabled={isDisabled}
                      label={amenity}
                    />
                  )
                })}
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">Location</h2>
              <div className="h-[400px] w-full overflow-hidden rounded-3xl">
                <PropertyLocation />
              </div>
            </div>
          </div>
          <PropertyAgentsCard label={property.mainTag} price={property.price} />
        </div>
      </div>
    </div>
  )
}
