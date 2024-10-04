import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import searchimg from "../images/Search-amico.png";


function Search() {
  const API_KEY = process.env.REACT_APP_API_KEY;
 
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const nav = useNavigate();


  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.crackeddevs.com/v1/get-jobs?search=${searchTerm}`,
        {
          headers: {
            "api-key": `${API_KEY}`,
          },
        }
      );
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("HTTP-Error: " + error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };
  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

  useEffect(() => {
    if (searchTerm === "") {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleResultClick = (id) => {
    nav(`/applyJob/${id}`)
  }

  return (
    <div
      className="container my-3"
      style={{
        backgroundImage: `url(${searchimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "50vh",
        padding: "20px",
      }}
    >
      <div className="row justify-content-center mb-4">
        <div className="col-lg-6 focus-ring-success">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for Jobs"
              value={searchTerm}
              onChange={handleInputChange}
            />
            
            {searchTerm && (
              <button className="btn" onClick={clearSearch} style={{ background: "none" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="bi bi-x-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"
                  />
                  <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
            )}
            <button
              className="btn btn-success"
              type="button"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {searchResults.length > 0 ? (
        <div className="row justify-content-center mb-4">
          <div className="col-lg-6">
            <ul className="list-group">
              {searchResults.map((result, index) => (
                <li
                  className="list-group-item"
                  key={index}
                  onClick={() => handleResultClick(result.id)}
                  style={{ cursor: "pointer" }}
                >
                  <strong>{result.title}</strong> - <small>{result.company}</small>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) :
      (
       ""
      )}
    </div>
  );
}

export default Search;
