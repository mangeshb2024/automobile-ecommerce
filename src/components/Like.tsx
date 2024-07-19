import { FaRegHeart, FaHeart} from "react-icons/fa";

interface Props {
    like: boolean;
    onClick: () => void;
}

const Like = ({like, onClick}: Props) => {
  if (like) return <FaHeart onClick={onClick} fontSize='30px'></FaHeart>
  return <FaRegHeart onClick={onClick} fontSize='30px'></FaRegHeart>
}

export default Like