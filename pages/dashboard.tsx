import type { NextPage } from "next";
import Head from "next/head";
import { AppHeader } from "../components";

const Dashboard: NextPage<{ FACEBOOK_APP_ID: string }> = ({
  FACEBOOK_APP_ID,
}) => {
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
        <AppHeader facebookAppId={FACEBOOK_APP_ID} />
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: { FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID },
  };
}

export default Dashboard;
