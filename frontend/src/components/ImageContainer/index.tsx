import { Skeleton } from "@mui/material";
import { useState } from "react";
import "./ImageContainer.scss";

const defaultImage = "/assets/images/default-nft.png";
const ImageContainer = ({ url }: { url: string }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const onImageReady = () => {
    setIsLoaded(true);
  };
  const onImageError = (e: any) => {
    if (e.target.src !== defaultImage) {
      e.target.src = defaultImage;
      console.log("updated with default image");
    }
  };

  const imgUrl = () => {
    if (!url) return defaultImage;
    if (url.startsWith("ipfs://")) {
      return "https://ipfs.io/ipfs/" + url.split("://")[1];
    }
    return url;
  };

  return (
    <>
      {!isLoaded && (
        <Skeleton
          sx={{ position: "absolute", height: "100%", width: "100%", transform: "none" }}
        />
      )}
      <img
        className="nft-image"
        src={imgUrl()}
        alt="nft"
        onError={onImageError}
        onLoad={onImageReady}
      />
    </>
  );
};

export default ImageContainer;
