import Head from "next/head";
import { About, Main, Navbar } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sahadat| Full Stack Developer</title>
        <meta name="description" content="Creating portfolio using next js" />
        <link rel="icon" href="/assets/sahadat-logo.png" />
      </Head>

      <Navbar />
      <Main />
      <About />
    </div>
  );
}
