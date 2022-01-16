import { Button, Header } from "@joshtsch/legos";
import { HeaderLink } from "@joshtsch/legos/dist/Cropsin/Header/HeaderLink";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FaEthereum, FaFacebook, FaHome } from "react-icons/fa";
import { EthereumWalletContext } from "./context";

interface AppHeaderProps {
  facebookAppId: string;
  setSearchTerm: any;
}

interface AvatarProps {
  facebookAppId: string;
}

function Avatar({ facebookAppId }: AvatarProps) {
  const { setCurrentAccount, setFbUser, currentAccount, fbUser } = useContext(
    EthereumWalletContext
  );

  const start = currentAccount?.substring(0, 3);
  const end = currentAccount?.substring(
    currentAccount.length - 3,
    currentAccount.length
  );
  const truncAddress = `${start}...${end}`;

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

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {currentAccount ? (
        <Button size="md" style={{ marginRight: "10px" }} onClick={undefined}>
          <FaEthereum />
          <p style={{ marginLeft: "10px" }}>{truncAddress}</p>
        </Button>
      ) : (
        <Button
          active
          size="md"
          onClick={() => {
            connectWalletAction();
          }}
        >
          <FaEthereum />
          <p style={{ marginLeft: "10px" }}>Connect</p>
        </Button>
      )}
      {fbUser ? (
        <div
          style={{
            borderRadius: "100%",
            height: "40px",
            width: "40px",
            overflow: "hidden",
          }}
        >
          <Image
            src={fbUser.picture.data.url}
            height={40}
            width={40}
            alt="User Profile Picture"
            layout="fixed"
          />
        </div>
      ) : (
        <FacebookLogin
          appId={facebookAppId}
          fields="name,email,picture"
          callback={(response: any) => setFbUser(response)}
          render={(renderProps: any) => (
            <Button active size="md" onClick={renderProps.onClick}>
              <FaFacebook />
              <p style={{ marginLeft: "10px" }}>Login</p>
            </Button>
          )}
        />
      )}
    </div>
  );

  // return (
  //   <div style={{ display: "flex", alignItems: "center" }}>
  //     <FaEthereum style={{ fontSize: "35px", color: "#A246EB" }} />
  //     <div
  //       style={{
  //         display: "flex",
  //         alignItems: "center",
  //       }}
  //     >
  //       <p
  //         style={{
  //           marginRight: "22px",
  //         }}
  //       >
  //         35
  //       </p>
  //     </div>

  //     <Link href="/artist/0" passHref>
  //       <a>
  //         <div
  //           style={{
  //             borderRadius: "100%",
  //             height: "40px",
  //             width: "40px",
  //             overflow: "hidden",
  //           }}
  //         >
  //           <Image
  //             src="/assets/avatar.png"
  //             height={50}
  //             width={50}
  //             alt="User Profile Picture"
  //             layout="fixed"
  //           />
  //         </div>
  //       </a>
  //     </Link>
  //   </div>
  // );
}

export function AppHeader({ facebookAppId, setSearchTerm }: AppHeaderProps) {
  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

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
          {/* <Link href="/dashboard">
            <a>
              <HeaderLink text="Dashboard" icon={<FaStar />} />
            </a>
          </Link> */}
          <div style={{ flexGrow: 1, display: "flex" }}>
            <input
              type="input"
              placeholder="Search"
              name="search"
              id="search"
              onChange={handleChange}
              style={{
                margin: "0 128px 0 64px",
                flexGrow: 1,
                height: "40px",
                fontSize: "18px",
                fontFamily: "Sora",
                borderRadius: "20px",
                padding: "0 20px",
                border: "none",
              }}
            />
          </div>
          {/* <HeaderLink text="Search" icon={<FaSearch />} /> */}
        </>
      }
    />
  );
}
