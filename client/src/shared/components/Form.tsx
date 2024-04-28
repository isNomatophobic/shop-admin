import { ReactElement } from 'react'
import { Control, DefaultValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { BaseModel } from 'shared/types'
import { Schema, z, ZodSchema } from 'zod'

import { ShadcnForm } from './ui'

export interface FormProps<T extends BaseModel> {
  formSchema: Schema<Partial<T>>
  defaultValues: DefaultValues<Partial<T>>
  onSubmit: (values: z.infer<ZodSchema>) => void
  children: (control: Control<Partial<T>>) => ReactElement
}

export const Form = <T extends BaseModel>({
  formSchema,
  defaultValues,
  onSubmit,
  children
}: FormProps<T>) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues
  })

  return (
    <ShadcnForm {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {children(form.control)}
      </form>
    </ShadcnForm>
  )
}
