import React, { useState, useEffect, useRef } from "react";
import { Input } from "../Input";
import "../utils/AutoCompleteModule.css";

type MultiSearchAutocompleteProps = {
  suggestions: string[];
  onSelection: (selectedTags: string[]) => void;
  variant?: "classic" | "standard" | "ghost";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
};

export const MultiSearchAutocomplete: React.FC<
  MultiSearchAutocompleteProps
> = ({ suggestions, onSelection, variant, radius }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [isSuggestionVisible, setIsSuggestionVisible] =
    useState<boolean>(false);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trimmedInput = inputValue.trim().toLowerCase();

    if (trimmedInput) {
      setFilteredSuggestions(
        suggestions.filter(
          (suggestions) =>
            suggestions.toLowerCase().includes(trimmedInput) &&
            !selectedTags.includes(suggestions)
        )
      );
    } else {
      setFilteredSuggestions(
        suggestions.filter((suggestions) => !selectedTags.includes(suggestions))
      );
    }
  }, [inputValue, selectedTags, suggestions]);

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

  const handleSuggestionClick = (suggestion: string) => {
    setSelectedTags((prevTags) => [...prevTags, suggestion]);
    setInputValue(""); // Clear input field after selecting a tag
    setIsSuggestionVisible(false);
    onSelection([...selectedTags, suggestion]); // Update parent with selected tags
  };

  const removeTag = (tag: string) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
    onSelection(selectedTags.filter((t) => t !== tag));
  };

  return (
    <div className="container">
      <div className="tagsInputContainer">
        {selectedTags.map((tag, index) => (
          <div key={index} className="tag">
            {tag}
            <button className="removeTagButton" onClick={() => removeTag(tag)}>
              x
            </button>
          </div>
        ))}
        <Input
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          variant={variant}
          radius={radius}
          placeholder="Type to search"
        />
      </div>

      {isSuggestionVisible && filteredSuggestions.length > 0 && (
        <div
          className={`suggestionsList ${isSuggestionVisible ? "visible" : ""}`}
          ref={suggestionsRef}
        >
          {filteredSuggestions.map((suggestion, index) => (
            <div
              key={index}
              className={`suggestionItem ${
                index === activeIndex ? "active" : ""
              }`}
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
