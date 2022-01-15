import { NewRelease, Profile, Song } from "@joshtsch/legos/dist/Cropsin";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { FaMusic, FaWallet } from "react-icons/fa";
import { AppHeader } from "../components";

const Home: NextPage = () => {
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
        <AppHeader />
      </main>
    </div>
  );
};

export default Home;
