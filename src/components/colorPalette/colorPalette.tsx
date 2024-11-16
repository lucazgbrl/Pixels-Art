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
    <div>
      <button className="palette-button" onClick={changePaletteColors}>Mudar Paleta</button>
      <div id="color-palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color"
            style={{ backgroundColor: color }}
            onClick={() => handleColorSelect(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;