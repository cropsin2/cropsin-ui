export interface User {
  name: string;
  avatar: string;
  badges: "Electronic"[];
  songs: string[];
}

export const users: { [key: number]: User } = {
  "0": {
    name: "joshtsch.eth",
    avatar: "/assets/avatar.png",
    badges: ["Electronic", "Electronic"],
    songs: ["Spirit of the  soul"],
  },
  "1": {
    name: "joshtsch.eth",
    avatar: "/assets/avatar2.png",
    badges: ["Electronic"],
    songs: ["Spirit of the  soul"],
  },
};
