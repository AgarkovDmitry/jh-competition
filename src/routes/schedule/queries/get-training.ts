import gql from 'graphql-tag'

export interface IGetTrainingResponse {
  training: {
    _id: string
    date: Date
    gym: number
    markPrice: number
    moneyPrice: number
    name: string
    note: string
    resource: number
    time: string
    trainer: number
    type: string
  }
  trainingRecords: Array<{
    seasonPass: string
    trainee: {
      _id: string
      fullName: string
    }
    note: string
    status: string
    training: string
  }>
}

export default gql`
  query getTraining($id: ObjectId){
    training(query: { _id: $id }) {
      _id
      date
      gym
      markPrice
      moneyPrice
      name
      note
      resource
      time
      trainer
      type
    }
    trainingRecords(query: { training: $id }) {
      seasonPass
      trainee {
        _id
        fullName
      }
      note
      status
      training
    }
  }
`