class Animat {
	constructor(hue) {
		//can move to plant and empty cells
		//hue
		this.myHue = hue;
		//age in ticks
		this.age = 0;
		//gain energy when eating, lose energy else where
		this.energyLevel; //dies when = 0;
		//age of maturity
		this.willBeMature = 20;
		//chance to die
		this.deathChance = 0.01;
		//shape
		
	};

	move() {
		//talk to automata table, copy this object onto the moved cell, remove obj from current cell
	}


	reproduce() 		
		//hsl(parentHue + diff, 100,50)
	}

	wrapValue(val, max) {
        return (val + max) % max;
    }

	update() {

	};
}