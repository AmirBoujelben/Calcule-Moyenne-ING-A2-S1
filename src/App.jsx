import './App.css'
import React, { useState } from 'react';
import Matiere from './Matiere'; // Assurez-vous que le chemin d'importation est correct

function App() {
    const [moyennes, setMoyennes] = useState([]);
    const [currentMatiere, setCurrentMatiere] = useState(0);
    const [moyenneTotal, setMoyenneTotal] = useState(null);
    const matieres = [
        { titre: 'Theorie des Fils Dattente', DS: 1, EX: 2, coeff: 2 },
        { titre: 'Analyse Numérique', DS: 2, EX: 6, TP: 2, coeff: 2 },
        { titre: 'IHM',  EX: 2, TP: 1, coeff: 2 },
        { titre: 'Dev Avancé', EX: 2, TP: 1, coeff: 3 },
        { titre: 'Dev Web', EX: 2, TP: 1, coeff: 2 },
        { titre: 'SGBD', EX: 2, TP: 1, coeff: 2 },
        { titre: 'Middleware', EX: 2, TP: 1, coeff: 1.5 },
        { titre: 'Admin Réseau', EX: 2, TP: 1, coeff: 1 },
        { titre: 'Sécurité', EX: 2, TP: 1, coeff: 2 },
        { titre: 'Anglais', DS: 2, EX: 8, coeff: 1 },
        { titre: 'Français', DS: 2, EX: 8, coeff: 1 },
        { titre: 'Comptabilité', DS: 1, EX: 2, coeff: 1 },

        // Ajoutez ici les autres matières...
    ];

    const handleMoyenneChange = (index, moyenne) => {
      const newMoyennes = [...moyennes];
      newMoyennes[index] = moyenne;
      setMoyennes(newMoyennes);
  };

  const calculerMoyenneTotal = () => {
      let total = 0;
      let coeffTotal = 0;
      for (let i = 0; i < matieres.length; i++) {
          total += moyennes[i] * matieres[i].coeff;
          coeffTotal += matieres[i].coeff;
      }
      return total / coeffTotal;
  };

  const handleSuivantClick = () => {
      if (currentMatiere < matieres.length - 1) {
          setCurrentMatiere(currentMatiere + 1);
      } else {
          setMoyenneTotal(calculerMoyenneTotal());
      }
  };

  return (
      <div className='app'>
          {moyenneTotal !== null && <p>Votre Moyenne est : {moyenneTotal}</p>}
          <Matiere {...matieres[currentMatiere]} onMoyenneChange={moyenne => handleMoyenneChange(currentMatiere, moyenne)} />
          <button onClick={handleSuivantClick}>Suivant</button>
          
          <p className='Credits'>By Amir Boujelben</p>
      </div>
  );
}

export default App;