import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import checkDialog from './check-dialog'
import passForm from './pass-form'
import schedule from './schedule'

export const actions = {
  checkDialog,
  passForm,
  schedule,
}

export default actions

/* GET RID OF useActions hook */

export const useActions = () => {
  const dispatch = useDispatch()

  const result = useMemo(
    () => ({
      checkDialog: bindActionCreators(checkDialog, dispatch),
      passForm: bindActionCreators(passForm, dispatch),
      schedule: {
        clientSuggester: bindActionCreators(schedule.clientSuggester, dispatch),
        page: bindActionCreators(schedule.page, dispatch),
        addTrainerDialog: bindActionCreators(schedule.addTrainerDialog, dispatch),
        trainingDialog: bindActionCreators(schedule.trainingDialog, dispatch),
      },
    }),
    [dispatch]
  )

  return result
}
