import { useState } from "react";
import useFetchShow from "../hooks/useFetchShow";
import SearchTerm from "./SearchTerm";
import ShowVisualization from "./ShowVisualization";

const AppWrapper = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const data = useFetchShow(searchTerm)

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.searchInput.value);
  };

  return (
    <div>
      <h1> TW SHOW APP </h1>
      <p> Use the form to search your favorite shows</p>
      {searchTerm === "" ? (
        <SearchTerm onSubmit = {handleSubmit}/>
      ) : (
        <ShowVisualization data={data} setShow = {setSearchTerm}/>
      )}
    </div>
  );
};
export default AppWrapper;
