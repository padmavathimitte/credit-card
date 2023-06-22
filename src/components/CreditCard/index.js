// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  CreditCardContainer,
  Heading,
  Line,
  CardContainer,
  Number,
  CardHeading,
  Name,
  CreditCardInputContainer,
  CardInputContainer,
  PaymentHeading,
  InputContainer,
} from './styledComponents'

const CreditCard = () => {
  const [cardHolderName, setCardHolderName] = useState('')
  const [cardNumber, setCardNumber] = useState('')

  const onChangeName = event => {
    setCardHolderName(event.target.value.toUpperCase())
  }

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  return (
    <AppContainer>
      <CreditCardContainer>
        <Heading>CREDIT CARD</Heading>
        <Line />
        <CardContainer data-testid="creditCard">
          <Number>{cardNumber}</Number>
          <CardHeading>CARDHOLDER NAME</CardHeading>
          <Name>{cardHolderName}</Name>
        </CardContainer>
      </CreditCardContainer>
      <CreditCardInputContainer>
        <CardInputContainer>
          <PaymentHeading>Payment Method</PaymentHeading>
          <InputContainer
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={onChangeCardNumber}
          />
          <InputContainer
            type="text"
            placeholder="Cardholder Name"
            value={cardHolderName}
            onChange={onChangeName}
          />
        </CardInputContainer>
      </CreditCardInputContainer>
    </AppContainer>
  )
}

export default CreditCard
