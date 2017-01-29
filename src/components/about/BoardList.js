import React from 'react';

const BoardList = ({contents}) => {
  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th>No</th>
          <th>Title</th>
          <th>Author</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {contents.map(content =>
          <tr key={content.id}>
              <td>{content.id}</td>
              <td>{content.title}</td>
              <td>{content.author}</td>
              <td>{content.date}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

BoardList.propTypes = {
  contents: React.PropTypes.array.isRequired
}

export default BoardList;
