import { RepositoryItem } from "../RepositoryItem/RepositoryItem";

const repository = {
  name: 'Nome',
  description: 'Descrição',
  link: 'https://github.com/brocchirodrigo/ignite-react-01-github-explorer'
}

export function RepositoryList() {
  return (
    <section className='repository-list'>
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}