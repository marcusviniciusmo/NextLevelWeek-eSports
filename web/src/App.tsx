import LogoImage from './assets/logo-nlw-esports.svg';
import './styles/main.css';

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={LogoImage} alt="Logo NLW eSports" />
    </div>
  );
};

export default App;