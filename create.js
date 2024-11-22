const db = require('./db');

// Fonction pour ajouter un étudiant
function addEtudiant(id, matricule, prenom, nom, filiere, niveau) {
    const sql = 'INSERT INTO Etudiant (Matricule, Prenom, Nom, Filiere, Niveau) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [id, matricule, prenom, nom, filiere, niveau], (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'insertion :', err.message);
            return;
        }
        console.log('Insertion réussie dans la table Etudiant !');
    });
}

// Fonction pour supprimer un étudiant
function delEtudiant(ID) {
    const sql = 'DELETE FROM Etudiant WHERE ID = ?';
    db.query(sql, [ID], (err, result) => {
        if (err) {
            console.error('Erreur lors de la suppression :', err.message);
            return;
        }
        console.log('Suppression effectuée avec succès dans la table Etudiant.');
    });
}

module.exports = { addEtudiant, delEtudiant };
