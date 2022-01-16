import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { AppHeader } from "../components";
import { useCheckIfWalletIsConnected } from "../components/hooks";
import { songs } from "../data/songs";

const Dashboard: NextPage<{ FACEBOOK_APP_ID: string }> = ({
  FACEBOOK_APP_ID,
}) => {
  useCheckIfWalletIsConnected();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSongs, setFilteredSongs] = useState(songs);

  useEffect(() => {
    const results = songs.filter((song) =>
      song.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSongs(results);
  }, [searchTerm]);

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
        <AppHeader
          facebookAppId={FACEBOOK_APP_ID}
          setSearchTerm={setSearchTerm}
        />
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
