const serializer: Record<string, any> = (obj: Record<string, any>) => {
  const jsonString = JSON.stringify(obj, (k, v) => v == null ? null : v)
  return JSON.parse(jsonString)
}

export {serializer}
