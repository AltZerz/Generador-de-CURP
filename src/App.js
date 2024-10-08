import './App.css';
import DomainForSale from './componentes/formulario';
import TituloCurp from './componentes/titulo';

function App() {
  return (
    <div className='bg-gray-900 h-screen flex flex-col'>
      <TituloCurp />
      <DomainForSale />
    </div>
  );
}

export default App;
