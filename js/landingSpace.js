class LandingSpace{
    constructor(){
        this.landingSpaceImg = new Image()
        this.landingSpaceImg.src = "images/landing-space.png"

        this.x = 760
        this.y = 450

        this.height = 25
        this.width = 202
    }
    update(ctx){
        ctx.drawImage(this.landingSpaceImg,0,0,this.width,this.height,this.x,this.y,this.width,this.height)

    }
}