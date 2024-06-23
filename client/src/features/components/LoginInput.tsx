import { FormInput, FormInputProps } from 'shared/components'

const LoginInput = (props: Omit<FormInputProps, 'className'>) => (
  <FormInput
    className="focus-visible:border-b-primary/50 max-w-[385px] rounded-none border-0 border-b border-primary font-semibold placeholder:font-normal focus-visible:ring-transparent"
    {...props}
  />
)

export default LoginInput
