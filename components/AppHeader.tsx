import { HeaderLink } from "@joshtsch/legos/dist/Cropsin/Header/HeaderLink";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FaBell, FaEthereum, FaHome, FaSearch, FaStar } from "react-icons/fa";
import { Button } from "../componentsProp/Button";
import { Header } from "../componentsProp/Header";

interface AppHeaderProps {
  facebookAppId: string;
}

interface AvatarProps {
  facebookAppId: string;
}

function Avatar({ facebookAppId }: AvatarProps) {
  const [currentAccount, setCurrentAccount] = useState<any>({});
  const [loggedIn, setLoggedIn] = useState(false);

  const connectWalletAction = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  if (!loggedIn) {
    return (
      <>
        <FacebookLogin
          appId={facebookAppId}
          fields="name,email,picture"
          callback={(response: any) => console.log(response)}
          render={(renderProps: any) => (
            <Button active size="md" onClick={renderProps.onClick}>
              Connect
            </Button>
          )}
        />
      </>
    );
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <FaEthereum style={{ fontSize: "35px", color: "#A246EB" }} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <p
          style={{
            marginRight: "22px",
          }}
        >
          35
        </p>
      </div>

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
    </div>
  );
}

export function AppHeader({ facebookAppId }: AppHeaderProps) {
  return (
    <Header
      avatar={<Avatar facebookAppId={facebookAppId} />}
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
