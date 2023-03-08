import { BigNumber } from "ethers";

export type tNftItem = {
  token_address: string;
  token_id: BigNumber;
  owner_of: string;
  block_number: BigNumber;
  block_number_minted: BigNumber;
  token_hash: string;
  amount: BigNumber;
  contract_type: "ERC721" | "ERC1155";
  name: string;
  symbol: string;
  token_uri: string;
  metadata: tMetadata;
  last_token_uri_sync: Date;
  last_metadata_sync: Date;
  minter_address: string;
  chain?: string;
};

// opensea metadata standards
// https://docs.opensea.io/docs/metadata-standards
export type tMetadata = {
  image?: string;
  image_data?: string;
  external_url?: string;
  description?: string;
  name?: string;
  background_color?: string;
  animation_url?: string;
  youtube_url?: string;
  attributes: {
    trait_type: string;
    value: string;
  }[];
};
