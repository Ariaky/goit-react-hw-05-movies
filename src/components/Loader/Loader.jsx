import { BallTriangle } from 'react-loader-spinner';

const Loader = () => {
  return (
      <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#5c5470"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto',
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
          }}
          wrapperClass=""
          visible={true}
      />
  );
};

export default Loader;