import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/AdminMemberDetails.css';
import Sidebar from '../components/Sidebar';



const AdminMemberDetails = () => {
    const [details, setDetails] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        
        const fetchJobs = async () => {
            const res = await fetch("https://church-kollam-backend.onrender.com/api/users")
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
        <Sidebar member={'link-active'}/>
        <main className='admin-member-content'>

        <div className='sort-filter'>
            <div className="input">
              <input
                  type="text"
                  placeholder="Search by name or email"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
        </div>
        <div className="grid-col-2">
        {details.filter(matchesSearchCriteria).map((memberDetail) => (
                        <div key={memberDetail.id} className="member-details">
                            <h3><span>NAME:</span>  {memberDetail.name}</h3>
                            <h3><span>ADDRESS:</span>  {memberDetail.address}</h3>
                            <h3><span>NUMBER:</span>  {memberDetail.number}</h3>
                            <h3><span>DOB:</span>  {memberDetail.dob}</h3>
                            <h3><span>EMAIL:</span>  {memberDetail.email}</h3>
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