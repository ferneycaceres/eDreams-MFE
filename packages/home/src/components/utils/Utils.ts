export const buildAutoCompleteObject = (array: string[]) => {
  return array.map((item) => {
    return {
      option: item,
      value: item,
    }
  })
}
