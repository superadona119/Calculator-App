import ButtonNumber from './ButtonNumber';
import ButtonOperator from './ButtonOperator';

interface KeypadProps {
  onButtonClick: (value: string) => void;
}

export default function Keypad({ onButtonClick }: KeypadProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    onButtonClick(button.innerText);
  };

  return (
    <div className='grid w-full grid-cols-4 grid-rows-5 gap-5 rounded-lg bg-toggle p-8'>
      <ButtonNumber text='7' onClick={handleClick} />
      <ButtonNumber text='8' onClick={handleClick} />
      <ButtonNumber text='9' onClick={handleClick} />
      <ButtonOperator
        text='DEL'
        additionalClasses='border-b-otherKeyShadow bg-otherKey text-2xl active:!bg-otherKey active:!border-b-otherKeyShadow hover:!bg-otherKeyHover'
        onClick={handleClick}
      />
      <ButtonNumber text='4' onClick={handleClick} />
      <ButtonNumber text='5' onClick={handleClick} />
      <ButtonNumber text='6' onClick={handleClick} />
      <ButtonOperator text='+' onClick={handleClick} />
      <ButtonNumber text='1' onClick={handleClick} />
      <ButtonNumber text='2' onClick={handleClick} />
      <ButtonNumber text='3' onClick={handleClick} />
      <ButtonOperator text='-' onClick={handleClick} />
      <ButtonNumber text='.' onClick={handleClick} />
      <ButtonNumber text='0' onClick={handleClick} />
      <ButtonOperator text='/' onClick={handleClick} />
      <ButtonOperator text='x' onClick={handleClick} />
      <ButtonOperator
        text='RESET'
        additionalClasses='col-span-2'
        onClick={handleClick}
      />
      <ButtonOperator
        text='='
        additionalClasses='col-span-2 border-b-otherKeyShadow bg-otherKey !text-otherKeyText text-2xl active:!bg-otherKey active:!border-b-otherKeyShadow hover:!bg-otherKeyHover'
        onClick={handleClick}
      />
    </div>
  );
}
