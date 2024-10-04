import React from "react";
import img1 from "../images/Hiring-rafiki (2).png";
import img2 from "../images/New team members-bro.png";
import img3 from "../images/Remote team-bro.png";

function About() {
  return (
    <div className="my-3 py-3 bg-light">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-8 mb-md-0">
            <h2 className="mb-3">
              Search and Find Your Ideal Remote Developer Role
            </h2>
            <p className="mb-2">
              Discover full-time positions and freelance opportunities tailored
              to your skills and experience.
            </p>
            <p>
              Get instantly matched with projects that fit your expertise and
              desired compensation.
            </p>
          </div>
          <div className="col-md-4">
            <img className="img-fluid" src={img1} alt="job-hunt-img" />
          </div>
        </div>

        <hr />

        <div className="row align-items-center text-md-start">
          <div className="col-md-4 mb-4 mb-md-0">
            <img
              className="img-fluid w-100 mb-3 mb-md-0"
              src={img2}
              alt="developer"
            />
          </div>
          <div className="col-md-8 text-center">
            <h2 className="mb-3">Seamless Application Process</h2>
            <p className="mb-2">
              Apply with ease, schedule interviews directly, and secure your
              next role quickly.
            </p>
            <p>
              Clear project scopes and contracts ensure you know exactly what to
              expect.
            </p>
          </div>
        </div>

        <hr />

        <div className="row align-items-stretch text-center">
          <div className="col-md-4 mb-md-0 d-flex flex-column justify-content-center">
            <p>
              All positions are remote-friendly, perfect for developers fluent
              in collaborative tools and ready to contribute to projects from
              anywhere in the world
            </p>
          </div>
          <div className="col-md-4 mb-md-0">
            <img
              className="img-fluid h-100 object-fit-cover"
              src={img3}
              alt="remote-team"
            />
          </div>
          <div className="col-md-4 d-flex flex-column justify-content-center">
            <p>
              Our multilingual and multinational professional staff will also be
              available at any time to support you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
