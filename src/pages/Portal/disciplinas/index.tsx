import { useState } from 'react';
import { db } from '../../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import './styles.css'

export const Disciplinas = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [weeklyClasses, setWeeklyClasses] = useState<number>();
  const [loading, setLoading] = useState(false);
  const disciplinesRef = collection(db, 'disciplines');
  
  const inputStyle = {
    padding: 12,
    borderRadius: 4,
    borderColor: '#aaa',
    borderWidth: 1,
    outline: 'none',
    width: '100%',
    marginBottom: 18,
    fontSize: 18,
  }
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);

    const obj = {
      name,
      type,
      weeklyClasses
    }

    const doc = await addDoc(disciplinesRef, obj); 


    console.log('obj', doc.id);
    setLoading(false);
  }

  return (
    <div style={{
      minHeight: '100%',
      backgroundColor: '#915ca577',
      display: 'flex',
      alignItems: "center",
      justifyContent: 'center'
    }}>
      <div style={{
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        width: '50%'
      }}>
        <form onSubmit={e => handleSubmit(e)} style={{ padding: 32 }}>
          <label htmlFor="disciplina" style={{ display: 'block' }}>Disciplina</label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            name="disciplina"
            placeholder="Digite o nome da disciplina"
            style={inputStyle}
          />
          <label htmlFor="type" style={{ display: 'block' }}>type</label>
          <input
            value={type}
            onChange={(event) => setType(event.target.value)}
            type="text"
            name="type"
            placeholder="Digite o tipo da disciplina"
            style={inputStyle}
          />
          <label htmlFor="weeklyClasses" style={{ display: 'block' }}>Aulas semanais</label>
          <input
            value={weeklyClasses}
            onChange={(event) => setWeeklyClasses(Number(event.target.value))}
            className='input'
            type="number"
            name="weeklyClasses"
            placeholder="Digite a quantidade de aulas semanais"
            style={inputStyle}
          />
          <button>{loading ? 'Carregando' : 'Cadastrar'}</button>
        </form>
      </div>
    </div>
  );
}