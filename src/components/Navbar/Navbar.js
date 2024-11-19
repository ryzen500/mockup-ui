import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // For react-router links
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Importing the icons
import '../../styles/globals.css'; // Import custom CSS (if needed)

const AppNavbar = ({ toggleSidebar }) => {
    const [showSidebar, setShowSidebar] = useState(true); // Sidebar visibility state

    // This function will be passed down as a prop from the layout to toggle the sidebar
    const handleSidebarToggle = () => {
        setShowSidebar(!showSidebar);
        toggleSidebar(!showSidebar); // Passing the state up to AdminLayout
    };

    return (
        <>
            {/* Navbar */}
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/">Sistem Manajemen</Navbar.Brand>
                    {/* Profile Icon with "SA" inside a circular shape */}
                    <div className="d-flex align-items-center">
                        <div className="profile-icon text-center text-white">
                            SA
                        </div>
                        <span className="text-black ms-2">Sistem Administrator</span>
                    </div>

                    {/* Button to open/close sidebar (visible only on mobile) */}
                    <Button
                        variant="outline-light"
                        className="d-lg-none" // Only show on small screens (mobile/tablet)
                        onClick={handleSidebarToggle}
                    >
                        <FontAwesomeIcon icon={showSidebar ? faTimes : faBars} />
                    </Button>
                </Container>
            </Navbar>
        </>
    );
};

export default AppNavbar;
