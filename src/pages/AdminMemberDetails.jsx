import React from 'react'
import { useState, useEffect } from 'react'
import logo from '../assets/csi-christ-logo.png'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload';
import '../styles/AdminMemberDetails.css';



const AdminMemberDetails = () => {
    const [details, setDetails] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        
        const fetchJobs = async () => {
            const res = await fetch("http://localhost:5000/users")
            const data = await res.json()
            setDetails(data)
        }   

        fetchJobs()
    }, [])

    const matchesSearchCriteria = (item) => {
      const nameMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) 
      const numberMatch = item.number.toLowerCase().includes(searchTerm.toLowerCase()) 

  
      return nameMatch;
  };


    const deleteUser = async (id) => {

      const confirmation = window.confirm("Are you sure you want to delete this user?");

    if (confirmation) {
      try {
        const response = await fetch(`http://localhost:5000/users/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          setDetails(details.filter(user => user.id !== id));
        } else {
          console.error('Failed to delete user');
        }
      } catch (error) {
        console.error('Error deleting user:', error);
     
      }
    
    }
  };

  
  
  return (
    <div className="admin-member-dashboard">
        <aside className='admin-member-sidebar'>


            <LazyLoad offset={1000}>
                <img src={logo} alt="CSI Christ Church Logo" />
              </LazyLoad>
              <div className="links">
                    <Link to="/admin-dashboard/members" className='admin-sidebar-link link-active'>MEMBER DETAILS</Link>
                    <Link to="/admin-dashboard" className='admin-sidebar-link '>CREATE NEW USER</Link>
                    <Link to="/admin-dashboard/vicar-message" className='admin-sidebar-link'>VICAR'S MESSAGE</Link>
                    <Link to="/member-dashboard" className='admin-sidebar-link'>MONTHLY NEWSLETTER</Link>
              </div>
            <div className="logOut">
              <Link to='/login' className='log-out'>Log Out</Link>
            </div>
        </aside>
        <main className='admin-member-content'>

        <div className='searchBar'>
            <input
                type="text"
                placeholder="Search by name or email"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
        <div className="grid-col-2">
        {details.filter(matchesSearchCriteria).map((memberDetail) => (
                        <div key={memberDetail.id} className="member-details">
                            <h3><span>NAME:</span>  {memberDetail.name}</h3>
                            <h3><span>ADDRESS:</span>  {memberDetail.address}</h3>
                            <h3><span>NUMBER:</span>  {memberDetail.number}</h3>
                            <h3><span>DOB:</span>  {memberDetail.dob}</h3>
                            <h3><span>BAPTISM DATE:</span>  {memberDetail.baptism}</h3>
                            <h3><span>CONFIRMATION:</span>  {memberDetail.confirmation}</h3>
                            <div className="functions-user">
                                <Link to={`/admin-dashboard/edit-user/${memberDetail.id}`}>
                                    <button className='functionButton'>EDIT</button>
                                </Link>
                                <button onClick={() => deleteUser(memberDetail.id)} className='functionButton'>DELETE</button>
                            </div>
                        </div>
                    ))}
        </div>
        </main>
    </div>
    
  )
}

export default React.memo(AdminMemberDetails)