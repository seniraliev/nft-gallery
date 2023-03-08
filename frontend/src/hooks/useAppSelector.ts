import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "src/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
