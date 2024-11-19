import React, { useState } from 'react';
import { Table, Button, Container, InputGroup, FormControl, Card, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const FormAddMatkul = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [className, setClassName] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleClassNameChange = (e) => {
        setClassName(e.target.value);
    };

    const handleSave = () => {
        // Handle save logic
        alert(`Matakuliah "${className}" berhasil disimpan!`);
        setClassName(''); // Clear the input field after saving
    };

    return (
        <Container>
            <Card className="mb-4">
                <Card.Body>
                    {/* Header with Add and Search */}
            


                    {/* Input Form */}
                    <Card className="mt-4">
                        <Card.Body>
                            <h5>Tambah Mata Kuliah</h5>
                            <Form>
                                <Form.Group controlId="formClassName" className="mb-3">
                                    <Form.Label>Nama Mata Kuliah</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Masukkan Nama Mata Kuliah"
                                        value={className}
                                        onChange={handleClassNameChange}
                                    />
                                </Form.Group>
                                <Button variant="primary" onClick={handleSave}>
                                    Simpan
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default FormAddMatkul;
