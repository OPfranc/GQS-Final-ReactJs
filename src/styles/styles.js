import styled from 'styled-components'


export const PageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 40px;

    @media (max-width: 768px) {
    flex-direction: column;
  }
`