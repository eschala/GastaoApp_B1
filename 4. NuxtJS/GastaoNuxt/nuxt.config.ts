// nuxt.config.ts
export default defineNuxtConfig({
    modules: [
    '@prisma/nuxt'
  ],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // Opción para configurar el servidor de desarrollo
  devServer: {
    // Habilita HTTPS y especifica las rutas a tus archivos
    /* 
    "C:/Users/eduar/SSL/PEM/key.pem"
     */
    /* 
    "C:/Users/eduar/SSL/PEM/cert.pem"
     */
    https: {
      key: "C:/Users/eduar/SSL/PEM/key.pem", // Reemplaza con la ruta correcta a tu llave privada
      cert: "C:/Users/eduar/SSL/PEM/cert.pem" // Reemplaza con la ruta correcta a tu certificado
    },
    port:5000,
    host:'app.react.local',
    
    // Opcionalmente, puedes cambiar el puerto a 443 (el estándar para HTTPS)
    // port: 443 
  }
})