import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, IssuesInfo } from './styles';
import api from '../../services/api';

interface RepositoryRoute {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  forks: number;
  stargazers_count: number;
  open_issues: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  html_url: string;
  title: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const { params } = useRouteMatch<RepositoryRoute>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((response) => {
      setRepository(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then((response) => {
      setIssues(response.data);
    });
  }, [params.repository]);
  return (
    <>
      <Header>
        <img src={logo} alt="Logo" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>stars</span>
            </li>
            <li>
              <strong>{repository.forks}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues}</strong>
              <span>issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}
      <IssuesInfo>
        {issues.map((issue) => (
          <a href={issue.html_url} key={issue.id}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </IssuesInfo>
    </>
  );
};

export default Repository;
