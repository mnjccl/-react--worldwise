import { ToastProps } from "../types";
import styles from "../css/Toast.module.css";

function Toast({ message, type }: ToastProps) {
  return <div className={`${styles.toast} ${styles[type]}`}>{message}</div>;
}

export default Toast;
