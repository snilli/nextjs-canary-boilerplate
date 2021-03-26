import {FC} from 'react'

const Logo: FC = (props) => (
    <img
        alt='Logo'
        src='/logo.svg'
        {...props}
    />
)

export default Logo
