class Chain{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.5,
            pointB:{x:offsetX,y:offsetY}
        }
        this.chain=Constraint.create(options)
        World.add (world,this.chain)
    }
    display(){
        push()
        strokeWeight(5)
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position

        var Anchor1X = pointA.x
        var Anchor1Y = pointA.y

        var Anchor2X = pointB.x+this.offsetX
        var Anchor2Y = pointB.y+this.offsetY
        stroke("white")
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)
        pop()
    }
}