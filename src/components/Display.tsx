interface DisplayProps {
  result: string;
  historial: string;
}

const Display: React.FC<DisplayProps> = ({ result, historial }) => {
  return (
    <div className='grid grid-rows-3 my-6 pt-1 h-28 w-full rounded-md bg-display  px-2'>
      <p className='text-3xl mt-2 text-historialText text-right px-2'>
        {historial}
      </p>
      <input
        name='display'
        id='displayInput'
        value={result ?? ''}
        className='w-full text-5xl bg-display text-displayText content-center h-16 mt-1 px-2 text-right'
        readOnly
      />
    </div>
  );
};

export default Display;
