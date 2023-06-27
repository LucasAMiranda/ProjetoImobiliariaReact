import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import '../components/Destaque.css';
import imagemDestaque from '../assets/imagem-destaque.jpeg';

function Destaque() {
  return (
    <Card className="cardDestaque">
      <Card.Img src={imagemDestaque} alt="Imagem de Destaque" />
      <Card.ImgOverlay className="cardOverlay">
        <Container>
          <Row>
            <Col>
              <h1>Bem-vindo à Imobiliária</h1>
              <p>Encontre a casa dos seus sonhos para alugar</p>
            </Col>
            <Col>
              <h5>Destaques:</h5>
              <ul>
                <li>Casa espaçosa</li>
                <li>Área de lazer</li>
                <li>Localização privilegiada</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Destaque;
