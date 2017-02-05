import React from 'react';
import FormInput from './FormInput';

const BoardForm = ({onChange, onSave, isEnabled, readContent, formTitle, buttonName}) => {
  return (
    <div className="wrapper wrapper-content animated fadeInRight">
      <div className="row">
        <div className="col-lg-12">
          <div className="ibox float-e-margins">
            <div className="ibox-title">
              <h5>시리얼 등록 <small>Create Serial License</small></h5>
              <div className="ibox-tools">
              </div>
            </div>
          <div className="ibox-content">
            <div className="row">
              <div className="col-sm-9 b-r">
                <form role="form" id="addSerialForm">
                  <h1>{formTitle}</h1>
                    <FormInput
                      name="ser"
                      label="ser"
                      onChange={onChange}
                      defaultValue={readContent.ser}
                      disabled={isEnabled}/>

                    <FormInput
                      name="lic"
                      label="lic"
                      onChange={onChange}
                      defaultValue={readContent.lic}
                      disabled={isEnabled}/>

                    <FormInput
                      name="co"
                      label="co"
                      onChange={onChange}
                      defaultValue={readContent.co}
                      disabled={isEnabled}/>

                    <FormInput
                      name="admin"
                      label="admin"
                      onChange={onChange}
                      defaultValue={readContent.admin}
                      disabled={isEnabled}/>

                    <FormInput
                      name="tel"
                      label="tel"
                      onChange={onChange}
                      defaultValue={readContent.tel}
                      disabled={isEnabled}/>

                    <FormInput
                      name="mail"
                      label="mail"
                      onChange={onChange}
                      defaultValue={readContent.mail}
                      disabled={isEnabled}/>

                    <FormInput
                      name="ver"
                      label="ver"
                      onChange={onChange}
                      defaultValue={readContent.ver}
                      disabled={isEnabled}/>

                    <FormInput
                       name="date"
                       label="date"
                       onChange={onChange}
                       defaultValue={readContent.date}
                       disabled={isEnabled}/>

                    <FormInput
                       name="limit_date"
                       label="limit_date"
                       onChange={onChange}
                       defaultValue={readContent.limit_date}
                       disabled={isEnabled}/>

                    <FormInput
                       name="mac"
                       label="mac"
                       onChange={onChange}
                       defaultValue={readContent.mac}
                       disabled={isEnabled}/>

                    <FormInput
                       name="charge"
                       label="charge"
                       onChange={onChange}
                       defaultValue={readContent.charge}
                       disabled={isEnabled}/>

                    <FormInput
                       name="business"
                       label="business"
                       onChange={onChange}
                       defaultValue={readContent.business}
                       disabled={isEnabled}/>

                    <FormInput
                       name="note"
                       label="note"
                       onChange={onChange}
                       defaultValue={readContent.note}
                       disabled={isEnabled}/>

                     <FormInput
                       name="note2"
                       label="note2"
                       onChange={onChange}
                       defaultValue={readContent.note2}
                       disabled={isEnabled}/>

                    <input type="button" value={buttonName} className="btn btn-success" onClick={onSave}/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // <div>
    //   <form>
    //     <h1>{formTitle}</h1>
    //       <FormInput
    //         name="author"
    //         label="Author"
    //         onChange={onChange}
    //         defaultValue={readContent.author}
    //         disabled={isEnabled}/>
    //
    //       <FormInput
    //         name="title"
    //         label="Title"
    //         onChange={onChange}
    //         defaultValue={readContent.title}
    //         disabled={isEnabled}/>
    //
    //       <div className="form-group">
    //         <label for="content">Content</label>
    //         <textarea
    //           id="content"
    //           className="form-control"
    //           onChange={onChange}
    //           defaultValue={readContent.content}
    //           disabled={isEnabled}></textarea>
    //       </div>
    //       <input type="button" value={buttonName} className="btn btn-success" onClick={onSave}/>
    //   </form>
    // </div>
    // <div className="wrapper wrapper-content animated fadeInRight">
    //   <div className="row">
    //     <div className="col-lg-12">
    //       <div className="ibox float-e-margins">
    //         <div className="ibox-title">
    //           <h5>시리얼 등록 <small>Create Serial License</small></h5>
    //           <div className="ibox-tools">
    //           </div>
    //         </div>
    //         <div className="ibox-content">
    //           <div className="row">
    //             <div className="col-sm-9 b-r">
    //               <form role="form" id="addSerialForm">
    //                 <div className="row">
    //                   <div className="col-sm-6 b-r">
    //                     <div className="form-group">
    //                       <label >국가</label>
    //                       <select className="form-control m-b" id="nation" name="nation" onchange="changeModelLine()">
    //                         <option value='KR' selected> 한국 (KR) </option>
    //                         <option value='JP'> 일본 (JP) </option>
    //                         <option value='CN'> 중국 (CN) </option>
    //                         <option value='TW'> 대만 (TW) </option>
    //                         <option value='TH'> 태국 (TH) </option>
    //                         <option value='SG'> 싱가포르 (SG) </option>
    //                         <option value='US'> 미국 (US) </option>
    //                         <option value='MY'> 말레이시아 (MY) </option>
    //                         <option value='NZ'> 뉴질랜드 (NZ) </option>
    //                       </select>
    //                     </div>
    //                     <div className="form-group">
    //                       <label>제품구분</label>
    //                       <select className="form-control m-b" id="model_set" name='model_set'>
    //                         <option value='non' selected> ---------- </option>
    //                       </select>
    //                     </div>
    //                     <div className="form-group">
    //                       <label>발급업체</label>
    //                       <select className="form-control m-b" id="oem" name="oem">
    //                         <option value='WI' selected>WINS Technet (WI)</option>
    //                         <option value='EX'>AXGATE (EX)</option>
    //                         <option value='VP'>포드림 (VP)</option>
    //                         <option value='KD'>한전 (KD)</option>
    //                       </select>
    //                     </div>
    //                     <div className="form-group">
    //                       <label id="mac_html">MAC</label>
    //                       <input type="text" placeholder="MAC" class="form-control" id="mac" name="mac"/>
    //                     </div>
    //                   </div>
    //                   <div className="col-sm-6 ">
    //                     <div className="form-group">
    //                       <label>제품 종류</label>
    //                       <select className="form-control m-b" id="model_line" name="model_line" onchange="changeModelLine()">
    //                         <option value="non" selected>----------</option>
    //                         <option value="IDS">SNIPER IDS</option>
    //                         <option value="IPS">SNIPER IPS</option>
    //                         <option value="IPSA">SNIPER IPS A</option>
    //                         <option value="IPSEF">SNIPER IPS E/F</option>
    //                         <option value="IPSV">SNIPER IPS V</option>
    //                         <option value="MNS">SNIPER IPS-MNS</option>
    //                         <option value="DNS">SNIPER IPS-DNS</option>
    //                         <option value="MIS">SNIPER MIS</option>
    //                         <option value="DDX">SNIPER DDX</option>
    //                         <option value="SENSOR">SNIPER DDX SENSOR</option>
    //                         <option value="AMS">SNIPER AMS</option>
    //                         <option value="WAF">SNIPER WAF</option>
    //                         <option value="VF">SNIPER VF</option>
    //                         <option value="ITMS">SNIPER ITMS</option>
    //                         <option value="TSMA">SNIPER TSMA</option>
    //                         <option value="APTX">SNIPER APTX</option>
    //                         <option value="BPS">SNIPER BPS</option>
    //                         <option value="AF">SNIPER AF</option>
    //                         <option value="VPM">SNIPER VPM</option>
    //                         <option value="ONE">SNIPER ONE</option>
    //                         <option value="LUS">SNIPER LUS</option>
    //                         <option value="ONE-i">SNIPER ONE-i</option>
    //                         <option value="ONE-d">SNIPER ONE-d</option>
    //                       </select>
    //                     </div>
    //                     <div className="form-group">
    //                       <label>OS</label>
    //                       <select className="form-control m-b" id="os" name="os">
    //                         <option value='C' selected> Sniper OS (C) </option>
    //                         <option value='L'> Linux (L) </option>
    //                         <option value='S'> Solaris (S) </option>
    //                         <option value='W'> Windows (W) </option>
    //                         <option value='E'> AX Sniper OS (E) </option>
    //                       </select>
    //                     </div>
    //                     <div className="form-group">
    //                       <label>발급유형</label>
    //                       <select className="form-control m-b" id="sale" name="sale">
    //                         <option value='S' selected>납품 (S)</option>
    //                         <option value='D'>데모 (D)</option>
    //                         <option value='T'>시험 (T)</option>
    //                       </select>
    //                     </div>
    //                     <div className="form-group">
    //                       <label>만기일</label>
    //                       <div className="row">
    //                         <div className="col-sm-9">
    //                           <select className="form-control m-b" id="limit_date" name="limit_date">
    //                             <option value='10' > 제한없음 </option>
    //                             <option value='1' > 1년 </option>
    //                             <option value='2' selected> 2년 </option>
    //                             <option value='3' > 3년 </option>
    //                             <option value='4' > 1개월 </option>
    //                             <option value='0' > 만기일 지정 </option>
    //                           </select>
    //                         </div>
    //
    //                         <div className="col-sm-3">
    //                           <label> <input type="checkbox" className="i-checks" id="limit_date3" name="limit_date3" value="1"/> + 1개월</label>
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="form-group" id="datepicker1" style="display: none" >
    //                       <label>날짜 선택</label>
    //                       <div className="row">
    //                         <div className="col-md-11">
    //                           <div className="input-group date">
    //                             <span className="input-group-addon">
    //                               <i className="fa fa-calendar"></i>
    //                             </span>
    //                             <input type="text" className="form-control" id="limit_date2" name="limit_date2" readonly="readonly"/>
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //
    //                 <div className="form-group" id="lusDiv" style="display: none">
    //                   <label>LUS</label>
    //                   <div id="lus_bar" name="lus_bar"></div>
    //                 </div>
    //                 <input type="hidden" id="lus" name="lus" value="5"/>
    //                 <span id="onei_message" style="display:none; color:#F53F4B;">ONE-i 등록시 HTTPS, REGEX, UR, MR, AR, IPS, Reputation이 기본 적용 됩니다</span>
    //                 <span id="oned_message" style="display:none; color:#F53F4B;">ONE-d 등록시 LATELIMIT, DDX, IPS, Reputation이 기본 적용 됩니다</span>
    //                 <div className="form-group" id="oneInfo" style="display: none">
    //                   <label>ONE</label>
    //                   <div className="row">
    //                   <table className="table">
    //                     <tbody>
    //                       <tr>
    //                         <td><label className="checkbox-inline i-checks"> <input type="checkbox" value="1" id="ips" name="ips" checked="checked"/> ips </label></td>
    //                         <td><label className="checkbox-inline i-checks"> <input type="checkbox" value="1" id="dns" name="dns"/> DNS </label></td>
    //                         <td><label className="checkbox-inline i-checks"> <input type="checkbox" value="1" id="voip" name="voip"/> VOIP </label></td>
    //                         <td><label className="checkbox-inline i-checks"> <input type="checkbox" value="1" id="https" name="https"/> https </label></td>
    //                         <td><label className="checkbox-inline i-checks"> <input type="checkbox" value="1" id="snort" name="snort"/> RegEx </label></td>
    //                         <td><label className="checkbox-inline i-checks"> <input type="checkbox" value="1" id="qos" name="qos"/> Latelimit </label></td>
    //                       </tr>
    //                       <tr>
    //                         <td><label className="checkbox-inline i-checks"> <input type="checkbox" value="1" id="ddx" name="ddx"/> DDX </label></td>
    //                         <td><label className="checkbox-inline i-checks"> <input type="checkbox" value="1" id="dhcp" name="dhcp"/> DHCP </label></td>
    //                         <td><label className="checkbox-inline i-checks"> <input type="checkbox" value="1" id="ar" name="ar"/> AR </label></td>
    //                         <td><label className="checkbox-inline i-checks"> <input type="checkbox" value="1" id="mr" name="mr"/> MR </label></td>
    //                         <td><label className="checkbox-inline i-checks"> <input type="checkbox" value="1" id="ur" name="ur"/> UR </label></td>
    //                         <td><label className="checkbox-inline i-checks"> <input type="checkbox" value="1" id="reputation" name="reputation"/> Reputation </label></td>
    //                       </tr>
    //                     </tbody>
    //                   </table>
    //                 </div>
    //               </div>
    //               <div className="hr-line-dashed"></div>
    //               <div className="hr-line-dashed"></div>
    //                 <div className="row">
    //                   <div className="col-sm-6 b-r">
    //                     <div className="form-group">
    //                       <input type="text" placeholder="고객사" className="form-control" id="co" name="co"/>
    //                     </div>
    //                     <div className="form-group">
    //                       <input type="text" placeholder="영업" className="form-control" id="business" name="business"/>
    //                     </div>
    //                     <div className="form-group">
    //                       <input type="text" placeholder="프로젝트" className="form-control" id="tel" name="tel"/>
    //                     </div>
    //                   </div>
    //                   <div className="col-sm-6">
    //                     <div className="form-group">
    //                       <input type="text" placeholder="협력사" className="form-control" id="charge" name="charge"/>
    //                     </div>
    //                     <div className="form-group">
    //                       <input type="text" placeholder="장비 S/N" className="form-control" id="admin" name="admin"/>
    //                     </div>
    //
    //                     <div className="form-group">
    //                       <input type="text" placeholder="출고구분" className="form-control" id="mail" name="mail"/>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="form-group">
    //                   <input type="text" placeholder="메모" className="form-control" id="note2" name="note2"/>
    //                 </div>
    //                 <span style="color:#F53F4B;">
    //                   특수 문자는 ( ) - _  만 허용 합니다.<br/>
    //                   모든 공백은 허용 하지 않습니다.
    //                 </span>
    //               </form>
    //             </div>
    //             <div className="col-sm-2"><h4>시리얼 등록 하기</h4>
    //               <p>On mouse click the Serial can make</p>
    //               <p className="text-center">
    //                 <a><i className="fa fa-sign-in big-icon" id="btnAddSerial"></i></a>
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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
