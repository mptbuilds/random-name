const num = 10;
const randomNameGenerator = num => {
   var name = "\n";
   for(let i = 0; i < num; i++){
      const random = Math.floor(Math.random() * 27);
      name += String.fromCharCode(97 + random);
   };
   return name;
};

function typeWriter() {
  document.getElementById("demo").innerHTML += randomNameGenerator(num);
}
