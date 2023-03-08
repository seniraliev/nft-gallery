import { FC } from 'react';
import ImageContainer from 'src/components/ImageContainer';
import { tNftItem } from 'src/types/tNftItem';
import './NftItem.scss';

interface INftItemProps {
  item: tNftItem;
}

export const NftItem: FC<INftItemProps> = ({ item }) => {
  return (
    <div className='nft-item'>
      <div className='image-wrapper'>
        <ImageContainer url={item.metadata?.image || ''} />
      </div>
      <div className='information'>
        <label>
          <b>{item.name}</b>
        </label>
        <label>{item.symbol}</label>
      </div>
    </div>
  );
};
