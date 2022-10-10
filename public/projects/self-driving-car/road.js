class Road{
    constructor(x, width, laneCount=3){
        this.x = x;
        this.width = width;
        this.laneCount = laneCount;

        this.left = x-width/2;
        this.right = x+width/2;

        const infinity = 1000000;
        this.top = -infinity;
        this.bottom = infinity;

        const topLeft = {x:this.left, y:this.top};
        const bottomLeft = {x:this.left, y:this.bottom};
        const topRight = {x:this.right, y:this.top};
        const bottomRight = {x:this.right, y:this.bottom};
        this.borders = [[topLeft, bottomLeft],[topRight, bottomRight]];
        this.lanes = [];
        for(let i=1; i <= this.laneCount-1; i++){
            const x = lerp(this.left, this.right, i/this.laneCount);
            this.lanes.push([{x:x, y:this.top}, {x:x, y:this.bottom}]);
        }
    }

    getLaneCenter(laneIndex){
        const laneWidth = this.width/this.laneCount;
        return this.left+laneWidth/2+Math.min(laneIndex, this.laneCount-1)*laneWidth;
    }

    draw(ctx){
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white";
        //draw lane lines
        ctx.setLineDash([20, 20]);
        this.lanes.forEach(lane => {
            ctx.beginPath();
            ctx.moveTo(lane[0].x, lane[0].y);
            ctx.lineTo(lane[1].x, lane[1].y);
            ctx.stroke();
        });

        //draw borders
        ctx.setLineDash([]);
        this.borders.forEach(border => {
            ctx.beginPath();
            ctx.moveTo(border[0].x, border[0].y);
            ctx.lineTo(border[1].x, border[1].y);
            ctx.stroke();
        });

    }
}

