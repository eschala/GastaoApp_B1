<script setup lang="ts">
const route = useRoute()
// Solo para propósitos de depuración, puedes eliminar el console.log final
console.log("gasto params", route.params.gasto)

// Accedemos directamente al parámetro 'gasto'
const gastoId = route.params.gasto
</script>

<template>
    <div class="p-6 bg-white rounded-xl shadow-lg">
        <h1 class="text-3xl font-bold text-gray-800 mb-2">Detalle de Gasto</h1>
        
        <!-- Usamos la variable definida en el setup -->
        <h2 class="text-2xl font-semibold text-blue-600">Gasto # {{ gastoId }}</h2>
        
        <h5 class="text-gray-500 italic mb-4">Ruta: /gastos/{{ gastoId }}</h5>
        
        <p class="text-lg text-gray-700 mt-4">
            Aquí se cargarían los detalles específicos del Gasto con el ID **{{ gastoId }}** desde una base de datos.
            Por ahora, solo mostramos el ID de la URL.
        </p>

    </div>
</template>