import { Container, Row, Col } from "react-bootstrap";
import { DiReact } from "react-icons/di";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"; 

const iconStyle = { fontSize: 23 };

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col lg={7} xs={12} className="footer-col footer-info">
                        <div>
                            <h2><a href="https://github.com/jonathanmitchell1234">Thrifting on Eastern</a></h2>
                        </div>
                        <div>Concept by <a href="https://github.com/jonathanmitchell1234"><b>Jonathan Mitchell</b></a></div>
                        <div>Made with React and Bootstrap.</div>
                    </Col>

                    <Col lg={5} xs={12} className="footer-col social-icons">
                        <div>
                            <a href="https://github.com/jonathanmitchell1234" className="social-link"><span className="circle-icon"><DiReact style={iconStyle} /></span></a>
                            <a href="https://github.com/jonathanmitchell1234" className="social-link"><span className="circle-icon"><AiFillFacebook style={iconStyle} /></span></a>
                            <a href="https://github.com/jonathanmitchell1234" className="social-link"><span className="circle-icon"><AiFillInstagram style={iconStyle} /></span></a>
                            <a href="https://github.com/jonathanmitchell1234" className="social-link"><span className="circle-icon"><AiFillLinkedin style={{ fontSize: 23, marginRight: 0 }} /></span></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;