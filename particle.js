class Particles {
constructor(x,y,r){

var options={
    restitution:0.4
}
this.r=r;

this.body=Bodies.circular(x,y,this.r,options);
this.color=color(random(0,255),random(0,255),random(0,255));
World .add(world,this.body);

}

if(frameCount % 60===0){
    Particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}

display(){
    var pos=this.body.position;
    var angle=this.body.angle;

    push()
    translate(pos.x,pos.y);
    rotate(angle);
    //imageMode(CENTER);
    noStroke();
    ellispeMode(RADIUS);
    ellispe(0,0,this.r,this.r);
}
};