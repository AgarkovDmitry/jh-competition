export default interface ICheckPass {
  _id: string
  type: 'universal' | 'no_trainer' | 'sport' | 'open'
  size: string
  capacity: number
  duration: number
  activation: number
  createdAt: Date
  __typename: string
}