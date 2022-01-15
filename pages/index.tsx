import type { NextPage } from "next";
import Head from "next/head";
import { AppHeader } from "../components";

const Home: NextPage<{ FACEBOOK_APP_ID: string }> = ({ FACEBOOK_APP_ID }) => {
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
          alignItems: "center",
          flexDirection: "column",
          fontFamily: "Sora",
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
  // const res = await fetch("http://localhost:3001/auth/facebook", {
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   method: "POST",
  //   body: JSON.stringify({
  //     access_token: `EAAER96vfC24BABbmwBUpuvZBarZAgo3kLouCApr6z6SliYS3jUN2WIiVJvsjA6VKiTZBVzdYzVR41GuvTtRMdFYlPZAojzHFELLm1NDGl74DBLX0ZA5jNZAg98lipg0MkJwIAsJEhqZAZBSBlcvWTOJYSMkGPCQLcLuVgFxYpWY3EGmopjGKXRtnH4er57osGXzEQZBa5CmIUE4OxxH2B0ZCezSak9B9AFEDc72o0bAX7FsfZB1uHYgytSL`,
  //   }),
  // });

  return {
    props: { FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID },
  };
}

export default Home;
