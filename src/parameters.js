// this object defines the parameters of the model
// - constants
// - variables (connected to sliders) properties range and default
// - choices (connected to radios) properties choices and default
// - switches (connected to toggles) property default
// utils.js provides methods for extracting various types of parameters for later use

export default {
		dt:1,
		L:100,
		agentsize: 1.0,
	
		response_magnitude: {
			range:[0,0.3],
			default:0.1
		},
		lateral_interaction: {
			range:[0.5,20],
			default:6
		},
		input_space : {
			choices:["circle","triangle","square","cross"],
		default:0
		},
		geometry : {
			choices:["256 x 1","64 x 4","16 x 16"],
			dimensions:[{nx:256,ny:1},{nx:64,ny:4},{nx:16,ny:16}],
			default:2
		}
}

