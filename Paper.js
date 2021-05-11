class Paper {
    constructor(x, y, r) {
        var options={
            restitution: 0,
            friction: 0,
            density: 1.2,
            isStatic: false
            }

            this.body = Bodies.circle(x, y, r, options);
            this.image = loadImage("paper.png");
            World.add(world, this.body);  
        }
        display() {
                var paperPos = this.body.position;
                push();
                translate(paperPos.x, paperPos.y);
                imageMode(CENTER)
                image(this.image, 0, 0, 50, 50);                    
                pop();
        }
}