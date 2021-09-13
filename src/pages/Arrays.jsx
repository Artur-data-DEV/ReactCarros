import React from 'react'
import { Alert, ListGroup } from 'react-bootstrap'

const Arrays = () => {

    const carros = ['Audi A3', 'Ford Ranger', "Gol", "Fiat Uno", "Subaru"]
    
    return (
        <>
            <h1>Array Carros</h1>
            {carros.map (carro => (
                <p>{carro}</p>
            ))}

            {carros.map(carro => (
                <Alert variant="danger">{carro}</Alert>
            ))}

            <ListGroup>
                {carros.map (carro => (
                    <ListGroup.Item>{carro}</ListGroup.Item>
                ))}
            </ListGroup>
        </>
    )
}

export default Arrays
