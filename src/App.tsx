import './styles/theme.css';
import './styles/global.css';
import { Conteiner } from './components/conteiner';
import { Heading } from './components/Heading';


export function App() {
  return (
    <>
     <Conteiner>
       <Heading>Logo</Heading>
     </Conteiner>
    <Conteiner>
      <Heading>Menu</Heading>
    </Conteiner>
    </>
  );
}