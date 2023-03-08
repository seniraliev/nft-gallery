import { FC } from "react";
import "./Loading.scss";
import ClipLoader from "react-spinners/ClipLoader";

interface ILoadingProps {}

export const Loading: FC<ILoadingProps> = (props) => {
  return (
    <div className="loading-component">
      <ClipLoader
        loading={true}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
        color="#0088cc"
        speedMultiplier={0.5}
      />
    </div>
  );
};
