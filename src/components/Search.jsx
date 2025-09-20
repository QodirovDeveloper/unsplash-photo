import { useState } from "react";

function Search({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <label className="input input-bordered rounded-full w-full flex items-center gap-2">
        <svg className="h-5 w-5 opacity-50" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
          <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" />
        </svg>

        <input
          type="text"
          className="grow"
          placeholder="Search photos and illustrations"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit" aria-label="Search" className="p-2">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M5 15H3v4a2 2 0 002 2h4v-2H5v-4ZM5 5h4V3H5a2 2 0 00-2 2v4h2V5Zm14-2h-4v2h4v4h2V5a2 2 0 00-2-2Zm0 16h-4v2h4a2 2 0 002-2v-4h-2v4ZM12 8a4 4 0 100 8 4 4 0 000-8Zm0 6a2 2 0 110-4 2 2 0 010 4Z" />
          </svg>
        </button>
      </label>
    </form>
  );
}

export default Search;
