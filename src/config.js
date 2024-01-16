// the global properties of the explorable, widget geometries etc. depending on the choice and application
// you are free to define new variables and properties for later access and for setting up the explorable
// the only place this is needed is for setting up the interactions in setup_interactions.js and in
// controls.js

export default { 
	widgets:{
		slider_size: 400,
		slider_show: true,
		slider_gap : 1.5,
		slider_anchor: {x:1,y:9},
		slider_girth:12,
		slider_knob:14,
		playbutton_size: 120,
		playbutton_anchor:{x:3,y:2},
		backbutton_anchor:{x:4,y:5},
		resetbutton_anchor:{x:2,y:5},
		radio:{
			input_space:{
				anchor:{x:9,y:1},
				size:150,
				orientation:"vertical",
				label_position:"right",
				shape:"circle",
				buttonsize:30,
			},
			geometry:{
				anchor:{x:1.5,y:7},
				size:300,
				orientation:"horizontal",
				label_position:"right",
				shape:"rect",
				buttonsize:30,
			}			
		}
	},
	simulation: {
		delay:0,
		neuron_size:5,
	}
}