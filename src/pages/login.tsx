import Head from 'next/head'
import {useRouter} from 'next/router'
import {Box, Button, Container, Grid, TextField, Typography} from '@material-ui/core'
import FacebookIcon from '../components/icons/Facebook'
import GoogleIcon from '../components/icons/Google'
import {useForm} from 'react-hook-form'
import Joi from 'joi'
import {joiResolver} from '@hookform/resolvers/joi'
import {FC, useEffect} from 'react'
import NextLink from '../components/Link'
import MainLayout from '../components/layouts/MainLayout'
import {useAuthContext} from '../contexts/auth.context'
import {useMainContext} from '../contexts/main.context'
import UserContextProvider, {useUserContext} from '../contexts/user.context'
import {UserEntity} from '../core/user/entity/user.entity'
import WithUserContext from '../wrapper/WithUserContext'
import {UserAction} from '../reducers/user/user.action'

interface FormData {
  email: string
  password: string
}

const schema = Joi.object({
  email: Joi.string().email({tlds: {allow: false}}).max(255).required(),
  password: Joi.string().max(255).required(),
})

const Login: FC = () => {
  const auth = useAuthContext()
  const router = useRouter()
  const {dispatch} = useMainContext()
  const repo = useUserContext()

  const handleOnClick = async () => {
    const user = await auth.signinWithGoogle()
    const userEntity = UserEntity.Create({
      displayName: user.displayName,
      email: user.email,
      id: user.uid,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      providerId: user.providerId,
    })
    await repo.setDoc(userEntity)

    dispatch(UserAction.addUser(userEntity.getState()))

    await router.replace('/dashboard')
  }
  const {register, handleSubmit, errors, formState} = useForm<FormData>({
    defaultValues: {
      email: 'demo@devias.io',
      password: 'Password123',
    },
    resolver: joiResolver(schema),
  })

  useEffect(() => {
    void router.prefetch('/dashboard')
  }, [router])

  const onSubmit = () => {
    void router.push('/dashboard')
  }

  return (
      <MainLayout>
        <UserContextProvider>
          <Head>
            <title>Login | Material Kit</title>
          </Head>
          <Box
              sx={{
                backgroundColor: 'background.default',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'center',
              }}
          >
            <Container maxWidth='sm'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{mb: 3}}>
                  <Typography
                      color='textPrimary'
                      variant='h2'
                  >
                    Sign in
                  </Typography>
                  <Typography
                      color='textSecondary'
                      gutterBottom
                      variant='body2'
                  >
                    Sign in on the internal platform
                  </Typography>
                </Box>
                <Grid
                    container
                    spacing={3}
                >
                  <Grid
                      item
                      xs={12}
                      md={6}
                  >
                    <Button
                        color='primary'
                        fullWidth
                        startIcon={<FacebookIcon />}
                        size='large'
                        variant='contained'
                    >
                      Login with Facebook
                    </Button>
                  </Grid>
                  <Grid
                      item
                      xs={12}
                      md={6}
                  >
                    <Button
                        fullWidth
                        startIcon={<GoogleIcon />}
                        size='large'
                        variant='contained'
                        onClick={handleOnClick}
                    >
                      Login with Google
                    </Button>
                  </Grid>
                </Grid>
                <Box
                    sx={{
                      pb: 1,
                      pt: 3,
                    }}
                >
                  <Typography
                      align='center'
                      color='textSecondary'
                      variant='body1'
                  >
                    or login with email address
                  </Typography>
                </Box>
                <TextField
                    error={Boolean(errors.email?.message)}
                    fullWidth
                    helperText={errors.email?.message}
                    label='Email Address'
                    margin='normal'
                    name='email'
                    type='email'
                    variant='outlined'
                    inputRef={register}
                />
                <TextField
                    error={Boolean(errors.password?.message)}
                    fullWidth
                    helperText={errors.password?.message}
                    label='Password'
                    margin='normal'
                    name='password'
                    type='password'
                    variant='outlined'
                    inputRef={register}
                />
                <Box sx={{py: 2}}>
                  <Button
                      color='primary'
                      disabled={formState.isSubmitted && !formState.isDirty}
                      fullWidth
                      size='large'
                      type='submit'
                      variant='contained'
                  >
                    Sign in now
                  </Button>
                </Box>
                <Typography
                    color='textSecondary'
                    variant='body1'
                >
                  Don&apos;t have an account?
                  {' '}
                  <NextLink href='/register' variant='h6'>
                    Sign up
                  </NextLink>
                </Typography>
              </form>
            </Container>
          </Box>
        </UserContextProvider>
      </MainLayout>
  )
}

export default WithUserContext()(Login)
