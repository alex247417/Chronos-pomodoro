import './styles/theme.css';
import './styles/global.css';
import { Conteiner } from './components/Conteiner';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';



export function App() {
  return (
    <>
    <Conteiner>
      <Logo />
    </Conteiner>
     <Conteiner>
       <Heading>Logo</Heading>
     </Conteiner>
    <Conteiner>
      <Heading>Menu</Heading>
    </Conteiner>
    </>
  );
}