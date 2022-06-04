import { useState, useEffect } from "react";

import { RepositoryItem } from "./RepositoryItem/RepositoryItem";
import "./style.scss";

interface IRepository {
  full_name: string;
  description: string;
  html_url: string;
}


export function RepositoryList() {
  const [repos, setRepos] = useState<IRepository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/brocchirodrigo/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repos.map(repository => {
          return <RepositoryItem key={repository.full_name} repository={repository} />
        })}
      </ul>
    </section>
  );
}
