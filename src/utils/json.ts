const serializer = (obj: Record<string, any>): Record<string, any> => {
  const jsonString = JSON.stringify(obj, (k, v) => v == null ? null : v)
  return JSON.parse(jsonString)
}

export {serializer}
