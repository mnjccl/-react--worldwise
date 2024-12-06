import { useEffect, useState } from "react";
import styles from "../css/Login.module.css";
import PageNav from "../components/PageNav";
import Button from "../components/Button";
import { useAuth } from "../contexts/FakeAuthContext";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (email && password) login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/app", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className={styles.formBtns}>
          <Button type="primary" onClick={handleSubmit}>
            Login
          </Button>
          <p>
            You don't have account?{"  "}
            <span>
              <NavLink className={styles.formLink} to="/register">
                Sign Up
              </NavLink>
            </span>
          </p>
        </div>
      </form>
    </main>
  );
}
