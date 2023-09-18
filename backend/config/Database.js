import {Sequelize} from "sequelize";
 
const db = new Sequelize('fullstack-react-nodejs','root','',{
    host: 'localhost',
    dialect: 'mysql'
});
 
export default db;