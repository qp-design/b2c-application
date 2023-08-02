import {Selector} from 'antd-mobile'

const SelectFields = ({
  options = [],
  ...restProps
}) => {
  return (
    <Selector
      {...restProps}
      options={options}
    />
  );
};
export default SelectFields;
