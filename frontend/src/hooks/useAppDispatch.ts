import { useDispatch } from "react-redux";
import { AppDispatch } from "src/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
