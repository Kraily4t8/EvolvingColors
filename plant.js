class plant {
	constructor(hue, spawnTick) {
		//can only move into empty cells
		//hue
		this.type = "plant";
		this.myHue = hue;
		//age in ticks
		this.spawnTick = spawnTick;
		//age of maturity
		this.willBeMature = 20;
		this.mature = false;
		//chance to die
		this.deathChance = 0.01;
		//shape
	};



	reproduce(){
		//hsl(parentHue + diff, 100,50)
	};

	wrapValue(val, max) {
        return (val + max) % max;
    };

	update() {

	};
	
	draw() {

	};
};