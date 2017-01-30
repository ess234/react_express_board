import React from 'react';

const FormInput = ({name, label, onChange, defaultValue, disabled}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        className="form-control"
        onChange={onChange}
        defaultValue={defaultValue}
        disabled={disabled}/>
    </div>
  );
}

FormInput.propTypes = {
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  defaultValue: React.PropTypes.string,
  disabled: React.PropTypes.bool
};

export default FormInput;
