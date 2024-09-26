import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ApplyJob = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const { id } = useParams();

  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async (id) => {
      try {
        const response = await fetch(
          `https://api.crackeddevs.com/v1/get-jobs`,
          {
            headers: {
              "api-key": API_KEY,
            },
          }
        );
        const data = await response.json();
        const selectedJob = data.find((job) => job.id === parseInt(id));
        setSelectedJob(selectedJob);
        console.log({ selectedJob });
        setLoading(false);
      } catch (error) {
        console.log("HTTP error: " + error);
        setLoading(false);
      }
    };
    fetchJob(id);
  }, [id, API_KEY]);

  return (
    <div className="container">
      <div>
        <Link to="/jobs" type="button" className="btn btn-outline-success mt-2">
          <i className="bi bi-arrow-left"></i>
        </Link>
        {!selectedJob ? (
          <p className="m-4">Job unavailable...</p>
        ) : (
          <div className="row">
            <h1 className="text-center mt-2">Application page</h1>
            <div className="col-md-8 col-sm-12 bg-success">col-8
              
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card mx-auto" style={{ width: "18rem", border: "1px solid #1987547f" }}>
                <img
                  src={selectedJob?.logo_url}
                  className="mx-auto mt-3 w-50"
                  alt="logo"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>

                  <a href="." className="btn custom-outline-btn w-100">
                    Apply <i class="bi bi-box-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplyJob;
