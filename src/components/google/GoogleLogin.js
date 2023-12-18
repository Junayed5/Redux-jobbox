import React from "react";
import { useDispatch } from "react-redux";
import { googleLogin } from "../../features/auth/authSlice";

const GoogleLogin = () => {
  const dispatch = useDispatch();
  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };

  return (
    <button
      type="submit"
      onClick={handleGoogleLogin}
      className="font-bold text-white py-3 rounded-full bg-primary w-full"
    >
      Login With Google
    </button>
  );
};

export default GoogleLogin;
