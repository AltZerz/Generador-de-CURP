import './App.css';
import DomainForSale from './componentes/formulario';
import TituloCurp from './componentes/titulo';
import ResultadoCURP from './componentes/resultado';

function App() {
  return (
    <div className='bg-gray-900 h-screen flex flex-col'>
      <TituloCurp />
      <div className='flex'>
        <DomainForSale className='flex-auto' />
        <ResultadoCURP className='flex-1' />
      </div>
    </div>
  );
}

export default App;
