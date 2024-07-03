import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Paper } from "@mui/material";
import { FooterIn, NormalHeaderBar } from '../../Components';

const SiteVisitDashboardEmployee = () => {
    const [hoveredButton, setHoveredButton] = useState(null);
    const [hoveredIcon, setHoveredIcon] = useState(false);

    const handleMouseEnter = (buttonLabel) => {
        setHoveredButton(buttonLabel);
    };

    const handleMouseLeave = () => {
        setHoveredButton(null);
    };

    const handleIconMouseEnter = () => {
        setHoveredIcon(true);
    };

    const handleIconMouseLeave = () => {
        setHoveredIcon(false);
    };

    const buttonStyle = {
        width: '50%',
        padding: '20px',
        fontSize: '20px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#547DD1',
        color: 'white',
        borderRadius: '5px',
        margin: '10px 0',
        textAlign: 'center',
        textDecoration: 'none',
        fontFamily: 'arial',
    };

    const hoveredButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#0056b3'
    };

    const iconStyle = {
        position: 'absolute',
        top: '10px', // Adjust as needed for vertical alignment
        left: '10px', // Adjust as needed for horizontal alignment
        cursor: 'pointer',
        color: hoveredIcon ? '#0056b3' : 'gray',
        transition: 'color 0.3s'
    };

    const sectionStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        width: '100%', // Full width
        height: '100%', // Full height
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Shadow effect
        borderRadius: '5px', // Rounded corners
        marginBottom: '20px', // Space between sections
        position: 'relative', // Ensure position is relative for absolute positioning of icon
    };

    return (
        <>
            <NormalHeaderBar />
            <Paper
                elevation={3}
                style={{
                    padding: "0", // No padding
                    margin: "0", // No margin
                    boxShadow: "none", // No shadow on the outer container
                    backgroundColor: "transparent", // Transparent background
                }}
            >
                <div style={sectionStyle}>
                    <Link
                        to={-1}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            position: 'absolute',
                            top: '10px', // Adjust as needed for vertical alignment
                            left: '10px', // Adjust as needed for horizontal alignment
                        }}
                        onMouseEnter={handleIconMouseEnter}
                        onMouseLeave={handleIconMouseLeave}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} size="2x" style={iconStyle} />
                    </Link>
                    <h1 style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '5rem', color: '#0056b3', marginTop: '20px' }}>
                        Site Visit - Employee </h1>
                </div>
            </Paper>

            <Paper
                elevation={3}
                style={{
                    padding: "2rem",
                    margin: "0", // No margin
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Shadow effect
                    borderRadius: '5px', // Rounded corners
                    backgroundColor: "white", // White background
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '20px' }}>
                        <Link
                            to="/SiteVisitOne"
                            style={hoveredButton === "Scheduling Site Visit" ? hoveredButtonStyle : buttonStyle}
                            onMouseEnter={() => handleMouseEnter("Scheduling Site Visit")}
                            onMouseLeave={handleMouseLeave}

                        >
                            Scheduling Site Visit
                        </Link>
                        <Link
                            to="/SiteVisitFour"
                            style={hoveredButton === "Start Site Visit" ? hoveredButtonStyle : buttonStyle}
                            onMouseEnter={() => handleMouseEnter("Start Site Visit")}
                            onMouseLeave={handleMouseLeave}
                        >
                            Start/End/Feedback of Site Visit
                        </Link>
                        <Link
                            to="/SiteVisitSix"
                            style={hoveredButton === "End Site Visit" ? hoveredButtonStyle : buttonStyle}
                            onMouseEnter={() => handleMouseEnter("End Site Visit")}
                            onMouseLeave={handleMouseLeave}
                        >
                            Update Site Visit Details
                        </Link>
                        {/* <Link
                            to="/update-site-visit"
                            style={hoveredButton === "Update Site Visit" ? hoveredButtonStyle : buttonStyle}
                            onMouseEnter={() => handleMouseEnter("Update Site Visit")}
                            onMouseLeave={handleMouseLeave}
                        >
                            Update Site Visit
                        </Link> */}
                        <Link
                            to="/gate-pass"
                            style={hoveredButton === "Gate Pass" ? hoveredButtonStyle : buttonStyle}
                            onMouseEnter={() => handleMouseEnter("Gate Pass")}
                            onMouseLeave={handleMouseLeave}
                        >
                            Gate Pass
                        </Link>
                    </div>
                </div>
            </Paper>
            <FooterIn />
        </>
    );
}

export default SiteVisitDashboardEmployee;
