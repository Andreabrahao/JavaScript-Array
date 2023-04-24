const nomes = ['ana Julia', 'Caio Vinicios', 'BIA silva'];

const nomesPadronizados = nomes.map((nome) => {
    return nome.toUpperCase();
}); //Metodo que transforma tudo em maiusculo.

// const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());
// Funciona da mesma forma

console.log(nomesPadronizados);