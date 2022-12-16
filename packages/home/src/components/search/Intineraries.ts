export interface ArrivalDate {
  year: number
  month: number
  dayOfMonth: number
  hourOfDay: number
  minute: number
  second: number
}

export interface DepartureDate {
  year: number
  month: number
  dayOfMonth: number
  hourOfDay: number
  minute: number
  second: number
}

export interface Intineraries {
  arrivalDate: ArrivalDate
  departureDate: DepartureDate
  arrivalLocation: string
  departureLocation: string
  carrier: string
  price: number
}
