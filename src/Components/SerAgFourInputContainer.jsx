import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLocationDot, faSitemap, faCalendarDays, faFileSignature } from '@fortawesome/free-solid-svg-icons';
import './SerAgFourInputContainer.css';

export default function SerAgFourInputContainer() {
      return (
            <div className='seraginput'>
              <div className='input-container'>
              <input type='text' placeholder='Customer name'></input>
              <FontAwesomeIcon icon={faUser} className='icon'/>
              </div>
              <div className='input-container'>
              <input type='text' placeholder='Location'></input>
              <FontAwesomeIcon icon={faLocationDot} className='icon' /></div>
              <div className='input-container'>
              <input type='text' placeholder='Item'></input>
              <FontAwesomeIcon icon={faSitemap} className='icon'/>
              </div>
              <div className='input-container'>
              <input type='text' placeholder='Agreement Type'></input>
              <FontAwesomeIcon icon={faFileSignature} className='icon'/>
              </div>
              <div className='input-container'>
              <input type='text' placeholder='Period of the agreement'></input>
              <FontAwesomeIcon icon={faCalendarDays} className='icon' />
              </div>
            
            </div>
        
        
          )
}
