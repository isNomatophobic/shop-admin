import { Control } from 'react-hook-form'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  InputProps
} from '../ui'

export interface FormInputProps
  extends Required<Pick<InputProps, 'type' | 'placeholder'>> {
  name: string
  control: Control
  description?: string
  label?: string
  className?: string
}
export const FormInput = ({
  name,
  type,
  placeholder,
  control,
  label,
  description,
  className
}: FormInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              placeholder={placeholder}
              type={type}
              {...field}
              className={className}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
