import constants from 'store/constants/check-dialog'

import { ITrainingRecordForm } from 'interfaces/training'
import { IPaymentForm } from 'interfaces/payment'

export interface IState {
  opened: boolean
  contact: string | null

  recordForm: Partial<ITrainingRecordForm> | null
  recordMode: 'update' | null

  paymentForm: IPaymentForm | null
  paymentMode: 'create' | 'update' | null
}

const initialState: IState = {
  opened: false,
  contact: null,

  recordForm: null,
  recordMode: null,

  paymentForm: null,
  paymentMode: null,
}

export default (state = initialState, { type, payload }: { type: string, payload: any }): IState => {
  switch (type) {
    case constants.OPEN: {
      return {
        ...state,
        opened: true,
        contact: payload.contact,
      }
    }

    case constants.CLOSE: {
      return {
        ...state,
        ...initialState,
      }
    }

    case constants.SET_RECORD: {
      return {
        ...state,
        recordForm: payload.record,
        recordMode: payload.mode,
      }
    }

    case constants.RESET_RECORD: {
      return {
        ...state,
        recordForm: null,
        recordMode: null,
      }
    }

    case constants.UPDATE_RECORD: {
      return {
        ...state,
        recordForm: {
          ...state.recordForm,
          ...payload.record,
        },
      }
    }

    case constants.SET_PAYMENT: {
      return {
        ...state,
        paymentForm: payload.payment,
        paymentMode: payload.mode,
      }
    }

    case constants.RESET_PAYMENT: {
      return {
        ...state,
        paymentForm: null,
        paymentMode: null,
      }
    }

    case constants.UPDATE_PAYMENT: {
      return {
        ...state,
        paymentForm: {
          ...state.paymentForm,
          ...payload.payment,
        },
      }
    }

    default:
      return state
  }
}