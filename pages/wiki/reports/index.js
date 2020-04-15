import { reports, ipsum } from '../../../store'
import { makeStyles, Typography } from '@material-ui/core'
import { ReportsLayout } from '../../../components/layouts'

const useStyles = makeStyles(theme => ({
  paragraph: {
    marginTop: '20px'
  }
}))

// eslint-disable-next-line react/display-name
export default function Page (props) {
  const classes = useStyles()
  return (
    <ReportsLayout>
      <Typography className={classes.paragraph}paragraph>{ipsum.short}</Typography>
    </ReportsLayout>
  )
}
