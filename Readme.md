Steps: 
1. Sfter configuring the sequelizerc file
2. Run npx sequelize init 
3. Generate the model using - npx sequelize-cli model:generate --name users --attributes name:string
4. Migrate the generated script to the db using - npx sequelize-cli db:migrate