import { reports, ipsum } from '../../../store'
import { Typography } from '@material-ui/core'
import { ReportsLayout } from '../../../components/layouts'

// eslint-disable-next-line react/display-name
export default (props) => (
  <ReportsLayout>
    <Typography paragraph>{ipsum.short}</Typography>
  </ReportsLayout>
)
