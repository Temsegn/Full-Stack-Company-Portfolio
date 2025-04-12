"use client"; // Mark this as a Client Component

import { SignUp } from "@clerk/nextjs";
import { useState } from "react";

export default function SignUpPage() {
  const [error, setError] = useState<{ message: string } | null>(null);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md">
        {/* Display error if it exists */}
        {error && (
          <div className="text-red-500 mb-4 text-center">
            Sign-up failed: {error.message || "Unknown error"}
          </div>
        )}
        <SignUp
          appearance={{
            elements: {
              card: "shadow-lg bg-white dark:bg-gray-800 rounded-xl p-6",
            },
          }}
          signUpFields={[
            { name: "email_address", label: "Email", type: "email" },
            { name: "password", label: "Password", type: "password" },
            { name: "first_name", label: "First Name", type: "text" },
            { name: "last_name", label: "Last Name", type: "text" },
          ]}
          forceRedirectUrl="/course"
          signInUrl="/sign-in"
          // Use Clerk’s afterSignUpUrl for verification if needed
          afterSignUpUrl="/sign-up/verify-email-address"
        />
      </div>
    </div>
  );
}
