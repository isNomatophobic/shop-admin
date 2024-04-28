import { Button, Form, FormInput } from 'shared/components'
import { BaseModel } from 'shared/types'
import { z } from 'zod'

interface SampleRecord extends BaseModel {
  name: string
  password: string
  confirmPassword: string
}

const formSchema = z
  .object({
    name: z.string().min(2, {
      message: 'Username must be at least 2 characters.'
    }),
    password: z.string(),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't match!",
    path: ['password']
  })
const SampleForm = () => {
  return (
    <Form<SampleRecord>
      formSchema={formSchema}
      //this is needed because otherwise the inputs will start with undefined as value and they will give uncontrolled to controlled  error
      defaultValues={{ name: '', password: '', confirmPassword: '' }}
      onSubmit={() => {}}
    >
      {(control) => (
        <>
          <FormInput<SampleRecord>
            name="name"
            control={control}
            type="text"
            placeholder="name"
          />
          <FormInput<SampleRecord>
            name="password"
            control={control}
            type="password"
            placeholder="password"
          />
          <FormInput<SampleRecord>
            name="confirmPassword"
            control={control}
            type="password"
            placeholder="confirm password"
          />
          <Button type="submit">Submit</Button>
        </>
      )}
    </Form>
  )
}

export default SampleForm
