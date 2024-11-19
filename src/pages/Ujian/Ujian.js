import React, { useState } from 'react';
import { Table, Button, Container, InputGroup, FormControl, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faPencilAlt, faTrashAlt, faPerson, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Ujian = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <Container>
            <Card className="mb-4">
                <Card.Body>
                    <div className="d-flex  mb-3">
                        {/* Add Data Button */}
                        <Link to="/ujian-add">
                            <Button variant="success">
                                <FontAwesomeIcon icon={faPlus} className="me-2" />
                                Tambah Ujian
                            </Button>
                        </Link>


                        <Link to="/ujian-import">
                            <Button variant="primary" style={{ marginLeft: '5px' }}>
                                <FontAwesomeIcon icon={faPerson} className="me-2" />
                                Import Ujian
                            </Button>
                        </Link>
                        {/* Search Input */}
                        <div className="align-items-left" style={{ marginLeft: '25px' }}>
                            <InputGroup>
                                <FormControl
                                    placeholder="Cari Data..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faSearch} />
                                </InputGroup.Text>
                            </InputGroup>
                        </div>
                    </div>
                    <Table striped bordered hover>
                        <thead >
                            <tr>
                                <th style={{ backgroundColor: 'black', color: 'white', textAlign: 'center' }}>No</th>
                                <th style={{ backgroundColor: 'black', color: 'white', textAlign: 'center' }}>Ujian</th>
                                <th style={{ backgroundColor: 'black', color: 'white', textAlign: 'center' }}>Pelajaran</th>
                                <th style={{ backgroundColor: 'black', color: 'white', textAlign: 'center' }}>Kelas</th>
                                <th style={{ backgroundColor: 'black', color: 'white', textAlign: 'center' }}>Jumlah Soal</th>
                                <th style={{ backgroundColor: 'black', color: 'white', textAlign: 'center' }}>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ textAlign: 'center' }}>1</td>
                                <td style={{ textAlign: 'center' }}>UAS</td>
                                <td style={{ textAlign: 'center' }}>Bahasa Indonesia</td>
                                <td style={{ textAlign: 'center' }}>Teknik Informatika</td>
                                <td style={{ textAlign: 'center' }}>5</td>


                                <td style={{ textAlign: 'center' }}>
                                    <Button variant="warning" className="me-2">
                                        <FontAwesomeIcon icon={faPencilAlt} className="me-2" />
                                        Edit
                                    </Button>
                                    <Link to="/ujian-detail">

                                        <Button variant="primary" className="me-2">
                                            <FontAwesomeIcon icon={faEye} className="me-2" />
                                            Detail
                                        </Button>
                                    </Link>

                                    <Button variant="danger">
                                        <FontAwesomeIcon icon={faTrashAlt} className="me-2" />
                                        Hapus
                                    </Button>
                                </td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Ujian;
