export function Caixa() {
  return (
 <div id="caixa" className="container mx-auto p-6">
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <h2 className="text-2xl font-bold mb-6">Controle de Caixa</h2>
    
    {/* Status do Caixa */}
    <div id="caixaStatus" className="mb-6">
        {/* Status será preenchido aqui */}
    </div>
    {/* Formulário de Abertura de Caixa */}
    <div id="formAberturaCaixa" className="hidden">
        <h3 className="text-lg font-semibold mb-4">Abrir Caixa</h3>
        <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block text-sm font-medium mb-2">Valor Inicial (R$)</label>
                    <input type="number" id="valorInicial" step="0.01" min="0" placeholder="0.00" className="w-full border rounded px-3 py-2" required />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Operador</label>
                    <input type="text" id="operador" placeholder="Nome do operador" className="w-full border rounded px-3 py-2" required />
                </div>
            </div>
            <div className="flex space-x-4">
                <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">Abrir Caixa</button>
            </div>
        </form>
    </div>
    </div>

            {/* <!-- Informações do Caixa Aberto --> */}
            {/* Informações do Caixa Aberto */}
            <div id="caixaAberto" className="hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-blue-100 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-blue-800">Valor Inicial</h3>
                        <p className="text-2xl font-bold text-blue-600" id="valorInicialCaixa">R$ 0,00</p>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-green-800">Receita do Dia</h3>
                        <p className="text-2xl font-bold text-green-600" id="receitaDiaCaixa">R$ 0,00</p>
                    </div>
                    <div className="bg-purple-100 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-purple-800">Total em Caixa</h3>
                        <p className="text-2xl font-bold text-purple-600" id="totalCaixa">R$ 0,00</p>
                    </div>
                </div>
                
                <div className="flex space-x-4 mb-6">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded">Fechar Caixa</button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">Atualizar Valores</button>
                </div>
            </div>

        {/* <!-- Histórico de Caixas --> */}
        {/* Histórico de Caixas */}
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Histórico de Caixas</h3>
            <div className="overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="px-4 py-2 text-left">Data</th>
                            <th className="px-4 py-2 text-left">Operador</th>
                            <th className="px-4 py-2 text-left">Abertura</th>
                            <th className="px-4 py-2 text-left">Fechamento</th>
                            <th className="px-4 py-2 text-left">Valor Inicial</th>
                            <th className="px-4 py-2 text-left">Receita</th>
                            <th className="px-4 py-2 text-left">Total Final</th>
                            <th className="px-4 py-2 text-left">Ações</th>
                        </tr>
                    </thead>
                    <tbody id="tabelaHistoricoCaixas">
                        {/* Histórico será preenchido aqui */}
                    </tbody>
                </table>
            </div>
        </div>
    {/* Modal de Detalhes do Carro */}
    <div id="modalDetalhes" className="fixed inset-0 bg-black bg-opacity-50 modal hidden flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
            <h3 className="text-lg font-bold mb-4">Detalhes do Carro</h3>
            <div id="detalhesConteudo">
                {/* Conteúdo será preenchido dinamicamente */}
            </div>
            <div className="flex space-x-4 mt-6">
                <button id="btnLiberar" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">Liberar Vaga</button>
                <button className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded">Fechar</button>
            </div>
        </div>
    </div>
    {/* Modal de Relatório de Fechamento */}
    <div id="modalRelatorio" className="fixed inset-0 bg-black bg-opacity-50 modal hidden flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full mx-4 max-h-96 overflow-y-auto">
            <h3 className="text-lg font-bold mb-4">Relatório de Fechamento de Caixa</h3>
            <div id="relatorioConteudo">
                {/* Conteúdo será preenchido dinamicamente */}
            </div>
            <div className="flex space-x-4 mt-6">
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">Confirmar Fechamento</button>
                <button className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded">Cancelar</button>
            </div>
        </div>
    </div>
</div>
  );
}