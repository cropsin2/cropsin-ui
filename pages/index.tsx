import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { AppHeader } from "../components";
import { SongList } from "../components/SongList";
import { useCheckIfWalletIsConnected } from "../components/hooks";
import { songs } from "../data/songs";

const Home: NextPage<{ FACEBOOK_APP_ID: string }> = ({ FACEBOOK_APP_ID }) => {
  useCheckIfWalletIsConnected();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSongs, setFilteredSongs] = useState(songs);

  useEffect(() => {
    const results = songs.filter((song) =>
      song.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSongs(results);
  }, [searchTerm]);

  // const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
  //   fetch("https://localhost/backend-crospin/auth/facebook", {
  //     headers: {
  //       // Accept: "application/json",
  //       // "Content-Type": "application/json",
  //       // Authorization: `Bearer ${"EAAER96vfC24BAOM9drxfZCTjpx6JJA2IwgFAlTvtkloq4PuLE8ia3HgWS538hkVODZC4CwvOflBw0WLbmME7W7eMYVg8GDfUsFOnY0vAvAZArYivO5WlwMZChDsY4AQqxo0uPM2W31i0iaUqZBjp082p64vHRAxQmNI36oRapVU7M2ZAXEooMsaKZA1FEZAC1x1OcCGuZBYvaz4zgAPUbVbTQVAuGDHGDekUZD"}`,
  //     },
  //     method: "POST",
  //     body: JSON.stringify({
  //       access_token:
  //         "EAAER96vfC24BAOM9drxfZCTjpx6JJA2IwgFAlTvtkloq4PuLE8ia3HgWS538hkVODZC4CwvOflBw0WLbmME7W7eMYVg8GDfUsFOnY0vAvAZArYivO5WlwMZChDsY4AQqxo0uPM2W31i0iaUqZBjp082p64vHRAxQmNI36oRapVU7M2ZAXEooMsaKZA1FEZAC1x1OcCGuZBYvaz4zgAPUbVbTQVAuGDHGDekUZD",
  //     }),
  //   }).then((res) =>
  //     console.log("HEY", res, {
  //       // Accept: "application/json",
  //       // "Content-Type": "application/json",
  //       Authorization: `Bearer ${"EAAER96vfC24BAOM9drxfZCTjpx6JJA2IwgFAlTvtkloq4PuLE8ia3HgWS538hkVODZC4CwvOflBw0WLbmME7W7eMYVg8GDfUsFOnY0vAvAZArYivO5WlwMZChDsY4AQqxo0uPM2W31i0iaUqZBjp082p64vHRAxQmNI36oRapVU7M2ZAXEooMsaKZA1FEZAC1x1OcCGuZBYvaz4zgAPUbVbTQVAuGDHGDekUZD"}`,
  //     })
  //   )
  // );

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
        <AppHeader
          facebookAppId={FACEBOOK_APP_ID}
          setSearchTerm={setSearchTerm}
        />
        <SongList songs={filteredSongs} />
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
