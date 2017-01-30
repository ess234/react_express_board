import React from 'react';
import FormInput from './FormInput';

const BoardForm = ({onChange, onSave}) => {
  return (
    <div>
      <form>
        <h1>Write</h1>
          <FormInput name="author" label="Author" onChange={onChange}/>
          <FormInput name="title" label="Title" onChange={onChange}/>
          <div className="form-group">
            <label for="content">Content</label>
            <textarea id="content" className="form-control" onChange={onChange}></textarea>
          </div>
          <input type="submit" value="Save" className="btn btn-primary" onClick={onSave}/>
      </form>
    </div>
  );
}

BoardForm.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired
}

export default BoardForm;
