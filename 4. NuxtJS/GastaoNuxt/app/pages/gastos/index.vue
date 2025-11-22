<script setup lang="ts">
/* index.vue -> gastos */

// 1. Definimos una interfaz para el tipo de dato (buenas prácticas de TS)
interface Gasto {
  id: number;
  concepto: string;
  monto: number;
  fecha: string;
}

// 2. Simulamos una lista de gastos (esto vendría de una API normalmente)
const listaDeGastos: Gasto[] = [
  { id: 1, concepto: 'Supermercado', monto: 150.00, fecha: '2023-10-01' },
  { id: 2, concepto: 'Internet', monto: 45.90, fecha: '2023-10-05' },
  { id: 3, concepto: 'Gasolina', monto: 60.00, fecha: '2023-10-10' },
  { id: 4, concepto: 'Cena Restaurante', monto: 85.50, fecha: '2023-10-12' },
];
</script>

<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Lista de Gastos</h1>

    <div class="grid gap-4">
      
      <div 
        v-for="gasto in listaDeGastos" 
        :key="gasto.id"
        class="p-4 bg-white rounded-lg shadow border border-gray-200 hover:shadow-md transition-shadow"
      >
        <div class="flex justify-between items-center">
          <div>
            <h3 class="font-semibold text-lg text-gray-700">{{ gasto.concepto }}</h3>
            <p class="text-sm text-gray-500">{{ gasto.fecha }}</p>
          </div>
          
          <div class="flex items-center gap-4">
            <span class="font-bold text-green-600 text-xl">${{ gasto.monto }}</span>
            
            <NuxtLink 
              :to="`/gastos/${gasto.id}`"
              class="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
            >
              Ver Detalle
            </NuxtLink>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>