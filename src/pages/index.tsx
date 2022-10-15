import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <a className="absolute right-40  -bottom-2 z-10 ">
        <Image src="/me.png" height={800} width={600} alt="Yair" />
      </a>
      <a className="-z-10">
        <Image src="/NoiseTexturenoiseBackgound.png" layout="fill" alt="noise" />
      </a>
    </Layout>
  );
};

export default Home;
