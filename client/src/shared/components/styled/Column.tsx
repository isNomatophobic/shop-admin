import { ComponentProps } from 'react'
import { cn } from 'shared/utils'

type Columnrops = ComponentProps<'div'>

const Column = ({ className, ...rest }: Columnrops) => (
  <div className={cn('flex flex-col', className)} {...rest} />
)

export default Column
