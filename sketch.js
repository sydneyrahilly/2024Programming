let randomWalker = []; 
let maxWalkers;
let colorPalette = ['#12E0DD','#E1BB00', '#1277E0', '#E09412','#386160'];
function setup() {
  createCanvas(400, 400);
  background('silver');
  
  maxWalkers = 5; 
  
  for ( i = 0; i < maxWalkers; i++)
    {
      randomWalker.push(new     walker(random(0,width),random(0,height),random(-5,10),colorPalette[i]))
    }
  
  
}

function draw() {
  
  for ( i = 0; i < maxWalkers; i++)
    {
      randomWalker[i].display();
      randomWalker[i].walkingDirection();
      randomWalker[i].keepInCanvas();
    }

  
}