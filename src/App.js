import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyles from './styles/Global'
import { PageWrapper } from './styles/styles'

import api from './services/api'

import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'


function App() {

  const [members, setMembers] = useState([])
  const [didInitialLoad, setDidInitialLoad] = useState(false)

  useEffect(() => {

    async function LoadData() {

      const response = await api.get(`/`)
      const { data } = response

      const selectedData = data.map(({ name, address: { city }, email }) => ({ name, city, email }))

      setMembers(selectedData)
      setDidInitialLoad(true)
    }

    LoadData()
  }, [])


  useEffect(() => {

    if (!didInitialLoad)
      return

    toast.success('Novo inscrito!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })

  }, [members])

  function addNewMember(newMember) {

    const newMemberList = [...members, newMember]
    setMembers(newMemberList)
  }



  return (
    <>
      <GlobalStyles />
      <ToastContainer />
      <Header title={'Curso de Desenvolvimento'} />
      <PageWrapper>
        <Form submitHandler={newMember => addNewMember(newMember)} />
        <List membersList={members} />
      </PageWrapper>
    </>
  );
}

export default App;
