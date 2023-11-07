import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`


*{
  --cor-principal: #a7727d;
  --cor-secundaria: #f9f5e7;
}



`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`
