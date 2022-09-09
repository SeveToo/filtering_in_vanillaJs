const buttons = document.querySelectorAll('.galleryButtons button');

for(let i=0; i<buttons.length; i++)
   buttons[i].onclick =  () => {
      let all = document.querySelectorAll('.all');
      let yellow = document.querySelectorAll('.yellow');
      let blue = document.querySelectorAll('.blue');
      let red = document.querySelectorAll('.red');
      let green = document.querySelectorAll('.green');



      switch(i)  {
         case 0: 
            all.forEach(e => { e.style.display = "block"; });
         break;
         case 1: 
            all.forEach(e => { e.style.display = "none"; });
            yellow.forEach(e => { e.style.display = "block"; });
         break;
         case 2: 
            all.forEach(e => { e.style.display = "none"; });
            blue.forEach(e => { e.style.display = "block"; });
         break;
         case 3: 
            all.forEach(e => { e.style.display = "none"; });
            red.forEach(e => { e.style.display = "block"; });
         break;
         case 4: 
            all.forEach(e => { e.style.display = "none"; });
            green.forEach(e => { e.style.display = "block"; });
         console.log('green'); break;
      }
      console.log(i);
   }
