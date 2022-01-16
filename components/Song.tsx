import { Button } from "@joshtsch/legos";
import React, { ReactNode, useState } from "react";
import { FaPlay, FaPlus, FaWallet } from "react-icons/fa";
import { askContractToMintNft, sellNft } from "./hooks/useMint";

interface SongProps {
  artist: ReactNode;
  title: string;
  previewImg: ReactNode;
  playTime: string;
  creator?: boolean;
}

export function Song({
  artist,
  previewImg,
  title,
  playTime,
  creator,
}: SongProps) {
  const [minted, setMinted] = useState(false);
  const [tokenId, setTokenId] = useState("");

  return (
    <div
      style={{
        height: "70px",
        backgroundColor: "white",
        borderRadius: "50rem",
        marginBottom: "10px",
        alignItems: "center",
        display: "flex",
        padding: "0 20px",
        fontSize: "22px",
      }}
    >
      <div
        style={{
          borderRadius: "100%",
          height: "50px",
          width: "50px",
          overflow: "hidden",
        }}
      >
        {previewImg}
      </div>
      <div>
        <p
          style={{
            margin: "0 20px",
            width: "350px",
            fontWeight: 700,
            fontSize: "18px",
          }}
        >
          {title}
        </p>
        {artist}
      </div>
      <FaPlay />
      <div
        style={{
          display: "flex",
          fontSize: "14px",
          color: "#433F3E",
          flexGrow: 1,
        }}
      >
        <p style={{ marginLeft: "20px", marginRight: "10px" }}>0:00</p>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              borderTop: "1px solid #433F3E",
              height: "1px",
              width: "100%",
            }}
          />
          <span
            style={{
              position: "absolute",
              top: "calc(50% - 4px)",
              height: "7px",
              width: "7px",
              borderRadius: "50%",
              backgroundColor: "black",
            }}
          />
        </div>
        <p style={{ marginLeft: "10px" }}>{playTime}</p>
      </div>

      {creator ? (
        <Button style={{ backgroundColor: "#FAF4FF", marginLeft: "20px" }}>
          <FaPlus style={{ marginRight: "10px" }} />
          <p>Add to video</p>
        </Button>
      ) : (
        <Button
          style={{ backgroundColor: "#FAF4FF", marginLeft: "10px" }}
          onClick={() => {
            askContractToMintNft(setTokenId);
            setMinted(true);
          }}
        >
          <FaWallet style={{ marginRight: "10px" }} />
          <p>Mint</p>
        </Button>
      )}
      {minted ? (
        <Button
          style={{ backgroundColor: "#FAF4FF", marginLeft: "10px" }}
          onClick={() => {
            sellNft(tokenId);
          }}
        >
          <FaWallet style={{ marginRight: "10px" }} />
          <p>Sell</p>
        </Button>
      ) : (
        <></>
      )}
    </div>
  );
}
