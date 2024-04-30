import Logo from 'shared/assets/logo.svg?react'
import { Row } from 'shared/components'

const LoginHeader = () => {
  return (
    <Row className="w-full justify-start tablet:justify-center">
      <Logo className="mr-16 tablet:mr-8 phone:hidden" />
      <AppName />
    </Row>
  )
}
export default LoginHeader

const AppName = () => (
  <span className="text-[45px] font-semibold text-primary tablet:mr-16 phone:mr-0">
    Feast<span className="text-secondary">Flow</span>
  </span>
)
