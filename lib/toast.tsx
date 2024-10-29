import { ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const options = {
  autoClose: 2000,
  className: "",
  position: toast.POSITION.TOP_RIGHT,
  hideProgressBar: true,
  theme: "colored",
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
} as ToastOptions<{}>;

export const toastSuccess = (message) => {
  toast.success(message, options);
};

export const toastError = (message) => {
  toast.error(message, options);
};

export const toastWarning = (message) => {
  toast.warn(message, options);
};

export const toastInformation = (message) => {
  toast.info(message, options);
};

export const toastDark = (message) => {
  toast.dark(message, options);
};

export const toastDefault = (message) => {
  toast(message, options);
};
