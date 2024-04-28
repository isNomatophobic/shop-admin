import { Control, Path } from 'react-hook-form'
import { BaseModel } from 'shared/types'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  InputProps
} from './ui'

export interface FormInputProps<T extends BaseModel>
  extends Pick<InputProps, 'type' | 'placeholder'> {
  name: Path<T>
  control: Control
  description?: string
  label?: string
}
export const FormInput = <T extends BaseModel>({
  name,
  type,
  placeholder,
  control,
  label,
  description
}: FormInputProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input placeholder={placeholder} type={type} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
