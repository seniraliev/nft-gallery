import React, { useState } from "react";
import { NftItem } from "src/components/NftItem";
import { NftDetailedItem } from "src/components/NftDetailedItem";
import { useAppSelector } from "src/hooks/useAppSelector";
import TransitionsModal from "src/components/TransitionsModal";

import "./Home.scss";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNft, setSelectedNft] = useState(0);

  const address = useAppSelector((state) => state.account.address);
  const ownedNftList = useAppSelector((state) => state.nft.ownedNfts);

  const handleClickItem = (index: any) => {
    setSelectedNft(index);
    setModalOpen(true);
  };

  return (
    <div className="home-page">
      {address ? (
        ownedNftList.length ? (
          <div className="nft-list">
            {ownedNftList.map((nft, index) => (
              <div
                key={nft.token_hash + index}
                onClick={() => handleClickItem(index)}
              >
                <NftItem item={nft} />
              </div>
            ))}
          </div>
        ) : (
          <p>No NFTs for the given address.</p>
        )
      ) : (
        <p>Please input ethereum mainnet address to view nfts.</p>
      )}
      <TransitionsModal
        open={modalOpen}
        title="NFT Info"
        handleClose={() => setModalOpen(false)}
      >
        <NftDetailedItem item={ownedNftList[selectedNft]} />
      </TransitionsModal>
    </div>
  );
}
