module.exports = {
    removerEspaco(texto){
        return texto.trim();
    }, 

    concatenar(...argumentos){
        let textoConcatenado = "";

        argumentos.forEach((arg) => {
            textoConcatenado += arg;
        });

        return textoConcatenado;
    }
};