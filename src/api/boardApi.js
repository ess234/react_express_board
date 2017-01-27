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
]

export default class boardApi{
  static getAllContents() {
    return new Promise((resolve, reject) => {
      resolve (Object.assign([], contents));
    });
  }
}
