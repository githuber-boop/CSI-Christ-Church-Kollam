import React from "react";
import { Link } from "react-router-dom";
import "../styles/NewUser.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../components/Sidebar";
import axios from "axios";

const AdminDashboard = () => {
  const success = () => toast.info("User Created");

  const [confirmed, setConfirmed] = useState(false);
  const [baptised, setBaptised] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    number: "",
    dob: "",
    email: "",
    weddingDte: "",
    confirmation: "",
    baptism: "",
    house: "",
    role: "member",
    password: "kollamchurch",
    familyMembers: [],
  });

  const handlePasteFamilyMember = (e, index, field) => {
    e.preventDefault(); // Prevent default paste behavior
    const pastedText = e.clipboardData.getData('text');
  
    // Regular expression to match dd/mm/yyyy format
    const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
  
    if (datePattern.test(pastedText)) {
      // Update the specific family member's field
      const updatedFamilyMembers = formData.familyMembers.map((member, i) =>
        i === index ? { ...member, [field]: pastedText } : member
      );
      setFormData({ ...formData, familyMembers: updatedFamilyMembers });
    } else {
      alert('Invalid date format! Please use dd-mm-yyyy');
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFamilyMemberChange = (index, e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const updatedFamilyMembers = formData.familyMembers.map((member, i) =>
      i === index ? { ...member, [name]: value } : member
    );
    setFormData({ ...formData, familyMembers: updatedFamilyMembers });
  };

  const addFamilyMember = (e) => {
    e.preventDefault();
        setFormData({
      ...formData,
      familyMembers: [
        ...formData.familyMembers,
        {
          name: "",
          dob: "",
          confirmation: "",
          baptism: "",
          confirmed: false,
          baptised: false,
        },
      ],
    });
  };

  const removeFamilyMember = (index) => {
    const updatedFamilyMembers = formData.familyMembers.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, familyMembers: updatedFamilyMembers });
  };

  const handleConfirmationToggle = (index) => {
    const updatedFamilyMembers = formData.familyMembers.map((member, i) => {
      if (i === index) {
        const updatedConfirmed = !member.confirmed;
        return {
          ...member,
          confirmed: updatedConfirmed,
          confirmation: updatedConfirmed ? "Confirmed" : "", // Set "Confirmed" or reset to empty
        };
      }
      return member;
    });
    setFormData({ ...formData, familyMembers: updatedFamilyMembers });
  };

  const handleBaptisedToggle = (index) => {
    const updatedFamilyMembers = formData.familyMembers.map((member, i) => {
      if (i === index) {
        const updatedBaptised = !member.baptised;
        return {
          ...member,
          baptised: updatedBaptised,
          baptism: updatedBaptised ? "Baptised" : "", // Set "Baptised" or reset to empty
        };
      }
      return member;
    });
    setFormData({ ...formData, familyMembers: updatedFamilyMembers });
  };

  const handleMainBaptisedToggle = () => {
    setBaptised(!baptised);
    if (!baptised) {
      setFormData({ ...formData, baptism: "Baptised" });
    } else {
      setFormData({ ...formData, baptism: "" });
    }
  };

  const handleMainConfirmationToggle = () => {
    setConfirmed(!confirmed);
    if (!confirmed) {
      setFormData({ ...formData, confirmation: "Confirmed" });
    } else {
      setFormData({ ...formData, confirmation: "" });
    }
  };

  const handlePaste = (e) => {
    e.preventDefault(); // Prevent the default paste behavior
    const pastedText = e.clipboardData.getData('text');

    // Regular expression to match dd/mm/yyyy format
    const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;

    if (datePattern.test(pastedText)) {
      const { name } = e.target;
      setFormData({ ...formData, [name]: pastedText });
      // Set the date if format is correct
    } else {
      alert('Invalid date format! Please use dd-mm-yy');
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://church-kollam-backend.onrender.com/api/users/newUser",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="admin-dashboard">
      <Sidebar newUser={"link-active"} />
      <main className="user-form admin-content">
        <ToastContainer />

        <h1>CREATE A NEW USER</h1>
        <form onSubmit={submitForm} className="new_user-form">
          {/* Main User Fields */}
          <label htmlFor="name">
            Name:{" "}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="address">
            Address:{" "}
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="number">
            Phone Number:{" "}
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="dob">
            Date of Birth:{" "}
            <input
              readOnly
              onPaste={handlePaste}
              type="text"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="weddingDte">
            Wedding Date:{" "}
            <input
              readOnly
              onPaste={handlePaste}
              type="text"
              name="weddingDte"
              value={formData.weddingDte}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email">
            Email:{" "}
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          {/* Main User Baptism & Confirmation */}
          <label htmlFor="baptism">
            Baptism Date:
            {!baptised ? (
              <input
                type="text"
                readOnly
                onPaste={handlePaste}
                name="baptism"
                value={formData.baptism}
                onChange={handleChange}
              />
            ) : (
              <input
                type="text"
                name="baptism"
                value={formData.baptism}
                disabled
              />
            )}
            <div className="block-container">
              <label>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={baptised}
                  onChange={handleMainBaptisedToggle}
                />{" "}
                Mark as "Baptised"
              </label>
            </div>
          </label>
          <label htmlFor="confirmation">
            Confirmation Date:
            {!confirmed ? (
              <input
                type="text"
                readOnly
                onPaste={handlePaste}
                name="confirmation"
                value={formData.confirmation}
                onChange={handleChange}
              />
            ) : (
              <input
                type="text"
                name="confirmation"
                value={formData.confirmation}
                disabled
              />
            )}
            <div className="block-container">
              <label>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={confirmed}
                  onChange={handleMainConfirmationToggle}
                />{" "}
                Mark as "Confirmed"
              </label>
            </div>
          </label>

          <label htmlFor="house">
            House Name:{" "}
            <input
              type="text"
              name="house"
              value={formData.house}
              onChange={handleChange}
            />
          </label>

          {/* Family Members Section */}
          <h1>Family Members</h1>
          {formData.familyMembers.map((member, index) => (
            <div key={index} className="family-member">
              <label>
                Family Member Name:
                <input
                  type="text"
                  name="name"
                  value={member.name}
                  onChange={(e) => handleFamilyMemberChange(index, e)}
                />
              </label>
              <label>
                Date of Birth:
                <input
                  type="text"
                  onPaste={(e) => handlePasteFamilyMember(e, index, "dob")} 
                  name="dob"
                  value={member.dob}
                  onChange={(e) => handleFamilyMemberChange(index, e)}
                />
              </label>

              {/* Family Member Baptism */}
              <label>
                Baptism Date:
                {!member.baptised ? (
                  <input
                    type="text"
                    name="baptism"
                    onPaste={(e) => handlePasteFamilyMember(e, index, "confirmation")} 
                    value={member.baptism}
                    onChange={(e) => handleFamilyMemberChange(index, e)}
                  />
                ) : (
                  <input
                    type="text"
                    name="baptism"
                    value={member.baptism}
                    disabled
                  />
                )}
                <div className="block-container">
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={member.baptised}
                      onChange={() => handleBaptisedToggle(index)}
                    />
                    Mark as "Baptised"
                  </label>
                </div>
              </label>

              {/* Family Member Confirmation */}
              <label>
                Confirmation Date:
                {!member.confirmed ? (
                  <input
                    type="text"
                    name="confirmation"
                    onPaste={(e) => handlePasteFamilyMember(e, index, "baptism")} 
                    value={member.confirmation}
                    onChange={(e) => handleFamilyMemberChange(index, e)}
                  />
                ) : (
                  <input
                    type="text"
                    name="confirmation"
                    value={member.confirmation}
                    disabled
                  />
                )}
                <div className="block-container">
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={member.confirmed}
                      onChange={() => handleConfirmationToggle(index)}
                    />
                    Mark as "Confirmed"
                  </label>
                </div>
              </label>

              <button
                type="button-member"
                className="removeMember"
                onClick={() => removeFamilyMember(index)}
              >
                Remove Family Member
              </button>
            </div>
          ))}
          <button type="button-member" onClick={addFamilyMember}>
            Add Family Member
          </button>

          <button type="submit" onClick={success}>
            Add User
          </button>
        </form>
      </main>
    </div>
  );
};

export default AdminDashboard;
