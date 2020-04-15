import { useState } from 'react'
import { useRouter } from 'next/router'
import { reports, ipsum } from '../../../store'
import { Typography, makeStyles } from '@material-ui/core'
import { ReportsLayout } from '../../../components/layouts'
import { ReportCard, ReportFieldsCard } from '../../../components/reports'

const useStyles = makeStyles({
  container: {},
  card: {}
})

function InventoryReport (props) {
  const classes = useStyles()
  const { query } = useRouter()

  // TODO Change this to API -> GET findOne
  const report = reports.find(r => r.key === query.key) || reports.key === 'im1'

  return (
    <ReportsLayout>
      <Typography variant='h5'>Inventory Reports</Typography>
      <ReportCard
        title={report.title}
        id={report.key}
        category={report.category}
      />
      <ReportFieldsCard
        title={`${report.title} Field List`}
        // fields={[...report.fields]}
        className={classes.card}
      />
    </ReportsLayout>
  )
}

export default ShippingReport
