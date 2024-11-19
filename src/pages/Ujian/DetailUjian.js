import React from 'react';
import { Container, Card, Table } from 'react-bootstrap';

const DetailUjian = () => {
    const examDetails = {
        namaUjian: "Ujian Akhir Semester (UAS)",
        mataPelajaran: "Bahasa Indonesia",
        kelas: "Teknik Informatika - A",
        jumlahSoal: 0,
        durasi: "20 Menit",
    };

    return (
        <Container>
            <Card className="mb-4">
                <Card.Body>
                    <h5 className="mb-3">
                        <i className="bi bi-pencil-square me-2"></i>Detail Ujian
                    </h5>
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td><strong>Nama Ujian</strong></td>
                                <td>{examDetails.namaUjian}</td>
                            </tr>
                            <tr>
                                <td><strong>Mata Pelajaran</strong></td>
                                <td>{examDetails.mataPelajaran}</td>
                            </tr>
                            <tr>
                                <td><strong>Kelas</strong></td>
                                <td>{examDetails.kelas}</td>
                            </tr>
                            <tr>
                                <td><strong>Jumlah Soal</strong></td>
                                <td>{examDetails.jumlahSoal}</td>
                            </tr>
                            <tr>
                                <td><strong>Durasi (Menit)</strong></td>
                                <td>{examDetails.durasi}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default DetailUjian;
