const titleText = "";
const twitter = "";
const facebook = "";
const instagram = "";
const dummyText = (r: number = 50, text: string = "ダミーテキスト") => {
  for (let i = 0; i < r; i++) {
    text += text;
  }
  return text;
};
const dummyImg = (w: number, h: number) => `aiueo${w}*${h}`;
