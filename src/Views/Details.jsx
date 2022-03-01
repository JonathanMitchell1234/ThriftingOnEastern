import { Container, Row, Col } from "react-bootstrap";
import Fade from 'react-reveal/Fade';

const Details = () => {
    return (
        <section id="details">
            <Container>
                <Fade left duration={500} delay={600} distance="30px">
                    <Row className="mb-5 mb-lg-0">
                        <Col lg={8} className="p-4">
                            <img src={require("../Images/thrift.jpeg")} alt="Details1" />
                        </Col>

                        <Col lg={4} className="col-description">
                            <div>
                                <h2 style={{ fontWeight: 'normal' }}>lorem ipsum </h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ea corporis fugit.</p>
                                <a href="https://github.com/jonathanmitchell1234"><span className="button button-hero">Find out</span></a>
                            </div>
                        </Col>
                    </Row>
                </Fade>

                <Fade right duration={500} delay={600} distance="30px">
                    <Row className="mb-5 mb-lg-0">
                        <Col lg={4} className="col-description">
                            <div>
                                <h2 style={{ fontWeight: 'normal' }}>lorem ipsum</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ducimus corporis beatae.</p>
                                <a href="https://github.com/jonathanmitchell1234"><span className="button button-hero">Discover this one</span></a>
                            </div>
                        </Col>

                        <Col lg={8} className="p-4">
                            <img src={require("../Images/Furniture.jpeg")} alt="Details2" />
                        </Col>
                    </Row>
                </Fade>

                <Fade left duration={500} delay={600} distance="30px">
                    <Row className="mb-5 mb-lg-0">
                        <Col lg={8} className="p-4">
                            <img src={require("../Images/toys.jpeg")} alt="Details3" />
                        </Col>

                        <Col lg={4} className="col-description">
                            <div>
                                <h2 style={{ fontWeight: 'normal' }}>lorem ipsum</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatum dignissimos accusamus!</p>
                                <a href="https://github.com/jonathanmitchell1234"><span className="button button-hero">Tell me about</span></a>
                            </div>
                        </Col>
                    </Row>
                </Fade>

            </Container>
        </section>
    );
};

export default Details;