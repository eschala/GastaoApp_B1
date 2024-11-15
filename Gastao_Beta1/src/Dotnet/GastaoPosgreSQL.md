psql -h pg.neon.tech

"postgresql://gastao_owner:0LaFCkW3MzNw@ep-still-leaf-a5qkbrm5.us-east-2.aws.neon.tech/gastao?sslmode=require"


Scaffold-DbContext "postgresql://gastao_owner:0LaFCkW3MzNw@ep-still-leaf-a5qkbrm5.us-east-2.aws.neon.tech/gastao?sslmode=require" -OutputDir Data/Models -Provider Npgsql.EntityFrameworkCore.PostgreSQL

Scaffold-DbContext "postgresql://gastao_owner:0LaFCkW3MzNw@ep-still-leaf-a5qkbrm5.us-east-2.aws.neon.tech/gastao?sslmode=require" Npgsql.EntityFrameworkCore.PostgreSQL -OutputDir Data/Models 

Scaffold-DbContext "postgresql://gastao_owner:0lafckw3mznw@ep-still-leaf-a5qkbrm5.us-east-2.aws.neon.tech/gastao?sslmode=require" -OutputDir Data/Models -Provider Npgsql.EntityFrameworkCore.PostgreSQL

Scaffold-DbContext "postgresql://gastao_owner:0lafckw3mznw@ep-still-leaf-a5qkbrm5.us-east-2.aws.neon.tech/gastao" -OutputDir Data/Models -Provider Npgsql.EntityFrameworkCore.PostgreSQL