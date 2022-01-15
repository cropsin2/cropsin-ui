import type { NextPage } from "next";
import Head from "next/head";
import { AppHeader } from "../components";

const Dashboard: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cropsin</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          padding: "0 40px",
        }}
      >
        <AppHeader />
      </main>
    </div>
  );
};

export default Dashboard;
