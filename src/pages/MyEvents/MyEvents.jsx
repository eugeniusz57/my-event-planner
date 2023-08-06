import ButtonAdd from "../../components/ButtonAdd/ButtonAdd";
import SelectCategory from "../../components/SelectCategory/SelectCategory";
import SelectSort from "../../components/SelectSort/SelectSort";
import { SelectWraper, Title, Waraper } from "./MyEvents.styled";

const MyEvents = () => {
  return (
    <Waraper>
      <Title>My Events</Title>
      <SelectWraper>
        <SelectCategory />
        <SelectSort />
        <ButtonAdd />
      </SelectWraper>
    </Waraper>
  );
};

export default MyEvents;
