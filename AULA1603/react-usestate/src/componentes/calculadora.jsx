import { useState } from "react";
import "./calculadora.css";

export default function Calculadora({ titulo }) {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState("");

  function validar() {
    if (num1 <= 0 || num2 <= 0) {
      alert("Não são permitidos números 0 ou negativos!");
      return false;
    }
    return true;
  }

  function calcular(tipo) {

    if (tipo !== "raiz" && !validar()) return;

    let n1 = Number(num1);
    let n2 = Number(num2);

    switch (tipo) {
      case "somar":
        setResultado(n1 + n2);
        break;

      case "subtrair":
        setResultado(n1 - n2);
        break;

      case "multiplicar":
        setResultado(n1 * n2);
        break;

      case "dividir":
        setResultado(n1 / n2);
        break;

      case "potencia":
        setResultado(Math.pow(n1, n2));
        break;

      case "raiz":
        if (n1 <= 0) {
          alert("Digite número maior que 0");
          return;
        }
        setResultado(Math.sqrt(n1));
        break;

      case "limpar":
        setNum1("");
        setNum2("");
        setResultado("");
        break;
    }
  }

  return (

    <div className="container">

      <h1>{titulo}</h1>

      <div className="calculadora">

        <input
          type="number"
          placeholder="Número 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />

        <input
          type="number"
          placeholder="Número 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />

        <div className="botoes">

          <button onClick={() => calcular("somar")}>+</button>
          <button onClick={() => calcular("subtrair")}>-</button>
          <button onClick={() => calcular("multiplicar")}>×</button>
          <button onClick={() => calcular("dividir")}>÷</button>

          <button onClick={() => calcular("potencia")}>xʸ</button>
          <button onClick={() => calcular("raiz")}>√</button>

          <button className="limpar" onClick={() => calcular("limpar")}>
            C
          </button>

        </div>

        <div className="resultado">
          Resultado: {resultado}
        </div>

      </div>

    </div>
  );
}