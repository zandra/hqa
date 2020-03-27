import { Typography, Container } from '@material-ui/core'
import Link from './styled/StyledLink'
import { wikiNav } from '../store'

const topicLinks = wikiNav.filter(item => item.type === 'wiki')
console.log(topicLinks)

export default function Topics (props) {
  return (
    <Container maxWidth='lg'>
      {topicLinks.map(item =>
        <Link href='/wiki'><a>{item.topic} hello</a></Link>
      )}
    </Container>
  )
}
