import React from 'react';
import { Header } from './components/Header';
import { Board } from './components/Board';
import { Column } from './components/Column';

function App() {
  return (
    <div className="App">
      <Header />
      <Board>
        <Column title="Last week">
        </Column>
        <Column title="This week">
        </Column>
        <Column title="Next week">
        </Column>
      </Board>
    </div>
  );
}

export default App;
