import { useState } from "react";

const AuthForm = ({ onSubmit, isLogin }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(formData);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#0f0f1e] p-6 rounded-lg max-w-sm w-full shadow-md border border-[#ff4d00]/30"
    >
      <h2 className="text-xl font-bold text-center text-[#ff4d00] mb-4">
        {isLogin ? "Admin Login" : "Admin Signup"}
      </h2>

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        onChange={handleChange}
        value={formData.email}
        className="w-full mb-3 px-4 py-2 rounded bg-[#1a1a2e] text-white border border-[#ff4d00]/30"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        onChange={handleChange}
        value={formData.password}
        className="w-full mb-4 px-4 py-2 rounded bg-[#1a1a2e] text-white border border-[#ff4d00]/30"
      />
      <button
        type="submit"
        className="bg-[#ff4d00] hover:bg-[#e94300] px-4 py-2 w-full text-white font-bold rounded"
      >
        {isLogin ? "Login" : "Signup"}
      </button>
    </form>
  );
};

export default AuthForm;
