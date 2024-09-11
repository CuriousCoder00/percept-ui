import { Input } from "@/Input";
import "./AutoCompleteModule.css";
import React, { useState, useEffect, useRef } from "react";

type AutoCompleteProps = {
  suggestions: string[];
  onSelection: (value: string) => void;

};

export const AutoCompleteSearch: React.FC<AutoCompleteProps> = ({
  suggestions,
  onSelection,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [isSuggestionVisible, setIsSuggestionVisible] =
    useState<boolean>(false);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trimmedInput = inputValue.trim().toLowerCase();
    if (trimmedInput) {
      setFilteredSuggestions(
        suggestions.filter((suggestion) =>
          suggestion.toLowerCase().includes(trimmedInput.toLowerCase())
        )
      );
    } else {
      setFilteredSuggestions(suggestions);
    }
  }, [inputValue,suggestions]); 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsSuggestionVisible(true);
  };

  const handleFocus = () => {
    setIsSuggestionVisible(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsSuggestionVisible(false);
    }, 100);
  };  

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" && activeIndex < filteredSuggestions.length - 1) {
      setActiveIndex(activeIndex + 1); 
    } else if (e.key === "ArrowUp" && activeIndex > 0) {
      setActiveIndex(activeIndex - 1); 
    } else if (e.key === "Enter" && activeIndex >= 0) {
      handleSuggestionClick(filteredSuggestions[activeIndex]);
    }
  };
  const handleSuggestionClick=(suggestions:string)=>{
    setInputValue(suggestions);  
    setIsSuggestionVisible(false)
    onSelection(suggestions)

  }

  return (
    <div className="autoCompleteContainer">
      <Input
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        variant="classic"
        placeholder="Type to search"
      />
        {isSuggestionVisible && (
        <div className={`suggestionsList ${isSuggestionVisible && "visible"}`} ref={suggestionsRef}>
          {filteredSuggestions.map((suggestion, index) => (
            <div
              key={index}
              className={`suggestionItem ${index === activeIndex && "active"}`}
              onMouseDown={() => handleSuggestionClick(suggestion)}
            >
           {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
