class Snow {
    constructor(x, y, r){
        var objects = {
            friction:2,
            density:1,
            isStatic:false,
        }
        this.snow = Bodies.circle(x, y, r, objects);
        World.add(world, this.snow);
        this.img = loadImage("snow5.webp");
    }
    snowFall(){
        if(this.snow.position > height){
            Matter.Body.setPosition(this.snow, {x:random(0,800), y:-10});
        }

        this.snow.velcoityY = -5;
    }
    display(){
        push()
        imageMode(CENTER);
        image(this.img, this.snow.position.x, this.snow.position.y, 20);
        pop()
    }
}
