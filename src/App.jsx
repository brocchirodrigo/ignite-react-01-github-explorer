import React from 'react';
import { Counter } from './components/Counter/Counter';
import { RepositoryList } from './components/RepositoryList/RepositoryList';
import './styles/global.scss';

export function App() {
  return (
    <>
      <RepositoryList />
      {/* <Counter /> */}
    </>
  );
}
