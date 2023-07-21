
import React, { useState } from "react";
import "./../styles/App.css";

const items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
  "Item 12",
  "Item 13",
  "Item 14",
  "Item 15",
  "Item 16",
  "Item 17",
  "Item 18",
  "Item 19",
  "Item 20",
  "Item 21",
  "Item 22",
  "Item 23",
  "Item 24",
  "Item 25",
  "Item 26",
  "Item 27",
  "Item 28",
  "Item 29",
  "Item 30"
];


const ITEMS_PER_PAGE = 10;

const App = () => {
  const [displayedItems, setDisplayedItems] = useState([]);
  const [startItemIndex, setStartItemIndex] = useState(0);

  const handleLoadMore = () => {
    const nextPageItems = items.slice(
      startItemIndex,
      startItemIndex + ITEMS_PER_PAGE
    );
    setDisplayedItems((prevDisplayedItems) => [
      ...prevDisplayedItems,
      ...nextPageItems,
    ]);
    setStartItemIndex((prevStartItemIndex) => prevStartItemIndex + ITEMS_PER_PAGE);
  };

  const handleReset = () => {
    setDisplayedItems([]);
    setStartItemIndex(0);
  };

  return (
    <div>
      <ul>
        {displayedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {displayedItems.length < items.length ? (
        <button onClick={handleLoadMore}>Load More</button>
      ) : (
        <button onClick={handleReset}>Reset</button>
      )}
    </div>
  );
};


export default App;
