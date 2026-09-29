console.log("Sistema de Gerenciamento de Treinos iniciado.");

function adicionarExercicio() {
    const campo = document.getElementById("nomeExercicio");
    const lista = document.getElementById("listaExercicios");

    if (campo.value.trim() === "") {
        alert("Digite o nome do exercício.");
        return;
    }

    const item = document.createElement("li");
    item.textContent = campo.value;

    lista.appendChild(item);
    
    document.getElementById("totalExercicios").textContent = lista.children.length;
	

    campo.value = "";
}

function registrarTreino() {
    const campo = document.getElementById("nomeTreino");
    const lista = document.getElementById("listaTreinos");

    if (campo.value.trim() === "") {
        alert("Digite o nome do treino.");
        return;
    }

    const item = document.createElement("li");
    item.textContent = campo.value;

    lista.appendChild(item);

    document.getElementById("totalTreinos").textContent = lista.children.length;

    campo.value = "";
}