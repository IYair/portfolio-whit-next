import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/layout";
import Typewriter from "typewriter-effect";

const Home: NextPage = () => {
  return (
    <Layout>
      <a className="absolute right-[8rem]  -bottom-2 z-10 pl-40">
        <Image src="/me.png" height={900} width={700} alt="Yair" />
      </a>
      <a className="-z-10">
        <Image
          src="/NoiseTexturenoiseBackgound.png"
          layout="fill"
          alt="noise"
        />
      </a>
      <div
        className="absolute left-[12.5%] top-1/2 text-[64px] text-white font-extralight z-10 tracking-[.3em]	whitespace-pre-line
      drop-shadow-[0_0_10px_rgba(255,255,255,1)]
      "
      >
        <Typewriter
          options={{
            strings: ["IN COMING"],
            cursor: "_",
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </Layout>
  );
};

export default Home;
