function showArtistInfo(artistId) {
    const artistInfo = {
        artist1: {
            name: "Artista 1",
            bio: "Artista 1 é conhecido por seu estilo único e álbuns de sucesso em vários gêneros musicais."
        },
        artist2: {
            name: "Artista 2",
            bio: "Artista 2 ganhou diversos prêmios internacionais e é uma referência no rock contemporâneo."
        },
        artist3: {
            name: "Artista 3",
            bio: "Artista 3 é uma lenda da música pop, com mais de 30 anos de carreira e inúmeros hits."
        },
        artist4: {
            name: "Artista 4",
            bio: "Artista 4 revolucionou o jazz e continua influenciando novas gerações de músicos."
        },
        artist5: {
            name: "Artista 5",
            bio: "Artista 5 é um renomado compositor clássico, com obras aclamadas mundialmente."
        },
        artist6: {
            name: "Artista 6",
            bio: "Artista 6 traz uma fusão de música eletrônica e acústica, criando um som inovador."
        },
        artist7: {
            name: "Artista 7",
            bio: "Artista 7 é um dos maiores nomes do hip-hop atual, conhecido por letras poderosas."
        },
        artist8: {
            name: "Artista 8",
            bio: "Artista 8 é um ícone da música indie, com uma discografia cultuada por fãs ao redor do mundo."
        },
        artist9: {
            name: "Artista 9",
            bio: "Artista 9 lidera as paradas de música country, com canções emocionantes e autênticas."
        },
        artist10: {
            name: "Artista 10",
            bio: "Artista 10 combina elementos de soul e R&B em suas músicas, conquistando diversos prêmios."
        }
    };

    // Atualizar o conteúdo do resumo do artista
    document.getElementById('artist-name').innerText = artistInfo[artistId].name;
    document.getElementById('artist-bio').innerText = artistInfo[artistId].bio;

    // Mostrar a div de resumo do artista
    document.getElementById('artist-info').style.display = 'block';
}
