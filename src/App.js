import Header from './componentes/Header';
import Pesquisa from './componentes/Pesquisa'
import styled from 'styled-components'
import UltimosLancamentos from './componentes/UltimosLancamentos';

const Appcontainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
`

function App() {
  return (
    <Appcontainer>
      <Header/>
      <Pesquisa/>
      <UltimosLancamentos/>
    </Appcontainer>
  );
}

export default App;
