/* eslint-disable react/display-name */
import React from 'react'
import Link from './StyledLink'
import Button from '@material-ui/core/Button'

const ButtonLink = (props, ref) => (
  <Link naked innerRef={ref} {...props} />
)
export default props => <Button component={ButtonLink} {...props} />
