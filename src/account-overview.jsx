import React from 'react';

import './account-overview.css';
import SupportContactInfo from './components/SupportContactInfo/SupportContactInfo';
import SalesInfo from './components/SalesInfo/SalesInfo';

export const AccountOverview = ({data}) => {
  console.log(data);

  return (
    <div className="AccountOverview">
      <div className='flex-row justify-between'>
        <span className="page-title">Account Overview</span>
        <SupportContactInfo />
      </div>

      <SalesInfo/>
    </div>
  )
}

export default AccountOverview;