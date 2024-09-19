import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import About from "./About";
import Search from "./Search";

function Home() {
  return (
    <>
      <div className="container-fluid text-center mt-3 bg-light">
        <div className="row mx-lg-gx-5">
          <div className="col-lg-7">
            <div className="p-3">
              <h1>
                Find and Hire <br />
                Top Talent
              </h1>
              <p>
                Hire freelancers or permanent staff from our talent pool to work
                remotely or on-site.
              </p>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card h-100 border-success">
                    <div className="card-body">
                      <h5 className="card-title">Discover Talents</h5>
                      <p className="card-text">
                        Search and get matched with qualified professionals in
                        seconds.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <Link to="/Search" className="card h-100 border-success">
                    <div className="card h-100 border-success">
                      <div className="card-body">
                        <h5 className="card-title">Discover</h5>
                        <p className="card-text">Talents Here</p>
                        <br />
                        <FaSearch />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col">
                  <div className="card h-100 border-success">
                    <div className="card-body">
                      <p className="card-text">
                        Allow us to assist you by identifying qualified talents
                        on your behalf
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg me-3 bg-light">
            <div className="p-3">
              <img
                className="img-fluid"
                src="https://prepinsta.com/wp-content/uploads/2021/05/HackerRank-Advance-Coding-Questions.webp"
                alt="developer"
              />
            </div>
          </div>
        </div>
      </div>
      <Search />
      <About />
    </>
  );
}

export default Home;
