import React from 'react';

const FormInput = ({name, label, onChange}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} className="form-control"  onChange={onChange}/>
    </div>
  );
}

FormInput.propTypes = {
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired
};

export default FormInput;
