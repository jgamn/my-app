import { useState } from "react";

const App = () => {
const [contador,setcontador] = useState(0)

  function fibonacci(conta2) {
    if (conta2 <= 1) return conta2;
    return fibonacci(conta2-1) + fibonacci(conta2-2);
    }

    return (
      
      <div>
        <h1>Contador Fibonacci: {contador}</h1>
       <h2>Numero Fibonacci {fibonacci(contador)}</h2>
        <button onClick = {() => setcontador(contador+1)}>clique</button>
     </div>
    );
  }
  export default App