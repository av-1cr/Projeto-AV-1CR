const connection = require('../database/connection');

module.exports = {
    async Create(request, response) {
        const {cpf, senha} = request.body;

        const usuario = await connection('usuario')
            .where('cpf', cpf)
            .andWhere('senha', senha)
            .select('nome')
            .first();

        if(!usuario){
            return response.status(400).json({error: 'Usuário ou senha inválido.'})
        }

        return response.json(usuario);
    }
};