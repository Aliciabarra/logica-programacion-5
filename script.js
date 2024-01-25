function adivinarNumero() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    const intentos = [];

    while (true) {
        let inputUsuario = prompt("Ingresa un número del 1 al 100:");

        // Verificar si el input es un número válido
        if (!isNaN(inputUsuario) && inputUsuario >= 1 && inputUsuario <= 100) {
            const numeroUsuario = parseInt(inputUsuario);
            intentos.push(numeroUsuario);

            if (numeroUsuario === numeroSecreto) {
                alert("Felicidades, adivinaste el número secreto.");
                alert("Lista de números introducidos: " + intentos.join(', '));
                break;
            } else {
                alert("Ups, el número secreto es incorrecto, vuelve a intentarlo.");
            }
        } else {
            alert("Por favor, ingresa un número válido del 1 al 100.");
        }
    }
}

// Llamar a la función para comenzar el juego
adivinarNumero();

  

