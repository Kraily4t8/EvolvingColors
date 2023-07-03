// This game shell was happily modified from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011
class Automata {
    constructor() {
        //plant
        //animal
            //traits
        //Automata specifications
        //table 
        this.tableDimension = 50;
        this.cellSize = 10;
        this.currentTable = this.spawntable();
        //rate of plants
        //rate of animal
        //rate of nothing
        this.tickCount = 0;
        this.ticks = 0;
        this.cellGap = 2;
        //this.gap = true;
    };

    //spawntable
    spawntable() {
        let newTable = [];
        for(let col = 0; col < this.tableDimension; col++) {
            newTable.push([]);
            for(let row = 0; row < this.tableDimension; row++) {  
                newTable[col][row] = this.spawn(); //plantRate //animatRate 
            }
        }
        return newTable;
    };
    
    //spawn plant, animal or nothing
    spawn() {
        //spawnRates
        if(0.5 > Math.random()){
            return new plant(randomInt(360), this.ticks);//plant object
        } else {
            return ' ';
        }
    };

    spawnRates() { //objects + empty space
        //total objs = t
        //% likelyhood of spawn = p; where p < 1
        //chance of spawn = 1/t * (p * t)
    }

    //fill table
    //wrap
    wrapValue(val, max) {
        return (val + max) % max;
    }

    //find empty neighboring cells
    findEmptyNeighbor(col, row) {
        //tuples of potential empty neighbors, if none return null
        let emptyNeigbors = [];

        //3x3 ignore middle
        for(var i = col - 1; i <= col + 1; i++) {
            for(var j = row - 1; j <= row + 1; j++) {
                if (i === col && j === row) continue;
                const wrappedX = this.wrapValue(i,this.tableWidth);
                const wrappedY = this.wrapValue(j,this.tableHeight);
                //count += this.currentTable[wrappedX][wrappedY];
                if(this.currentTable[wrappedX][wrappedY] == ' ') emptyNeigbors.push([wrappedX][wrappedY]);
            }
        }

        if(emptyNeigbors > 0) {
            return emptyNeigbors[Math.randomInt(emptyNeigbors.length - 1)];
        }
        return null;
    }


    update(){
        //speed
        //flip the thing
        this.speed = 120 - parseInt(document.getElementById("speed").value, 10);
        if(this.tickCount++ >= this.speed && this.speed != 120){
            this.tickCount = 0;
            this.ticks++;
            document.getElementById('ticks').innerHTML = "Ticks: " + this.ticks;
            //update maturity
            for(var col = 0; col < this.tableDimension; col++) {
                for(var row = 0; row < this.tableDimension; row++) {
                    let spot = this.currentTable[col][row];
                    if(spot.type == "plant") {
                        //check for age
                        if(this.ticks - spot.spawnTick > spot.willBeMature) spot.maturity = true;
                        console.log(spot.mature);
                        if(spot.mature) {
                            let newSpawn = this.findEmptyNeighbor(col, row);
                            if(newSpawn != null) {
                                let newCol = newSpawn[0];
                                let newRow = newSpawn[1];
                                console.log(newCol + " " + newRow);
                                this.currentTable[newCol][newRow] = new plant(spot.myHue,spawnTick); //+ shift
                            }
                        }
                        //mark neighbors for new plant
                    }
                }
            }
            //makes new table
            //this.currentTable = this.generateNewTable(); 
            //next table * dependent on tick speed
        }
    };

    draw(ctx) {
        
        //ctx.fillRect(100,100,100,100);

        for(var i = 0; i < this.tableDimension; i++) {
            for(var j = 0; j < this.tableDimension; j++) {
                //column * size + gap
                //position x;           y
                //size - gap
                //width
                let spot = this.currentTable[i][j];
                
                if(spot.type == "plant") {
                    //console.log(spot + "spot " + i + " " + j + " "spot.hue);
                    //draw Plant with hue
                    ctx.fillStyle = hsl(spot.myHue, 20 + (this.ticks), 50);//hsl(spot.myHue, 20 + (this.ticks - spot.spawnTick)/spot.willBeMature, 50);
                    ctx.fillRect(i * this.cellSize, j * this.cellSize, this.cellSize - this.cellGap, this.cellSize - this.cellGap);
                }
            }
        }
    };
};
