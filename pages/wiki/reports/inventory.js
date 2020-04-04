import { useState } from 'react'
import { useRouter } from 'next/router'
import { reports, ipsum } from '../../../store'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import Layout from '../../../components/Layout'
import { ReportsLayout } from '../../../components/layouts'
import { ReportCard, ReportFieldsCard } from '../../../components/reports'
// import ReportFieldsCard from '../../../components/reports/ReportFieldsCard'

const useStyles = makeStyles({
  container: {}
})

export default function ShippingReport (props) {
  const classes = useStyles()
  const { query } = useRouter()

  // TODO Change this to API -> GET findOne
  const report = reports.find(r => r.key === query.key) || reports.key === 'im1'

  return (
    <ReportsLayout>
      <Typography variant='h6'>Inventory Reports</Typography>
      <ReportCard
        title={report.title}
        id={report.key}
        category={report.category}
      />
    </ReportsLayout>
  )
}
