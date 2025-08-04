import React from "react";

export function Cadastro() {
  // Handler functions for React events
  const cadastrarCarro = (event) => {
    event.preventDefault();
    // Implement your logic here
  };

  const atualizarVagasDisponiveis = () => {
    // Implement your logic here
  };

  const showDashboard = () => {
    // Implement your logic here
  };

  return (
    <div>
      <div id="cadastro" className="container mx-auto p-6">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Cadastrar Novo Carro</h2>
          <div
            id="alertaCaixaFechado"
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 hidden"
          >
            ⚠️ O caixa está fechado! Abra o caixa primeiro para cadastrar carros.
          </div>
          <form id="formCadastro" >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Placa do Carro
                </label>
                <input
                  type="text"
                  id="placa"
                  placeholder="ABC-1234"
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Modelo do Carro
                </label>
                <input
                  type="text"
                  id="modelo"
                  placeholder="Ex: Honda Civic"
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2">Andar</label>
                <select
                  id="andarCadastro"
                  className="w-full border rounded px-3 py-2"
                  required
                >
                  <option value="">Selecione o andar</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Lado</label>
                <select
                  id="ladoCadastro"
                  className="w-full border rounded px-3 py-2"
                  required
                >
                  <option value="">Selecione o lado</option>
                  <option value="A">Lado A</option>
                  <option value="B">Lado B</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Vaga</label>
                <select
                  id="vagaCadastro"
                  className="w-full border rounded px-3 py-2"
                  required
                >
                  <option value="">Selecione a vaga</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Hora de Entrada
              </label>
              <input
                type="datetime-local"
                id="horaEntrada"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
              >
                Cadastrar
              </button>
              <button
                type="button"
                // onClick={showDashboard}
                className="bg-gray-500 hover:bg-gray-700 text-white px-6 py-2 rounded"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
