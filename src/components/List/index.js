import React from 'react'

import { Container } from './styles'


export default function List({ membersList }) {


    return (

        <>
            <Container>

                {membersList.reverse().map(({ name, city }, index) => (
                    <ul key={index}>
                        <li >
                            <strong>{name}</strong>
                            <p>{city}</p>
                        </li>
                    </ul>
                ))}

            </Container>
        </>
    )
};
