import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useActions } from 'store'

import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import TableCell from '@material-ui/core/TableCell'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'

import PersonAddIcon from '@material-ui/icons/PersonAdd'
import FaceIcon from '@material-ui/icons/Face'

import Tooltip from 'components/multiline-tooltip'

import GET_TRAINING, { IGetTrainingResponse } from '../queries/get-training'
import { trainers } from '../data'

import useStyles from './styles'

import getColorPallete from 'utils/get-color-pallete'

const TrainingCell = ({ time, resource, id, duration }: any) => {
  const classes = useStyles()
  const actions = useActions()

  const { data, loading } = useQuery<IGetTrainingResponse>(GET_TRAINING, {
    variables: { id },
    skip: !id,
  })

  const training = data?.training
  const records = data?.trainingRecords

  const trainer = React.useMemo(
    () => trainers.find(tr => tr.id === training?.trainer),
    [training]
  )

  const handleCreateClick = React.useCallback(
    e => {
      e.stopPropagation()
      actions.schedule.openCreateDialog({ resource, time })
    },
    [actions, resource, time]
  )

  const handleUpdateClick = React.useCallback(
    e => {
      e.stopPropagation()
      actions.schedule.openUpdateDialog(training!, records!)
    },
    [training, records, actions]
  )

  const color = React.useMemo(
    () => {
      if (loading || training?.trainer === null || training?.trainer === undefined) {
        return getColorPallete(undefined)
      }

      return getColorPallete(training.trainer)
    },
    [loading, training]
  )

  const backgroundStyle = React.useMemo(
    () => ({ backgroundColor: color[500] }),
    [color]
  )

  const borderColorStyle = React.useMemo(
    () => ({ borderColor: color[500] }),
    [color]
  )

  const noTrainerStyle = React.useMemo(
    () => !trainer && ({ margin: 0 }),
    [trainer]
  )

  const isOccupied = !loading && !!training

  return (
    <TableCell align='center' padding='none' style={isOccupied ? backgroundStyle : undefined} className={classes.resourceTd} rowSpan={duration ? duration : 1}>
      {
        loading && (
          <CircularProgress />
        )
      }
      {
        !loading && !training && (
          <Button onDoubleClick={handleCreateClick} fullWidth={true}>
            <Tooltip rows={['Добавить тренировку']}>
              <PersonAddIcon />
            </Tooltip>
          </Button>
        )
      }
      {
        !loading && training && (
          <Button onDoubleClick={handleUpdateClick} fullWidth={true}>
            <Grid container={true} wrap='nowrap' justify='center'>
              {
                trainer && (
                  <Tooltip rows={['Информация о тренировке']}>
                    <Avatar src={trainer?.avatarSrc} className={classes.mainAvatar} style={borderColorStyle} />
                  </Tooltip>
                )
              }
              {
                !trainer && records?.length === 0 && (
                  <Tooltip rows={['Нет учеников и тренера']}>
                    <Avatar className={classes.mainAvatar} style={borderColorStyle}>
                      <FaceIcon />
                    </Avatar>
                  </Tooltip>
                )
              }

              {
                records?.map((r, index) => (
                  <Tooltip rows={[r.trainee.fullName]} key={index}>
                    <Avatar className={classes.secondaryAvatar} style={{ zIndex: records?.length - index, ...borderColorStyle, ...noTrainerStyle }}>
                      {
                        r.trainee.fullName
                          ? r.trainee.fullName.split(' ').filter((r, i) => i < 2).map(r => r[0]).join('')
                          : <FaceIcon />
                      }
                    </Avatar>
                  </Tooltip>
                ))
              }
            </Grid>
          </Button>
        )
      }
    </TableCell>
  )
}

export default TrainingCell
