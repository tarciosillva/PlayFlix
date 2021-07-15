import React from 'react'

import { Carousel } from 'react-bootstrap'

function Carrossel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://media.istockphoto.com/photos/black-matte-background-picture-id1133405969?k=6&m=1133405969&s=612x612&w=0&h=NhiEAnMVHLmhFutGYdxWWslSRLFtuMAVu2o-Y8JzNGM="
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://media.istockphoto.com/photos/black-matte-background-picture-id1133405969?k=6&m=1133405969&s=612x612&w=0&h=NhiEAnMVHLmhFutGYdxWWslSRLFtuMAVu2o-Y8JzNGM="
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://media.istockphoto.com/photos/black-matte-background-picture-id1133405969?k=6&m=1133405969&s=612x612&w=0&h=NhiEAnMVHLmhFutGYdxWWslSRLFtuMAVu2o-Y8JzNGM="
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Carrossel