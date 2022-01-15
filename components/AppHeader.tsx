import { Header } from "@joshtsch/legos";
import { HeaderLink } from "@joshtsch/legos/dist/Cropsin/Header/HeaderLink";
import Image from "next/image";
import Link from "next/link";
import { FaBell, FaHome, FaSearch, FaStar } from "react-icons/fa";

interface AppHeaderProps {}

export function AppHeader({}: AppHeaderProps) {
  return (
    <Header
      avatar={
        <Link href="/artist/0" passHref>
          <a>
            <div
              style={{
                borderRadius: "100%",
                height: "40px",
                width: "40px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/assets/avatar.png"
                height={50}
                width={50}
                alt="User Profile Picture"
                layout="fixed"
              />
            </div>
          </a>
        </Link>
      }
      brand={
        <Link href="/">
          <a>CROPSIN</a>
        </Link>
      }
      navItems={
        <>
          <Link href="/">
            <a>
              <HeaderLink text="Home" icon={<FaHome />} />
            </a>
          </Link>
          <Link href="/dashboard">
            <a>
              <HeaderLink text="Dashboard" icon={<FaStar />} />
            </a>
          </Link>
          <HeaderLink text="Notifications" icon={<FaBell />} />
          <HeaderLink text="Search" icon={<FaSearch />} />
        </>
      }
    />
  );
}
