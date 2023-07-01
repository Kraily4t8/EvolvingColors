// This game shell was happily modified from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011
class Automata {
    constructor() {
        //plant
        //animal
            //traits
        //Automata specifications
        //table 
        this.tableDimension = 100;
        this.cellSize = 10;
        this.currentTable = this.spawntable();
        //this.tickCount = 0;
        //this.ticks = 0;
        this.gapSize = 2;
        //this.gap = true;
    };

    //spawntable
    spawntable() {
        let newTable = [];
        for(let i = 0; i < this.tableDimension)
    }

    //fill table
    //wrap
    wrapValue(val, max) {
        return (val + max) % max;
    }

    //look at neighboring cells
   
    update(){
        
    };

    draw(ctx) {
        ctx.fillStyle = rgb(17, 203, 240);
        //ctx.fillRect(100,100,100,100);

        for(var i = 0; i < this.tableDimension; i++) {
            for(var j = 0; j < this.tableDimension; j++) {
                //column * size + gap
                //position x;           y
                //size - gap
                //width
                if(this.currentTable[i][j]) {
                    ctx.fillRect(i * this.cellSize, j * this.cellSize, this.cellSize - cellGap, this.cellSize - cellGap);
                }
            }
        }
    };
};
