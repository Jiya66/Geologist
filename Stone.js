class Stone {
    constructor(x,y,r)
	{
	var options = {
			'density':15,
			'friction': 1.0,
			'restitution':0.5
		  };
	// assign options to the rubber ball
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 150;
    this.height = 40;
    World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("darkgrey");
			fill("grey");
			rect(0, 0, this.width, this.height);

		pop()
	}

}