import React, { useState, useEffect } from 'react';
import BoardTitle from '../BoardTitle/BoardTitle';
import './Board.css';

const Board = ({ selectedColor }: { selectedColor: string }) => {
  const [boardSize, setBoardSize] = useState<number>(0); // Tamanho do quadro atual
  const [pixels, setPixels] = useState<string[]>(Array.from({ length: 25 }, () => 'white')); // Pixels do quadro
  const [inputValue, setInputValue] = useState<number>(0); // Valor do input

  // Atualiza os pixels sempre que o tamanho do quadro é alterado
  useEffect(() => {
    setPixels(Array.from({ length: boardSize * boardSize }, () => 'white'));
  }, [boardSize]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 5 && value <= 50) {
      setInputValue(value);
    }
  };

  const handleStartArt = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setBoardSize(inputValue); // Define o novo tamanho do quadro
  };

  const resetBoard = () => {
    setPixels(Array.from({ length: boardSize * boardSize }, () => 'white')); // Reseta os pixels para branco
  };

  const handlePixelClick = (index: number) => {
    const newPixels = [...pixels];
    newPixels[index] = selectedColor;
    setPixels(newPixels);
  };

  return (
    <section>
      <BoardTitle />
      <form>
        <label htmlFor="board-size">Tamanho do Quadro:</label>
        <input
          id="board-size"
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          min="5"
          max="50"
        />
        <button id='generate-board' onClick={handleStartArt}>Começar Arte</button>
      </form>
      <button id='clear-board' onClick={resetBoard}>Limpar Quadro</button>
      <div
        id='pixel-board'
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${boardSize}, 40px)`,
          gridTemplateRows: `repeat(${boardSize}, 40px)`,
        }}
      >
        {pixels.map((color, index) => (
          <div
            key={index}
            className="pixel"
            onClick={() => handlePixelClick(index)}
            style={{ backgroundColor: color, cursor: 'pointer' }}
          />
        ))}
      </div>
    </section>
  );
};

export default Board;