interface ButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonNumber: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      type='button'
      className={`flex justify-center items-center sm:pt-1 sm:h-16 rounded-lg border-b-4 
        border-numberKeyShadow bg-numberKey text-4xl text-text 
        hover:bg-numberKeyHover active:bg-numberKey 
        active:border-numberKeyShadow transition-colors`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonNumber;
