import { Button, NFT, Profile, Song } from "@joshtsch/legos";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaMusic, FaUpload, FaWallet } from "react-icons/fa";
import { AppHeader } from "../../components";
import { useCheckIfWalletIsConnected } from "../../components/hooks";
import { songs } from "../../data/songs";
import { users } from "../../data/users";

const ArtistPage: NextPage<{ FACEBOOK_APP_ID: string }> = ({
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

  const [section, setSection] = useState<"songs" | "nfts">("songs");
  const router = useRouter();
  const { id } = router.query;
  const userId = id as string;

  if (!userId) {
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
        <AppHeader
          facebookAppId={FACEBOOK_APP_ID}
          setSearchTerm={setSearchTerm}
        />
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

        <Profile user={users[userId]}>
          <Image
            src={users[userId].avatar}
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
            size="lg"
            style={{ marginRight: "10px" }}
          >
            <FaMusic />
            <p style={{ marginLeft: "10px" }}>Songs</p>
          </Button>
          <Button
            onClick={() => {
              setSection("nfts");
            }}
            style={{ marginLeft: "10px" }}
            size="lg"
            active={section === "nfts"}
          >
            <FaWallet />
            <p style={{ marginLeft: "10px" }}>NFTs</p>
          </Button>
        </div>
        <div
          className="nfts"
          style={{ marginTop: "40px", width: "100%", marginBottom: "40px" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "100%", maxWidth: "1366px" }}>
              {section === "songs" ? (
                <>
                  {/* <div
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
                  </div> */}
                  <div
                    className="new-releases"
                    style={{
                      marginTop: "40px",
                      width: "100%",
                      marginBottom: "40px",
                    }}
                  >
                    <h2>{`All Songs (${
                      songs.filter((song) => song.artist == users[userId].name)
                        .length
                    })`}</h2>
                    <div>
                      {songs
                        .filter((song) => song.artist == users[userId].name)
                        .map((song, idx) => (
                          <Song
                            artist={
                              <Link
                                href={`/artists/${song.artist
                                  .replaceAll(" ", "-")
                                  .toLowerCase()}`}
                              >
                                <a>
                                  <p
                                    style={{
                                      margin: "0 20px",
                                      width: "350px",
                                      fontSize: "14px",
                                      color: "#B2A9BA",
                                    }}
                                  >
                                    {song.artist}
                                  </p>
                                </a>
                              </Link>
                            }
                            title={song.name}
                            playTime={song.playTime}
                            key={song.name}
                            previewImg={
                              <Image
                                src={`/assets/song-preview-${idx + 1}.png`}
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
                <>
                  <h2>For Sale</h2>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
                      gap: "10px",
                      borderRadius: "20px",
                      maxWidth: "1366px",
                    }}
                  >
                    <NFT
                      image={
                        <Image
                          src="/assets/avatar.png"
                          height={250}
                          width={250}
                          alt="NFT"
                          objectFit="cover"
                          layout="fixed"
                          quality={100}
                        />
                      }
                    />
                    <NFT
                      image={
                        <Image
                          src="/assets/avatar.png"
                          height={250}
                          width={250}
                          alt="NFT"
                          objectFit="cover"
                          layout="fixed"
                          quality={100}
                        />
                      }
                    />
                    <NFT
                      image={
                        <Image
                          src="/assets/avatar.png"
                          height={250}
                          width={250}
                          alt="NFT"
                          objectFit="cover"
                          layout="fixed"
                          quality={100}
                        />
                      }
                    />
                    <NFT
                      image={
                        <Image
                          src="/assets/avatar.png"
                          height={250}
                          width={250}
                          alt="NFT"
                          objectFit="cover"
                          layout="fixed"
                          quality={100}
                        />
                      }
                    />
                    <NFT
                      image={
                        <Image
                          src="/assets/avatar.png"
                          height={250}
                          width={250}
                          alt="NFT"
                          objectFit="cover"
                          layout="fixed"
                          quality={100}
                        />
                      }
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
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
