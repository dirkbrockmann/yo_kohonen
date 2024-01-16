import {range} from "lodash-es"

const l2d = (i,nx) => { return [i % nx, Math.floor(i/nx)] }
const d2l = (x,y,nx) => { return y*nx+x; }

const nn4_dirichlet = (k,nx,ny) => {
	
	const nucksen = [[-1,0],[1,0],[0,-1],[0,1]];
	let wadda=[];
	nucksen.forEach(function(pp){
		var i = pp[0];
		var j = pp[1];
		var p = l2d(k,nx),
			x = p[0],
			y = p[1],
			a = x + i, 
			b = y + j;
		
			if (a<nx && b < ny && a>=0 && b>=0) {
			
				wadda.push(d2l(a,b,nx));
			}
		})
	
	return wadda;
}


export default (Nx,Ny) => {	

	var nodes = range(Nx*Ny).map(function(i){ return { m:(i % Nx), n: Math.floor(i / Nx)}})		
	
 	nodes.forEach(function(d,i){
		d.neighbors=nn4_dirichlet(i,Nx,Ny).map(function(x){return nodes[x]})
	});	
	
	return nodes;	
}
