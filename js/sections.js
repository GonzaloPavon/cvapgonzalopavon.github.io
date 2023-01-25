const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const elements = document.getElementsByClassName("typing-animation");

(async (typedElements) => {
   let texts = []
   
   for (let element of typedElements){
    texts.push(element.innerHTML);
    element.innerHTML = "";
   }
   
   for (let i = 0; i < texts.length; i++) {
      for (let character of texts[i]) {
        typedElements[i].innerHTML += character;
        await sleep(25)
      } 
   }
  
})(elements);
