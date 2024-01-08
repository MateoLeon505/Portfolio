import { Container, Row, Col, Badge } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons'
import styles from './Banner.module.css';

const Banner = () => {

    return (
        <div className={styles.bannerContainer}>
            <section className={styles.Banner} id='home'>
                <Container>
                    <Row className={styles.row}>
                        <Col xs='12' md='6' xl='7'>
                            <span className={styles.tagline}>
                                <h1><Badge bg="secondary">Bienvenido a mi portfolio 👋</Badge></h1>
                            </span>
                            <h1><Badge bg="secondary">Soy</Badge></h1>
                            <h4>Desarollador Frontend</h4>
                            <h4>Desarollador FullStack</h4>
                            <h4>Estudiante de ingeniería multimedia</h4>
                            <button className={styles.connect} onClick={()=>alert('connect') }><ArrowRightCircle/><span>Let´s connect</span></button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Banner;