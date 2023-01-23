import "./StartScreen.css";

const StartScreen = ({ start }) => {
  return (
    <div className="content">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar o jogo</p>
      <button onClick={start}>Começar o jogo</button>
      <div className="rules">
        <h4>Como Jogar</h4>
        <span>
          <p>-Você terá 3 tentativas para acertar a palavra.</p>
          <p>-Sempre que acertar, sua pontuação será acrescida e suas chances resetadas.</p>
          <p>-AS PALAVRAS COM ACENTUAÇÃO GRÁFICA EXIGEM A MESMA(Ex.: à, é, ê, ô, etc.).</p>
          <p>-PALAVRAS QUE POSSUEM ESPAÇOES TAMBÉM EXIGEM O MESMO(Ex.:São Paulo)</p>
        </span>
      </div>
    </div>
  );
};

export default StartScreen;
