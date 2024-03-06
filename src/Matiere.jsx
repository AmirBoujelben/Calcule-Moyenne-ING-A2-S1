import './App.css'
import React, { useState, useEffect } from 'react';

export default function Matiere({ titre, DS, EX, TP, coeff, onMoyenneChange }) {
    const [noteDS, setNoteDS] = useState(0);
    const [noteEX, setNoteEX] = useState(0);
    const [noteTP, setNoteTP] = useState(0);

    // Réinitialiser les notes lorsque la matière change
    useEffect(() => {
        setNoteDS(0);
        setNoteEX(0);
        setNoteTP(0);
    }, [titre]);

    useEffect(() => {
        let total = 0;
        let coeff = 0;
        if (DS) {
            total += Number(noteDS) * DS; // Convertir en nombre
            coeff += DS;
        }
        if (EX) {
            total += Number(noteEX) * EX; // Convertir en nombre
            coeff += EX;
        }
        if (TP) {
            total += Number(noteTP) * TP; // Convertir en nombre
            coeff += TP;
        }
        const moyenne = total / coeff;
        onMoyenneChange(moyenne); // Appeler la fonction onMoyenneChange avec la moyenne calculée
    }, [noteDS, noteEX, noteTP]);

    return (
        <div className='matiere'>
            <h1>{titre}</h1>
            {DS && (
                <div>
                    <label>Note DS</label>
                    <input type="number" value={noteDS} onChange={e => setNoteDS(e.target.value)} />
                </div>
            )}
            {EX && (
                <div>
                    <label>Note Exam</label>
                    <input type="number" value={noteEX} onChange={e => setNoteEX(e.target.value)} />
                </div>
            )}
            {TP && (
                <div>
                    <label>Note TP</label>
                    <input type="number" value={noteTP} onChange={e => setNoteTP(e.target.value)} />
                </div>
            )}
        </div>
    );
}
