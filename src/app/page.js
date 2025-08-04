"use client";

import { Header } from "./components/header";
import { Dashboard } from "./dashboard/page";
import  { Cadastro } from "./cadastro/page";
import { Financeiro } from "./financeiro/page";
import { Caixa } from "./caixa/page";


export default function Home() {
   function showDashboard() {
            document.getElementById('dashboard').classList.remove('hidden');
            document.getElementById('cadastro').classList.add('hidden');
            document.getElementById('financeiro').classList.add('hidden');
            document.getElementById('caixa').classList.add('hidden');
        }
      function showCadastro() {
            document.getElementById('dashboard').classList.add('hidden');
            document.getElementById('cadastro').classList.remove('hidden');
            document.getElementById('financeiro').classList.add('hidden');
            document.getElementById('caixa').classList.add('hidden');
        }

       function showFinanceiro() {
            document.getElementById('dashboard').classList.add('hidden');
            document.getElementById('cadastro').classList.add('hidden');
            document.getElementById('financeiro').classList.remove('hidden');
            document.getElementById('caixa').classList.add('hidden');
        }

       function showCaixa() {
            document.getElementById('dashboard').classList.add('hidden');
            document.getElementById('cadastro').classList.add('hidden');
            document.getElementById('financeiro').classList.add('hidden');
            document.getElementById('caixa').classList.remove('hidden');
        }
  return (
   <div>
    <header className="bg-blue-600 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">🚗 Sistema de Estacionamento</h1>
            <div className="flex space-x-4 items-center">
                <div id="statusCaixa" className="px-3 py-1 rounded text-sm font-semibold">
                    {/* <!-- Status será preenchido aqui --> */}
                </div>
                <button onClick={showDashboard} className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">Dashboard</button>
                <button onClick={showCadastro} className="bg-green-500 hover:bg-green-700 px-4 py-2 rounded">Cadastrar Carro</button>
                <button onClick={showFinanceiro} className="bg-yellow-500 hover:bg-yellow-700 px-4 py-2 rounded">Financeiro</button>
                <button onClick={showCaixa} className="bg-purple-500 hover:bg-purple-700 px-4 py-2 rounded">Caixa</button>
            </div>
        </div>
    </header>
    <div>
      <div id="dashboard" className="">
        <Dashboard/>
      </div>
      <div id="cadastro" className="hidden">
       <Cadastro/>
      </div>
      <div id="financeiro" className="hidden">
        <Financeiro/>
      </div>
      <div id="caixa" className="hidden">
        <Caixa/>
      </div>
    </div>
 </div>
  );
}


        // // Inicialização
        // document.addEventListener('DOMContentLoaded', function() {
        //     inicializarSistema();
        //     showDashboard();
        // });

        // function inicializarSistema() {
        //     // Preencher select de andares
        //     const selectAndares = ['filtroAndar', 'andarCadastro'];
        //     selectAndares.forEach(id => {
        //         const select = document.getElementById(id);
        //         for (let i = 1; i <= 21; i++) {
        //             const option = document.createElement('option');
        //             option.value = i;
        //             option.textContent = `Andar ${i}`;
        //             select.appendChild(option);
        //         }
        //     });

        //     // Definir hora atual no campo de entrada
        //     const agora = new Date();
        //     agora.setMinutes(agora.getMinutes() - agora.getTimezoneOffset());
        //     document.getElementById('horaEntrada').value = agora.toISOString().slice(0, 16);

        //     atualizarEstatisticas();
        //     mostrarAndar();
        //     atualizarFinanceiro();
        //     atualizarStatusCaixa();
        // 
      