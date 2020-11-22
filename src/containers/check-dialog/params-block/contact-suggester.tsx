import React, { useCallback } from 'react'

import { useSelector, useActions } from 'store'

import InputAdornment from '@material-ui/core/InputAdornment'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import ClientSuggester from 'containers/client-suggester'

import getClientLabel from 'utils/get-client-label'

import useGetContactDetailsQuery from '../graphql/get-contact-details'

interface IProps {
  label: string
  disabled?: boolean
}

const Abornment = ({ balance }: { balance: number }) => {
  return (
    <InputAdornment position='start'>
      <Typography color={balance > 0 ? 'primary' : balance < 0 ? 'error' : 'textSecondary'}>
        {balance > 0 ? `+${balance}` : balance}
        {' грн'}
      </Typography>
    </InputAdornment>
  )
}

export default function ContactSuggester({ label, disabled }: IProps) {
  const actions = useActions()
  const contact = useSelector(state => state.checkDialog.params.contact)
  const updateContact = actions.checkDialog.updateContact

  const { data } = useGetContactDetailsQuery()

  const handleChange = useCallback(
    (link: string | null) => {
      updateContact(link ? { link } : null)
    },
    [updateContact]
  )

  const initialFilter = getClientLabel(data?.client)
  const initialBalance = data?.client.balance || 0

  if (contact && !data?.client) {
    return (
      <Grid container={true}>
        <Box margin='auto'>
          <CircularProgress />
        </Box>
      </Grid>
    )
  }

  return (
    <ClientSuggester
      value={contact ? contact.link : null}
      handleChange={handleChange}
      label={label}
      disabled={disabled}
      initialFilter={initialFilter}
      initialBalance={initialBalance}
      StartAdornment={Abornment}
    />
  )
}
