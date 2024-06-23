import { Column } from 'shared/components'

import LoginForm from 'features/components/LoginForm'
import LoginHeader from 'features/components/LoginHeader'
import ResetPassword from 'features/components/ResetPassword'

const Login = () => {
  return (
    <div className="flex h-screen">
      <Column className="border-r-primary tablet:w-full tablet:min-w-[360px] tablet:items-center tablet:border-r-0 w-[500px] items-start justify-between border-r-2 px-4 py-8">
        <LoginHeader />
        <LoginForm />
        <ResetPassword />
      </Column>
      <div className="bg-login-banner tablet:hidden grow bg-cover" />
    </div>
  )
}

export default Login
