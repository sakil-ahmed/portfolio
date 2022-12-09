import Head from "next/head";
import Header from "../components/header/header";
import Contact from "../components/sections/contact/contact";
import Hero from "../components/sections/hero/hero";
import Work from "../components/sections/work/work";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sakil Ahmed</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        {/* Header Section */}
        <Header />
        {/* Hero Section */}
        <Hero />
        {/* Poerfolio Section */}
        <Work />
        {/* Contact Section */}
        <Contact />
      </main>
    </>
  );
}
