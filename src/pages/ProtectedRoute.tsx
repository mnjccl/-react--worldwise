import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const token = localStorage.getItem("token");
  return token ? children : null;
}

export default ProtectedRoute;
