const contents = [
  {
   id:"1",
   title:"Careless Mistakes",
   content:"This is very disappointing. I have had the book for about 3 hour now",
   author:"pat J Ryll",
   date:"2014/04/13"
 },
 {
   id:"2",
   title:"Hindered by many, many mistakes",
   content:"The explanation is good and the exercises are helpful but I've found several critical mistakes",
   author:"Joshua Cunningham",
   date:"2014/06/03"
 }
  // {
  //   id:"1",
  //   ser:"SKRO1CWIS214892",
  //   lic:"5ff4cad610a94192",
  //   co:"ux_1",
  //   admin:"ux_1",
  //   tel:"ux_1",
  //   mail:"ux_1",
  //   ver:"ONE",
  //   date:"20170123",
  //   limit_date:"20190223",
  //   mac:"000D48299CDE",
  //   charge:"ux_1",
  //   business:"ux_1",
  //   note:"신규발급",
  //   note2:"ux_1"
  // },
  // {
  //   id:"2",
  //   ser:"SKRTECWI5214898",
  //   lic:"15986ced9b974fbb",
  //   co:"ux",
  //   admin:"ux",
  //   tel:"ux",
  //   mail:"",
  //   ver:"ITMS",
  //   date:"20170120",
  //   limit_date:"20190220",
  //   mac:"000D48299CDE",
  //   charge:"ux",
  //   business:"ux",
  //   note:"신규발급",
  //   note2:""
  // }
]
// async(비동기) 로직, 콜백 지옥을 해결하기 위한 라이브러리
export default class boardApi{
  static getAllContents() {
    return new Promise((resolve, reject) => {
      resolve (Object.assign([], contents));
    });
  }

  static saveContent(content){
    return new Promise((resolve, reject) => {
      if (content) {
        //파라미터인 content 객체 정보를 temp_content에 할당함 (author, title, content)
        const temp_content = Object.assign({}, content);
        const minLength = 1;
        //자동 생성
        temp_content.id = parseInt(contents[contents.length - 1].id) + 1;
        temp_content.date = new Date().toLocaleDateString().replace(/(\s*)/g,"").split('.').slice(0,3).join('/');

        contents.push(temp_content);

        //콘솔에 temp_content 객체 정보가 찍힘
        resolve(temp_content);
      }
      else {
        reject(Error("saveContent Error"));
      }
    });
  }

  static updateContent(content){
    return new Promise((resolve, reject) => {
      if (content) {
        let targetIndex = contents.findIndex(a => a.id === content.id);

        content.date = new Date().toLocaleDateString().replace(/(\s*)/g,"").split('.').slice(0,3).join('/');

        //콘솔에 content 객체 정보가 찍힘
        resolve(content);
      }
      else {
        reject(Error("updateContent Error"));
      }
    });
  }
}
