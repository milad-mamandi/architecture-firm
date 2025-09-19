'use client'

import { CurvedBorder } from '@/components/curved-border'
import { Separator } from '@/components/ui/separator'
import { useIsMobile } from '@/hooks/use-mobile'
import { motion } from 'framer-motion'
import { ArrowLeftIcon, LucideIcon } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface MobileGalleryProps {
  items: GalleryItemProps[]
}

interface GalleryInfoProps {
  item: GalleryItemProps
  selected: number
}

interface GalleryItemComponentProps {
  item: GalleryItemProps
  index: number
  isSelected: boolean
  isPrevious: boolean
  onMouseEnter: () => void
}

interface GalleryItemProps {
  image: string
  title: string
  description: string
  icon: LucideIcon
}

function MobileGallery({ items }: MobileGalleryProps) {
  return (
    <div className="flex flex-col items-center gap-8">
      {items.map((item, index) => (
        <div key={index} className="mb-8 w-full">
          <div className="relative aspect-video h-[300px] w-full overflow-hidden rounded-t-4xl rounded-bl-4xl">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
            <CurvedBorder>
              <div className="text-muted-foreground flex flex-col rounded-tl-4xl bg-white pt-2 pl-3">
                <span className="text-4xl font-light lg:text-5xl">
                  0{index + 1}
                </span>
                <h3 className="font-medium lg:text-xl">{item.title}</h3>
              </div>
            </CurvedBorder>
          </div>
          <div className="mt-4 flex flex-col items-start gap-4">
            <div className="flex flex-row items-center gap-2">
              <item.icon size={24} />
              <h3 className="text-xl font-medium">{item.title}</h3>
            </div>
            <p className="font-light">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function GalleryInfo({ item, selected }: GalleryInfoProps) {
  const CurrentIcon = item.icon

  return (
    <motion.div
      className="mr-8 flex h-full w-1/3 flex-col items-start gap-2"
      key={`info-${selected}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
      }}
    >
      <CurrentIcon size={40} />
      <h3 className="text-2xl font-medium">{item.title}</h3>
      <p className="mt-2 max-w-xs font-light">{item.description}</p>
    </motion.div>
  )
}

function ExpandedItem({
  item,
  index,
}: Omit<
  GalleryItemComponentProps,
  'isSelected' | 'isPrevious' | 'onMouseEnter'
>) {
  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-t-4xl rounded-bl-4xl">
      <Image src={item.image} alt={item.title} fill className="object-cover" />
      <CurvedBorder>
        <div className="flex flex-col rounded-tl-4xl bg-white pt-5 pl-5">
          <span className="text-5xl font-light">0{index + 1}</span>
          <h3 className="text-xl font-medium">{item.title}</h3>
        </div>
      </CurvedBorder>
    </div>
  )
}

function CollapsedItem({
  item,
  index,
  isPrevious,
  onMouseEnter,
}: Omit<GalleryItemComponentProps, 'isSelected'>) {
  return (
    <>
      <div className="flex h-full w-full flex-row" onMouseEnter={onMouseEnter}>
        <div className="flex w-full flex-col items-center justify-between whitespace-nowrap text-neutral-300">
          <ArrowLeftIcon size={32} />
          <span className="rotate-180 text-4xl [writing-mode:vertical-rl]">
            <span className="text-5xl">0{index + 1}</span> {item.title}
          </span>
        </div>
        {!isPrevious && (
          <Separator orientation="vertical" className="bg-neutral-300" />
        )}
      </div>
    </>
  )
}

function GalleryItem({
  item,
  index,
  isSelected,
  isPrevious,
  onMouseEnter,
}: GalleryItemComponentProps) {
  return (
    <motion.div
      className="flex flex-row justify-end overflow-hidden"
      initial={{ width: '10%' }}
      animate={{ width: isSelected ? '80%' : '10%' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {isSelected ? (
        <ExpandedItem item={item} index={index} />
      ) : (
        <CollapsedItem
          item={item}
          index={index}
          isPrevious={isPrevious}
          onMouseEnter={onMouseEnter}
        />
      )}
    </motion.div>
  )
}

export default function Gallery({ items }: { items: GalleryItemProps[] }) {
  const [selected, setSelected] = useState<number>(0)
  const isMobile = useIsMobile(1280)

  if (isMobile) {
    return <MobileGallery items={items} />
  }

  return (
    <div className="flex flex-row items-end">
      <GalleryInfo item={items[selected]} selected={selected} />
      <div className="flex w-full flex-row">
        {items.map((item, index) => {
          const isSelected = selected === index
          const isPreviousItem = index === selected - 1

          return (
            <GalleryItem
              key={index}
              item={item}
              index={index}
              isSelected={isSelected}
              isPrevious={isPreviousItem}
              onMouseEnter={() => setSelected(index)}
            />
          )
        })}
      </div>
    </div>
  )
}
