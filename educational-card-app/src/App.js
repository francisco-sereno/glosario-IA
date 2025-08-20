import React from 'react';
import EducationalCard from './components/EducationalCard/EducationalCard';
import './App.css';

function App() {
  const cardData = {
    image: 'https://picsum.photos/seed/react/400/300',
    title: 'React: Una Biblioteca para Interfaces de Usuario',
    description: 'React te permite construir interfaces de usuario a partir de piezas individuales llamadas componentes. ¡Este es un ejemplo de uno de ellos!'
  };

  return (
    <div className="App">
      <EducationalCard
        image={cardData.image}
        title={cardData.title}
        description={cardData.description}
      />
    </div>
  );
}

export default App;
