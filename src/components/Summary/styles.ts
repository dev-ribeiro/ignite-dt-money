import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  margin-top: -5rem;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  padding: 2rem;

  background: ${(props) => props.theme['gray-600']};
  border-radius: 6px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    margin-top: 1rem;
    display: block;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background: ${props.theme['green-700']};
    `}
`
