import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useToast } from "../hooks/useToast";
import styles from "../css/Login.module.css";
import PageNav from "../components/PageNav";
import Button from "../components/Button";

export default function Login() {
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      showToast("Please fill required fields.", "error");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "https://worldwiseapp.azurewebsites.net/api/user/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();
      localStorage.setItem("token", data.token);
      console.log(data);

      showToast("Login successful! Enjoy!", "success");
      navigate("/app");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
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
          <Button type="primary" loading={loading}>
            {loading ? "Logging in..." : "Login"}
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
