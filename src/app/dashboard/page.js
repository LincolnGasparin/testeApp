
export function Dashboard() {
  return (
    <div>
      <div id="dashboard" className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            {/* <!-- Cards de Estatísticas --> */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-700">Total de Vagas</h3>
                <p className="text-3xl font-bold text-blue-600">252</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-700">Vagas Ocupadas</h3>
                <p className="text-3xl font-bold text-red-600" id="vagasOcupadas">0</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-700">Vagas Livres</h3>
                <p className="text-3xl font-bold text-green-600" id="vagasLivres">252</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-700">Taxa de Ocupação</h3>
                <p className="text-3xl font-bold text-purple-600" id="taxaOcupacao">0%</p>
            </div>
        </div>

        {/* <!-- Filtros --> */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-lg font-semibold mb-4">Filtros</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <select id="filtroAndar" className="border rounded px-3 py-2" >
                    <option value="">Todos os Andares</option>
                </select>
                <select id="filtroLado" className="border rounded px-3 py-2" >
                    <option value="">Todos os Lados</option>
                    <option value="A">Lado A</option>
                    <option value="B">Lado B</option>
                </select>
                <select id="filtroStatus" className="border rounded px-3 py-2" >
                    <option value="">Todos os Status</option>
                    <option value="livre">Livres</option>
                    <option value="ocupada">Ocupadas</option>
                </select>
            </div>
        </div>

        {/* <!-- Visualização das Vagas --> */}
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Visualização das Vagas</h3>
                <div className="flex space-x-4">
                    <span className="flex items-center"><div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div>Lado A</span>
                    <span className="flex items-center"><div className="w-4 h-4 bg-green-500 rounded mr-2"></div>Lado B</span>
                    <span className="flex items-center"><div className="w-4 h-4 bg-red-500 rounded mr-2"></div>Ocupada</span>
                </div>
            </div>

            {/* <!-- Visualização de Todos os Andares --> */}
            <div id="vagasVisualizacao" className="max-h-96 overflow-y-auto space-y-6 border rounded-lg p-4">
                {/* <!-- Todos os andares serão gerados aqui --> */}
            </div>
        </div>
    </div>
    
    </div>
  );

}

