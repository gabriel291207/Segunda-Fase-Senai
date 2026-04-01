import { useState } from "react";
import Principal from "../../componentes/Principal/Principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado"

function ListaTarefas({}) {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {

    if (novaTarefa.trim() === "") {
      alert("Digite uma tarefa para adicionar")
      return;
    }


    console.log("novaTarefa)")

    setTarefas([novaTarefa])
  }

  return (
    <Principal>
      <h2>Lista de Tarefas</h2>

      <CampoCustomizado
        label="Nova Tarefa"
        //propriedade não mapeada...
        id="novaTarefa"
        type="text"
        placeholder="Precione Enter para adicionar"
        value={novaTarefa}
        onChange={(event) => setNovaTarefa(event.target.value)}
      />

      <BotaoCustomizado tipo="secundario" aoClicar={adicionarTarefa}>+</BotaoCustomizado>

      {JSON.stringify(tarefas, null, 2)}
    </Principal>
  );
}

export default ListaTarefas;
