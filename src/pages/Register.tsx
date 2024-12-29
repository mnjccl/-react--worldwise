import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import styles from "../css/Register.module.css";
import Button from "../components/Button";
import PageNav from "../components/PageNav";

import { useToast } from "../hooks/useToast";

function Register() {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      showToast("All fields are required.", "error");
      return;
    }

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

    setLoading(true);
    try {
      const response = await fetch(
        "https://worldwiseapp.azurewebsites.net/api/user/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username,
            email,
            password,
            confirmPassword,
          }),
        }
      );

      if (!response.ok) {
        showToast("Registration failed. Please try again.", "error");
        return;
      }

      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      showToast("Registration successful!", "success");
      navigate("/login");
    } catch (err) {
      console.error(err);
      showToast("An error occurred. Please try again later.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.register}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            autoComplete="username"
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            autoComplete="email"
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="password"
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="confirmPassword"
          />
        </div>
        <div className={styles.formBtns}>
          <Button type="primary" loading={loading}>
            {loading ? "Registering..." : "Register"}
          </Button>
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
