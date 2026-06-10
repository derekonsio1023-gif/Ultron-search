import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    window.location.href =
      `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
  };

  return (
    <div className="app">
      <h1 className="logo">MiBuscador</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar en Internet..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search"
        />

        <button type="submit">
          Buscar
        </button>
      </form>
    </div>
  );
}
