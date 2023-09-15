import { useState, useEffect } from 'react'

export default function Dictionary({ word, definition }) {

    return (
        <>
            {word && <h1 className="word">{word}</h1>}
            <p className="definition">Definition:</p>
            {definition.length > 0 ? (
                definition.map((meaning, index) => (
                    <p className="definition-description" key={index}>{meaning.definitions[0]?.definition}</p>
                ))
            ) : (
                <p className="definition-description">Definition not found.</p>
            )}
        </>
    );
}

