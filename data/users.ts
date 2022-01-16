import { BadgeVariant } from "@joshtsch/legos/dist/Cropsin";

export interface User {
  name: string;
  avatar: string;
  badges: BadgeVariant[];
  songs: string[];
}

export const users: { [key: string]: User } = {
  "yeo-mase": {
    name: "Yeo Mase",
    avatar: "/assets/avatar.png",
    badges: ["Chill", "Electronic"],
    songs: ["Spirit of the  soul"],
  },
  "xan-griffin": {
    name: "Xan Griffin",
    avatar: "/assets/avatar2.png",
    badges: ["Electronic"],
    songs: ["Spirit of the  soul"],
  },
  "kid-quill": {
    name: "Kid Quill",
    avatar: "/assets/avatar2.png",
    badges: ["Electronic", "Chill"],
    songs: ["Spirit of the  soul"],
  },
};
