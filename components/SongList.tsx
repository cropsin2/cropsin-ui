import { replaceAll } from "@joshtsch/legos";
import { Song } from "@joshtsch/legos/dist/Cropsin";
import Image from "next/image";
import Link from "next/link";

interface SongListProps {
  songs: any[];
}

export function SongList({ songs }: SongListProps) {
  return (
    <div
      className="song-list"
      style={{ marginTop: "40px", width: "100%", marginBottom: "40px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: "1366px" }}>
          <h2>{`All Songs (${songs.length})`}</h2>
          {songs.map((song, idx) => (
            <Song
              artist={
                <Link
                  href={`/artists/${replaceAll(
                    song.artist,
                    " ",
                    "-"
                  ).toLowerCase()}`}
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
              key={song.name}
              playTime={song.playTime}
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
    </div>
  );
}
