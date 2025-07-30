import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";
import { useLogin } from "../login/useLogin";

const Login = () => {
  const { mutate: login } = useLogin();

  const handleLogin = async (data) => {
    login(data);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#1a1a2e] text-white">
      <AuthForm onSubmit={handleLogin} isLogin={true} />

      <p className="mt-4 text-sm">
        Don't have an account?{" "}
        <Link to="/signup" className="text-[#ff4d00] underline">
          Create one
        </Link>
      </p>
    </div>
  );
};

export default Login;
