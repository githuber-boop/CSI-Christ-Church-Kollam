import React from "react";
import '../styles/EditEvents.css';
import Sidebar from "../components/Sidebar";
import { useState,useEffect } from "react";

const EditEvent = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch("/api/events");
      const data = await res.json();
      setDetails(data);
    };

    fetchJobs();
  }, []);

  return (
    <div className="admin-member-dashboard">
      <Sidebar member={"link-active"} />
      <main className="admin-member-content">
        <div className="grid-full">
          {details.map((eventDetail) => (
            <div key={eventDetail.id} className="event-details">
              <h3>{eventDetail.eventName}</h3>
              <h3>{eventDetail.date}</h3>
              <h3>{eventDetail.evenDetails}</h3>

              <div className="functions-user">
                <Link to={`/admin-dashboard/edit-user/${eventDetail.id}`}>
                  <button className="functionButton">EDIT</button>
                </Link>
                <button
                  onClick={() => deleteUser(eventDetail.id)}
                  className="functionButton"
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default EditEvent;
