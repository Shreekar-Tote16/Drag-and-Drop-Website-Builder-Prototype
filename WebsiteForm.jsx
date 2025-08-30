import React, { useState } from "react";

function WebsiteForm({ onSubmit }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    domain: "",
    websiteName: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-[#7f20be] shadow-lg p-6 rounded-2xl w-96 space-y-4"
      >
        <h2 className="text-xl font-bold text-white">Create Your Website</h2>

        <label className="block">
          <span className="text-sm text-white">Full Name</span>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded-md bg-white text-black"
          />
        </label>

        <label className="block">
          <span className="text-sm text-white">Email ID</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded-md bg-white text-black"
          />
        </label>

        <label className="block">
          <span className="text-sm text-white">Domain Name</span>
          <input
            type="text"
            name="domain"
            value={form.domain}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded-md bg-white text-black"
          />
        </label>

        <label className="block">
          <span className="text-sm text-white">Website Name</span>
          <input
            type="text"
            name="websiteName"
            value={form.websiteName}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded-md bg-white text-black"
          />
        </label>

        <label className="block">
          <span className="text-sm text-white">Description</span>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded-md bg-white text-black"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-white text-purple-700 font-semibold py-2 rounded-md hover:bg-gray-200"
        >
          Continue to Builder
        </button>
      </form>
    </div>
  );
}

export default WebsiteForm;
