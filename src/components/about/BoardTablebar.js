import React from 'react';

const BoardTablebar = () => {
  return (
    <div id="toolbar">
      <button className="btn btn-danger btn-circle btn-outline" type="button" id="delBtn" data-toggle="tooltip" data-placement="bottom" title="삭제">
        <i className="fa fa-trash-o"></i>
      </button>
      <button className="btn btn-info btn-circle btn-outline" type="button" id="searchFormBtn" data-toggle="tooltip" data-placement="bottom" title="상세검색">
        <i className="fa fa-search-plus"></i>
      </button>
    </div>
  );
}

export default BoardTablebar;
