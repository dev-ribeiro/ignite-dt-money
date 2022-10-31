import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={22} color="#00b37e" />
        </header>
        <strong>R$ 17.488,00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={22} color="#f75a68" />
        </header>
        <strong>R$ 17.488,00</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={22} color="#fff" />
        </header>
        <strong>R$ 17.488,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
