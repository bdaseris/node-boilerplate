type SchemaType<T> = T extends { new (): infer U } ? U : never

export const Body = (schema: SchemaType<any>) => {
  return (target: any, propertyKey: string, parameterIndex: number) => {
    const existingBodyParameters: number[] =
      Reflect.getOwnMetadata('body:parameters', target, propertyKey) || []
    existingBodyParameters.push(parameterIndex)
    Reflect.defineMetadata(
      'body:parameters',
      existingBodyParameters,
      target,
      propertyKey
    )

    // TODO: Add validation
    // Perform validation logic on the schema and request body
    const requestBody = {} // get the request body
    const validateRequestBody = 1 === 1 // validate the requestBody using the schema

    if (!validateRequestBody) {
      throw new Error('Invalid request body')
    }
  }
}
