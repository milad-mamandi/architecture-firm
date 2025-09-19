import {
  AvatarGroup,
  AvatarGroupTooltip,
} from '@/components/animate-ui/components/animate/avatar-group'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Rating, RatingButton } from '@/components/ui/shadcn-io/rating-button'
import { AGENTS } from '@/constants'

export default function Agents() {
  return (
    <div className="bg-background flex flex-col items-center justify-center rounded-tl-4xl pt-2 pl-3 text-lg font-medium md:flex-row md:gap-4 md:pt-4 md:pb-3 md:pl-4">
      <AvatarGroup>
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
      <div className="flex flex-col items-center text-sm md:text-base">
        <span>10+ Featured Agents</span>
        <div className="flex flex-row items-center gap-2">
          <Rating value={5} readOnly>
            {Array.from({ length: 5 }).map((_, index) => (
              <RatingButton
                size={14}
                className="p-[1px] text-yellow-500 md:p-0.5"
                key={index}
              />
            ))}
          </Rating>
          <span>5 / 5</span>
        </div>
      </div>
    </div>
  )
}
