class Paper{
    constructor(x, y, r){//radius lo está tomando como una palabra reservada, la cambié por r. Puedes probar con otra variable
       var options={
           isStatic:false,
           restitution:0.3,
           friction:0,
           density:1.2
       }

        //this.body = Bodies.circle(x, y, radius, options); Va abajo de this.image y con this.x, etc.
       
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("paper.png");
               
	    World.add(world, this.body);
    }

    display(){
       // var paperpos=this.body.position
        push()
		translate(this.body.position.x, this.body.position.y);
        //translate(paperpos.x, paperpos.y);
        imageMode(CENTER);
    
      image(this.image, 0, 0, this.width, this.height);//falta agregar el radio
 //para darle la forma redonda prueba agregando 2 veces el radio(repetir)
 pop()
    }
}