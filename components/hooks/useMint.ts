import { ContractInterface, ethers } from "ethers";
import contract from "../../contracts/Cropsin.json";
import mktContract from "../../contracts/Marketplace.json";

interface Contract {
  contractAddress?: string;
  abi: ContractInterface;
}

export const askContractToMintNft = async (setTokenId: any) => {
  try {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const connectedContract = new ethers.Contract(
        "0xa5D637B2d564fD79a30A626B44Ce891b88C04D55",
        contract.abi,
        signer
      );

      console.log("Going to pop wallet now to pay gas...");
      let nftTxn = await connectedContract.selfMint(10, 0x00);

      console.log("Mining...please wait.");
      const receipt = await nftTxn.wait();
      console.log("mint events", receipt.events);
      const event = receipt.events[0];

      console.log(
        `Mined, see transaction: https://mumbai.polygonscan.com/tx/${nftTxn.hash}`
      );

      setTokenId(event.args["id"].toNumber());
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
};

export const sellNft = async (tokenId: string) => {
  try {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const connectedContract = new ethers.Contract(
        "0xa5D637B2d564fD79a30A626B44Ce891b88C04D55",
        contract.abi,
        signer
      );

      console.log("Going to pop wallet now to pay gas...");
      let txn = await connectedContract.setApprovalForAll(
        "0x56bDCe430F890E940a8735d8Facb2F245f431D8c",
        true
      );

      console.log("TXN...please wait.");
      const receipt = await txn.wait();
      const event = receipt.events[0];

      console.log(receipt.events);

      console.log(
        `See transaction: https://mumbai.polygonscan.com/tx/${txn.hash}`
      );

      const mktplaceContract = new ethers.Contract(
        "0x56bDCe430F890E940a8735d8Facb2F245f431D8c",
        mktContract.abi,
        signer
      );

      const address = await signer.getAddress();

      let mktTxn = await mktplaceContract.putTokenOnSaleFrom(
        address,
        tokenId,
        10,
        5
      );

      await mktTxn.wait();

      console.log(
        `See transaction: https://mumbai.polygonscan.com/tx/${mktTxn.hash}`
      );
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log(error);
  }
};
