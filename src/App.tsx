import React from 'react';
import { Header } from './components/Header';
import { Board } from './components/Board';
import { Column } from './components/Column';
import { Card } from './components/Card';
import { Pill } from './components/Pill';

function App() {
  return (
    <div className="App">
      <Header />
      <Board>
        <Column title="Last week">
          <Card
            title="Review scope"
            description="Review #390."
            footer={
              <div style={{ display: 'flex', gap: 8 }}>
                <Pill>Due 4/11</Pill>
                <Pill>Design</Pill>
              </div>
            }
          />
          <Card title="Team retro" />
        </Column>
        <Column title="This week">
          <Card
            title="Usability test"
            description="Research questions with Carina."
            footer={<Pill>Research</Pill>}
          />
        </Column>
        <Column title="Next week">
          <Card
            title="Culture workshop"
            description="Let’s build a great team."
            footer={<Pill variant="pink">Due 24/11</Pill>}
          />
        </Column>
      </Board>
    </div>
  );
}

export default App;
