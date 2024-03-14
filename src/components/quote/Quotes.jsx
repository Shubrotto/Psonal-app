import "./quotes.css";
import useFetch from "../useFetch";

const Quotes = () => {
  const [quotes] = useFetch("https://dummyjson.com/quotes");
  return (
    <div className="quotes_container">
      <div className="wrapper_quotes">
        {quotes?.map((data) => (
          <div key={data.id} className="quotes_item">
            <p>`{data.quote}`</p>
            <h5>
              Author: <span>{data.author}</span>
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quotes;
