import {range} from "lodash-es"

export default {
	circle: range(101).map(function(n){return {x:Math.cos(n/100*2*Math.PI),y:Math.sin(n/100*2*Math.PI)}}),
	triangle:[{x:-1,y:-1},{x:1,y:-1},{x:0,y:1},{x:-1,y:-1}],
	square:[{x:-1,y:-1},{x:1,y:-1},{x:1,y:1},{x:-1,y:1},{x:-1,y:-1}],
	cross:[{x:1/3,y:-1/3},{x:1,y:-1/3},{x:1,y:1/3},{x:1/3,y:1/3},
{x:1/3,y:1},{x:-1/3,y:1},{x:-1/3,y:1/3},{x:-1,y:1/3},{x:-1,y:-1/3},{x:-1/3,y:-1/3},{x:-1/3,y:-1},{x:1/3,y:-1},{x:1/3,y:-1/3}]
}

