import React, { useState, useEffect } from "react";

function Letreiro() {
  const [texto, setTexto] = useState("");
  const mensagem = "Venha estudar na Fatec"; 
  const intervalo = 150; 

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTexto((prev) => prev + mensagem[index]); 
      index++;
      if (index === mensagem.length) {
        clearInterval(timer); 
      }
    }, intervalo);

    return () => clearInterval(timer); 
  }, []);

  return (
    <div>
      <h1>{texto}</h1> {}
    </div>
  );
}

export default Letreiro;