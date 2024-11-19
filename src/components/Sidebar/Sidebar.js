import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // For react-router links
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt,faGraduationCap, faBook, faSchool, faPerson, faExclamation, faBookBookmark, faLineChart } from '@fortawesome/free-solid-svg-icons';

// Sidebar Component
const Sidebar = ({ showSidebar }) => {
    return (
        <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
            <div className="sidebar-header">
                <h3> <FontAwesomeIcon icon={faGraduationCap} /> Ujian Online </h3>
                <hr />
            </div>
            <Nav className="flex-column">
                <Nav.Link as={Link} to="/dashboard">
                    <FontAwesomeIcon icon={faTachometerAlt} className="me-2" />
                    Dashboard
                </Nav.Link>
                <Nav.Link as={Link} to="/matkul">
                    <FontAwesomeIcon icon={faBook} className="me-2" />
                    mata Kuliah
                </Nav.Link>
                <Nav.Link as={Link} to="/kelas">
                    <FontAwesomeIcon icon={faSchool} className="me-2" />
                    Kelas
                </Nav.Link>
                <Nav.Link as={Link} to="/siswa">
                    <FontAwesomeIcon icon={faPerson} className="me-2" />
                    Siswa
                </Nav.Link>
                <Nav.Link as={Link} to="/ujian">
                    <FontAwesomeIcon icon={faBookBookmark} className="me-2" />
                    Ujian
                </Nav.Link>
                <hr />
                <Nav.Link as={Link} to="/laporan-nilai">
                    <FontAwesomeIcon icon={faLineChart} className="me-2" />
                    Laporan Nilai
                </Nav.Link>
            </Nav>
        </div>
    );
};

export default Sidebar;
