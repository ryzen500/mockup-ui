import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faFileAlt, faSchool, faUserGraduate } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
    const cards = [
        { title: "Kelas", count: 0, icon: faSchool, bgColor: "text-primary" },
        { title: "Siswa", count: 0, icon: faUserGraduate, bgColor: "text-success" },
        { title: "Ujian", count: 0, icon: faFileAlt, bgColor: "text-info" },
        { title: "Sesi Ujian", count: 0, icon: faClock, bgColor: "text-danger" },
    ];

    return (
        <Container fluid style={{ backgroundColor: "#f7f7f7", minHeight: "100vh" }}>
            <Row>
                {/* Main Content */}
                <Col md={10} className="mx-auto">
                    <Row>
                        {cards.map((card, index) => (
                            <Col md={3} key={index}>
                                <Card className="shadow-sm mb-4">
                                    <Card.Body className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h5>{card.title}</h5>
                                            <h2>{card.count}</h2>
                                        </div>
                                        <FontAwesomeIcon
                                            icon={card.icon}
                                            className={`fs-1 ${card.bgColor}`}
                                        />
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
