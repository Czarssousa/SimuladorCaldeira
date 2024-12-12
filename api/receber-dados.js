export default function handler(req, res) {
  try {
    if (req.method === 'POST') {
      // Processa os dados enviados
      console.log('Dados recebidos:', req.body);
      
      // Retorna uma resposta de sucesso
      res.status(200).json({ message: 'Dados recebidos com sucesso!' });
    } else {
      // Retorna erro para métodos diferentes de POST
      res.status(405).json({ message: 'Método não permitido' });
    }
  } catch (error) {
    console.error('Erro no servidor:', error);
    res.status(500).json({ message: 'Erro interno no servidor' });
  }
}
