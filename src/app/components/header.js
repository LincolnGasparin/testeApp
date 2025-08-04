
export function Header() {
  return (
<header class="bg-blue-600 text-white p-4 shadow-lg">
        <div class="container mx-auto flex justify-between items-center">
            <h1 class="text-2xl font-bold">🚗 Sistema de Estacionamento</h1>
            <div class="flex space-x-4 items-center">
                <div id="statusCaixa" class="px-3 py-1 rounded text-sm font-semibold">
                    {/* <!-- Status será preenchido aqui --> */}
                </div>
                <button onClick="showDashboard()" class="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">Dashboard</button>
                <button onClick="showCadastro()" class="bg-green-500 hover:bg-green-700 px-4 py-2 rounded">Cadastrar Carro</button>
                <button onClick="showFinanceiro()" class="bg-yellow-500 hover:bg-yellow-700 px-4 py-2 rounded">Financeiro</button>
                <button onClick="showCaixa()" class="bg-purple-500 hover:bg-purple-700 px-4 py-2 rounded">Caixa</button>
            </div>
        </div>
    </header>
  );
}