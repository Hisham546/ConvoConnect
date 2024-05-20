import Toast from "react-native-simple-toast";
import { ToastProps } from "./toastTypes";

export const useToast = ({ message }: ToastProps) => {
    Toast.show(message, Toast.SHORT);
};