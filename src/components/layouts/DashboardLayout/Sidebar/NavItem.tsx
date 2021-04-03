import {Button, ListItem} from '@material-ui/core'
import {Icon} from 'react-feather'
import {FC} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

interface Props {
  href: string
  icon: Icon
  title: string
}

const NavItem: FC<Props> = ({
  href,
  icon: Icon,
  title,
  ...rest
}) => {
  const router = useRouter()

  const active = router.pathname === href

  return (
      <ListItem
          disableGutters
          sx={{
            display: 'flex',
            py: 0,
          }}
          {...rest}
      >
        <Link href={href}>
          <Button
              component='a'
              sx={{
                color: 'text.secondary',
                fontWeight: 'medium',
                justifyContent: 'flex-start',
                letterSpacing: 0,
                py: 1.25,
                textTransform: 'none',
                width: '100%',
                ...(active && {
                  color: 'primary.main',
                }),
                '& svg': {
                  mr: 1,
                },
              }}
          >
            {Icon && (
                <Icon size='20' />
            )}
            <span>
              {title}
            </span>
          </Button>
        </Link>
      </ListItem>
  )
}

export default NavItem
