import { Button, NewRelease, Profile, Song } from "@joshtsch/legos";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaMusic, FaUpload, FaWallet } from "react-icons/fa";
import { AppHeader } from "../../components";
import { users } from "../../data/users";

const ArtistPage: NextPage<{ FACEBOOK_APP_ID: string }> = ({
  FACEBOOK_APP_ID,
}) => {
  const [section, setSection] = useState<"songs" | "nfts">("songs");
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <></>;
  }

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
        <div
          style={{
            height: "240px",
            width: "100%",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              borderRadius: 20,
              overflow: "hidden",
              position: "relative",
              height: "100%",
              width: "100%",
            }}
          >
            <Image
              src="/assets/banner.jpeg"
              layout="fill"
              objectFit="cover"
              alt="Artist Banner Image"
            />
            <span
              style={{
                position: "absolute",
                right: "20px",
                top: "20px",
                backgroundColor: "white",
                height: "30px",
                padding: "0 20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "14px",
                borderRadius: "50rem",
                color: "#433F3E",
              }}
            >
              <FaUpload />
              <p style={{ marginLeft: "10px" }}>Upload Music</p>
            </span>
          </div>
        </div>

        <Profile user={users[id as any]}>
          <Image
            src={users[id as any].avatar}
            height={240}
            width={240}
            alt="User Profile Picture"
            objectFit="cover"
            layout="fixed"
            quality={100}
          />
        </Profile>
        <div style={{ display: "flex", marginTop: "40px" }}>
          <Button
            onClick={() => {
              setSection("songs");
            }}
            active={section === "songs"}
          >
            <FaMusic />
            <p style={{ marginLeft: "10px" }}>Songs</p>
          </Button>
          <Button
            onClick={() => {
              setSection("nfts");
            }}
            active={section === "nfts"}
          >
            <FaWallet />
            <p style={{ marginLeft: "10px" }}>NFTs</p>
          </Button>
        </div>
        {section === "songs" ? (
          <>
            <div
              className="new-releases"
              style={{ marginTop: "40px", width: "100%" }}
            >
              <h2>New Releases</h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                  gap: "10px",
                }}
              >
                <NewRelease>
                  <div>
                    <Image
                      src="/assets/record-play.png"
                      height={210}
                      width={210}
                      alt="Play Song"
                    />
                  </div>
                </NewRelease>
                <NewRelease>
                  <div>
                    <Image
                      src="/assets/record-play.png"
                      height={210}
                      width={210}
                      alt="Play Song"
                    />
                  </div>
                </NewRelease>
                <NewRelease>
                  <div>
                    <Image
                      src="/assets/record-play.png"
                      height={210}
                      width={210}
                      alt="Play Song"
                    />
                  </div>
                </NewRelease>
              </div>
            </div>
            <div
              className="new-releases"
              style={{ marginTop: "40px", width: "100%", marginBottom: "40px" }}
            >
              <h2>{`All Songs (${users[id as any].songs.length})`}</h2>
              <div>
                {users[id as any].songs.map((song) => (
                  <Song
                    key={song}
                    previewImg={
                      <Image
                        src="/assets/avatar.png"
                        height={50}
                        width={50}
                        alt="User Profile Picture"
                        layout="fixed"
                      />
                    }
                  />
                ))}
              </div>
            </div>
          </>
        ) : (
          <div
            className="new-releases"
            style={{ marginTop: "40px", width: "100%", marginBottom: "40px" }}
          >
            <h2>For Sale</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
                gap: "10px",
                borderRadius: "20px",
              }}
            >
              <div
                style={{
                  height: "250px",
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "20px",
                }}
              />
              <div
                style={{
                  height: "250px",
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "20px",
                }}
              />
              <div
                style={{
                  height: "250px",
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "20px",
                }}
              />
              <div
                style={{
                  height: "250px",
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "20px",
                }}
              />
              <div
                style={{
                  height: "250px",
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: { FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID },
  };
}

export default ArtistPage;
