import { useTheme } from '../contexts/themeContext';
import { ChangeEvent } from 'react';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const themeNumber = theme ? theme.replace(/\D/g, '') : '';

  const handleChangeTheme = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.currentTarget.value;
    setTheme(selectedValue);
  };

  return (
    <div
      className={`text-displayText grid grid-cols-2 relative transition-colors duration-500 ease-in-out`}
    >
      <p className='text-right pr-1 col-span-2 text-sm tracking-widestPlus'>
        1 2 3
      </p>
      <span className='text-sm font-bold text-center'>THEME</span>
      <div className='w-14 h-5 flex justify-center items-center gap-1 bg-toggle rounded-xl relative'>
        {['theme1', 'theme2', 'theme3'].map((themeValue) => (
          <div key={themeValue} className='flex'>
            <input
              className='opacity-0 h-3 w-3 cursor-pointer'
              type='radio'
              value={themeValue}
              name='theme'
              onChange={handleChangeTheme}
              checked={theme === themeValue}
            />
            <label htmlFor={themeValue} className='cursor-pointer'></label>
          </div>
        ))}
        {theme && (
          <div
            className='absolute h-3 w-3 bg-switch rounded-full'
            style={{
              left: `calc(29% * ${parseInt(themeNumber, 10) - 1} + 11%)`,
              bottom: '4px',
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
