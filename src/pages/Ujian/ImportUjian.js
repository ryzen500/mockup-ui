import React, { useState } from 'react';
import { Container, Card, Form, Button, Row, Col, Table } from 'react-bootstrap';
import * as XLSX from 'xlsx';

const ImportSiswa = () => {
    const [students, setStudents] = useState([]);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = (event) => {
                const binaryStr = event.target.result;
                const workbook = XLSX.read(binaryStr, { type: 'binary' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const data = XLSX.utils.sheet_to_json(sheet);
                setStudents(data); // Assuming each row is a student record
            };

            reader.readAsBinaryString(file);
        }
    };

    const handleSave = () => {
        alert(`Data siswa berhasil diimport! Jumlah data: ${students.length}`);
        console.log('Imported Students:', students);
    };

    return (
        <Container>
            <Card className="mb-4">
                <Card.Body>
                    <h5>Import Ujian</h5>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>File Excel</Form.Label>
                                    <Form.Control type="file" onChange={handleFileUpload} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <div className="d-flex justify-content-start">
                            <Button variant="primary" onClick={handleSave} disabled={students.length === 0}>
                                Simpan
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>

            {students.length > 0 && (
                <Card>
                    <Card.Body>
                        <h5>Preview Data Siswa</h5>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    {Object.keys(students[0]).map((key, index) => (
                                        <th key={index}>{key}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student, index) => (
                                    <tr key={index}>
                                        {Object.values(student).map((value, idx) => (
                                            <td key={idx}>{value}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            )}
        </Container>
    );
};

export default ImportSiswa;
