import { BallTriangle } from 'react-loader-spinner';

const Loader = () => {
  return (
    <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#5c5470"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{display: 'flex', justifyContent: 'center'}}
        wrapperClass=""
        visible={true}
        display={flex}
        justifyContent={center}
    />
  );
};

export default Loader;