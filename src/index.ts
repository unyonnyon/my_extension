const randomPick = (items: Array<string>): string => {
  const index: number = Math.floor(items.length * Math.random());
  return items[index];
};

const items: Array<string> = ["m", "o", "c", "h", "i"];

type Mochi = {
  name: string;
  age: number;
  nickname: string;
};

type OptionalMochi = Partial<Mochi>;

type RequiredMochi = Required<OptionalMochi>;

const mochi: Mochi = {
  name: "mochi",
  age: 10,
  nickname: "mochimochi",
};

const optionalMochi: OptionalMochi = {
  name: "optionalmochi",
};

const requiredMochi: RequiredMochi = {
  name: "requiredmochi",
  age: 10,
  nickname: "mochimochi",
};

console.log(mochi.nickname);
console.log(optionalMochi.nickname);
console.log(requiredMochi.age);

type GeneToGene<T> = {
  (number: T): T;
};

type NumToNum = {
  (number: number): number;
};

type NumToNumAndMore = (age: number, sum?: number) => number;

const elapsed10YearWithGene: GeneToGene<number> = (age: number): number => {
  return age + 10;
};

const elapsed10Year: NumToNumAndMore = (age: number, sum?: number): number => {
  return age + 10;
};

mochi.age = elapsed10Year(mochi.age);
if (optionalMochi.age) optionalMochi.age = elapsed10Year(optionalMochi.age);

const greeting = () => {
  const message: string = "めっちゃmochimochiしてるじゃん";
  alert(message);

  const changeBackgroundColor = () => {
    document.body.style.backgroundColor = "#FF0000";
  };
  changeBackgroundColor();
};

chrome.action.onClicked.addListener((tab) => {
  if (tab.id === undefined) {
    console.log("tab error");
    return;
  }
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: greeting,
  });
});
