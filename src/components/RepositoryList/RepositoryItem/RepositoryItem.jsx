export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.full_name}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url}>Link repository</a>
    </li>
  );
}
