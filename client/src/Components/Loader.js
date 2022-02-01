import {TailSpin} from 'react-loader-spinner';

export default function ReactLoader() {
  return (
      <div className='tailspin'>
    <TailSpin
      color="#f1356d"
      height={100}
      width={100}
    />
    </div>
  );
}