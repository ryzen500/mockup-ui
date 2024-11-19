import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
    return (
        <Container fluid style={{ backgroundColor: "#f7f7f7", minHeight: "100vh" }}>
            <Row className="justify-content-center align-items-center" style={{ height: "100vh" }}>
                <Col md={4}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3 className="text-center mb-4">ADMINISTRATOR</h3>
                            <Form>
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <FontAwesomeIcon icon={faEnvelope} />
                                            </span>
                                        </div>
                                        <Form.Control
                                            type="email"
                                            placeholder="Email Address"
                                            required
                                        />
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <FontAwesomeIcon icon={faLock} />
                                            </span>
                                        </div>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            required
                                        />
                                    </div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formRemember">
                                    <Form.Check type="checkbox" label="Remember me" />
                                </Form.Group>

                                <Button
                                    variant="dark"
                                    type="submit"
                                    className="w-100"
                                >
                                    LOGIN
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
