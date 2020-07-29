import React, { useState } from 'react'

import { Container, Button } from './styles'

export default function Form({ submitHandler }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')

    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [cityError, setCityError] = useState(false)

    const emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    function nameInputHandler({ target: { value } }) {
        setNameError(false)
        setName(value)
    }
    function emailInputHandler({ target: { value } }) {
        setEmailError(false)
        setEmail(value)
    }
    function cityInputHandler({ target: { value } }) {
        setCityError(false)
        setCity(value)
    }

    function buttonHandler() {

        if (name === '')
            setNameError(true)
        if (city === '')
            setCityError(true)
        if (!emailValidation.test(email))
            setEmailError(true)

        if((name !== '') && (city !== '') && (emailValidation.test(email))){
            const newMember = {
                name,
                city,
                email
            }
            submitHandler(newMember)

            setName('')
            setEmail('')
            setCity('')
        }
        
            

    }

    return (

        <>
            <Container>
                <h2>Inscrever novo</h2>
                <p>{nameError ? 'Digite um nome' : '  '}</p>
                <input
                    value={name}
                    placeholder={'Nome'}
                    onChange={nameInputHandler}

                />
                <p>{emailError ? 'Digite um e-mail válido' : '  '}</p>
                <input
                    value={email}
                    type={'email'}
                    pattern={".+@globex.com"}
                    placeholder={'E-mail'}
                    onChange={emailInputHandler}

                />
                <p>{cityError ? 'Digite o nome da sua cidade' : '  '}</p>
                <input
                    value={city}
                    placeholder={'Cidade'}
                    onChange={cityInputHandler}

                />

                <Button type="button" onClick={buttonHandler} >Enviar</Button>
            </Container>
        </>
    )
};
