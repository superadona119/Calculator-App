interface ButtonProps {
  text: string;
  additionalClasses?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  additionalClasses,
  onClick,
}) => {
  return (
    <button
      type='button'
      className={`flex items-center justify-center sm:h-16 sm:pt-1 rounded-lg border-b-4 border-operatorKeyShadow bg-operatorKey text-white text-3xl hover:bg-operatorKeyHover active:bg-operatorKey active:border-operatorKeyShadow transition-colors ${additionalClasses}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
