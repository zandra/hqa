// Root, index.js
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import TopicCard from '../components/TopicCard'
import { makeStyles } from '@material-ui/core'
import { wiki } from '../store'

const useStyles = makeStyles(theme => ({
  root: {
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  card: {
    maxWidth: '50px',
    paddingBottom: '50px'
  }
}
))

const Index = (props) => {
  const classes = useStyles()
  // react Hooks for user state

  // login page = ?
  // build out User
  // * stlye page, for userState = logged
  // * index.getInitialProps for when userState is logged in
  // * ?? where are you going to store your users
  // * ?? what authentication will you use\
  //
  // misc
  // * Hero > style the container to be full screen size
  return (
    <Layout className={classes.root}>
      <Hero src="/logo1.png"/>
      <div className={classes.container}>
        {wiki.map(w =>
          <TopicCard
            key={w.key}
            name={w.title}
            src={w.route}
            className={classes.card}
          />
        ) }
      </div>
    </Layout>
  )
}
export default Index
