import { RefinementCtx, ZodIssueCode } from 'zod'

export const requiredValidation = (
  val: string | number,
  ctx: RefinementCtx
) => {
  if (!val) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      message: `This field is required!`
    })
  }
  return val
}
