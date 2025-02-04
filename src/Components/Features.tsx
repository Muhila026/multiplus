import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmbulance, faHeartbeat, faMicroscope, faUserMd } from '@fortawesome/free-solid-svg-icons';
import { default as JsonData } from "../data/data.json";

export function Features() {
  const icons = {
    faAmbulance: faAmbulance,
    faHeartbeat: faHeartbeat,
    faMicroscope: faMicroscope,
    faUserMd: faUserMd,
};

  return (
    <div id="features" className="text-center">
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }} className="section-title">
            <br />
            <br />
            <br />
            <h2>Features</h2>
            <p>Discover our amazing features.</p>
          </Col>

          {JsonData
            ? JsonData.Features.map((d, i) => (
              <Col xs={6} md={3} key={`${d.title}-${i}`}>
                {icons[d.icon as keyof typeof icons] && <FontAwesomeIcon icon={icons[d.icon as keyof typeof icons]} />}
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </Col>
            ))
            : "Loading..."}
        </Row>
      </Container>
    </div>
  );
}

export default Features;