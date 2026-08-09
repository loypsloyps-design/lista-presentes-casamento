/* =====================================================
   LISTA DE PRESENTES
===================================================== */

const presentes = [

    // =========================
    // COZINHA
    // =========================

    { id: 1, nome: "Pano de prato – kit", valor: 25, categoria: "cozinha", icone: "🧺" },
    { id: 2, nome: "Jogo de colheres de pau", valor: 25, categoria: "cozinha", icone: "🥄" },
    { id: 3, nome: "Porta-temperos", valor: 30, categoria: "cozinha", icone: "🧂" },
    { id: 4, nome: "Jogo de copos", valor: 30, categoria: "cozinha", icone: "🥛" },
    { id: 5, nome: "Jogo de xícaras", valor: 35, categoria: "cozinha", icone: "☕" },
    { id: 6, nome: "Descanso de panela", valor: 30, categoria: "cozinha", icone: "🍳" },
    { id: 7, nome: "Potes plásticos – kit", valor: 35, categoria: "cozinha", icone: "🥡" },
    { id: 8, nome: "Jogo de facas", valor: 40, categoria: "cozinha", icone: "🔪" },
    { id: 9, nome: "Jogo de talheres simples", valor: 50, categoria: "cozinha", icone: "🍴" },
    { id: 10, nome: "Escorredor de massa", valor: 35, categoria: "cozinha", icone: "🍝" },
    { id: 11, nome: "Tábua de corte", valor: 40, categoria: "cozinha", icone: "🔪" },
    { id: 12, nome: "Travessa", valor: 45, categoria: "cozinha", icone: "🥘" },
    { id: 13, nome: "Assadeira", valor: 50, categoria: "cozinha", icone: "🍰" },
    { id: 14, nome: "Jogo de potes de vidro", valor: 60, categoria: "cozinha", icone: "🫙" },
    { id: 15, nome: "Jogo de taças", valor: 60, categoria: "cozinha", icone: "🥂" },
    { id: 16, nome: "Frigideira", valor: 60, categoria: "cozinha", icone: "🍳" },
    { id: 17, nome: "Jogo de utensílios", valor: 65, categoria: "cozinha", icone: "🥄" },
    { id: 18, nome: "Lixeira para cozinha", valor: 70, categoria: "cozinha", icone: "🗑️" },
    { id: 19, nome: "Escorredor de louça", valor: 80, categoria: "cozinha", icone: "🍽️" },
    { id: 20, nome: "Jogo de pratos", valor: 100, categoria: "cozinha", icone: "🍽️" },
    { id: 21, nome: "Panela", valor: 80, categoria: "cozinha", icone: "🍲" },
    { id: 22, nome: "Panela de pressão", valor: 120, categoria: "cozinha", icone: "🥘" },
    { id: 23, nome: "Jogo de panelas", valor: 250, categoria: "cozinha", icone: "🍳" },
    { id: 24, nome: "Chaleira", valor: 70, categoria: "cozinha", icone: "🫖" },
    { id: 25, nome: "Liquidificador", valor: 150, categoria: "eletro", icone: "🥤" },
    { id: 26, nome: "Sanduicheira", valor: 100, categoria: "eletro", icone: "🥪" },
    { id: 27, nome: "Cafeteira", valor: 180, categoria: "eletro", icone: "☕" },
    { id: 28, nome: "Batedeira", valor: 150, categoria: "eletro", icone: "🥣" },
    { id: 29, nome: "Air Fryer", valor: 350, categoria: "eletro", icone: "🍟" },
    { id: 30, nome: "Mixer", valor: 120, categoria: "eletro", icone: "🥤" },

    // =========================
    // QUARTO
    // =========================

    { id: 31, nome: "Jogo de cama casal", valor: 120, categoria: "quarto", icone: "🛏️" },
    { id: 32, nome: "Jogo de cama queen", valor: 160, categoria: "quarto", icone: "🛏️" },
    { id: 33, nome: "Kit de fronhas", valor: 50, categoria: "quarto", icone: "🛏️" },
    { id: 34, nome: "Kit de travesseiros", valor: 90, categoria: "quarto", icone: "🛏️" },
    { id: 35, nome: "Protetor de colchão", valor: 100, categoria: "quarto", icone: "🛏️" },
    { id: 36, nome: "Edredom", valor: 180, categoria: "quarto", icone: "🛏️" },
    { id: 37, nome: "Cobertor", valor: 150, categoria: "quarto", icone: "🛌" },
    { id: 38, nome: "Manta", valor: 100, categoria: "quarto", icone: "🧶" },
    { id: 60, nome: "Kit de almofadas", valor: 100, categoria: "quarto", icone: "🛋️" },
    { id: 61, nome: "Cortina para quarto", valor: 150, categoria: "quarto", icone: "🪟" },
    { id: 83, nome: "Guarda-roupa", valor: 1500, categoria: "quarto", icone: "🚪" },
    { id: 84, nome: "Cama box", valor: 1200, categoria: "quarto", icone: "🛏️" },
    { id: 85, nome: "Colchão", valor: 1500, categoria: "quarto", icone: "🛏️" },
    { id: 89, nome: "Guarda-roupa casal", valor: 2000, categoria: "quarto", icone: "🚪" },
    { id: 95, nome: "Jogo completo de cama", valor: 300, categoria: "quarto", icone: "🛏️" },

    // =========================
    // BANHEIRO
    // =========================

    { id: 39, nome: "Jogo de toalhas", valor: 120, categoria: "banheiro", icone: "🛁" },
    { id: 40, nome: "Toalha de banho", valor: 50, categoria: "banheiro", icone: "🧖" },
    { id: 41, nome: "Toalhas de rosto", valor: 40, categoria: "banheiro", icone: "🧼" },
    { id: 42, nome: "Tapete para banheiro", valor: 50, categoria: "banheiro", icone: "🛁" },
    { id: 43, nome: "Kit de tapetes", valor: 90, categoria: "banheiro", icone: "🛁" },
    { id: 44, nome: "Cesto de roupa", valor: 80, categoria: "banheiro", icone: "🧺" },
    { id: 53, nome: "Organizador de banheiro", valor: 60, categoria: "banheiro", icone: "🧴" },
    { id: 54, nome: "Porta-sabonete líquido", valor: 40, categoria: "banheiro", icone: "🧴" },
    { id: 55, nome: "Kit de banheiro", valor: 70, categoria: "banheiro", icone: "🛁" },
    { id: 56, nome: "Espelho", valor: 100, categoria: "banheiro", icone: "🪞" },
    { id: 96, nome: "Kit completo de toalhas", valor: 250, categoria: "banheiro", icone: "🛁" },

    // =========================
    // CASA
    // =========================

    { id: 45, nome: "Cabides – kit", valor: 50, categoria: "casa", icone: "👕" },
    { id: 46, nome: "Ferro de passar", valor: 130, categoria: "casa", icone: "👔" },
    { id: 47, nome: "Tábua de passar", valor: 100, categoria: "casa", icone: "👔" },
    { id: 48, nome: "Varal", valor: 80, categoria: "casa", icone: "🧺" },
    { id: 49, nome: "Kit de limpeza", valor: 60, categoria: "casa", icone: "🧹" },
    { id: 50, nome: "Aspirador de pó", valor: 300, categoria: "casa", icone: "🧹" },
    { id: 51, nome: "Ventilador", valor: 220, categoria: "casa", icone: "🌀" },
    { id: 52, nome: "Organizador de cozinha", valor: 80, categoria: "casa", icone: "🗄️" },
    { id: 57, nome: "Abajur", valor: 100, categoria: "casa", icone: "💡" },
    { id: 58, nome: "Luminária", valor: 120, categoria: "casa", icone: "💡" },
    { id: 59, nome: "Relógio de parede", valor: 70, categoria: "casa", icone: "🕐" },
    { id: 62, nome: "Cortina para sala", valor: 200, categoria: "casa", icone: "🪟" },
    { id: 78, nome: "Aspirador vertical", valor: 450, categoria: "casa", icone: "🧹" },

    // =========================
    // SALA
    // =========================

    { id: 79, nome: "Caixa de som", valor: 400, categoria: "sala", icone: "🔊" },
    { id: 80, nome: "TV", valor: 1500, categoria: "sala", icone: "📺" },
    { id: 86, nome: "Sofá", valor: 1500, categoria: "sala", icone: "🛋️" },
    { id: 87, nome: "Mesa de jantar", valor: 800, categoria: "sala", icone: "🍽️" },
    { id: 88, nome: "Rack para TV", valor: 500, categoria: "sala", icone: "📺" },
    { id: 98, nome: "Smart TV grande", valor: 2500, categoria: "sala", icone: "📺" },

    // =========================
    // ELETRODOMÉSTICOS
    // =========================

    { id: 63, nome: "Jogo de panelas premium", valor: 400, categoria: "eletro", icone: "🍳" },
    { id: 64, nome: "Conjunto de taças premium", valor: 150, categoria: "cozinha", icone: "🥂" },
    { id: 65, nome: "Faqueiro completo", valor: 180, categoria: "cozinha", icone: "🍴" },
    { id: 66, nome: "Jogo de jantar completo", valor: 250, categoria: "cozinha", icone: "🍽️" },
    { id: 67, nome: "Conjunto de travessas", valor: 150, categoria: "cozinha", icone: "🥘" },
    { id: 68, nome: "Kit de potes herméticos", valor: 120, categoria: "cozinha", icone: "🫙" },
    { id: 69, nome: "Panela elétrica", valor: 200, categoria: "eletro", icone: "🍲" },
    { id: 70, nome: "Grill elétrico", valor: 200, categoria: "eletro", icone: "🥩" },
    { id: 71, nome: "Forno elétrico", valor: 400, categoria: "eletro", icone: "🔥" },
    { id: 72, nome: "Micro-ondas", valor: 550, categoria: "eletro", icone: "📦" },
    { id: 73, nome: "Cafeteira elétrica premium", valor: 350, categoria: "eletro", icone: "☕" },
    { id: 74, nome: "Air Fryer grande", valor: 450, categoria: "eletro", icone: "🍟" },
    { id: 75, nome: "Processador de alimentos", valor: 300, categoria: "eletro", icone: "🥕" },
    { id: 76, nome: "Purificador de água", valor: 500, categoria: "eletro", icone: "💧" },
    { id: 77, nome: "Liquidificador premium", valor: 300, categoria: "eletro", icone: "🥤" },
    { id: 81, nome: "Máquina de lavar", valor: 2000, categoria: "eletro", icone: "🧺" },
    { id: 82, nome: "Geladeira", valor: 3000, categoria: "eletro", icone: "🧊" },
    { id: 90, nome: "Armário de cozinha", valor: 1500, categoria: "cozinha", icone: "🗄️" },
    { id: 91, nome: "Cooktop", valor: 600, categoria: "eletro", icone: "🔥" },
    { id: 92, nome: "Forno embutido", valor: 1500, categoria: "eletro", icone: "🔥" },
    { id: 93, nome: "Máquina de café", valor: 700, categoria: "eletro", icone: "☕" },
    { id: 94, nome: "Jogo completo de panelas premium", valor: 600, categoria: "cozinha", icone: "🍳" },
    { id: 97, nome: "Ar-condicionado", valor: 2500, categoria: "eletro", icone: "❄️" },
    { id: 99, nome: "Geladeira Frost Free", valor: 4000, categoria: "eletro", icone: "🧊" },

    // =========================
    // EXPERIÊNCIAS
    // =========================

    { id: 100, nome: "Lua de mel 💙", valor: 3000, categoria: "experiencias", icone: "✈️" }
];


/* =====================================================
   ELEMENTOS DA PÁGINA
===================================================== */

const listaPresentes = document.getElementById("lista-presentes");

const botoesCategoria =
    document.querySelectorAll(".categoria");

const modal =
    document.getElementById("modal");

const fecharModal =
    document.getElementById("fechar-modal");

const presenteEscolhido =
    document.getElementById("presente-escolhido");

const formPresente =
    document.getElementById("form-presente");

const mensagemSucesso =
    document.getElementById("mensagem-sucesso");


/* =====================================================
   FORMATAR VALOR
===================================================== */

function formatarValor(valor) {

    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}


/* =====================================================
   MOSTRAR PRESENTES
===================================================== */

function mostrarPresentes(categoria = "todos") {

    listaPresentes.innerHTML = "";

    const presentesFiltrados =
        categoria === "todos"
            ? presentes
            : presentes.filter(
                presente =>
                    presente.categoria === categoria
            );


    presentesFiltrados.forEach(presente => {

        const card =
            document.createElement("article");

        card.className = "presente";

        card.innerHTML = `

            <div class="presente-imagem">

                <div class="icone-presente">
                    ${presente.icone}
                </div>

            </div>

            <div class="presente-info">

                <div class="numero">
                    PRESENTE Nº ${String(presente.id).padStart(2, "0")}
                </div>

                <h3>
                    ${presente.nome}
                </h3>

                <div class="preco">
                    ${formatarValor(presente.valor)}
                </div>

                <button
                    class="botao-escolher"
                    data-id="${presente.id}"
                >
                    ESCOLHER ESTE PRESENTE
                </button>

            </div>

        `;


        listaPresentes.appendChild(card);

    });


    adicionarEventosBotoes();

}


/* =====================================================
   BOTÕES DOS PRESENTES
===================================================== */

function adicionarEventosBotoes() {

    const botoes =
        document.querySelectorAll(
            ".botao-escolher"
        );


    botoes.forEach(botao => {

        botao.addEventListener(
            "click",
            () => {

                const id =
                    Number(botao.dataset.id);

                abrirModal(id);

            }
        );

    });

}


/* =====================================================
   ABRIR MODAL
===================================================== */

function abrirModal(id) {

    const presente =
        presentes.find(
            item => item.id === id
        );


    if (!presente) return;


    presenteEscolhido.innerHTML = `
        Você escolheu presentear
        <strong>${presente.nome}</strong>
        no valor de
        <strong>${formatarValor(presente.valor)}</strong>.
    `;


    modal.classList.add("aberto");


    modal.dataset.presenteId = id;


    document.body.style.overflow = "hidden";

}


/* =====================================================
   FECHAR MODAL
===================================================== */

function fecharJanela() {

    modal.classList.remove("aberto");

    document.body.style.overflow = "";

    formPresente.style.display = "block";

    mensagemSucesso.style.display = "none";

    formPresente.reset();

}


fecharModal.addEventListener(
    "click",
    fecharJanela
);


modal.addEventListener(
    "click",
    evento => {

        if (evento.target === modal) {
            fecharJanela();
        }

    }
);


/* =====================================================
   CATEGORIAS
===================================================== */

botoesCategoria.forEach(botao => {

    botao.addEventListener(
        "click",
        () => {

            botoesCategoria.forEach(
                item =>
                    item.classList.remove("ativa")
            );


            botao.classList.add("ativa");


            const categoria =
                botao.dataset.categoria;


            mostrarPresentes(categoria);

        }
    );

});


/* =====================================================
   FORMULÁRIO
===================================================== */

formPresente.addEventListener(
    "submit",
    evento => {

        evento.preventDefault();


        const id =
            Number(modal.dataset.presenteId);


        const presente =
            presentes.find(
                item => item.id === id
            );


        const nome =
            document.getElementById("nome").value.trim();


        const mensagem =
            document.getElementById("mensagem").value.trim();


        if (!nome) {
            return;
        }


        console.log("Presente escolhido:");

        console.log({
            presente: presente.nome,
            valor: presente.valor,
            convidado: nome,
            mensagem: mensagem
        });


        formPresente.style.display = "none";

        mensagemSucesso.style.display = "block";


        /*
            AQUI VAMOS COLOCAR DEPOIS
            O ENVIO PARA A GOOGLE PLANILHA.
        */

    }
);


/* =====================================================
   INICIAR SITE
===================================================== */

mostrarPresentes();
