import {Container,Row,Col} from 'react-bootstrap';


function AboutMe() {

    return (
        <>
         <Container className='mt-3'>
                <Row>
                    <Col className='text-center'>
                        <h1>Dmitry Sinitsyn</h1>
                        <hr></hr>
                        <div id="ember1615" className="ember-view">
                            <section className="artdeco-card org-page-details-module__card-spacing artdeco-card org-about-module__margin-bottom">
                                <p className="break-words white-space-pre-wrap t-black--light text-body-medium">
                                This is my first project on React.js
                                </p>
                                <dl className="overflow-hidden">
                                    <dt className="mb1 text-heading-medium">
                                        LinkedIn
                                    </dt>
                                    <dd className="mb4 t-black--light text-body-medium">
                                        <a rel="noopener noreferrer" target="_blank" href="https://www.gammatest.net/" id="ember1616" className="link-without-visited-state ember-view">
                                            <span className="link-without-visited-state" dir="ltr">
                                            https://www.linkedin.com/in/dmitry-sinitsyn-985ba535/
                                            </span>
                                        </a>
                                    </dd>
                                </dl>
                            </section>

                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default AboutMe;