"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") {
      return;
    }
    router.push(`/search?q=${input.trim()}`);
    setInput("");
  };

  return (
    <div className=" w-full lg:w-68 rounded-lg px-2 py-2 flex gap-2 bg-[#F9FAFB] dark:bg-[#364150] border border-gray-300 dark:border-gray-500 ">
      <IoIosSearch className="size-6 text-gray-400 " />
      <form onSubmit={handleChange}>
        <input
          type="text"
          className="grow-1 outline-none dark:text-gray-300 "
          placeholder="search..."
          onChange={e => setInput(e.target.value)}
          value={input}
        />
      </form>
    </div>
  );
};

export default Search;
