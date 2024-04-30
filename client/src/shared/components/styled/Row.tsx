import { ComponentProps } from 'react'
import { cn } from 'shared/utils'

type RowProps = ComponentProps<'div'>

const Row = ({ className, ...rest }: RowProps) => (
  <div className={cn('flex items-center', className)} {...rest} />
)

export default Row
