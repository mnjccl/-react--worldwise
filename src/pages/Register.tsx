import { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "../css/Register.module.css";
import Button from "../components/Button";
import PageNav from "../components/PageNav";
import Toast from "../components/Toast";

function Register() {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 8) {
      showToast("Password must have at least 8 characters.", "error");
      setPassword("");
      setConfirmPassword("");
      return;
    }

    if (password !== confirmPassword) {
      showToast("Passwords don't match.", "error");
      setConfirmPassword("");
      return;
    }
  };

  return (
    <main className={styles.register}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            id="fullName"
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className={styles.formBtns}>
          <Button type="primary">Register</Button>
          <p>
            You already have account?{"  "}
            <span>
              <NavLink className={styles.formLink} to="/login">
                Log In
              </NavLink>
            </span>
          </p>
        </div>
      </form>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </main>
  );
}

export default Register;
