import Select, { components } from "react-select";

import { Category } from "../../assets";

const options = [
  { value: "Art", label: "Art" },
  { value: "Music", label: "Music" },
  { value: "Business", label: "Business" },
  { value: "Conference", label: "Conference" },
  { value: "Workshop", label: "Workshop" },
  { value: "Party", label: "Party" },
  { value: "Sport", label: "Sport" },
];

const indicatorSeparatorStyle = {
  display: "none",
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <img src={Category} />
    </components.DropdownIndicator>
  );
};

const IndicatorSeparator = (prop) => {
  return <span style={indicatorSeparatorStyle} {...prop} />;
};

const Container = (children, ...props) => {
  return (
    <components.SelectContainer {...props}>
      {children}
    </components.SelectContainer>
  );
};

const SelectCategory = () => (
  <Select
    components={{ Container, DropdownIndicator, IndicatorSeparator }}
    styles={{
      container: (base) => ({
        ...base,
        backgroundColor: "green",
        padding: 16,
      }),
    }}
    placeholder="Category"
    options={options}
  />
);

export default SelectCategory;
