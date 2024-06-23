import React, { useState } from 'react';

const AddCustomer = () => {
  const [customerData, setCustomerData] = useState({
    customerName: '',
    identityNumber: '',
    address: '',
    status: 'active',
    contactPerson: {
      name: '',
      designation: '',
      mobileNumber: '',
      email: '',
      workingPlaceAddress: ''
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerData({
      ...customerData,
      [name]: value
    });
  };

  const handleContactPersonChange = (e) => {
    const { name, value } = e.target;
    setCustomerData({
      ...customerData,
      contactPerson: {
        ...customerData.contactPerson,
        [name]: value
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend API
    console.log(customerData);
    // Clear form after submission if needed
    // setCustomerData({ ...initialState });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
      <h2>Add a Customer</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold' }}>Customer Name:</label>
          <input
            type="text"
            name="customerName"
            value={customerData.customerName}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '3px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold' }}>Identity Number:</label>
          <input
            type="text"
            name="identityNumber"
            value={customerData.identityNumber}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '3px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold' }}>Address:</label>
          <textarea
            name="address"
            value={customerData.address}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '3px', resize: 'vertical' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold' }}>Status:</label>
          <select
            name="status"
            value={customerData.status}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '3px' }}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <h3>Contact Person Details</h3>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold' }}>Name:</label>
          <input
            type="text"
            name="name"
            value={customerData.contactPerson.name}
            onChange={handleContactPersonChange}
            style={{ width: '100%', padding: '8px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '3px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold' }}>Designation:</label>
          <input
            type="text"
            name="designation"
            value={customerData.contactPerson.designation}
            onChange={handleContactPersonChange}
            style={{ width: '100%', padding: '8px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '3px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold' }}>Mobile Number:</label>
          <input
            type="text"
            name="mobileNumber"
            value={customerData.contactPerson.mobileNumber}
            onChange={handleContactPersonChange}
            style={{ width: '100%', padding: '8px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '3px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold' }}>Email:</label>
          <input
            type="email"
            name="email"
            value={customerData.contactPerson.email}
            onChange={handleContactPersonChange}
            style={{ width: '100%', padding: '8px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '3px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold' }}>Working Place Address:</label>
          <textarea
            name="workingPlaceAddress"
            value={customerData.contactPerson.workingPlaceAddress}
            onChange={handleContactPersonChange}
            style={{ width: '100%', padding: '8px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '3px', resize: 'vertical' }}
            required
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Add Customer</button>
      </form>
    </div>
  );
};

export default AddCustomer;
