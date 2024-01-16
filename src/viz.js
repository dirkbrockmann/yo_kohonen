// This is the core module for the implementation of the visualization
// It's analogous to model.js in terms of its relation to other modules,
// e.g. it reads the parameters and provides initialize, go and update functions
// to simulation.js where they get bundled with the analogous functions in model.js
// the observables and variables exported in model.js, e.g. the quantities
// used for the actual visualizations are also imported to viz.js

import * as d3 from "d3"
import param from "./parameters.js"
import {nodes,links,stim} from "./model.js"
import styles from "./styles.module.css"
import cfg from "./config.js"
import space from "./inputspace.js"
import {inside} from "./utils.js"

const X = d3.scaleLinear().domain([-1,1])
const Y = d3.scaleLinear().domain([-1,1])

var line = d3.line().x(d=>X(d.x)).y(d=>Y(d.y));


// the initialization function, this is bundled in simulation.js with the initialization of
// the model and effectively executed in index.js when the whole explorable is loaded
// typically here all the elements in the SVG or CANVAS element are set.

const initialize = (display,config) => {

	const W = config.display_size.width;
	const H = config.display_size.height;
	//
	X.range([config.display_margin,W-2*config.display_margin]);
	Y.range([H-2*config.display_margin,config.display_margin]);
	//
	display.selectAll("#origin").remove();
	//
	const origin = display.append("g").attr("id","origin")
	
	
	const boundary = origin.append("path").datum(space[param.input_space.choices[param.input_space.widget.value()]])
		.attr("d",line)
		.attr("class",styles.boundary)
	
	const link = origin.selectAll(null).data(links).enter().append("line")
		.attr("class",styles.synapse)
		.attr("x1", function(d) { return X(d.source.x); })
		.attr("y1", function(d) { return Y(d.source.y); })
		.attr("x2", function(d) { return X(d.target.x); })
		.attr("y2", function(d) { return Y(d.target.y); })
	
	const node = origin.selectAll(null).data(nodes).enter().append("circle")
	.attr("class",styles.neuron)
	.attr("r",cfg.simulation.neuron_size)
	.attr("transform",function(d){return "translate("+X(d.x)+","+Y(d.y)+")"})
	
	//
	// origin.selectAll(null).data(agents).enter().append("circle")
	// 	.attr("class",styles.node)
	// 	.attr("cx",d=>X(d.x))
	// 	.attr("cy",d=>Y(d.y))
	// 	.attr("r",X(param.agentsize/2))
	// 	.style("fill", d => param.color_by_heading.widget.value() ? d3.interpolateSinebow(d.theta/2/Math.PI)  : "black")
	//
};

// the go function, this is bundled in simulation.js with the go function of
// the model, typically this is the iteration function of the model that
// is run in the explorable. It contains the code that updates the parts of the display
// panel as a function of the model quantities.

const go = (display,config) => {
	//
	// display.selectAll("."+styles.node)
	// 	.attr("cx",d=>X(d.x))
	// 	.attr("cy",d=>Y(d.y))
	// 	.style("fill", d => param.color_by_heading.widget.value() ? d3.interpolateSinebow(d.theta/2/Math.PI)  : "black")
	const boundary = space[param.input_space.choices[param.input_space.widget.value()]];
	
	if (inside(stim,boundary)){

		display.select("#origin").append("circle").attr("r",2).style("fill","darkred")
			.attr("transform","translate("+X(stim.x)+","+Y(stim.y)+")")
			.transition().duration(500).attr("r",10).style("opacity",0).remove()
		
		display.select("#origin").selectAll("."+styles.neuron)
		.attr("transform",function(d){return "translate("+X(d.x)+","+Y(d.y)+")"})
		
		display.select("#origin").selectAll("."+styles.synapse)	
		.attr("x1", function(d) { return X(d.source.x); })
		.attr("y1", function(d) { return Y(d.source.y); })
		.attr("x2", function(d) { return X(d.target.x); })
		.attr("y2", function(d) { return Y(d.target.y); })		
	}
}

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the visualization, if a parameter is changed,
// e.g. a radio button is pressed, when the system is not running, e.g. when it is paused.

const update = (display,config) => {
	
	// display.selectAll("."+styles.node)
	// 	.style("fill", d => param.color_by_heading.widget.value() ? d3.interpolateSinebow(d.theta/2/Math.PI)  : "black")
	
}


export {initialize,go,update}
