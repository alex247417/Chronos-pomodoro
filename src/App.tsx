import './styles/theme.css';
import './styles/global.css';
import { Conteiner } from './components/Conteiner';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';



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
      <CountDown />
    </Conteiner>
    </>
  );
}