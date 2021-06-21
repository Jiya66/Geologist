class Iron {
    constructor(x,y,r)
	{
	var options = {
			'density':25,
			'friction': 1.0,
			'restitution':0.09
		  };
	// assign options to the rubber ball
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 150;
    this.height = 40;
    World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("maroon");
			fill("brown");
			rect(0, 0, this.width, this.height);

		pop()
	}

}