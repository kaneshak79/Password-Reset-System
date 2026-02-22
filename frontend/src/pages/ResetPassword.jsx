

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "../services/api";

function ResetPassword() {
  const { token } = useParams();

  const [valid, setValid] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // 🔹 Verify reset token
  useEffect(() => {
    const verifyToken = async () => {
      try {
        await API.get(`/reset-password/${token}`);
        setValid(true);
      } catch (error) {
        setValid(false);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      verifyToken();
    } else {
      setValid(false);
      setLoading(false);
    }
  }, [token]);

  // 🔹 Reset password
  const handleReset = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await API.post(`/reset-password/${token}`, {
        password: password   // ✅ correct key name
      });

      setSuccessMsg(res.data?.message || "Password reset successfully");
      setPassword("");

    } catch (err) {
      console.error("Reset error:", err);

      if (err.response) {
        setErrorMsg(err.response.data?.message || "Server error");
      } else {
        setErrorMsg("Server not reachable");
      }
    }
  };

  // 🔹 Loading state
  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <h4>Checking reset link...</h4>
      </div>
    );
  }

  // 🔹 Invalid token
  if (!valid) {
    return (
      <div className="container mt-5 text-center">
        <h3 className="text-danger">Invalid or expired reset link</h3>
      </div>
    );
  }

  // 🔹 Reset form
  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="mb-3 text-center">Reset Password</h3>

      {successMsg && (
        <div className="alert alert-success text-center">
          {successMsg}
        </div>
      )}

      {errorMsg && (
        <div className="alert alert-danger text-center">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleReset}>
        <input
          type="password"
          className="form-control"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="btn btn-success w-100 mt-3"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;