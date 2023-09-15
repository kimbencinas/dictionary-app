import { useState } from 'react'

export default function Search({ onSearch }) {
    const [inputWord, setInputWord] = useState('');

    const handleSearch = () => {
        onSearch(inputWord);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                onChange={(e) => {
                    setInputWord(e.target.value);
                }}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}