import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <Dialog.Title>Nova Transação</Dialog.Title>

          <CloseButton>
            <X size={24} />
          </CloseButton>

          <form action="">
            <input type="text" placeholder="Descrição" required />
            <input type="number" placeholder="Preço" required />
            <input type="text" placeholder="Categoria" required />

            <TransactionType>
              <TransactionTypeButton variant="income" value="income">
                <ArrowCircleUp />
                Entradas
              </TransactionTypeButton>
              <TransactionTypeButton variant="outcome" value="outcome">
                <ArrowCircleDown />
                Saídas
              </TransactionTypeButton>
            </TransactionType>
            <button type="submit">Cadastrar</button>
          </form>
        </Content>
      </Overlay>
    </Dialog.Portal>
  )
}
