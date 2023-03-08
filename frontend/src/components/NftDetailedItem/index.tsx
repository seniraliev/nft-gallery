import { FC } from "react";
import ImageContainer from "../ImageContainer";
import { tNftItem } from "src/types/tNftItem";
import "./NftItem.scss";

interface INftItemProps {
  item: tNftItem;
}

export const NftDetailedItem: FC<INftItemProps> = ({ item }) => {
  return (
    <div className="nft-detailed-item">
      <div className="image-wrapper">
        <ImageContainer url={item.metadata?.image || ""} />
      </div>
      <div className="information">
        <span>
          <b>Name</b>: {`${item.name} #${item.token_id}`}
        </span>
        <span>
          <b>Symbol</b>: {item.symbol}
        </span>
        <span>
          <b>Description</b>: {item.metadata.description}
        </span>
        <span>
          <b>Owner</b>:{" "}
          <a
            href={`https://etherscan.io/address/${item.owner_of}`}
            target="_blank"
            rel="noreferrer"
          >
            {item.owner_of}
          </a>
        </span>
        <span>
          <b>Token Address</b>:{" "}
          <a
            href={`https://etherscan.io/address/${item.token_address}`}
            target="_blank"
            rel="noreferrer"
          >
            {item.token_address}
          </a>
        </span>
      </div>
      <a
        className="opensea-link"
        href={`https://opensea.io/assets/ethereum/${
          item.token_address
        }/${item.token_id.toString()}`}
        target="_blank"
        rel="noreferrer"
      >
        Buy
      </a>
    </div>
  );
};
