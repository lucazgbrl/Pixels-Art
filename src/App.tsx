import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ColorPalette from './components/colorPalette/colorPalette';
import Board from './components/Board/Board';

function App() {
  const [selectedColor, setSelectedColor] = React.useState<string>('#000000'); // cor inicial

  const handleColorSelect = (color: string) => {
      setSelectedColor(color);  // Atualiza a cor selecionada
    };
  return (
    <>
      <Header />
      <ColorPalette onColorSelect={handleColorSelect} />
      <Board selectedColor={selectedColor} />
    </>

  );
}

export default App;
