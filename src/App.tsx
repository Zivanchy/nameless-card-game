import CardsInHand from './components/molecules/cards-in-hand/CardsInHand';
import { cards } from './data/cards';

function App() {
  console.log({ cards });

  return (
    <div style={{ width: '100%' }}>
      <CardsInHand />
    </div>
  );
}

export default App;
