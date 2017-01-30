import React from 'react';
import FormInput from './FormInput';

const BoardForm = ({onChange, onSave, isEnabled, readContent, formTitle, buttonName}) => {
  return (
    <div>
      <form>
        <h1>{formTitle}</h1>
          <FormInput
            name="author"
            label="Author"
            onChange={onChange}
            defaultValue={readContent.author}
            disabled={isEnabled}/>

          <FormInput
            name="title"
            label="Title"
            onChange={onChange}
            defaultValue={readContent.title}
            disabled={isEnabled}/>

          <div className="form-group">
            <label for="content">Content</label>
            <textarea
              id="content"
              className="form-control"
              onChange={onChange}
              defaultValue={readContent.content}
              disabled={isEnabled}></textarea>
          </div>
          <input type="button" value={buttonName} className="btn btn-success" onClick={onSave}/>
      </form>
    </div>
  );
}

BoardForm.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired,
  isEnabled: React.PropTypes.bool.isRequired,
  readContent: React.PropTypes.object.isRequired,
  formTitle: React.PropTypes.string.isRequired,
  buttonName: React.PropTypes.string.isRequired
}

export default BoardForm;
