import { Button, Column, Row } from 'shared/components'

import LoginInput from './LoginInput'

const LoginForm = () => {
  return (
    <Row className="w-full justify-center">
      <Column className="w-[380px] items-center gap-10">
        <LoginInput placeholder="Enter your username" />
        <LoginInput placeholder="Enter your password" />
        <Button className="ml-auto px-10 tablet:w-full">Login</Button>
      </Column>
    </Row>
  )
}
export default LoginForm
