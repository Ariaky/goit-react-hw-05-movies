import { BackBtn } from './BackBtn.styled'

const BackLink = ({ to, children }) => {
  return <BackBtn to={to}>{children}</BackBtn>
};

export default BackLink;