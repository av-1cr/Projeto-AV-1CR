const connection = require('../database/connection');
const stringExtension = require('../extensions/stringExtension');
//teste
module.exports = {
    async GetForRgpm (request, response) {
        const { rgpm } = request.params;

        const usuario = await connection('usuario')
                        .leftJoin('posto_graduacao', 'posto_graduacao.id', 'usuario.id_posto_graduacao')
                        .where('usuario.rgpm', rgpm)
                        .select(['posto_graduacao.descricao AS post_grad', 'usuario.qra', 'usuario.rgpm'])
                        .first();

        return response.json(stringExtension.concatenar(stringExtension.removerEspaco(usuario.post_grad) , " - " , 
                                                        stringExtension.removerEspaco(usuario.qra) , " - " ,
                                                        stringExtension.removerEspaco(usuario.rgpm)));
    }
};