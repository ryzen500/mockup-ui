import React, { useState } from 'react';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const FormAddUjian = () => {
    const [className, setClassName] = useState('');
    const [gender, setGender] = useState('');
    const [nisn, setNisn] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [description, setDescription] = useState(''); // For CKEditor content

    const handleSave = () => {
        alert(`Data berhasil disimpan!\nNama Ujian: ${fullName}\nDeskripsi: ${description}`);
        setClassName('');
        setGender('');
        setNisn('');
        setFullName('');
        setPassword('');
        setConfirmPassword('');
        setDescription('');
    };

    return (
        <Container>
            <Card className="mb-4">
                <Card.Body>
                    <h5>Tambah Ujian</h5>
                    <Form>
                        <Row>
                            {/* Nama Ujian */}
                            <Form.Group controlId="formNisn" className="mb-3">
                                <Form.Label>Nama Ujian</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Masukkan Nama Ujian"
                                    value={nisn}
                                    onChange={(e) => setNisn(e.target.value)}
                                />
                            </Form.Group>

                            <Col md={6}>
                                <Form.Group controlId="formClass" className="mb-3">
                                    <Form.Label>Kelas</Form.Label>
                                    <Form.Select
                                        value={className}
                                        onChange={(e) => setClassName(e.target.value)}
                                    >
                                        <option value="">Pilih Kelas</option>
                                        <option value="X-A">X-A</option>
                                        <option value="X-B">X-B</option>
                                        <option value="XI-A">XI-A</option>
                                        <option value="XI-B">XI-B</option>
                                    </Form.Select>
                                </Form.Group>


                            </Col>

                            <Col md={6}>
                                <Form.Group controlId="formGender" className="mb-3">
                                    <Form.Label>Mata Pelajaran</Form.Label>
                                    <Form.Select
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                    >
                                        <option value="">Pilih Mata Pelajaran</option>
                                        <option value="TI">Teknik Informatika</option>
                                        <option value="PBO">Pemrograman Berbasis Objek</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            {/* CKEditor for Deskripsi */}
                            <Form.Group controlId="formDescription" className="mb-3">
                                <Form.Label>Deskripsi</Form.Label>
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={description}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        setDescription(data);
                                    }}
                                />
                            </Form.Group>
                        </Row>

                        <div className="d-flex justify-content-start">
                            <Button variant="primary" onClick={handleSave}>
                                Simpan
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default FormAddUjian;
