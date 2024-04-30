import { Column } from 'shared/components'

const ResetPassword = () => {
  return (
    <Column className="w-full cursor-pointer gap-2 border-l-2 border-l-primary pl-3">
      <span className="font-semibold italic text-primary">
        Forgot password?
      </span>
      <Column className="text-sm text-muted-foreground">
        <p>Click here to reset your password</p>
        <p>(This would send you an email to reset your password)</p>
      </Column>
    </Column>
  )
}
export default ResetPassword
