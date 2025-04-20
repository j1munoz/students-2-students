"use client";
import login from "@/data/login";
import { useState } from "react";

type FormData = {
  email?: string;
  password?: string;
};

const LoginForm = () => {
    const [formData, setFormData] = useState<FormData>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { email, password } = formData;

        // Validation checks
        if (!email || !password) {

            return;
        }

        // Send login request to the server
        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error("Login failed");
            }

            const data = await response.json();
            console.log("Login successful:", data);
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded shadow-md w-96">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {login.map(({type, label, name}, index) => (
                <div key={index} className="flex flex-col">
                <label htmlFor={name} className="mb-2 text-gray-700">
                    {label}
                </label>
                <input
                    type={type}
                    name={name}
                    id={name}
                    className="p-2 border border-gray-300 rounded"
                    required
                    onChange={handleChange}
                />
                </div>
            ))}
            <button
                type="submit"
                className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
            >Login</button>
        </form>
    </div>
  );
}

export default LoginForm;