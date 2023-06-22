// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    height: 100vh;
    flex-direction: row;
  }
`
export const CreditCardContainer = styled.div`
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #3b4b69;
  @media screen and (min-width: 768px) {
    height: 100vh;
    width: 50%;
  }
`

export const Heading = styled.h1`
  font-size: 18px;
  margin-bottom: 5px;
  color: #fff;
  font-weight: bold;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const Line = styled.hr`
  width: 25px;
  color: #ffd773;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    margin-bottom: 75px;
  }
`
export const CardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  height: 250px;
  width: 80%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 40px;
`
export const Number = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-top: 60px;
  height: 40px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const CardHeading = styled.p`
  font-size: 14px;
  color: #fff;
  margin: 20px 0px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-top: 10px 0px;
  height: 30px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

export const CreditCardInputContainer = styled.div`
  padding: 20px 5px 30px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const CardInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  border-color: transparent;
  background-color: #fff;
  box-shadow: 1px 2px 2px #d3d9e0;
  width: 80%;
  margin-top: 10px;
`
export const PaymentHeading = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #344e7a;
  font-family: 'Roboto';
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const InputContainer = styled.input`
  padding: 10px;
  border: 2px solid ##c3cad9;
  font-size: 14px;
  color: #475569;
  width: 80%;
  margin-bottom: 25px;
`
