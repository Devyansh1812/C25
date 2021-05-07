//inheritance is used when we do not want to repeat the code in different classes
//parent class = common properties and functions
//child class=properties inhertited from the parent class plus its own special properties
//extends tell the computer that a child class is being created from  a parent class
class Bird extends BaseClass{
  constructor(x,y){
    // super transfers all properties from the parent class to the child class 
    super(x,y,50,50);
    //special property of the bird 
    this.image = loadImage("sprites/bird.png");
  }
  //function overriding = having same name function in parent as well as child class 
  display(){
    //special function of the child class 
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    //calling the display function from the parent class which tells us how to display the bird
    super.display();
  }
}