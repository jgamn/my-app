import { useState } from "react";

const App = () => {
    const [contador,setcontador] = useState(0)
    return (
   
     <div>
        <h1>Ativar contador: {contador}</h1>
        <button onClick = {() => setcontador(contador+1)}>Contar!</button>
        <h2>Resultado:{contador}</h2>
     </div>
    );
  }
  export default App