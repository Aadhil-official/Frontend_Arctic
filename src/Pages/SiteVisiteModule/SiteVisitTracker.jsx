// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const SiteVisitTracker = () => {
//     const [siteVisits, setSiteVisits] = useState([]);
//     const [newVisitDate, setNewVisitDate] = useState('');
//     const [newVisitLocation, setNewVisitLocation] = useState('');

//     useEffect(() => {
//         fetchSiteVisits();
//     }, []);

//     const fetchSiteVisits = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/api/siteVisits');
//             setSiteVisits(response.data);
//         } catch (error) {
//             console.error('Error fetching site visits:', error);
//         }
//     };

//     const addSiteVisit = async () => {
//         try {
//             const response = await axios.post('http://localhost:8080/api/siteVisits', {
//                 date: newVisitDate,
//                 location: newVisitLocation,
//                 visited: false // Assuming default is not visited
//             });
//             setSiteVisits([...siteVisits, response.data]);
//             setNewVisitDate('');
//             setNewVisitLocation('');
//         } catch (error) {
//             console.error('Error adding site visit:', error);
//         }
//     };

//     const markVisited = async (id) => {
//         try {
//             await axios.put(`http://localhost:8080/api/siteVisits/${id}`, {
//                 visited: true
//             });
//             const updatedSiteVisits = siteVisits.map(visit =>
//                 visit._id === id ? { ...visit, visited: true } : visit
//             );
//             setSiteVisits(updatedSiteVisits);
//         } catch (error) {
//             console.error('Error marking site visit as visited:', error);
//         }
//     };

//     return (
//         <div className="site-visit-tracker">
//             <h1>Site Visit Tracker</h1>
//             <div>
//                 <h2>Add New Visit</h2>
//                 <input
//                     type="date"
//                     value={newVisitDate}
//                     onChange={(e) => setNewVisitDate(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Location"
//                     value={newVisitLocation}
//                     onChange={(e) => setNewVisitLocation(e.target.value)}
//                 />
//                 <button onClick={addSiteVisit}>Add Visit</button>
//             </div>
//             <div>
//                 <h2>Site Visits</h2>
//                 <ul>
//                     {siteVisits.map(visit => (
//                         <li key={visit._id} className={visit.visited ? 'visited' : ''}>
//                             <span>{visit.date} - {visit.location}</span>
//                             {!visit.visited && (
//                                 <button onClick={() => markVisited(visit._id)}>Mark Visited</button>
//                             )}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default SiteVisitTracker;
