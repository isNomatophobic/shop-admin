import { Column } from 'shared/components'

import LoginForm from 'features/components/LoginForm'
import LoginHeader from 'features/components/LoginHeader'
import ResetPassword from 'features/components/ResetPassword'

const Login = () => {
  return (
    <div className="flex h-screen">
      <Column className="w-[500px] items-start justify-between border-r-2 border-r-primary px-4 py-8 tablet:w-full tablet:min-w-[360px] tablet:items-center tablet:border-r-0">
        <LoginHeader />
        <LoginForm />
        <ResetPassword />
      </Column>
      <div className="grow bg-login-banner bg-cover tablet:hidden" />
    </div>
  )
}

export default Login
