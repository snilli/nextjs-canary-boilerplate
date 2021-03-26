import {Box, Button, Checkbox, Container, FormHelperText, TextField, Typography} from '@material-ui/core'
import Head from 'next/head'
import {useRouter} from 'next/router'
import {useForm} from 'react-hook-form'
import Joi from 'joi'
import {joiResolver} from '@hookform/resolvers/joi'
import {FC, FormEvent} from 'react'
import NextLink from '../components/Link'

interface FormData {
  email: string
  firstName: string
  lastName: string
  password: string
  policy: boolean
}

const schema = Joi.object({
  email: Joi.string().email({tlds: {allow: false}}).max(255).required(),
  firstName: Joi.string().max(255).description('First name is required').required(),
  lastName: Joi.string().max(255).description('Last name is required').required(),
  password: Joi.string().max(255).description('password is required').required(),
  policy: Joi.boolean().invalid(true).error(new Error('This field must be checked')),
})

const Register: FC = () => {
  const router = useRouter()
  const {register, handleSubmit, errors, formState, getValues} = useForm<FormData>({
    resolver: joiResolver(schema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      policy: false,
    },
    mode: 'all',
  })

  const touched = formState.touched
  const values = getValues()

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('sdsdsd')
    alert(JSON.stringify(formState))

    void router.push('/dashboard')
  }

  return (
      <>
        <Head>
          <title>Register | Material Kit</title>
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
                  Create new account {JSON.stringify(formState)}
                </Typography>
                <Typography
                    color='textSecondary'
                    gutterBottom
                    variant='body2'
                >
                  Use your email to create new account
                </Typography>
              </Box>
              <TextField
                  error={Boolean(touched.firstName && errors.firstName)}
                  fullWidth
                  helperText={touched.firstName && errors.firstName}
                  label='First name'
                  margin='normal'
                  name='firstName'
                  ref={register}
                  value={values.firstName}
                  variant='outlined'
              />
              <TextField
                  error={Boolean(touched.lastName && errors.lastName)}
                  fullWidth
                  helperText={touched.lastName && errors.lastName}
                  label='Last name'
                  margin='normal'
                  name='lastName'
                  ref={register}
                  value={values.lastName}
                  variant='outlined'
              />
              <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label='Email Address'
                  margin='normal'
                  name='email'
                  ref={register}
                  type='email'
                  value={values.email}
                  variant='outlined'
              />
              <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label='Password'
                  margin='normal'
                  name='password'
                  ref={register}
                  type='password'
                  value={values.password}
                  variant='outlined'
              />
              <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    ml: -1,
                  }}
              >
                <Checkbox
                    checked={values.policy}
                    name='policy'
                    ref={register}
                />
                <Typography
                    color='textSecondary'
                    variant='body1'
                >
                  I have read the
                  {' '}
                  <NextLink href='#' color='primary' underline='always' variant='h6'>
                    Terms and Conditions
                  </NextLink>
                </Typography>
              </Box>
              {Boolean(touched.policy && errors.policy) && (
                  <FormHelperText error>
                    {errors.policy}
                  </FormHelperText>
              )}
              <Box sx={{py: 2}}>
                <Button
                    color='primary'
                    // disabled={formState.isSubmitted && !formState.isDirty}
                    fullWidth
                    size='large'
                    type='submit'
                    variant='contained'
                >
                  Sign up now
                </Button>
              </Box>
              <Typography
                  color='textSecondary'
                  variant='body1'
              >
                Have an account?
                {' '}
                <NextLink href='/login' variant='h6'>
                  Sign in
                </NextLink>
              </Typography>
            </form>
          </Container>
        </Box>
      </>
  )
}

export default Register
