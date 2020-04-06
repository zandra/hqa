import { Link, Typography } from '@material-ui/core'
import fetch from 'isomorphic-unfetch'

const styles = {
  container: {
    border: '1px solid black'
  },
  image: {
    border: '1px solid black',
    maxWidth: 400,
    maxHeight: 500
  }
}

const Extension = (props) => (
  <>
    <Typography>Hi</Typography>
    <Typography>{JSON.stringify(props.links)}</Typography>
  </>
)
// OPP refactor api call to walk back from https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty
export async function getInitialProps () {
  const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
  const data = await res.json()

  const myArr = data.slice(19)

  const links = myArr.map(id => `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)

  // Pass data to the page via props
  return { props: { links } }
}

export default Extension
