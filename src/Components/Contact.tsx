import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { ChangeEvent, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMapMarker, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import emailjs from '@emailjs/browser';
import { default as JsonData } from "../data/data.json";

const initialState = {
  name: '',
  email: '',
  message: '',
}

export function Contact() {

  const [{ name, email, message }, setFieldsState] = useState(initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFieldsState((prevState) => ({ ...prevState, [name]: value }));
  }

  const clearState = () => setFieldsState({ ...initialState });
  const handleSubmit = (e: any) => {
    const form = useRef();
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        clearState();
      },
        (error) => {
          console.log(error.text);
        });
  }

  return (
    <div>
      <div id='contact'>
        <Container>
          <Row>
            <Col md={8}>
              <Row>
                <div className='section-title'>
                  <h2>Get In Touch</h2>
                  <p>
                    Please fill out the form below to send us an email and we will
                    get back to you as soon as possible.
                  </p>
                </div>
                <Form onSubmit={handleSubmit} id="myForm">
                  <Row>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Name"
                          required
                          value={name}
                          onChange={handleChange}
                          autoComplete="name"
                          disabled/>
                        <p className='help-block text-danger'></p>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Control
                          type="email"
                          name="email"
                          value={email}
                          placeholder="name@example.com"
                          onChange={handleChange}
                          autoComplete="email"
                          disabled/>
                        <p className='help-block text-danger'></p>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group>
                    <Form.Control as="textarea"
                      id='message'
                      name="message"
                      rows={4}
                      value={message}
                      onChange={handleChange}
                      autoComplete="off"
                      disabled/>
                    <p className='help-block text-danger'></p>
                  </Form.Group>
                  <div id='success'></div>
                  <Button as="input" type="submit"
                    size="lg"
                    onClick={(e) => handleSubmit(e)} disabled/>{' '}
                </Form>
              </Row>
            </Col>

            <Col md={3}>
              <div className='contact-item'>
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <FontAwesomeIcon icon={faMapMarker} style={{ color: 'white' }} />
                    {" "}
                    Address
                  </span>
                  {JsonData ? JsonData.Contact.address : 'loading'}
                </p>
              </div>
              <div className='contact-item'>
                <p>
                  <span>
                    <FontAwesomeIcon icon={faPhone} style={{ color: 'white' }} />
                    {" "}
                    Phone
                  </span>{' '}
                  {JsonData ? JsonData.Contact.phone : 'loading'}
                </p>
              </div>
              <div className='contact-item'>
                <p>
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} style={{ color: 'white' }} />
                    {" "}
                    Email
                  </span>{' '}
                  {JsonData ? JsonData.Contact.email : 'loading'}
                </p>
              </div>
            </Col>
          </Row>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={JsonData ? JsonData.Contact.facebook : '/'}>
                      <FontAwesomeIcon icon={faFacebook} style={{ color: 'white', fontSize: '42px' }} />
                    </a>
                  </li>
                  <li>
                    <a href={JsonData ? JsonData.Contact.twitter : '/'}>
                      <FontAwesomeIcon icon={faTwitter} style={{ color: 'white', fontSize: '42px' }} />
                    </a>
                  </li>
                  <li>
                    <a href={JsonData ? JsonData.Contact.youtube : '/'}>
                      <FontAwesomeIcon icon={faYoutube} style={{ color: 'white', fontSize: '42px' }} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2025 mediplus Jaffna Design by Muhila {' '}
            <a href='https://github.com/Muhila026' rel='nofollow'>
              Codearson
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;