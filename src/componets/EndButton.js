
const EndButton = ({exitGame, name}) => {

  return (
    <div>
      <button className="end-now" onClick={exitGame}>{name}</button>
    </div>
  );
};

export default EndButton;
