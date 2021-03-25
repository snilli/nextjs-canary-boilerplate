import React from 'react'
import clsx from 'clsx'
import {Button, ListItem, makeStyles} from '@material-ui/core'
import Link from 'next/link'

interface Props {
  className: string
  href: string
  icon: any
  title: string
}

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

const NavItem = ({
  className,
  href,
  icon: Icon,
  title,
}: Props) => {
  const classes = useStyles()

  return (
      // <Link >
      <Link href={href} passHref>
        <ListItem
            className={clsx(classes.item, className)}
            disableGutters
        >
          <Button
              className={classes.button}
              component={Link}
              href={href}
          >
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
        </ListItem>
      </Link>
  )
}

export default NavItem
