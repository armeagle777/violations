import { Switch } from 'antd';

const DropdownOption = ({ isChecked, onSwitchChange, title }) => {
  return (
    <>
      <Switch size="small" checked={isChecked} onChange={onSwitchChange} />
      <span>{title}</span>
    </>
  );
};

export default DropdownOption;
