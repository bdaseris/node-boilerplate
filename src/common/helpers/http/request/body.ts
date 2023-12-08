import { AppError } from '../error'

export const Body = (schema: any) => {
  return (req: any, res: any, next: any) => {
    const { error } = schema.validate(req.body)

    if (error) {
      throw new AppError(error.details[0].message)
    }

    next()
  }
}
