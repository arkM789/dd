class paper{
constructor(x,y,r){
var options={
isStatic:false,
restitution:1,
friction:1,
density:0.3,

}

this.x=x
this.y=y
this.r=r
this.body=Bodies.circle(x,y,r,options)
World.add(world,this.body)



}

display(){

var paper=this.body.position;

push()
translate(paper.x,paper.y)
rectMode(CENTER)
strokeWeight(3)
fill("blue")
ellipse(0,0,this.r,this.r);
pop()

}




}