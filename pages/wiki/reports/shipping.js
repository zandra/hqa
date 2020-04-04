import { useState } from 'react'
import { useRouter } from 'next/router'
import { reports, ipsum } from '../../../store'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import { ReportsLayout } from '../../../components/layouts'
import { ReportCard, ReportFieldsCard } from '../../../components/reports'

const useStyles = makeStyles({
  container: {},
  card: {}
})

export default function ShippingReport (props) {
  const classes = useStyles()
  const { query } = useRouter()

  // TODO Change this to API -> GET findOne
  const [selected, setSelected] = useState(query.key)
  const report = reports.find(r => r.key === query.key) || reports.key === 'sh1'

  return (
    <ReportsLayout>
      <Typography variant='h6'>Shipping Reports</Typography>
      <ReportCard
        title={report.title}
        id={report.key}
        category={report.category}
        selected={selected}
        className={classes.card}
      />
      <ReportFieldsCard
        title={`${report.title} Field List`}
        // fields={[...report.fields]}
        className={classes.card}
      />
    </ReportsLayout>
  )
}
