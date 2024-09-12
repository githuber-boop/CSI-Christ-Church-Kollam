import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/EditUser.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../components/Sidebar";
import axios from "axios";

function EditUser() {
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const success = () => toast.info("User Edited");

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `https://church-kollam-backend.onrender.com/api/users/${id}`
      );
      setFormData(response.data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleChange = (e, index = null) => {
    const { name, value } = e.target;

    // Update family member data
    if (index !== null) {
      const updatedFamilyMembers = [...formData.familyMembers];
      updatedFamilyMembers[index] = {
        ...updatedFamilyMembers[index],
        [name]: value,
      };
      setFormData({ ...formData, familyMembers: updatedFamilyMembers });
    } else {
      // Update user data
      setFormData({ ...formData, [name]: value });
    }
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://church-kollam-backend.onrender.com/api/users/${id}`,
        formData
      );
      setTimeout(() => {
        navigate("/admin-dashboard/members");
      }, 2000);
      success();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="admin-member-dashboard">
      <Sidebar />

      <main className="admin-member-content">
        <div className="edit-form">
          <ToastContainer />

          <h2>Edit User</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={formData.address || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Number:
              <input
                type="text"
                name="number"
                value={formData.number || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              DOB:
              <input
                type="date"
                name="dob"
                value={formData.dob || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Wedding Date:
              <input
                type="date"
                name="weddingDte"
                value={formData.weddingDte || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Baptism Date:
              <input
                type="date"
                name="baptism"
                value={formData.baptism || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Confirmation:
              <input
                type="date"
                name="confirmation"
                value={formData.confirmation || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              House Name:
              <input
                type="text"
                name="house"
                value={formData.house || ""}
                onChange={handleChange}
              />
            </label>

            {formData.familyMembers && formData.familyMembers.length > 0 ? (
              <ol className="member-details">
                {formData.familyMembers.map((member, index) => (
                  <li key={index}>
                    <label>
                      Name:
                      <input
                        type="text"
                        name="name"
                        value={member.name || ""}
                        onChange={(e) => handleChange(e, index)}
                      />
                    </label>
                    <label>
                      DOB:
                      <input
                        type="date"
                        name="dob"
                        value={member.dob || ""}
                        onChange={(e) => handleChange(e, index)}
                      />
                    </label>
                    <label>
                      Baptism Date:
                      <input
                        type="date"
                        name="baptism"
                        value={member.baptism || ""}
                        onChange={(e) => handleChange(e, index)}
                      />
                    </label>
                    <label>
                      Confirmation Date:
                      <input
                        type="date"
                        name="confirmation"
                        value={member.confirmation || ""}
                        onChange={(e) => handleChange(e, index)}
                      />
                    </label>
                  </li>
                ))}
              </ol>
            ) : (
              <p>No family members found.</p>
            )}

            <div className="functions-user">
              <button type="submit" className="functionButton">
                Save
              </button>
              <button
                type="button"
                className="functionButton"
                onClick={() => navigate("/admin-dashboard/members")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default React.memo(EditUser);
