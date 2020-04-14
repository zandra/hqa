// Root, index.js
// import passport from '../utils/passport'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import TopicCard from '../components/TopicCard'
import { makeStyles } from '@material-ui/core'
import { wiki } from '../store'

const useStyles = makeStyles(theme => ({
  root: {},
  container: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  card: {
    maxWidth: '50px',
    paddingBottom: '50px',
    margin: '20px'
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

// export async function getServerSideProps ({ req, res }) {
//   const handler = nextConnect()
//   if (!req.user) next()

//   handler.use(passport.initialize())
//   try {
//     await handler.apply(req, res)
//   } catch (e) {
//     // handle the error
//   }
//   // do something with the upgraded req and res
//   return {
//     props: { user: req.user } // will be passed to the page component as props
//   }
// }
export default Index
