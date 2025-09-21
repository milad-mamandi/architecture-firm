import { Badge } from '@/components/ui/badge'

import { AMENITIES, AMENITIES_ICONS } from '../../properties/constants'

export const AmenityBadge = ({
  label,
  disabled,
}: {
  label: (typeof AMENITIES)[number]
  disabled: boolean
}) => {
  const Icon = AMENITIES_ICONS[label]
  return (
    <Badge variant={disabled ? 'disabled' : 'amenity'}>
      <Icon strokeWidth={1} opacity={disabled ? 0.5 : 0.75} />
      {label}
    </Badge>
  )
}
