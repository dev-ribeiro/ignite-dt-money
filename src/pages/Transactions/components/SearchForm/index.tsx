import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { SearchFormContainer } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInput = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInput) {
    console.log(data)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        <span>Buscar</span>
      </button>
    </SearchFormContainer>
  )
}
