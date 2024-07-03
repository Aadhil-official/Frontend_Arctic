import React, { useState } from 'react';
import './SerAgInputContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLocationDot, faSitemap, faCalendarDays, faFileSignature } from '@fortawesome/free-solid-svg-icons';

export default function SerAgInputContainer({ onSave, onCancel }) {
  const initialFormState = {
    customerName: '',
    location: '',
    item: '',
    agreementType: '',
    agreementPeriod: ''
  };

  const [formValues, setFormValues] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const validate = () => {
    let errors = {};
    if (!formValues.customerName) errors.customerName = 'Customer name is required';
    if (!formValues.location) errors.location = 'Location is required';
    if (!formValues.item) errors.item = 'Item is required';
    if (!formValues.agreementType) errors.agreementType = 'Agreement type is required';
    if (!formValues.agreementPeriod) errors.agreementPeriod = 'Agreement period is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      onSave(formValues);
      setFormValues(initialFormState); // Reset form values after submission
    }
  };

  const handleCancel = () => {
    setFormValues(initialFormState); // Reset form values when cancel is clicked
    onCancel();
  };

  const [customerName,setCustomerName]=useState("");
  const [location,setLocation]=useState("");
  const [item,setItem]=useState("");
  const [agreementType,setAgreementType]=useState("");
  const [periodOfTheAgreement,setPeriodOfTheAgreement]=useState("");

  return (
    <form onSubmit={handleSubmit} className='seraginput'>
      <div className='input-container'>
        <input
          type='text'
          name='customerName'
          placeholder='Customer name'
          value={formValues.customerName}
          onChange={(e)=>{
            setCustomerName(e.target.value);
            handleChange();
          }}
         
        />
        <FontAwesomeIcon icon={faUser} className='icon' />
        {formErrors.customerName && <span className='error'>{formErrors.customerName}</span>}
      </div>
      <div className='input-container'>
        <input
          type='text'
          name='location'
          placeholder='Location'
          value={formValues.location}
          onChange={handleChange}
        />
        <FontAwesomeIcon icon={faLocationDot} className='icon' />
        {formErrors.location && <span className='error'>{formErrors.location}</span>}
      </div>
      <div className='input-container'>
        <input
          type='text'
          name='item'
          placeholder='Item'
          value={formValues.item}
          onChange={handleChange}
        />
        <FontAwesomeIcon icon={faSitemap} className='icon' />
        {formErrors.item && <span className='error'>{formErrors.item}</span>}
      </div>
      <div className='input-container'>
        <input
          type='text'
          name='agreementType'
          placeholder='Agreement Type'
          value={formValues.agreementType}
          onChange={handleChange}
        />
        <FontAwesomeIcon icon={faFileSignature} className='icon' />
        {formErrors.agreementType && <span className='error'>{formErrors.agreementType}</span>}
      </div>
      <div className='input-container'>
        <input
          type='text'
          name='agreementPeriod'
          placeholder='Period of the agreement'
          value={formValues.agreementPeriod}
          onChange={handleChange}
        />
        <FontAwesomeIcon icon={faCalendarDays} className='icon' />
        {formErrors.agreementPeriod && <span className='error'>{formErrors.agreementPeriod}</span>}
      </div>
      <div>
        <button type='submit' className='save'>Save</button>
        <button type='button' className='cancel' onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );
}
