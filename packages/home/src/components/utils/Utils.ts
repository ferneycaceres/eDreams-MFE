export const buildAutoCompleteObject = (array: string[]) => {
  return array.map((item) => {
    return {
      title: item,
      value: item,
    }
  })
}
