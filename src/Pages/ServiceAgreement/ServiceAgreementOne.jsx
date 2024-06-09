import {React, useState } from 'react'
import BackIcon from '../../Components/BackIcon'
import HeaderOne from '../../Components/HeaderOne'
import SerAgInputContainer from '../../Components/SerAgInputContainer'
import SaveAndCancel from '../../Components/SaveAndCancel'
import Footer from '../../Components/Footer'


export default function ServiceAgreementOne() {
      const [formSubmitted, setFormSubmitted] = useState(false);
    
      const handleSave = (formValues) => {
        // Handle form submission, e.g., send data to server
        console.log('Form submitted with values:', formValues);
        setFormSubmitted(true);
      };
    
      const handleCancel = () => {
        // Handle cancel action
        console.log('Form cancelled');
      };
    
      return (
        <div>
          <BackIcon />
          <HeaderOne value="Service Agreement" />
          <SerAgInputContainer onSave={handleSave} onCancel={handleCancel} />
          {formSubmitted && <div className="success-message">Form submitted successfully!</div>}
          <Footer />
        </div>
      );
    }