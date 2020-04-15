// Root, index.js
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import TopicCard from '../components/TopicCard'
import { makeStyles } from '@material-ui/core'
import { wiki } from '../store'

const useStyles = makeStyles(theme => ({
  root: {},
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    spacing: theme.spacing(2)
  },
  card: {
    maxWidth: '50px',
    paddingBottom: '50px',
    margin: '20px',
    spacing: theme.spacing(2)
  }
}))

const Index = (props) => {
  const classes = useStyles()
  // react Hooks for user state
  // * stlye page, for userState = logged
  // * index.getInitialProps for when userState is logged in
  // misc
  // * Hero > style the container to be full screen size
  return (
    <Layout className={classes.root}>
      <Hero src="/logo1.png"/>
      <div className={classes.container}>
        {wiki.map(topic =>
          <TopicCard
            key={topic.key}
            name={topic.title}
            src={topic.route}
            className={classes.card}
          />
        ) }
      </div>
    </Layout>
  )
}

export default Index
