// Segurança de dados: os dados que são fornecidos pelo usuário estão no servidor (aparecem terminal),
// porém, ñ aparecem no navegador (inspecionar elemento).

import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if(request.method === 'POST') {
        const TOKEN = '149114f7304af6b0c0fc6ca7c8b6dd';
        const client = new SiteClient(TOKEN);

        // Validar os dados (criados/fornecidos pelo usuário), antes de sair cadastrando
        const registroCriado = await client.items.create({
            itemType: "971597", // ID do Model de "Communities" criado pelo Dato
            ...request.body,
            // title: "Comunidade de Teste",
            // imageUrl: "https://github.com/isadora-oa.png",
            // creatorSlug: "isadora-oa",
        })

        console.log(registroCriado);

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}