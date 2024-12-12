export default function handler(req, res) {
    if (req.method === 'POST') {
        const dados = req.body; // Receber dados enviados pelo Node-RED
        console.log('Dados recebidos:', dados);

        // Você pode processar ou armazenar os dados aqui, se necessário
        res.status(200).json({ message: 'Dados recebidos com sucesso!', dados });
    } else {
        res.status(405).json({ message: 'Método não permitido' });
    }
}
