const num = 8;
const randomNameGenerator = num => {
   let txt = "\n";
   for(let i = 0; i < num; i++){
      const random = Math.floor(Math.random() * 27);
      txt += String.fromCharCode(97 + random);
   };
   return txt;
};

function typeWriter() {
  document.getElementById("demo").innerHTML += randomNameGenerator(num);
}
