import React, { Component } from 'react'

import Header from "../../Components/Header_movie"

import { Container, Row, Col, Card } from "react-bootstrap"

class Serie extends Component {
    state = {
        series: [
            {
                titulo: "The Witcher",
                cartaz: "https://br.web.img3.acsta.net/pictures/19/11/29/17/57/5161763.jpg"
            },
            {
                titulo: "The Flash",
                cartaz: "https://img.elo7.com.br/product/original/26B5DAC/big-poster-serie-the-flash-lo10-tamanho-90x60-cm-the-flash.jpg"
            },
            {
                titulo: "Arrow",
                cartaz: "https://images-na.ssl-images-amazon.com/images/I/71xhK9YwYGL.jpg"
            },
            {
                titulo: "Dark",
                cartaz: "https://upload.wikimedia.org/wikipedia/pt/f/f6/Dark_%28s%C3%A9rie%29.jpg"
            },
            {
                titulo: "Black Mirror",
                cartaz: "https://image.tmdb.org/t/p/original/cObZ4goxFKoDxp2g5lHsnwu3aOF.jpg"
            },
            {
                titulo: "Loky",
                cartaz:"https://f5.jor.br/v2017/content/uploads/2021/03/loki-poster-novo-691x1024-1.jpg"
            },
            {
                titulo:"Lupin",
                cartaz:"https://br.web.img3.acsta.net/pictures/20/12/02/16/22/0450183.jpg"
            },
            {
                titulo:"The 100",
                cartaz:"https://s2.glbimg.com/OWZ_OBmo3-jK3bvPIaGm9Q_7UfM=/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2019/u/r/AUMtIGQxSOeHcg3tPP0g/23cul-300-dvd3-d30-img01.jpg"
            }
        ]
    }
    render() {
        return (
            <div>
                <Header className="mb-1" />
                <div className="w-auto p-3 mb-2 bg-dark ">
                    <Container className="mt-4 mb-4">
                        <Row xs={1} md={4} className="g-4">
                            {this.state.series.map((serie, index) =>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={serie.cartaz} />
                                        <Card.Body>
                                            <Card.Text>{serie.titulo}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )}
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Serie