"use client";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

export default function RegistrationForm({ courseId }) {
  const { user } = useUser();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const email = user?.emailAddresses[0]?.emailAddress || "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phoneNumber) {
      setMessage("Please enter a phone number.");
      return;
    }

    try {
      const res = await fetch("http://localhost:1337/api/registered-users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: { email, phoneNumber, courseId },
        }),
      });
      if (res.ok) {
        setMessage("Registered successfully!");
      } else {
        setMessage("Registration failed.");
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div className="p-4 bg-white rounded">
      <h2 className="text-xl font-bold mb-2">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label>Email:</label>
          <input value={email} disabled className="w-full p-1 border" />
        </div>
        <div className="mb-2">
          <label>Phone:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-1 border"
          />
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Register
        </button>
      </form>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}