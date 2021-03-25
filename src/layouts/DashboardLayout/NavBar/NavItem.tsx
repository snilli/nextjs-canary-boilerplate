import clsx from 'clsx'
import {Button, ListItem, makeStyles} from '@material-ui/core'
import {Icon} from 'react-feather'
import Link from '../../../components/Link'

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
  className: string,
  href: string,
  icon: Icon,
  title: string
}

const NavItem = ({
  className,
  href,
  icon: Icon,
  title,
  ...rest
}: Props): JSX.Element => {
  const classes = useStyles()

  return (
      <ListItem
          className={clsx(classes.item, className)}
          disableGutters
          {...rest}
      >
        <Link href={href}>
          <Button className={classes.button}>
            {Icon && (
                <Icon
                    className={classes.icon}
                    size='20'
                />
            )}
            <span className={classes.title}>
              {title}
            </span>
          </Button>
        </Link>
      </ListItem>
  )
}

export default NavItem
