import { ReactElement, useMemo } from 'react'
import { DefaultValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { BaseModel } from 'shared/types'
import { Schema, z, ZodSchema } from 'zod'

import { ShadcnForm } from '../ui'

import { getDefaultValuesFromScheme } from './utilts'

export interface FormProps<T extends BaseModel> {
  schema: Schema<Partial<T>>
  defaultValues?: DefaultValues<Partial<T>>
  onSubmit: (values: z.infer<ZodSchema>) => void
  children: ReactElement
  className?: string
}

export const Form = <T extends BaseModel>({
  schema,
  defaultValues,
  onSubmit,
  children,
  className
}: FormProps<T>) => {
  const _defaultValues = useMemo(
    () => getDefaultValuesFromScheme<T>(schema),
    [schema]
  )

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { ..._defaultValues, ...defaultValues }
  })

  return (
    <ShadcnForm {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </ShadcnForm>
  )
}
