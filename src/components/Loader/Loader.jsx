import { BallTriangle } from 'react-loader-spinner';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Loader = () => {
  return (
    <Wrapper>
      <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#5c5470"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          /*display={flex}
          justifyContent={center}*/
    />
    </Wrapper>
  );
};

export default Loader;