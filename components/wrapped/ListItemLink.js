import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import StyledLink from './StyledLink'

// eslint-disable-next-line react/prop-types
export default function ListItemLink ({ icon, primary, href, as }) {
  const renderLink = React.useMemo(
    // eslint-disable-next-line react/display-name
    () => React.forwardRef((linkProps, ref) => <StyledLink naked innerRef={ref}
      href={href} as={ as || href } {...linkProps} />),
    [href, as]
  )
  return (
    <ListItem button component={renderLink}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </ListItem>
  )
}
