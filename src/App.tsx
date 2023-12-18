import Calculator from './components/Calculator';
import { useTheme } from './contexts/themeContext';

function App() {
  const { theme } = useTheme();

  return (
    <div
      className={`${theme} bg-background transition-colors duration-500 ease-in-out w-full h-screen`}
    >
      <Calculator />
    </div>
  );
}

export default App;
