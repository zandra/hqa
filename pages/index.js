import Layout from '../components/Layout'
import Link from 'next/link'

const Index = (props) => {
  // react Hooks for user state 

  // login page = ?
  // build out User
  // * stlye page, for userState = logged
  // * index.getInitialProps for when userState is logged in
  // * ?? where are you going to store your users
  // * ?? what authentication will you use 
  // * ??
  return (
      <Layout>
        <h2 color='primary'>Welcome to HQA</h2>
        <Link href="/wiki">
          <a>Wiki</a>
        </Link>
        <br />
        <Link href="/sb/test">
          <a>Test</a>
        </Link>
      </Layout>
  );
}
export default Index;