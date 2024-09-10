import React from "react";
import '../styles/EditEvents.css';
import Sidebar from "../components/Sidebar";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const EditEvent = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch("https://church-kollam-backend.onrender.com/api/events");
      const data = await res.json();
      setDetails(data);
    };

    fetchJobs();
  }, []);

  const deleteEvent = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this event?");
    if (confirmDelete) {
      try {
        await axios.delete(`https://church-kollam-backend.onrender.com/api/events/${id}`);
        setDetails(details.filter(detail => detail._id !== id));
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  return (
    <div className="admin-member-dashboard">
      <Sidebar event={"link-active"} />
      <main className="admin-member-content">
        <div className="events-grid">
          {details.map((eventDetail) => (
            <div key={eventDetail.id} className="event-details">
              <h3>{eventDetail.eventName}</h3>
              <h3>{eventDetail.date}</h3>
              <h3>{eventDetail.time}</h3>
              <h3>{eventDetail.eventDetails}</h3>

              <div className="functions-user">
                <button
                  onClick={() => deleteEvent(eventDetail._id)}
                  className="functionButton"
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
        <Link to={"/admin-dashboard/"}>Go back</Link>
      </main>
    </div>
  );
};

export default EditEvent;
