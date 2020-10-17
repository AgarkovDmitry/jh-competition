export interface ITrainingId {
  /* gym */
  /* date */
  time: string
  resource: string
}

export interface ITrainingForm {
  _id: string

  date: Date
  gym: {
    link: string
  } | null

  name?: string
  type?: string
  traineesAmount?: number
  note?: string
}

export interface ITraining {
  _id: string

  gym: {
    link: string
  }
  date: Date
  startTime: number
  endTime: number

  name?: string
  type?: string
  count?: number
  note?: string
}

export interface ITrainingResourceForm {
  _id?: string
  resource?: {
    link: string
  } | null
  trainer?: {
    link: string
  } | null
  startTime: number | null
  endTime: number | null
  training: {
    link: string
  } | null
}

export interface ITrainingRecordForm {
  _id?: string
  training: {
    link: string
  }
  contact: {
    link: string
  } | null
  attendant?: {
    link: string
  } | null
  resource: {
    link: string
  } | null
  status?: string | null
  note?: string | null
  priceType: 'units' | 'money' | null
  priceAmount: number | null
}
