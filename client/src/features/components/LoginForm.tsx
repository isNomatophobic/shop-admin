import { requiredValidation } from 'shared'
import { Button, Column, Form, Row } from 'shared/components'
import { UserModel } from 'shared/types'
import { z } from 'zod'

import LoginInput from './LoginInput'

const schema = z.object({
  username: z.string().superRefine(requiredValidation),
  password: z.string().superRefine(requiredValidation)
})

const LoginForm = () => {
  const onSubmit = () => {}
  return (
    <Form<UserModel> schema={schema} onSubmit={onSubmit} className="pl-3">
      {(control) => (
        <Row className="w-full justify-center">
          <Column className="w-[380px] items-center gap-10">
            <LoginInput
              control={control}
              type="text"
              name="username"
              placeholder="Enter your username"
            />
            <LoginInput
              control={control}
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <Button className="ml-auto px-10 tablet:w-full">Login</Button>
          </Column>
        </Row>
      )}
    </Form>
  )
}
export default LoginForm
