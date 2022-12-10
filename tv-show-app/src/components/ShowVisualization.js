const ShowVisualization = (props) => {
  const firstResult = props.data[0]?.show;
  const handleButtonClick = (event) => {
    props.setShow(event.target.innerHTML)
}
  return (
    <div>
      {firstResult && (
        <div>
          <img
            alt={`promotional material for ${firstResult.name}`}
            src={firstResult.image.medium}
          />
          <p> Premier date: {firstResult.premiered}</p>
          <p> The show rating is: {firstResult.rating.average}</p>
        </div>
      )}
      <ul>
      {props.data.map((show) => 
      <li>
        <button onClick={handleButtonClick}>{show.show.name}</button>
        </li>)

      }
      </ul>
    </div>
  );
};

export default ShowVisualization;
