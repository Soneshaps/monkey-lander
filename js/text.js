class Test{
    constructor(){

    }
    update(ctx){
        ctx.beginPath()
        ctx.strokeStyle="#000000"
        ctx.moveTo(300,300)
        ctx.lineTo(500,300)
        ctx.lineTo(500,400)
        ctx.lineTo(300,400)
        ctx.lineTo(300,300)
        ctx.stroke()
        ctx.closePath()
    }

    textPoly(){
        var points = [
            {x:300 , y:300},
            {x:500 , y:300},
            {x:500 , y:400},
            {x:300 , y:400}
        ]
        var sides = [
            [
                {x:300 , y:300},
                {x:500 , y:300}
            ],
            [
                {x:500 , y:300},
                {x:500 , y:400}

            ],
            [
                {x:500 , y:400},
                {x:300 , y:400}
            ],
            [
                {x:300 , y:400},
                {x:300 , y:300}
            ],
        ]

        return  {p:points, s:sides};
    }
}