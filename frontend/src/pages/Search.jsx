import { /* useContext,*/ useState, useEffect } from "react";
import searchimg from "../images/Search-amico.png";
// import { JobContext } from "../context/JobContext";

function Search() {
  // const { searchJob, fetchJobs } = useContext(JobContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // useEffect(() => {
  //   fetchJobs();
  // }, [fetchJobs]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:9292/jobs/search?${searchTerm}`
      );
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  useEffect(() => {
    if (searchTerm === "") {
      setSearchResults([]);
    }
  }, [searchTerm]);

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
                <li className="list-group-item" key={index}>
                  {result.title} - {result.company_name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default Search;
