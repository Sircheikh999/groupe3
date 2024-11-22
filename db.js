const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',     
    user: 'root', 
    password: '',
    database: 'nodebd',
  });

  con.connect((err) => {
    if (err) {
      console.error('Erreur de connexion :', err.message);
      return;
    }
    console.log('Connexion réussie à MySQL !');
  });

  module.exports = con;