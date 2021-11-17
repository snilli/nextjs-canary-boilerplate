import { FC } from "react";
import dynamic from "next/dynamic";

const Layout = dynamic(import('../Layout'));
const Hero = dynamic(import('./Hero'));
const Tier = dynamic(import('./Tier'));

const Pricing: FC = () => {
    return (
        <Layout>
            <Hero />
            <Tier />
        </Layout>
    )
}

export default Pricing;
