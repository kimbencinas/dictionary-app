import { useState } from 'react'

export default function Search({ onSearch }) {
    const [inputWord, setInputWord] = useState('');

    const handleSearch = () => {
        onSearch(inputWord);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={inputWord}
                onChange={(e) => setInputWord(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}