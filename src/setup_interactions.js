import {interval} from "d3"
import * as ct from "./controls.js"
import cfg from "./config.js"
import param from "./parameters.js"
import resetparameters from "./reset_parameters.js"
import {iterate,initialize,update} from "./simulation.js"

var timer = {}


const startstop = (display,config) => {
	ct.go.value() == 1 ? timer = interval(()=>iterate(display,config),cfg.simulation.delay) : timer.stop()

}


export default (display,controls,config) => {
	
	ct.reset.update(()=>resetparameters(controls))	// one button gets the resetparameters() method defined in resetparameters.js
	ct.go.update(() => startstop(display,config)) // one button gets the startstop function defined above
	ct.setup.update(() => initialize(display,config)) // this once gets the initialize() method defined in simulation.js
	param.input_space.widget.update(()=>initialize(display,config)) 
	param.geometry.widget.update(()=>initialize(display,config))
	// here we say that if a specific parameter is changed, in this case the number of particles, we also re_initialize the system (model and visuals)	
}

