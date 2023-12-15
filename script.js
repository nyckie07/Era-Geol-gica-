document.getElementById('openPopupBtn').addEventListener('click', function() {
    var popup = window.open('popup.html', 'janela', 'width=400, height=500, scrollbars=no, status=no, toolbar=no, location=no, menubar=no, resizable=no, fullscreen=no');

    popup.onload = function() {
        popup.document.getElementById('calculateBtn').addEventListener('click', function() {
            var anos = parseFloat(popup.document.getElementById('anos').value);
            var periodoMilhoesAnos = parseFloat(popup.document.getElementById('periodo').value);

            var eraGeologica = calcularEraGeologica(anos);

            var periodoDetalhes = obterDetalhesPeriodo(periodoMilhoesAnos);

            window.opener.document.getElementById('result').innerHTML = `
                <p>Anos: ${anos}</p>
                <p>Período (milhões de anos): ${periodoMilhoesAnos}</p>
                <p>Era Geológica: ${eraGeologica}</p>
                <p>Período: ${periodoDetalhes.nome}</p>
                <p>Início: ${periodoDetalhes.inicio} milhões de anos</p>
                <p>Acontecimentos: ${periodoDetalhes.acontecimentos}</p>
            `;

            popup.close();
        });
    };

    function calcularEraGeologica(anos) {
        if (anos < 1000000) {
            return "Cenozoica";
        } else if (anos < 2500000) {
            return "Mesozoica";
        } else {
            return "Paleozoica";
        }
    }

    function obterDetalhesPeriodo(periodoMilhoesAnos) {
        if (periodoMilhoesAnos < 1.6) {
            return { nome: "Quaternário", inicio: 0.01, acontecimentos: "Formação das civilizações e constituição do tempo histórico;" };
        } else if (periodoMilhoesAnos < 5.2) {
            return { nome: "Terciário", inicio: 5.2, acontecimentos: "Primeiros hominídeos;" };
        } else if (periodoMilhoesAnos < 65) {
            return { nome: "Cretáceo", inicio: 135, acontecimentos: "Extinção dos dinossauros e outras formas de vida primitivas;" };
        } else {
            return { nome: "Proterozoica", inicio: 2.500, acontecimentos: "Primeiras formas de vidas." };
        }
    }
});
