
const EndButton = ({exitGame}) => {
  return (
    <div>
      <button className="end-now" onClick={exitGame}>Desistir</button>
    </div>
  );
};

export default EndButton;
