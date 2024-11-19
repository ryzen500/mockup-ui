import React, { useState } from 'react';
import AppNavbar from '../components/Navbar/Navbar'; // Import the AppNavbar component
import Sidebar from '../components/Sidebar/Sidebar'; // Import Sidebar component
import { Container } from 'react-bootstrap';

const AdminLayout = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false); // Sidebar state

    // Function to toggle the sidebar visibility
    const toggleSidebar = (visible) => setShowSidebar(visible);

    return (
        <>
            <AppNavbar toggleSidebar={toggleSidebar} />
            
            {/* Sidebar Component */}
            <Sidebar showSidebar={showSidebar} />
            
            {/* Main Content */}
            <div className={`content content-shifted`}>
                <Container className="mt-4">
                    {children}
                </Container>
            </div>
        </>
    );
};

export default AdminLayout;
