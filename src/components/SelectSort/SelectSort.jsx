import Select, { components } from "react-select";

import { sort } from "../../assets";

const options = [
  { value: "by name", label: "by name" },
  { value: "by name", label: "by name" },
  { value: "by data", label: "by data" },
  { value: "by data", label: "by data" },
  { value: "by priority", label: "by priority" },
  { value: "by priority", label: "by priority" },
];

const indicatorSeparatorStyle = {
  display: "none",
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <img src={sort} alt="icon sort" />
    </components.DropdownIndicator>
  );
};

const IndicatorSeparator = (prop) => {
  return <span style={indicatorSeparatorStyle} {...prop} />;
};

const SelectSort = () => (
  <Select
    components={{ DropdownIndicator, IndicatorSeparator }}
    placeholder="Sort by"
    options={options}
  />
);

export default SelectSort;
