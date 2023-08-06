import { Button } from "./ButtonAdd.styled";
import { plus } from "../../assets";

const ButtonAdd = () => {
  return (
    <>
      <Button>
        <img src={plus} alt="icon plus" />
        Add new event
      </Button>
    </>
  );
};

export default ButtonAdd;
