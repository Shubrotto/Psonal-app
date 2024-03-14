import { useState } from "react";
import "./quotes.css";
import useFetch from "../useFetch";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Quotes = () => {
  const [showData, setShowData] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [quotes] = useFetch("https://dummyjson.com/quotes");

  const handleClick = () => {
    setShowData(!showData);
  };

  const ItemPerIndex = 1;
  console.log(startIndex);

  const handleClickUp = () => {
    if (startIndex > 0) {
      setStartIndex((startIndex) => startIndex - 1);
    }
  };

  const handleClickDown = () => {
    const quote = quotes.map((quote) => quote);
    if (startIndex.ItemPerIndex < quote.length) {
      setStartIndex((startIndex) => startIndex + 1);
    }
  };

  return (
    <div className="more_project">
      <button className="show_more_btn" onClick={handleClick}>
        Show more
      </button>
      {showData === true ? (
        <div className="quotes_container">
          <div className="wrapper_quotes">
            <FaChevronLeft className="left_arrow" onClick={handleClickUp} />
            {quotes.slice(startIndex, startIndex + ItemPerIndex).map((data) => (
              <div key={data.id} className="quotes_item">
                <p>`{data.quote}`</p>
                <h5>
                  Author: <span>{data.author}</span>
                </h5>
              </div>
            ))}
            <FaChevronRight className="right_arrow" onClick={handleClickDown} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Quotes;
