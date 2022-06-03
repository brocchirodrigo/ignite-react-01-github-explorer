import { useState, useEffect } from "react";

import { RepositoryItem } from "./RepositoryItem/RepositoryItem";
import "./style.scss";


export function RepositoryList() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/brocchirodrigo/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repos.map(repo => {
          return <RepositoryItem key={repo.id} repository={repo} />
        })}
      </ul>
    </section>
  );
}
