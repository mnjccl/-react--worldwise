import { useState } from "react";
import Button from "../components/Button";
import PageNav from "../components/PageNav";
import styles from "../css/Register.module.css";
import { NavLink } from "react-router-dom";

function Register() {
  const [fullName, setFullName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();

  const handleSubmit = () => {};

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
    </main>
  );
}

export default Register;
