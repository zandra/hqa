import { Container, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  hero: {
    textAlign: 'center',
    marginBottom: '60px'
  }
}))

const Hero = ({ src }) => {
  const classes = useStyles()
  return (
    <Container fluid='true' maxWidth='md' className={classes.hero}>
      <img src={src} alt='HQA logo' />
    </Container>
  )
}

export default Hero
