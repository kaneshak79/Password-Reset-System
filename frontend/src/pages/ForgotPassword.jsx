
import { useState } from "react";
import { API } from "../services/api";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");
    setLoading(true);

    try {
      const res = await API.post("/forgot-password", { email });

      setSuccessMsg(res.data?.message || "Reset link sent to email");
      setEmail("");
    } catch (err) {
      console.error("Forgot password error:", err);

      if (err.response) {
        setErrorMsg(err.response.data?.message || "Server error");
      } else {
        setErrorMsg("Server not reachable");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="mb-3 text-center">Forgot Password</h3>

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

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          className="btn btn-primary w-100 mt-3"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;