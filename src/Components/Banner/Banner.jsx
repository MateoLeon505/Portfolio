import { Container, Row } from 'react-bootstrap';
import styles from './Banner.module.css';

const Banner = () => {

    return (
        <section className={styles.Banner} id='home'>
            <Container>
                <Row></Row>
            </Container>
        </section>
    );
}

export default Banner;