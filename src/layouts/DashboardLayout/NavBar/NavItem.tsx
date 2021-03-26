import clsx from 'clsx'
import {ListItem, makeStyles} from '@material-ui/core'
import {FC} from 'react'
import {Icon} from 'react-feather'
import LinkButton from '../../../components/LinkButton'

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: 'flex-start',
    letterSpacing: 0,
    padding: '10px 8px',
    textTransform: 'none',
    width: '100%',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  title: {
    marginRight: 'auto',
  },
  active: {
    color: theme.palette.primary.main,
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium,
    },
    '& $icon': {
      color: theme.palette.primary.main,
    },
  },
}))

interface Props {
  className?: string
  href: string
  icon: Icon,
  title: string
}

const NavItem: FC<Props> = ({
  className,
  href,
  icon: Icon,
  title,
  ...rest
}) => {
  const classes = useStyles()

  return (
      <ListItem
          className={clsx(classes.item, className)}
          disableGutters
          {...rest}
      >
        <LinkButton href={href} className={clsx(classes.button, classes.active)}>
          {Icon && (
              <Icon
                  className={classes.icon}
                  size='20'
              />
          )}
          <span className={classes.title}>
            SDKSODKSOSKDO
          </span>
        </LinkButton>
      </ListItem>
  )
}

export default NavItem
// <Link href={href} activeClassName={classes.active} className={classes.button}>
