<script setup lang="ts">
// Este archivo debe estar en la carpeta 'layouts/'
</script>

<template>
    <!-- Contenedor principal del layout -->
    <div class="main-layout">
        <header class="main-header">
            <NuxtLink class="link" to="/">App</NuxtLink>
            <NuxtLink class="link" to="/about">about</NuxtLink>
            <NuxtLink class="link" to="/gastos">gastos</NuxtLink>
            <NuxtLink class="link" to="/login">login</NuxtLink>
            <NuxtLink class="link" to="/register">register</NuxtLink>
        </header>

        <!-- Aquí se renderiza el contenido de la página actual -->
        <main class="page-content">
            <slot />
        </main>
        
        <footer class="main-footer">
            todos los derechos a Eduar Samir
        </footer>
    </div>
</template>

<style>
/* Estilos globales para una mejor legibilidad */
body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f7f9;
}

.main-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.main-header {
    background-color: #001f3f; /* Azul Oscuro (Dark Blue) */
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.link {
    text-decoration: none;
    font-size: 1rem; /* Reducido para mejor look */
    background-color: #007bff; /* Azul más brillante para contraste */
    color: #ffffff;
    border-radius: 0.5rem; /* Reducido para un aspecto moderno */
    padding: 0.5rem 1rem; /* Reducido el padding */
    transition: background-color 0.3s, color 0.3s;
    font-weight: 600;
}

.link:hover {
    background-color: #ffffff;
    color: #001f3f;
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
}

.main-footer {
    text-align: center;
    padding: 1rem;
    background-color: #e9ecef;
    color: #6c757d;
    font-size: 0.8rem;
    margin-top: auto; /* Empuja el footer hacia abajo */
}

.page-content {
    flex-grow: 1;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
}
</style>