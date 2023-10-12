const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '津田塾大学は気温30度だったので :insertx: はランニングへ出かけた。 :inserty: に着いた。 :insertz:。 体重68kgの :insertx: は驚いたが、Bobは無反応だった。 :insertx: はBobを軽蔑した。';
const insertX = ['梅子', '津田さん', '津田塾生'];
const insertY = ['小平キャンパス', '国分寺駅', '地球'];
const insertZ = ['文化祭をしていた', 'みんなゾンビになっていた', '氷鬼をしていた'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  // if (document.getElementById("uk").checked) {
  //   const weight = `${Math.round(300*0.0714286)} stone`;
  //   const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
  //   newStory = newStory.replace('94 fahrenheit', temperature);
  //   newStory = newStory.replace('300 pounds', weight);
  // }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
