import React from 'react'
import "./SupportContactInfo.styles.css";

export default function SupportContactInfo() {
  return (
    <div className='support-contact-info-container'>
      <span className="uppercase lightgray bold">Your feefo support contact</span>
      <div className="flex-row">
        <div className='info-icon'>
          <span>S</span>
        </div>
        <div className="flex-col">
        <span className="bold gray">Support</span>
        <div className="flex-responsive">
        <span className="small gray">support@feefo.com</span>
        <span className="small gray">020 3362 4208</span>
        </div>
        
      </div>
      </div>

    </div>
  )
}
