import React from 'react';
import {Link} from 'react-router';

//dumb 컴포넌트는 smart 컴포넌트와 구분을 위해 stateless 방식으로
//render 함수 없이 리턴하는 방식으로 구현한다.

//about으로 부터 넘어온 prop contents는 객체임으로 ()안에
//{}으로 감싸 객체임을 알려줘야 map을 사용할 수 있다.
const BoardList = ({contents}) => {
  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th colSpan="4" className="text-right">
            <Link to="/write" className="btn btn-primary">
              Write
            </Link>
          </th>
        </tr>
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
              <td>
                <Link to={'/about/'+content.id}>{content.title}</Link>
              </td>
              <td>{content.author}</td>
              <td>{content.date}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
  // return (
  //   <table className="table table-hover table-striped">
  //     <thead>
  //       <tr>
  //         <th colSpan="4" className="text-right">
  //           <Link to="/write" className="btn btn-primary">
  //             Write
  //           </Link>
  //         </th>
  //       </tr>
  //       <tr>
  //         <th>모델</th>
  //         <th>고객사</th>
  //         <th>장비SN</th>
  //         <th>시리얼</th>
  //         <th>라이센스</th>
  //         <th>MAC</th>
  //         <th>프로젝트</th>
  //         <th>출고구분</th>
  //         <th>등록일</th>
  //         <th>만기일</th>
  //         <th>협력사</th>
  //         <th>영업</th>
  //         <th>비고</th>
  //         <th>메모</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {contents.map(content =>
  //         <tr key={content.id}>
  //             <td>{content.ver}</td>
  //             <td>{content.co}</td>
  //             <td>{content.admin}</td>
  //             <td>{content.ser}</td>
  //             <td>{content.lic}</td>
  //             <td>{content.mac}</td>
  //             <td>{content.tel}</td>
  //             <td>{content.mail}</td>
  //             <td>{content.date}</td>
  //             <td>{content.limit_date}</td>
  //             <td>{content.charge}</td>
  //             <td>{content.business}</td>
  //             <td>{content.note}</td>
  //             <td>{content.note2}</td>
  //         </tr>
  //       )}
  //     </tbody>
  //   </table>
  // )
}

BoardList.propTypes = {
  contents: React.PropTypes.array.isRequired
}

export default BoardList;
