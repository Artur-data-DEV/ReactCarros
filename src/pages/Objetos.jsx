import { style } from 'dom-helpers'
import React from 'react'
import {Card, Col, Row } from 'react-bootstrap'

const Objetos = () => {

    const carros = [
        { marca: 'Audi', modelo: 'A3', ano: 2020, placa: "BGE 0A34", foto: 'https://1.bp.blogspot.com/-IS3KZrq5G4w/XrnUumAYpiI/AAAAAAAAdOs/nFZ0ciUXNcIiFWf6YKu8skfJALK6-X0FwCLcBGAsYHQ/s1600/Audi-A3-Sportback-2021%2B%25285%2529.jpg' },
        { marca: 'Ford', modelo: 'Ranger', ano: 2002, placa: "BGE 0A34", foto: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/03/ford-ranger-storm-1-e1585331580704.jpg?quality=70&strip=info&w=1024'},
        { marca: 'VW', modelo: 'Gol', ano: 2020, placa: "BGE 0A34", foto: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/08/CHR8657.CR2_.jpg?quality=70&strip=info' },
        { marca: 'Fiat', modelo: 'Uno', ano: 2020, placa: "BGE 0A34", foto: 'https://quatrorodas.abril.com.br/wp-content/uploads/2019/08/uno-mile-modelo-1980-da-fiat-do-colecionador-secc81rgio-minervini.-e1566934866507.jpg?quality=70&strip=info' },
        { marca: 'Subaru', modelo: 'Impreza', ano: 2018, placa: "BGE 0A34", foto: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/2018_Subaru_Impreza_%28GT7%29_2.0i-S_hatchback_%282018-09-28%29_01.jpg' },
        { marca: 'Audi', modelo: 'A3', ano: 2020, placa: "BGE 0A34", foto: 'https://1.bp.blogspot.com/-IS3KZrq5G4w/XrnUumAYpiI/AAAAAAAAdOs/nFZ0ciUXNcIiFWf6YKu8skfJALK6-X0FwCLcBGAsYHQ/s1600/Audi-A3-Sportback-2021%2B%25285%2529.jpg' },
        { marca: 'Ford', modelo: 'Ranger', ano: 2002, placa: "BGE 0A34", foto: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/03/ford-ranger-storm-1-e1585331580704.jpg?quality=70&strip=info&w=1024'},
        { marca: 'VW', modelo: 'Gol', ano: 2020, placa: "BGE 0A34", foto: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/08/CHR8657.CR2_.jpg?quality=70&strip=info' },
        { marca: 'Fiat', modelo: 'Uno', ano: 2020, placa: "BGE 0A34", foto: 'https://quatrorodas.abril.com.br/wp-content/uploads/2019/08/uno-mile-modelo-1980-da-fiat-do-colecionador-secc81rgio-minervini.-e1566934866507.jpg?quality=70&strip=info' },
        { marca: 'Subaru', modelo: 'Impreza', ano: 2018, placa: "BGE 0A34", foto: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/2018_Subaru_Impreza_%28GT7%29_2.0i-S_hatchback_%282018-09-28%29_01.jpg' },
        { marca: 'Audi', modelo: 'A3', ano: 2020, placa: "BGE 0A34", foto: 'https://1.bp.blogspot.com/-IS3KZrq5G4w/XrnUumAYpiI/AAAAAAAAdOs/nFZ0ciUXNcIiFWf6YKu8skfJALK6-X0FwCLcBGAsYHQ/s1600/Audi-A3-Sportback-2021%2B%25285%2529.jpg' },
        { marca: 'Ford', modelo: 'Ranger', ano: 2002, placa: "BGE 0A34", foto: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/03/ford-ranger-storm-1-e1585331580704.jpg?quality=70&strip=info&w=1024'},
        { marca: 'VW', modelo: 'Gol', ano: 2020, placa: "BGE 0A34", foto: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/08/CHR8657.CR2_.jpg?quality=70&strip=info' },
        { marca: 'Fiat', modelo: 'Uno', ano: 2020, placa: "BGE 0A34", foto: 'https://quatrorodas.abril.com.br/wp-content/uploads/2019/08/uno-mile-modelo-1980-da-fiat-do-colecionador-secc81rgio-minervini.-e1566934866507.jpg?quality=70&strip=info' },
        { marca: 'Subaru', modelo: 'Impreza', ano: 2018, placa: "BGE 0A34", foto: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/2018_Subaru_Impreza_%28GT7%29_2.0i-S_hatchback_%282018-09-28%29_01.jpg' },
        { marca: 'Audi', modelo: 'A3', ano: 2020, placa: "BGE 0A34", foto: 'https://1.bp.blogspot.com/-IS3KZrq5G4w/XrnUumAYpiI/AAAAAAAAdOs/nFZ0ciUXNcIiFWf6YKu8skfJALK6-X0FwCLcBGAsYHQ/s1600/Audi-A3-Sportback-2021%2B%25285%2529.jpg' },
        { marca: 'Ford', modelo: 'Ranger', ano: 2002, placa: "BGE 0A34", foto: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/03/ford-ranger-storm-1-e1585331580704.jpg?quality=70&strip=info&w=1024'},
        { marca: 'VW', modelo: 'Gol', ano: 2020, placa: "BGE 0A34", foto: 'https://quatrorodas.abril.com.br/wp-content/uploads/2020/08/CHR8657.CR2_.jpg?quality=70&strip=info' },
        { marca: 'Fiat', modelo: 'Uno', ano: 2020, placa: "BGE 0A34", foto: 'https://quatrorodas.abril.com.br/wp-content/uploads/2019/08/uno-mile-modelo-1980-da-fiat-do-colecionador-secc81rgio-minervini.-e1566934866507.jpg?quality=70&strip=info' },
        { marca: 'Subaru', modelo: 'Impreza', ano: 2018, placa: "BGE 0A34", foto: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/2018_Subaru_Impreza_%28GT7%29_2.0i-S_hatchback_%282018-09-28%29_01.jpg' },
    ]
    
    return (
        <>
            <h1>Objetos de Carros</h1>
            <Row>
                {carros.map(carro =>(
                    <Col md={3} className="mb-3">
                        <Card>
                            <Card.Img variant="top" src={carro.foto} width="300px" height="250px"/>
                            <Card.Body>
                                <Card.Title>{carro.marca + " - " + carro.modelo}</Card.Title>
                                <hr/>
                                <Card.Text>
                                    <p>Placa: {carro.placa}</p>
                                    <p>Ano de fabricação: {carro.ano}</p>
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
           
        </>
    )
}

export default Objetos
