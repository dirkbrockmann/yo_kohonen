// this is a module that contains most of the explorable specific code
// the "math" of the explorable, the model itself, without the elements
// of visualization which are done in viz.js

import param from "./parameters.js"
import {each,range,map,mean,min} from "lodash-es"
import {dist,inside} from "./utils"
import network from "./lattice.js"
import space from "./inputspace.js"


var nodes = [];
var links = [];
var stim = {};

// the initialization function, this is bundled in simulation.js with the initialization of
// the visualization and effectively executed in index.js when the whole explorable is loaded

const initialize = () => {

	// set/reset timer
	param.timer={}; param.tick=0;

	// make agents
	const dim = param.geometry.dimensions[param.geometry.widget.value()];
	nodes = network(dim.nx,dim.ny)
	links = []
	
	nodes.forEach(function(d){
		d.x=2*Math.random()-1;
		d.y=2*Math.random()-1;
		d.neighbors.forEach(function(n){
			links.push({source:d,target:n})
		})
	})
	
};

// the go function, this is bundled in simulation.js with the go function of
// the visualization, typically this is the iteration function of the model that
// is run in the explorable.

const go  = () => {
	
	param.tick++;
	stim = {x:2*Math.random()-1,y:2*Math.random()-1};
	const boundary = space[param.input_space.choices[param.input_space.widget.value()]];
	const step = param.response_magnitude.widget.value();
	const sigma = param.lateral_interaction.widget.value();
	
	if (inside(stim,boundary)){
		
		each(nodes,n => n.state="clear")	

		let d = nodes.map(n=>dist(n,stim));
		let winner = nodes[d.indexOf(min(d))];
	 	winner.state = "winner";

		each(nodes,n=>{
			const L = step*Math.exp(-((n.n-winner.n)*(n.n-winner.n)+
			(n.m-winner.m)*(n.m-winner.m))/(sigma**2));
		
			let norm = dist(stim,n);
			var dx = (stim.x-n.x)/norm;
			var dy = (stim.y-n.y)/norm;
			n.x+=L*dx;
			n.y+=L*dy;
		})			
	}
	
}

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the model, if a parameter is changed,
// e.g. a radio button is pressed. 

const update = () => {
	

}

// the three functions initialize, go and update are exported, also all variables
// that are required for the visualization
export {stim,nodes,links,initialize,go,update}
