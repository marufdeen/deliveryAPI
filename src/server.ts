import dotenv from 'dotenv'
dotenv.config();
// require app
import app from './app';
// require database connection
import './dataBaseConnection'
// require the app url and port configuration
import config  from './config/serverConfig' ; 
app.listen(process.env.PORT || config.port, () => console.log(`${config.appName} server started on ${config.enviroment}: ${config.url}:${config.port}`));


