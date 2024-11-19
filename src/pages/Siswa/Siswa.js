import React, { useState } from 'react';
import { Table, Button, Container, InputGroup, FormControl, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faPencilAlt, faTrashAlt, faPerson } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Siswa = () => {
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
                        <Link to="/siswa-add">
                            <Button variant="success">
                                <FontAwesomeIcon icon={faPlus} className="me-2" />
                                Tambah Data
                            </Button>
                        </Link>
                        <Link to="/siswa-import">
                            <Button variant="primary" style={{marginLeft:'5px'}}>
                                <FontAwesomeIcon icon={faPerson} className="me-2" />
                                Import Siswa
                            </Button>
                        </Link>
                        {/* Search Input */}
                        <div className="align-items-left" style={{marginLeft:'25px'}}>
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
                                <th style={{ backgroundColor: 'black',color:'white',textAlign:'center' }}>No</th>
                                <th style={{ backgroundColor: 'black',color:'white' ,textAlign:'center' }}>NISN</th>
                                <th style={{ backgroundColor: 'black',color:'white' ,textAlign:'center' }}>Nama</th>
                                <th style={{ backgroundColor: 'black',color:'white' ,textAlign:'center' }}>Kelas</th>
                                <th style={{ backgroundColor: 'black',color:'white' ,textAlign:'center' }}>Jenis Kelamin</th>
                                <th style={{ backgroundColor: 'black',color:'white' ,textAlign:'center' }}>Password</th>
                                <th style={{ backgroundColor: 'black',color:'white' ,textAlign:'center' }}>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{textAlign:'center'}}>1</td>
                                <td style={{textAlign:'center'}}>3123510629</td>
                                <td style={{textAlign:'center'}}>Ahcmad Tsany Wicaksono</td>
                                <td style={{textAlign:'center'}}>Teknik Informatika</td>
                                <td style={{textAlign:'center'}}>Laki Laki</td>
                                <td style={{textAlign:'center'}}>****</td>


                                <td style={{textAlign:'center'}}>
                                    <Button variant="warning" className="me-2">
                                        <FontAwesomeIcon icon={faPencilAlt} className="me-2" />
                                        Edit
                                    </Button>
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

export default Siswa;
