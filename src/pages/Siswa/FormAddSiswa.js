import React, { useState } from 'react';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';

const FormAddSiswa = () => {
    const [className, setClassName] = useState('');
    const [gender, setGender] = useState('');
    const [nisn, setNisn] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSave = () => {
        alert(`Data siswa berhasil disimpan!\nNama: ${fullName}\nNISN: ${nisn}`);
        setClassName('');
        setGender('');
        setNisn('');
        setFullName('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <Container>
            <Card className="mb-4">
                <Card.Body>
                    <h5>Tambah Siswa</h5>
                    <Form>
                        <Row>
                            {/* Kolom Kiri */}
                            <Col md={6}>
                                <Form.Group controlId="formNisn" className="mb-3">
                                    <Form.Label>NISN</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Masukkan NISN"
                                        value={nisn}
                                        onChange={(e) => setNisn(e.target.value)}
                                    />
                                </Form.Group>

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

                                <Form.Group controlId="formPassword" className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Masukkan Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>

                            {/* Kolom Kanan */}
                            <Col md={6}>
                                <Form.Group controlId="formFullName" className="mb-3">
                                    <Form.Label>Nama Lengkap</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Masukkan Nama Lengkap"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formGender" className="mb-3">
                                    <Form.Label>Jenis Kelamin</Form.Label>
                                    <Form.Select
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                    >
                                        <option value="">Pilih Jenis Kelamin</option>
                                        <option value="Laki-laki">Laki-laki</option>
                                        <option value="Perempuan">Perempuan</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group controlId="formConfirmPassword" className="mb-3">
                                    <Form.Label>Konfirmasi Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Masukkan Konfirmasi Password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
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

export default FormAddSiswa;
