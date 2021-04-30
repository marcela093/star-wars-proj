import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 1280px) {
    width: 80%;
  }
`

export const MoviesCard = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px;
  border-radius: 10px;
  border: 0.5px solid #e6cc7f;
  box-shadow: 0 0 10px #ffffff;
  background: rgba(22, 22, 22, 0.9);
  width: 80%;

  @media (min-width: 768px) {
      width: 39%;
  }
  @media (min-width: 1280px) {
      width: 25%; 
`

export const MoviesImageDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`

export const MoviesInfoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  flex-direction: column;
  text-align: justify;
  line-height: 1.4;
`
