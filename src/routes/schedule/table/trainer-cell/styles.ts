import { makeStyles, Theme } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) => ({
  trainersTd: {
    width: theme.spacing(21),
    height: theme.spacing(4.5),
    willChange: 'width',
    transition: theme.transitions.create(['width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  trainersColumnShift: {
    width: theme.spacing(36),
    willChange: 'width',
    transition: theme.transitions.create(['width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  trainerAvatar: {
    marginLeft: theme.spacing(-3),
    willChange: 'margin-left',
    transition: theme.transitions.create(['margin-left'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  emptyTrainerAvatar: {
    width: theme.spacing(6),
    marginLeft: theme.spacing(-6),
    willChange: 'margin-left',
    transition: theme.transitions.create(['margin-left'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  firstEmptyTrainerAvatar: {
    width: theme.spacing(6),
    marginLeft: theme.spacing(-3),
    willChange: 'margin-left',
    transition: theme.transitions.create(['margin-left'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  openedTrainerAvatar: {
    marginLeft: theme.spacing(0),
  },
}))