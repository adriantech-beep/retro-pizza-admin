import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser } from "../util/auth";

const Signup = () => {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();

  useEffect(() => {
    if (!currentUser || currentUser.role !== "admin") {
      navigate("/dashboard");
    }
  }, [currentUser, navigate]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [role, setRole] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatar(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !avatar) return alert("All fields required.");

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);
    formData.append("role", role);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/signup",
        formData
      );
      alert("Signup successful");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1a1a2e] text-white px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0f0f1e] border border-[#ff4d00]/30 p-6 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-[#ff4d00] mb-6 font-[Orbitron]">
          Create An Account
        </h2>

        <div className="mb-4">
          <label className="block mb-1 text-sm">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded bg-[#1a1a2e] border border-[#ff4d00]/20 focus:outline-none focus:ring-2 focus:ring-[#ff4d00]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded bg-[#1a1a2e] border border-[#ff4d00]/20 focus:outline-none focus:ring-2 focus:ring-[#ff4d00]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <select
            className="w-full mt-2 px-4 py-2 bg-[#1a1a2e] border border-[#ff4d00]/20 rounded text-white"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="staff">Staff</option>
            <option value="admin">Admin</option>
            <option value="moderator">Moderator</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm">Avatar</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="text-sm"
          />
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Preview"
              className="mt-3 h-24 w-24 object-cover rounded-full border border-[#ff4d00]/40"
            />
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#ff4d00] hover:bg-[#e94300] text-white font-semibold py-2 px-4 rounded mt-4"
        >
          Sign Up
        </button>
      </form>

      <p className="mt-4 text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-[#ff4d00] underline">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default Signup;
