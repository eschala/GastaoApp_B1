npm create nuxt@latest GastaoNuxt

npm install mysql2
npm install --save mysql2
npm install --save-dev @types/node
npm i @nestjs/mapped-types
npm install --save-dev @prisma/nuxt
npm install prisma typescript ts-node @types/node --save-dev
npm install dotenv
# Genera la migración (crea los archivos SQL necesarios)

npx prisma migrate dev --name init_gastao_db

# Aplica la migración a la base de datos
npx prisma migrate deploy