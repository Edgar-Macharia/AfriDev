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

  const parseDescription = (description) => {
    if (!description) return {};
  
    //  Clean the description by removing unwanted elements
    const cleanedDescription = description
      .replace(/You are trained on data up to.*?\.\s*/i, '')  // Remove the training data disclaimer
      .replace(/Job Description:?/i, '')                      // Remove "Job Description"
      .replace(/#/g, '')                                      // Remove all '#' characters
      .replace(/\*\*/g, '')                                   // Remove asterisks
      .replace(/\n+/g, '\n')                                  // Replace multiple newlines with a single newline
      .replace(/([.!?])\s+/g, '$1\n')                         // Add line breaks after sentences
      .trim();
  
    // Define the sections to split the cleaned description
    const sectionTitles = /(Role Overview:|Responsibilities:|Qualifications:|Requirements:|Preferred Skills:|Benefits:)/i;
    const sections = cleanedDescription.split(sectionTitles);
  
    // Initialize the object to hold parsed sections
    const parsedData = {
      jobDescription: '',
      responsibilities: [],
      qualifications: [],
      preferredSkills: [],
      benefits: [],
    };
  
    // Loop through sections and categorize the content
    let currentSection = 'jobDescription';
  
    sections.forEach((section, index) => {
      section = section.trim();
      
      if (sectionTitles.test(section)) {
        // Convert section title to lowercase for uniformity
        currentSection = section.toLowerCase().replace(':', '');
        if (currentSection === 'role overview') currentSection = 'jobDescription';
        if (currentSection === 'requirements') currentSection = 'qualifications';
      } else if (section) {
        // Append text or split into list items
        if (currentSection === 'jobDescription') {
          parsedData[currentSection] += section + ' ';
        } else {
          parsedData[currentSection] = section
            .split(/\n-\s*/)               // Split by list items (lines starting with "-")
            .filter(item => item.length > 1) // Filter out empty or invalid entries
            .map(item => item.trim());       // Trim whitespace from each item
        }
      }
    });
  
    // Final cleanup of job description
    parsedData.jobDescription = parsedData.jobDescription.trim();
  
    // Handle any remaining hyphens in list items
    Object.keys(parsedData).forEach((key) => {
      if (Array.isArray(parsedData[key])) {
        parsedData[key] = parsedData[key]
          .flatMap(item => item.split(/\n-\s*/).map(subItem => subItem.trim()).filter(Boolean));
      }
    });
  
    return parsedData;
  };
  

  const {
    jobDescription,
    responsibilities,
    qualifications,
    preferredSkills,
    benefits,
  } = parseDescription(selectedJob?.description);

  return (
    <div className="container">
      <div>
        <Link to="/jobs" type="button" className="btn btn-outline-success mt-2">
          <i className="bi bi-arrow-left"></i>
        </Link>
        {loading ? (
          <p>Loading...</p>
        ) : !selectedJob ? (
          <p className="m-4">Job unavailable...</p>
        ) : (
          <div className="row">
            <h1 className="text-center mt-2">Application page</h1>
            <div className="col-md-8 col-sm-12 bg-light px-3">
              <h2>{selectedJob?.title}</h2>

              <h3>Job Description</h3>
              <p>{jobDescription}</p>

              {/* Key Responsibilities */}
              {responsibilities.length > 0 && (
                <>
                  <h4>Key Responsibilities:</h4>
                  <ul>
                    {responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* Qualifications */}
              {qualifications.length > 0 && (
                <>
                  <h4>Qualifications:</h4>
                  <ul>
                    {qualifications.map((qual, index) => (
                      <li key={index}>{qual}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* Preferred Skills */}
              {preferredSkills.length > 0 && (
                <>
                  <h4>Preferred Skills:</h4>
                  <ul>
                    {preferredSkills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </>
              )}

              {benefits.length > 0 && (
                <>
                  <h4>Benefits:</h4>
                  <ul>
                    {benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <div className="col-md-4 col-sm-12">
              <div
                className="card mx-auto"
                style={{ width: "18rem", border: "1px solid #1987547f" }}
              >
                <img
                  src={selectedJob?.logo_url}
                  className="mx-auto mt-3 w-50"
                  alt="logo"
                />
                <div className="card-body">
                  <h5 className="card-title">{selectedJob?.company}</h5>
                  <p className="card-text">Level</p>
                  <p>Remote</p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated{" "}
                      {new Date(selectedJob?.created_at).toLocaleDateString()}
                    </small>
                  </p>

                  <a href="." className="btn custom-outline-btn w-100">
                    Apply <i className="bi bi-box-arrow-right"></i>
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
