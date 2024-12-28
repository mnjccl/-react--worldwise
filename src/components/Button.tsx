import styles from "../css/Button.module.css";
import { ButtonProps } from "../types";

function Button({ children, onClick, type, loading }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`${styles.btn} ${styles[type]}  ${
        loading ? styles.disabled : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
