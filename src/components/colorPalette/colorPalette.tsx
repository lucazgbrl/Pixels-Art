import React, { useState } from "react";
import "./colorPalette.css";

const ColorPalette = ({ onColorSelect }: { onColorSelect: (color: string) => void }) => {
  const [colors, setColors] = useState<string[]>(['#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00']);

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return randomColor;
  };

  const changePaletteColors = () => {
    const newColors = Array.from({ length: 5 }, () => generateRandomColor());
    setColors(newColors);  // Atualiza a paleta com as novas cores
  };

  const handleColorSelect = (color: string) => {
    onColorSelect(color);
  };

  return (
    <section id="palette-section">
      <h2>Cores</h2>
      <ul id="color-palette">
        {colors.map((color, index) => (
          <li
            key={index}
            className="color"
            style={{ backgroundColor: color }}
            onClick={() => handleColorSelect(color)}
          />
        ))}
      </ul>
      <button id="button-random-color" aria-label="Gerar nova paleta de cores" onClick={changePaletteColors}>Nova Paleta</button>
    </section>
  );
};

export default ColorPalette;