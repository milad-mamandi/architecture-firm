'use client'

import {
  Tooltip,
  TooltipArrow,
  type TooltipArrowProps,
  TooltipContent,
  type TooltipContentProps,
  type TooltipProps,
  TooltipProvider,
  type TooltipProviderProps,
  TooltipTrigger,
} from '@/components/animate-ui/primitives/animate/tooltip'
import { HTMLMotionProps, type Transition, motion } from 'motion/react'
import * as React from 'react'

type AvatarProps = Omit<HTMLMotionProps<'div'>, 'translate'> & {
  children: React.ReactNode
  zIndex: number
  translate?: string | number
} & Omit<TooltipProps, 'children'>

function AvatarContainer({
  zIndex,
  translate,
  side,
  sideOffset,
  align,
  alignOffset,
  ...props
}: AvatarProps) {
  return (
    <Tooltip
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
    >
      <TooltipTrigger asChild>
        <motion.div
          data-slot="avatar-container"
          initial="initial"
          whileHover="hover"
          whileTap="hover"
          style={{ position: 'relative', zIndex }}
        >
          <motion.div
            variants={{
              initial: { y: 0 },
              hover: { y: translate },
            }}
            {...props}
          />
        </motion.div>
      </TooltipTrigger>
    </Tooltip>
  )
}

type AvatarGroupProps = Omit<React.ComponentProps<'div'>, 'translate'> & {
  children: React.ReactElement[]
  invertOverlap?: boolean
  translate?: string | number
  transition?: Transition
  tooltipTransition?: Transition
} & Omit<TooltipProviderProps, 'children'> &
  Omit<TooltipProps, 'children'>

function AvatarGroup({
  ref,
  children,
  id,
  transition = { type: 'spring', stiffness: 300, damping: 17 },
  invertOverlap = false,
  translate = '-30%',
  openDelay = 0,
  closeDelay = 0,
  side = 'top',
  sideOffset = 25,
  align = 'center',
  alignOffset = 0,
  tooltipTransition = { type: 'spring', stiffness: 300, damping: 35 },
  style,
  ...props
}: AvatarGroupProps) {
  return (
    <TooltipProvider
      id={id}
      openDelay={openDelay}
      closeDelay={closeDelay}
      transition={tooltipTransition}
    >
      <div
        ref={ref}
        data-slot="avatar-group"
        style={{
          display: 'flex',
          alignItems: 'center',
          ...style,
        }}
        {...props}
      >
        {children?.map((child, index) => (
          <AvatarContainer
            key={index}
            zIndex={
              invertOverlap ? React.Children.count(children) - index : index
            }
            transition={transition}
            whileHover={{ y: translate }}
            side={side}
            sideOffset={sideOffset}
            align={align}
            alignOffset={alignOffset}
          >
            {child}
          </AvatarContainer>
        ))}
      </div>
    </TooltipProvider>
  )
}

type AvatarGroupTooltipProps = TooltipContentProps

function AvatarGroupTooltip(props: AvatarGroupTooltipProps) {
  return <TooltipContent {...props} />
}

type AvatarGroupTooltipArrowProps = TooltipArrowProps

function AvatarGroupTooltipArrow(props: AvatarGroupTooltipArrowProps) {
  return <TooltipArrow {...props} />
}

export {
  AvatarGroup,
  AvatarGroupTooltip,
  AvatarGroupTooltipArrow,
  type AvatarGroupProps,
  type AvatarGroupTooltipProps,
  type AvatarGroupTooltipArrowProps,
}
