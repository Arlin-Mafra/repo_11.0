import React, { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repository } from './styles';
import logo from '../../assets/logo.svg';
import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepo = localStorage.getItem('@gitApi:repos');

    if (storageRepo) {
      return JSON.parse(storageRepo);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('@gitApi:repos', JSON.stringify(repositories));
  }, [repositories]);

  async function handleAddRepos(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    const response = await api.get(`repos/${newRepo}`);
    console.log(response.data);
    const repository = response.data;
    setRepositories([...repositories, repository]);
    setNewRepo('');
  }

  return (
    <>
      <img src={logo} alt="Logo" />
      <Title>Explore Repositórios no GitHub</Title>
      <Form onSubmit={handleAddRepos}>
        <input
          type="text"
          placeholder="Pesquise aqui o repositório"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repository>
        {repositories.map((repo) => (
          <Link to={`/repositories/${repo.full_name}`} key={repo.full_name}>
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repository>
    </>
  );
};

export default Dashboard;
