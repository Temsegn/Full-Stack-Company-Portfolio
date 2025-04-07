import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isSignUp) {
        await axios.post(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/register`,
          {
            username: formData.name,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
          }
        );
      } else {
        await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`, {
          identifier: formData.email,
          password: formData.password,
        });
      }
    } catch (err) {
      setError("Authentication failed.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-500 p-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={isSignUp ? "signup" : "signin"}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full max-w-md p-8 bg-white/20 backdrop-blur-lg rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-center text-white drop-shadow-md">
            {isSignUp ? "Create an Account" : "Sign In"}
          </h2>

          {error && (
            <p className="text-red-500 text-sm text-center mt-2">{error}</p>
          )}

          <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
            {isSignUp && (
              <motion.input
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white/60 text-white border-none rounded-md placeholder-gray-200 focus:ring-2 focus:ring-white"
              />
            )}
            <motion.input
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white/60 text-white border-none rounded-md placeholder-gray-200 focus:ring-2 focus:ring-white"
            />
            {isSignUp && (
              <motion.input
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white/60 text-white border-none rounded-md placeholder-gray-200 focus:ring-2 focus:ring-white"
              />
            )}
            <motion.input
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white/60 text-white border-none rounded-md placeholder-gray-200 focus:ring-2 focus:ring-white"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-4 py-2 mt-4 font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-md shadow-md hover:shadow-lg"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </motion.button>
          </form>

          <p className="text-center text-white text-sm mt-4">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="ml-1 text-white font-bold hover:underline"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
