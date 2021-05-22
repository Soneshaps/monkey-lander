class Collision{
    constructor(){

    }
    collide(p1,p2) {
        for(var i in p1.s) {
          for(var j in p2.s) {
            var t = this.intersect(p1.s[i],p2.s[j]);
            if(t === 'collinear') {continue;}
            if(t[0] <= 1 && t[0] >= 0 && t[1] <= 1 && t[1] >= 0) {
              return true;
            }
          }
        }
        return false;
      }
    intersect(s1,s2) {
        if(((s2[1].x - s2[0].x)*(s1[0].y - s1[1].y) - (s1[0].x - s1[1].x)*(s2[1].y - s2[0].y)) === 0) {
          return 'collinear';
        }
        var tA =  ((s2[0].y - s2[1].y)*(s1[0].x - s2[0].x) + (s2[1].x - s2[0].x)*(s1[0].y - s2[0].y))/
                  ((s2[1].x - s2[0].x)*(s1[0].y - s1[1].y) - (s1[0].x - s1[1].x)*(s2[1].y - s2[0].y)),
            tB =  ((s1[0].y - s1[1].y)*(s1[0].x - s2[0].x) + (s1[1].x - s1[0].x)*(s1[0].y - s2[0].y))/
                  ((s2[1].x - s2[0].x)*(s1[0].y - s1[1].y) - (s1[0].x - s1[1].x)*(s2[1].y - s2[0].y));
        return [tA, tB];
    }
      
}