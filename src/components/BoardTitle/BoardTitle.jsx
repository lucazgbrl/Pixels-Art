import React, { useState } from 'react';

const BoardTitle = () => {
    const [isEditing, setIsEditing] = useState(true);
    const [title, setTitle] = useState('');

    const handleInputChange = (e) => {
        setTitle(e.target.value);
    };

    const handleButtonClick = () => {
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    <input type="text" value={title} placeholder='Nomeie o Quadro' onChange={handleInputChange} />
                    <button onClick={handleButtonClick}>Salvar</button>
                </div>
            ) : (
                <>
                    <h1>{title}</h1>
                    <button onClick={() => setIsEditing(true)}>Mudar Nome</button>
                </>

            )}
        </div>
    );
};

export default BoardTitle;