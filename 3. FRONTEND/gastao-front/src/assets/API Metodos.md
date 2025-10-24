curl -X 'POST' \
  'https://localhost:7212/api/Usuarios' \
  -H 'accept: text/plain' \
  -H 'Content-Type: application/json' \
  -d '{
  "dniUsuario": 123123123,
  "nameUsuario": "andres",
  "lastNameUsuario": "chala",
  "emailUsuario": "andres@gmail.com",
  "passUsuario": "andres_123123",
  "rolUsuarioId": 2,
  "egresos": [],
  "ingresos": [],
  "rolUsuario": null,
  "usuario": "valor_de_prueba"  
}'

[
  {
    "op": "replace",
    "path": "/emailUsuario",
    "value": "samir.chala.nuevo@dominio.com"
  },
  {
    "op": "replace",
    "path": "/lastNameUsuario",
    "value": "CHALA CUESTA XDDD"
  }
]
[
  {
    "operationType": 2,
    "op": "replace",
    "path": "/lastNameUsuario",
    "value": "CHALA CUESTA XDDD"
  }
]