import React from 'react';
import './SalesInfo.styles.css';
import { FaUpload } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const SalesInfo = () => {
    return (
        <div className="sales-container">
            <div className="sales-header">
                <div className="flex-row">
                    <FaUpload color="#00A5E3" />
                    <span className='bold'>Sales</span>
                </div>
                <FaInfoCircle color="gray"/>
            </div>
            <div className="sales-content">
                <div className="sales-info">
                    You had <span className='bold'>0 uploads</span> and <span className='bold'>0</span> lines added.
                </div>
                <div className="sales-metrics">
                    <div className="metric">
                        <div className="metric-value">0%</div>
                        <div className="metric-label">UPLOAD SUCCESS</div>
                    </div>
                    <div className="metric">
                        <div className="metric-value">0%</div>
                        <div className="metric-label">LINES SAVED</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesInfo;
