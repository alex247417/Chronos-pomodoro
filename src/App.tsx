import './styles/theme.css';
import './styles/global.css';
import { Conteiner } from './components/Conteiner';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';



export function App() {
  return (
    <>
    <Conteiner>
      <Logo />
    </Conteiner>
     <Conteiner>
       <Menu />
     </Conteiner>
    <Conteiner>
      <Heading>Menu</Heading>
    </Conteiner>
    </>
  );
}