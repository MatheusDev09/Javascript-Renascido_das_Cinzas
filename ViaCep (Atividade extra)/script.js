const cepInput = document.querySelector("#cep");
const imgDiv = document.querySelector(".img");
const form = document.querySelector("form");

form.addEventListener('submit', (event) => { // Ao clicar fora do input do CEP (Ápos ter digitado)
    event.preventDefault();
    const cep = document.querySelector("#cep").value; // Pega o cep digitado
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    if (cep.length !== 8) { // Verifica se está dentro das normas de CEP
        alert("CEP Inválido. O CEP deve conter 8 digítos.");
        cepInput.value = ""; // Limpa o input para nova escrita;
    } else { 

    fetch(url)
    .then(response => response.json()) // Transforma a resposta em json
    .then(data => {
        document.querySelector("#rua").value = data.logradouro; // Valor da data da API do Fetch
        document.querySelector("#bairro").value = data.bairro;
        document.querySelector("#cidade").value = data.localidade;
        document.querySelector("#estado").value = data.uf;      
        let estado = data.uf;
        imgDiv.className = `img ${estado}`; // Muda o nome da classe da imgDiv com a correspondente do estado

    })
    }
});
