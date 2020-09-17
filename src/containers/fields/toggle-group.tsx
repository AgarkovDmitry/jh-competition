import React from 'react'

import ToggleButtonGroup, { ToggleButtonGroupProps } from '@material-ui/lab/ToggleButtonGroup'

type IProps = ToggleButtonGroupProps & {
  onChange?: any
  value?: any
  error?: {
    message: string
  }
}

export default function TextInput(props: IProps) {
  const { value, onChange } = props

  const handleChange = (e: any, type: any) => {
    if (type) {
      onChange(type)
    }
  }

  return (
    <ToggleButtonGroup
      {...props}
      exclusive={true}
      value={value}
      onChange={handleChange}
    />
  )
}
