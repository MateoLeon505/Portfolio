import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons'
import styles from './Banner.module.css';
import header from '../../assets/img/header-img.svg';

const Banner = () => {

    const toRotate = ['Desarollador Frontend', 'Desarollador FullStack', 'Estudiante de ingeniería multimedia'];
    const [ loopNum, setLoopNum ] = useState(0);
    const [ isDeleting, setIsDeleting ] = useState(false);
    const [ text, setText ] = useState('');
    const [ delta, setDelta ] = useState(Math.random() * 100)
    const period = 2000;

    useEffect (() => {

        let ticker = setInterval(() => {
          tick();
        }, delta)

        return () => { clearInterval(ticker) }

    }, [text]);
    
    const tick = () => {

        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        setText(updateText);
    }

    return (
        //<div className={styles.bannerContainer}>
            <section className={styles.Banner} id='home'>
                <Container>
                    <Row className={styles.row}>
                        <Col xs='12' md='6' xl='7'>
                            <span className={styles.tagline}>
                                <h1>Bienvenido a mi portfolio 👋</h1>
                            </span>
                            <h1>Soy</h1>
                            <h4>{toRotate.map((option) => 
                             <h></h>   
                            )}</h4>
                            <button className={styles.connect} onClick={()=>alert('connect') }>
                                <span>Let´s connect <ArrowRightCircle size={25}/></span>
                            </button>
                        </Col>
                        <Col xs='12' md='6' xl='5'>
                            <img src={header} alt="HeaderImage" />
                        </Col>
                    </Row>
                </Container>
            </section>
        //</div>
    );
}

export default Banner;