import React from 'react'
import { useSelector } from 'store'
import { useFormContext } from 'react-hook-form'

import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'

interface IProps {
  value: 'units' | 'money' | null
}

export default function TypeToggle({ value }: IProps) {
  const { reset } = useFormContext()
  const payment = useSelector(state => state.checkDialog.paymentForm.payment!)

  const handleTypeChange = React.useCallback(
    (e, type) => {
      if (type) {
        reset({
          type,
          amount: type === payment.type ? payment.amount : null,
        })
      }
    },
    [reset, payment]
  )

  return (
    <ToggleButtonGroup
      exclusive={true}
      value={value}
      onChange={handleTypeChange}
    >
      <ToggleButton value='money'>
        Грн
      </ToggleButton>
      <ToggleButton value='units'>
        АБ
      </ToggleButton>
    </ToggleButtonGroup>
  )
}