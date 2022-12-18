import { Intineraries } from '../components/results/Intineraries'

export type searchFlightProps = {
  data: any
  arrival: string
  departure: string
  departureDate: string
}

export const searchFlightService = (
  props: searchFlightProps
): Intineraries[] => {
  const { data, arrival, departure, departureDate } = props
  const [year, month, day] = departureDate.match(/\d+/g).map(Number)

  const results = data.filter((element: Intineraries) => {
    return (
      element.arrivalLocation === arrival &&
      element.departureLocation === departure &&
      element.departureDate.month === month - 1 &&
      element.departureDate.dayOfMonth === day &&
      element.departureDate.year === year
    )
  })

  return results
}

export const sortByPriceASC = (data: Intineraries[]) => {
  return data.sort((a: Intineraries, b: Intineraries) => {
    return a.price - b.price
  })
}
