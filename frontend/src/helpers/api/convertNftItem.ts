import { tApiNftItem } from "src/types/api/tApiNftItem";
import { tMetadata, tNftItem } from "src/types/tNftItem";
import { BigNumber } from "ethers";

export function convertNftItem(response: tApiNftItem): tNftItem {
  const ret: tNftItem = {
    token_address: response.token_address,
    token_id: BigNumber.from(response.token_id),
    owner_of: response.owner_of,
    block_number: BigNumber.from(response.block_number),
    block_number_minted: BigNumber.from(response.block_number_minted),
    token_hash: response.token_hash,
    amount: BigNumber.from(response.amount),
    contract_type: response.contract_type,
    name: response.name,
    symbol: response.symbol,
    token_uri: response.token_uri,
    metadata: JSON.parse(response.metadata) as tMetadata,
    last_token_uri_sync: new Date(response.last_token_uri_sync),
    last_metadata_sync: new Date(response.last_metadata_sync),
    minter_address: response.minter_address,
    chain: response.chain
  };
  
  return ret;
}
