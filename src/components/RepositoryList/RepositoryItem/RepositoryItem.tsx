export interface IRepositoryItemProps {
  repository: {
    full_name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: IRepositoryItemProps): JSX.Element {
  return (
    <li>
      <strong>{props.repository.full_name}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url}>Link repository</a>
    </li>
  );
}
