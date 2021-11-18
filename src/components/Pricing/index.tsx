import { FC } from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(import('./Hero'));
const Tier = dynamic(import('./Tier'));

const Pricing: FC = () => {
    return (
        <>
            <Hero />
            <Tier />
        </>
    )
}

export default Pricing;
