import React from 'react';
import {Link} from 'react-router';

//dumb 컴포넌트는 smart 컴포넌트와 구분을 위해 stateless 방식으로
//render 함수 없이 리턴하는 방식으로 구현한다.

//about으로 부터 넘어온 prop contents는 객체임으로 ()안에
//{}으로 감싸 객체임을 알려줘야 map을 사용할 수 있다.
const BoardList = ({contents}) => {
  // return (
  //   <table className="table table-bordered table-hover"
  //     data-toolbar="#toolbar"
  //     data-toggle="table" id='table'
  //     data-width="100%"
  //     data-height="600"
  //     data-toggle="table"
  //     data-show-columns="true"
  //     data-pagination ="true"
  //     data-page-size="15"
  //     data-page-list="[15, 30, 60, 100, 1000]"
  //     data-locale="ko-KR"
  //     data-sort-name="date"
  //     data-sort-order="desc"
  //     data-single-select="false"
  //     data-click-to-select="true"
  //     data-search="true"
  //     data-show-toggle="false"
  //     data-smart-display="false"
  //     data-checkbox-header="true"
  //     data-checkbox="true"
  //     data-row-style="rowStyle"
  //   >
  //     <thead>
  //       <tr>
  //         <th colSpan="4" className="text-right">
  //           <Link to="/write" className="btn btn-primary">
  //             Write
  //           </Link>
  //         </th>
  //       </tr>
  //       <tr>
  //         <th>No</th>
  //         <th>Title</th>
  //         <th>Author</th>
  //         <th>Date</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {contents.map(content =>
  //         <tr key={content.id}>
  //             <td>{content.id}</td>
  //             <td>
  //               <Link to={'/about/'+content.id}>{content.title}</Link>
  //             </td>
  //             <td>{content.author}</td>
  //             <td>{content.date}</td>
  //         </tr>
  //       )}
  //     </tbody>
  //   </table>
  // );
  return (
      <table className="table table-bordered table-hover"
      data-toolbar="#toolbar"
      data-toggle="table" id='table'
      data-width="100%"
      data-height="600"
      data-toggle="table"
      data-show-columns="true"
      data-pagination ="true"
      data-page-size="15"
      data-page-list="[15, 30, 60, 100, 1000]"
      data-locale="ko-KR"
      data-sort-name="date"
      data-sort-order="desc"
      data-single-select="false"
      data-click-to-select="true"
      data-search="true"
      data-show-toggle="false"
      data-smart-display="false"
      data-checkbox-header="true"
      data-checkbox="true"
      data-row-style="rowStyle"
    >
        <thead>
          <tr>
            <th colSpan="15" className="text-right">
              <Link to="/write" className="btn btn-info">
                Write
              </Link>
            </th>
          </tr>
          <tr>
            <th data-field="state" data-checkbox="true"><input type="checkbox"/></th>
            <th data-field="ver" data-sortable="true" data-align="center">모델</th>
            <th data-field="co" data-sortable="true" data-align="center">고객사</th>
            <th data-field="admin" data-sortable="true" data-align="center">장비SN</th>
            <th data-field="ser"  data-sortable="true" data-align="center" data-halign="center"  data-formatter="serial_info_link">시리얼</th>
            <th data-field="lic" data-sortable="true" data-align="center">라이센스</th>
            <th data-field="mac" data-sortable="true" data-align="center">MAC</th>
            <th data-field="tel" data-sortable="true" data-align="center">프로젝트</th>
            <th data-field="mail" data-sortable="true" data-align="center">출고구분</th>
            <th data-field="date" data-sortable="true" data-align="center">등록일</th>
            <th data-field="limit_date" data-sortable="true" data-align="center">만기일</th>
            <th data-field="charge" data-sortable="true" data-align="center">협력사</th>
            <th data-field="business" data-sortable="true" data-align="center">영업</th>
            <th data-field="note" data-sortable="true" data-align="center">비고</th>
            <th data-field="note2" data-sortable="true" data-align="center">메모</th>
          </tr>
        </thead>
        <tbody>
          {contents.map(content =>
            <tr key={content.id}>
                <td><input type="checkbox"/></td>
                <td>{content.ver}</td>
                <td>{content.co}</td>
                <td>{content.admin}</td>
                <td>{content.ser}</td>
                <td>{content.lic}</td>
                <td>{content.mac}</td>
                <td>{content.tel}</td>
                <td>{content.mail}</td>
                <td>{content.date}</td>
                <td>{content.limit_date}</td>
                <td>{content.charge}</td>
                <td>{content.business}</td>
                <td>{content.note}</td>
                <td>{content.note2}</td>
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
