import React from 'react';

const BoardSearch = () => {
  return (
    <div className="panel panel-info" id="searchDiv">
      <div className="panel-body">
        <form id="searchForm">
          <table className="table">
            <tbody>
              <tr>
                <td><nobr>국가</nobr></td>
                <td>
                  <select className="form-control" name='nation' id='nation'>
                    <option value='' selected> -- </option>
                    <option value='KR' > 한국 </option>
                    <option value='JP'> 일본 </option>
                    <option value='CN'> 중국 </option>
                    <option value='TW'> 대만 </option>
                    <option value='TH'> 태국 </option>
                    <option value='SG'> 싱가포르 </option>
                    <option value='US'> 미국 </option>
                    <option value='MY'> 말레이시아 </option>
                    <option value='NZ'> 뉴질랜드 </option>
                  </select>
                </td>
                <td><nobr>모델</nobr></td>
                <td>
                  <select className="form-control" name='ver' id='ver'>
                    <option value="" selected> -- </option>
                    <option value="IDS">SNIPER IDS</option>
                    <option value="IPS">SNIPER IPS</option>
                    <option value="IPSA">SNIPER IPS A</option>
                    <option value="IPSEF">SNIPER IPS E/F</option>
                    <option value="IPSV">SNIPER IPS V</option>
                    <option value="MNS">SNIPER IPS-MNS</option>
                    <option value="DNS">SNIPER IPS-DNS</option>
                    <option value="MIS">SNIPER MIS</option>
                    <option value="DDX">SNIPER DDX</option>
                    <option value="SENSOR">SNIPER DDX SENSOR</option>
                    <option value="AMS">SNIPER AMS</option>
                    <option value="WAF">SNIPER WAF</option>
                    <option value="VF">SNIPER VF</option>
                    <option value="ITMS">SNIPER ITMS</option>
                    <option value="TSMA">SNIPER TSMA</option>
                    <option value="APTX">SNIPER APTX</option>
                    <option value="BPS">SNIPER BPS</option>
                    <option value="AF">SNIPER AF</option>
                    <option value="VPM">SNIPER VPM</option>
                    <option value="ONE">SNIPER ONE</option>
                    <option value="LUS">SNIPER LUS</option>
                    <option value="ONE-i">SNIPER ONE-i</option>
                    <option value="ONE-d">SNIPER ONE-d</option>
                  </select>
                </td>
                <td><nobr>시리얼</nobr></td>
                <td><input type="text" className="form-control input-sm" id="ser" name="ser"/></td>
                <td><nobr>라이센스</nobr></td>
                <td><input type="text" className="form-control input-sm" id="lic" name="lic"/></td>
              </tr>
              <tr>
                <td><nobr>등록일</nobr></td>
                <td>
                  <div className="form-group" id="datepicker1" >
                    <div className="input-group date">
                      <span className="input-group-addon">
                      <i className="fa fa-calendar"></i>
                      </span>
                      <input type="text" className="form-control" id="date" name="date"/>
                    </div>
                  </div>
                </td>
                <td><nobr>만기일</nobr></td>
                <td>
                  <div className="form-group" id="datepicker2" >
                    <div className="input-group date">
                      <span className="input-group-addon">
                      <i className="fa fa-calendar"></i>
                      </span>
                      <input type="text" className="form-control" id="limit_date" name="limit_date"/>
                    </div>
                  </div>
                </td>
                <td><nobr>고객사</nobr></td>
                <td><input type="text" className="form-control input-sm" id="co" name="co"/></td>
                <td><nobr>협력사</nobr></td>
                <td><input type="text" className="form-control input-sm" id="charge" name="charge"/></td>
              </tr>
              <tr>
                <td><nobr>MAC</nobr></td>
                <td><input type="text" className="form-control input-sm" id="mac" name="mac"/></td>
                <td><nobr>장비SN</nobr></td>
                <td><input type="text" className="form-control input-sm" id="admin" name="admin"/></td>
                <td><nobr>프로젝트</nobr></td>
                <td><input type="text" className="form-control input-sm" id="tel" name="tel"/></td>
                <td><nobr>출고구분</nobr></td>
                <td><input type="text" className="form-control input-sm" id="mail" name="mail"/></td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-info " type="button" id="searchBtn"><i class="fa fa-search"></i> 검색</button>
        </form>
      </div>
    </div>
  );
}

export default BoardSearch;
