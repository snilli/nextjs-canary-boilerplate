import { FC, Fragment, ReactChild } from 'react'
import Head from 'next/head'

interface HelmetProps {
    title: string
    children: ReactChild
}

export const Helmet: FC<HelmetProps> = (props: HelmetProps) => {
    return (
        <Head>
            <title>{props.title}</title>
        </Head>
    )
}
