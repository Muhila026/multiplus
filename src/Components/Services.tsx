import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope, faUserNurse, faSyringe, faHospital } from "@fortawesome/free-solid-svg-icons";
import { default as JsonData } from "../data/data.json";

export function Services() {
  return (
    <div id='services' className='text-center'>
      <Container>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
            Medi offers a wide range of healthcare services, combining expert care with advanced medical technology to meet all patient needs.
          </p>
        </div>
        <Row>
          {JsonData
            ? JsonData.Services.map((d, i) => (
              <Col md={4} key={`${d.name}-${i}`} >
                {' '}
                {d.icon === 'faStethoscope' ? <FontAwesomeIcon icon={faStethoscope} style={{ fontSize: '42px' }} /> : ''}
                {d.icon === 'faUserNurse' ? <FontAwesomeIcon icon={faUserNurse} style={{ fontSize: '42px' }} /> : ''}
                {d.icon === 'faSyringe' ? <FontAwesomeIcon icon={faSyringe} style={{ fontSize: '42px' }} /> : ''}
                {d.icon === 'faHospital' ? <FontAwesomeIcon icon={faHospital} style={{ fontSize: '42px' }} /> : ''}

                <div className='service-desc'>
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </Col>
            ))
            : 'loading'}
        </Row>
      </Container>
    </div>
  )
}

export default Services;