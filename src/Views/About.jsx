import { Container } from "react-bootstrap";
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <section id="about">
            <Fade left duration={500} delay={600} distance="30px">
                <Container>
                    <div>
                    <p className="title">
                        <span className="white-color" style={{ fontWeight: 'bold' }}>Thrifting on Eastern</span> has Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dignissimos explicabo repudiandae minima ut earum quo ipsum rerum quos consequatur!
                    </p>
                    <p className="subtitle">
                    Thrifting on Eastern is located at 2014 Eastern Ave in Covington, KY is open Wednesday - Saturday from 10:00 a.m. - 3:00 p.m.
                    </p>
                    </div>
                </Container>
            </Fade>
        </section>
    );
};

export default About;