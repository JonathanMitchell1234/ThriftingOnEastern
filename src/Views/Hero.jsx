import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import Fade from 'react-reveal/Fade';

const Hero = () => {
    let [lateralMenu, setLateralMenu] = useState(false);

    return (
        <section id="hero">

            <Container fluid style={{ height: '100vh' }} className="desktop">
                <Row style={{ height: '100vh' }}>

                    <Col lg={6} className="col-content">
                        <Fade bottom duration={500} delay={600} distance="30px">
                            <div className="header">
                                <div className="header-content">
                                    <div><a href="https://github.com/jonathanmitchell1234"><b>ToE</b></a></div>
                                    <div style={{ display: 'flex' }}>
                                        <div className="navbar-item"><a href="#about">About</a></div>
                                        <div className="navbar-item" style={{ marginRight: 0 }}><a href="#details">Details</a></div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        {Content()}
                    </Col>

                    <Col lg={6} className="p-0">
                        <Fade bottom duration={500} delay={600} distance="30px">
                            <img src={require("../Images/clothing.jpeg")} alt="Hero" />
                        </Fade>
                    </Col>

                </Row>
            </Container>

            <div className="mobile">
                <Fade bottom duration={500} delay={600} distance="30px">

                    <img src={require("../Images/clothing.jpeg")} alt="Hero" />
                    <div className="header">
                        <div className="header-content">
                            <div><a href="#jonathan"><b>ToE</b></a></div>
                            <div>
                                {!lateralMenu 
                                ? <HiMenuAlt2 style={{ fontSize: 24 }} onClick={() => setLateralMenu(true)} /> 
                                : <HiX style={{ fontSize: 24, color: lateralMenu ? "#383535" : "#eeeded"  }} onClick={() => setLateralMenu(false)} /> }
                            </div>
                        </div>
                    </div>
                    <Container fluid style={{ height: '100vh' }} className="content">
                        <div className="margin-adder">
                            {Content()}
                        </div>
                    </Container>

                </Fade>

                    <div style={{ display: lateralMenu ? 'block' : 'none' }} className="sidebar">
                        <Fade right duration={400} distance="30px">
                            <div className="sidebar-backdrop" />
                            <div className="sidebar-content">
                                <div className="menu-container">
                                    <div className="menu-title">Menu</div>
                                    <div className="menu-item"><a href="#about" onClick={() => setLateralMenu(false)}>About</a></div>
                                    <div className="menu-item"><a href="#details" onClick={() => setLateralMenu(false)}>Details</a></div>
                                </div>
                                <div className="menu-container" style={{ marginTop: 30 }}>
                                    <div className="menu-title">Get in Touch</div>
                                    <div><a href="mailto:jonathanmitchell@brightoncenter.com">jonathanmitchell@brightoncenter.com</a></div>
                                </div>
                            </div>
                        </Fade>
                    </div>

            </div>

        </section>
    );
};

const Content = () => {
    return (
        <div>
            <Fade left duration={500} delay={600} distance="30px">
                <div className="mb-4">
                    <h1 className="primary-color">Thrifting On Eastern</h1>
                    <h2>A community thrift store with a purpose.</h2>
                    <p style={{ maxWidth: 550 }}>Thrifting on Eastern is a community thrift store offering high-quality, gently used household items and clothing at affordable prices. All proceeds from sales go directly back to Brighton Center’s Family Support programs.</p>
                </div>

                <a href="#about">
                    <span className="button button-hero">
                        Tell Me More!
                    </span>
                </a>
            </Fade>
        </div>
    );
}

export default Hero;