"use client";
import signup from "@/data/signup";
import { useState } from "react";

type FormData = {
  firstName?: string;
  lastName?: string;
  major?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

const SignupForm = () => {
  const [formData, setFormData] = useState<FormData>({});
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { firstName, lastName, major, email, password, confirmPassword } =
      formData;

    // Validation checks
    if (
      !firstName ||
      !lastName ||
      !major ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setError("All fields are required");
      return;
    }

    // Get all user emails to check if the email already exists
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const users = await response.json();
      const existingUser = users.find((user: FormData) => user.email === email);
      if (existingUser) {
        setError("Email already exists");
        return;
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setError("Error fetching users. Please try again later.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    // Put the data in the database
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("User created:", data);
      setFormData({});
    } catch (error) {
      console.error("Error creating user:", error);
      setError("Error creating user. Please try again later.");
      return;
    }

    setError("");
    console.log(formData);
  };

  return (
    <div className="flex flex-col gap-4">
      {error && <p className="text-red-500 bg-red-200">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {signup.map(({ label, type, name, options }, index) => (
          <div key={index} className="flex flex-col gap-2">
            <label htmlFor={name} className="text-lg font-semibold">
              {label}
            </label>
            {type ? (
              <input
                type={type}
                id={name}
                name={name}
                className="border border-gray-300 rounded-md p-2"
                required
                onChange={handleChange}
              />
            ) : (
              <select
                id={name}
                name={name}
                className="border border-gray-300 rounded-md p-2"
                required
                onChange={handleChange}
                defaultValue=""
              >
                <option value="" disabled>
                  Select your {label}
                </option>
                {options?.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
