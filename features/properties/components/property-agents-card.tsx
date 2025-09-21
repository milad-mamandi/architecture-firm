import {
  AvatarGroup,
  AvatarGroupTooltip,
} from '@/components/animate-ui/components/animate/avatar-group'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Rating, RatingButton } from '@/components/ui/shadcn-io/rating-button'
import { AGENTS } from '@/constants'

export default function PropertyAgentsCard({
  label,
  price,
}: {
  label: string
  price: number
}) {
  return (
    <div className="border-border sticky top-20 flex h-fit flex-col place-items-center gap-4 rounded-4xl border px-8 py-6 shadow-sm">
      <h3 className="text-center text-2xl font-semibold">Property {label}</h3>
      <h2 className="text-3xl font-bold">${price.toLocaleString()}</h2>
      <p className="text-center">Get in touch for more about this property</p>
      <AvatarGroup className="mt-4">
        {AGENTS.map((agent, index) => (
          <Avatar
            key={index}
            className="border-background size-11 border-2 md:size-16"
          >
            <AvatarImage src={agent.image} />
            <AvatarFallback>{agent.fallback}</AvatarFallback>
            <AvatarGroupTooltip>{agent.name}</AvatarGroupTooltip>
          </Avatar>
        ))}
      </AvatarGroup>
      <Rating value={5} readOnly>
        {Array.from({ length: 5 }).map((_, index) => (
          <RatingButton
            size={14}
            className="p-[1px] text-yellow-500 md:p-0.5"
            key={index}
          />
        ))}
      </Rating>
      <Button className="bg-foreground text-background w-full rounded-4xl py-6 text-lg font-normal">
        Request Info
      </Button>
    </div>
  )
}
