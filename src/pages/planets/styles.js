import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`
export const CustomTable = styled.table`
  background: rgba(22, 22, 22, 0.9);
  text-align: center;
  width: 90%;
  height: 70vh;
  border-top: 5px solid rgb(245, 245, 245, 0.2);
  border-bottom: 5px solid rgb(245, 245, 245, 0.2);
  border-top-left-radius: 2px solid #e6cc7f;
  border-radius: 5px;

  @media (min-width: 768px) {
    width: 70%;
  }
`

export const TableTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const TableHeader = styled.th`
  color: #e6cc7f;
  border-bottom: 1px solid rgb(245, 245, 245, 0.2);
  border-right: 1px solid rgb(245, 245, 245, 0.2);

  &:nth-child(3) {
    border-right: none;
  }
`
export const TableData = styled.td`
  border-bottom: 1px solid rgb(245, 245, 245, 0.2);
  border-right: 1px solid rgb(245, 245, 245, 0.2);

  &:nth-child(2) {
    text-transform: capitalize;
  }

  &:nth-child(3) {
    border-right: none;
  }
`
