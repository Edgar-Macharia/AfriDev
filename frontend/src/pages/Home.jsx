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
                Find and Apply <br />
                <small className="fst-italic fs-4">for</small>
                <br />
                Top{" "}
                <span className="border-bottom border-5 border-success-subtle bg-success-subtle">
                  Remote
                </span>{" "}
                Dev jobs
              </h1>
              <p>Find your ideal remote dev role. Apply with ease.</p>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card h-100 border-success shadow">
                    <div className="card-body">
                      <h5 className="card-title">
                        Discover Remote Opportunities
                      </h5>
                      <p className="card-text">
                        Search and get matched with dev jobs tailored to your
                        expertise
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <Link
                    to="/jobs"
                    className="card h-100 border-success focus-ring focus-ring-success card-hover"
                    style={{
                      "--bs-focus-ring-x": "10px",
                      "--bs-focus-ring-y": "10px",
                      "--bs-focus-ring-blur": "4px",
                    }}
                  >
                    <div className="card-body">
                      <h5 className="card-title pt-4">Discover</h5>
                      <p className="card-text">Jobs Here</p>
                    </div>
                  </Link>
                </div>
                <div className="col">
                  <div className="card h-100 border-success shadow">
                    <div className="card-body">
                      <h5 className="card-title">
                        Your skills
                        <br /> Our network
                      </h5>
                      <p className="card-text">
                        Connect with companies that value remote talent
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
      <Search id="search-section" />
      <div className="d-flex justify-content-center">
      <h5 className="my-4 p-2 text-center fst-italic rounded border-top border-bottom border-success-subtle">~ About Us ~</h5>
      </div>
      
      <About />
    </>
  );
}

export default Home;
