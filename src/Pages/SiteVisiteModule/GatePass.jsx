import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GatePass = ({ siteVisitId }) => {
    const [gatePass, setGatePass] = useState(null);

    useEffect(() => {
        // Fetch gate pass details from backend
        axios.get(`/api/sitevisits/${siteVisitId}/gatepass`)
            .then(response => {
                setGatePass(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the gate pass!", error);
            });
    }, [siteVisitId]);

    const downloadGatePass = () => {
        // Generate PDF or download gate pass logic
    };

    if (!gatePass) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Gate Pass</h2>
            <p>Vehicle Number: {gatePass.vehicleNumber}</p>
            <p>Group Name: {gatePass.groupName}</p>
            <p>Customer Name: {gatePass.customerName}</p>
            <p>Message: Please give permission for the site visit.</p>
            <button onClick={downloadGatePass}>Download Gate Pass</button>
        </div>
    );
};

export default GatePass;
