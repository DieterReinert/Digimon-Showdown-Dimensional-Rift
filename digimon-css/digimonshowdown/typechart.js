"use strict";Object.defineProperty(exports, "__esModule", {value: true});// 1 SE 2 Resist 3 immune

 const TypeChart = {
	"DG-Fire": {
		damageTaken: {
			brn: 3,
			"DG-Fire": 2,
			"DG-Water": 1,
			"DG-Electric": 0,
			"DG-Grass": 2,
			"DG-Fairy": 2,
			"DG-Dark": 0,
			"DG-Normal": 0,
			"DG-Steel": 2,
			"DG-Poison": 0,
			"Bug": 2,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 2,
			"Fighting": 0,
			"Fire": 2,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 1,
			"Ice": 2,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 1,
			"Steel": 2,
			"Water": 1,
		},
	},
	"DG-Water": {
		damageTaken: {
			hail: 3,
			frz: 3,
			"DG-Fire": 2,
			"DG-Water": 2,
			"DG-Electric": 1,
			"DG-Grass": 1,
			"DG-Fairy": 0,
			"DG-Dark": 0,
			"DG-Normal": 0,
			"DG-Steel": 2,
			"DG-Poison": 1,
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 1,
			"Fairy": 0,
			"Fighting": 0,
			"Fire": 2,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 1,
			"Ground": 0,
			"Ice": 2,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 2,
			"Water": 2,
		},
	},
	"DG-Electric": {
		damageTaken: {
			par: 3,
			"DG-Fire": 0,
			"DG-Water": 0,
			"DG-Electric": 2,
			"DG-Grass": 0,
			"DG-Fairy": 0,
			"DG-Dark": 0,
			"DG-Normal": 0,
			"DG-Steel": 2,
			"DG-Poison": 1,
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 2,
			"Fairy": 0,
			"Fighting": 0,
			"Fire": 0,
			"Flying": 2,
			"Ghost": 0,
			"Grass": 0,
			"Ground": 1,
			"Ice": 0,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 2,
			"Water": 0,
		},
	},
	"DG-Grass": {
		damageTaken: {
			powder: 3,
			"DG-Fire": 1,
			"DG-Water": 2,
			"DG-Electric": 0,
			"DG-Grass": 2,
			"DG-Fairy": 0,
			"DG-Dark": 0,
			"DG-Normal": 0,
			"DG-Steel": 0,
			"DG-Poison": 1,
			"Bug": 1,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 2,
			"Fairy": 0,
			"Fighting": 0,
			"Fire": 1,
			"Flying": 1,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 2,
			"Ice": 1,
			"Normal": 0,
			"Poison": 1,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 0,
			"Water": 2,
		},
	},
	"DG-Fairy": {
		damageTaken: {
			"DG-Fire": 0,
			"DG-Water": 0,
			"DG-Electric": 0,
			"DG-Grass": 1,
			"DG-Fairy": 0,
			"DG-Dark": 1,
			"DG-Normal": 0,
			"DG-Steel": 1,
			"DG-Poison": 1,
			"Bug": 2,
			"Dark": 2,
			"Dragon": 3,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 2,
			"Fire": 0,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Normal": 0,
			"Poison": 1,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 1,
			"Water": 0,
		},
	},
	"DG-Dark": {
		damageTaken: {
			prankster: 3,
			"DG-Fire": 0,
			"DG-Water": 0,
			"DG-Electric": 0,
			"DG-Grass": 0,
			"DG-Fairy": 1,
			"DG-Dark": 2,
			"DG-Normal": 0,
			"DG-Steel": 0,
			"DG-Poison": 0,
			"Bug": 1,
			"Dark": 2,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 1,
			"Fighting": 1,
			"Fire": 0,
			"Flying": 0,
			"Ghost": 2,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 3,
			"Rock": 0,
			"Steel": 0,
			"Water": 0,
		},
	},
	"DG-Normal": {
		damageTaken: {
			"DG-Fire": 0,
			"DG-Water": 0,
			"DG-Electric": 0,
			"DG-Grass": 0,
			"DG-Fairy": 0,
			"DG-Dark": 0,
			"DG-Normal": 0,
			"DG-Steel": 0,
			"DG-Poison": 0,
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 1,
			"Fire": 0,
			"Flying": 0,
			"Ghost": 3,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 0,
			"Water": 0,
		},
	},
	"DG-Steel": {
		damageTaken: {
			sandstorm: 3,
			psn: 3,
			tox: 3,
			"DG-Fire": 1,
			"DG-Water": 1,
			"DG-Electric": 0,
			"DG-Grass": 2,
			"DG-Fairy": 2,
			"DG-Dark": 0,
			"DG-Normal": 2,
			"DG-Steel": 2,
			"DG-Poison": 3,
			"Bug": 2,
			"Dark": 0,
			"Dragon": 2,
			"Electric": 0,
			"Fairy": 2,
			"Fighting": 1,
			"Fire": 1,
			"Flying": 2,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 1,
			"Ice": 2,
			"Normal": 2,
			"Poison": 3,
			"Psychic": 2,
			"Rock": 2,
			"Steel": 2,
			"Water": 1,
		},
	},
	"DG-Poison": {
		damageTaken: {
			"DG-Fire": 1,
			"DG-Water": 0,
			"DG-Electric": 0,
			"DG-Grass": 2,
			"DG-Fairy": 2,
			"DG-Dark": 0,
			"DG-Normal": 0,
			"DG-Steel": 0,
			"DG-Poison": 2,
			"Bug": 2,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 2,
			"Fighting": 2,
			"Fire": 1,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 1,
			"Ice": 0,
			"Normal": 0,
			"Poison": 2,
			"Psychic": 1,
			"Rock": 0,
			"Steel": 0,
			"Water": 0,
		},
	},
	"Normal": {
		inherit: true,
		damageTaken: {
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 1,
			"Fire": 0,
			"Flying": 0,
			"Ghost": 3,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 0,
			"Water": 0,
			"DG-Fire": 0,
			"DG-Water": 0,
			"DG-Electric": 0,
			"DG-Grass": 0,
			"DG-Fairy": 0,
			"DG-Dark": 0,
			"DG-Normal": 0,
			"DG-Poison": 0,
			"DG-Steel": 0,
		},
	},
	"Fire": {
		inherit: true,
		damageTaken: {
			brn: 3,
			"Bug": 2,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 2,
			"Fighting": 0,
			"Fire": 2,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 1,
			"Ice": 2,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 1,
			"Steel": 2,
			"Water": 1,
			"DG-Fire": 2,
			"DG-Water": 1,
			"DG-Electric": 0,
			"DG-Grass": 2,
			"DG-Fairy": 2,
			"DG-Dark": 0,
			"DG-Normal": 0,
			"DG-Steel": 2,
			"DG-Poison": 0,
		},
	},
	"Water": {
		inherit: true,
		damageTaken: {
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 1,
			"Fairy": 0,
			"Fighting": 0,
			"Fire": 2,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 1,
			"Ground": 0,
			"Ice": 2,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 2,
			"Water": 2,
			"DG-Fire": 2,
			"DG-Water": 2,
			"DG-Electric": 1,
			"DG-Grass": 1,
			"DG-Fairy": 0,
			"DG-Dark": 0,
			"DG-Normal": 0,
			"DG-Steel": 2,
			"DG-Poison": 1,
		},
	},
	"Grass": {
		inherit: true,
		damageTaken: {
			powder: 3,
			"Bug": 1,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 2,
			"Fairy": 0,
			"Fighting": 0,
			"Fire": 1,
			"Flying": 1,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 2,
			"Ice": 1,
			"Normal": 0,
			"Poison": 1,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 0,
			"Water": 2,
			"DG-Fire": 1,
			"DG-Water": 2,
			"DG-Electric": 0,
			"DG-Grass": 2,
			"DG-Fairy": 0,
			"DG-Dark": 0,
			"DG-Normal": 0,
			"DG-Steel": 0,
			"DG-Poison": 1,
		},
	},
	"Electric": {
		inherit: true,
		damageTaken: {
			par: 3,
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 2,
			"Fairy": 0,
			"Fighting": 0,
			"Fire": 0,
			"Flying": 2,
			"Ghost": 0,
			"Grass": 0,
			"Ground": 1,
			"Ice": 0,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 2,
			"Water": 0,
			"DG-Fire": 0,
			"DG-Water": 0,
			"DG-Electric": 2,
			"DG-Grass": 0,
			"DG-Fairy": 0,
			"DG-Dark": 0,
			"DG-Normal": 0,
			"DG-Steel": 2,
			"DG-Poison": 0,
		},
	},
	"Ice": {
		inherit: true,
		damageTaken: {
			hail: 3,
			frz: 3,
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 1,
			"Fire": 1,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 0,
			"Ground": 0,
			"Ice": 2,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 1,
			"Steel": 1,
			"Water": 0,
			"DG-Fire": 1,
			"DG-Water": 0,
			"DG-Electric": 0,
			"DG-Grass": 0,
			"DG-Fairy": 0,
			"DG-Dark": 0,
			"DG-Normal": 0,
			"DG-Steel": 1,
			"DG-Poison": 0,
		},
	},
	"Fighting": {
		inherit: true,
		damageTaken: {
			"Bug": 2,
			"Dark": 2,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 1,
			"Fighting": 0,
			"Fire": 0,
			"Flying": 1,
			"Ghost": 0,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 1,
			"Rock": 2,
			"Steel": 0,
			"Water": 0,
			"DG-Fire": 0,
			"DG-Water": 0,
			"DG-Electric": 0,
			"DG-Grass": 0,
			"DG-Fairy": 1,
			"DG-Dark": 2,
			"DG-Normal": 0,
			"DG-Steel": 0,
			"DG-Poison": 0,
		},
	},
	"Poison": {
		inherit: true,
		damageTaken: {
			psn: 3,
			tox: 3,
			"Bug": 2,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 2,
			"Fighting": 2,
			"Fire": 0,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 1,
			"Ice": 0,
			"Normal": 0,
			"Poison": 2,
			"Psychic": 1,
			"Rock": 0,
			"Steel": 0,
			"Water": 0,
			"DG-Fire": 0,
			"DG-Water": 0,
			"DG-Electric": 0,
			"DG-Grass": 2,
			"DG-Fairy": 2,
			"DG-Dark": 0,
			"DG-Normal": 0,
			"DG-Steel": 0,
			"DG-Poison": 2,
		},
	},
	"Ground": {
		inherit: true,
		damageTaken: {
			sandstorm: 3,
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 3,
			"Fairy": 0,
			"Fighting": 0,
			"Fire": 0,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 1,
			"Ground": 0,
			"Ice": 1,
			"Normal": 0,
			"Poison": 2,
			"Psychic": 0,
			"Rock": 2,
			"Steel": 0,
			"Water": 1,
			"DG-Fire": 0,
			"DG-Water": 1,
			"DG-Electric": 3,
			"DG-Grass": 1,
			"DG-Fairy": 0,
			"DG-Dark": 0,
			"DG-Normal": 0,
			"DG-Steel": 0,
			"DG-Poison": 2,
		},
	},
	"Flying": {
		inherit: true,
		damageTaken: {
			"Bug": 2,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 1,
			"Fairy": 0,
			"Fighting": 2,
			"Fire": 0,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 3,
			"Ice": 1,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 1,
			"Steel": 0,
			"Water": 0,
			"DG-Fire": 0,
			"DG-Water": 0,
			"DG-Electric": 1,
			"DG-Grass": 2,
			"DG-Fairy": 0,
			"DG-Dark": 0,
			"DG-Normal": 0,
			"DG-Steel": 0,
			"DG-Poison": 0,
		},
	},
	"Psychic": {
		inherit: true,
		damageTaken: {
			"Bug": 1,
			"Dark": 1,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 2,
			"Fire": 0,
			"Flying": 0,
			"Ghost": 1,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 2,
			"Rock": 0,
			"Steel": 0,
			"Water": 0,
			"DG-Fire": 0,
			"DG-Water": 0,
			"DG-Electric": 0,
			"DG-Grass": 0,
			"DG-Fairy": 0,
			"DG-Dark": 1,
			"DG-Normal": 0,
			"DG-Steel": 0,
			"DG-Poison": 0,
		},
	},
	"Bug": {
		inherit: true,
		damageTaken: {
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 2,
			"Fire": 1,
			"Flying": 1,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 2,
			"Ice": 0,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 1,
			"Steel": 0,
			"Water": 0,
			"DG-Fire": 1,
			"DG-Water": 0,
			"DG-Electric": 0,
			"DG-Grass": 2,
			"DG-Fairy": 0,
			"DG-Dark": 0,
			"DG-Normal": 0,
			"DG-Steel": 0,
			"DG-Poison": 0,
		},
	},
	"Rock": {
		inherit: true,
		damageTaken: {
			sandstorm: 3,
			"Bug": 0,
			"Dark": 0,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 1,
			"Fire": 2,
			"Flying": 2,
			"Ghost": 0,
			"Grass": 1,
			"Ground": 1,
			"Ice": 0,
			"Normal": 2,
			"Poison": 2,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 1,
			"Water": 1,
			"DG-Fire": 2,
			"DG-Water": 1,
			"DG-Electric": 0,
			"DG-Grass": 1,
			"DG-Fairy": 0,
			"DG-Dark": 0,
			"DG-Normal": 2,
			"DG-Steel": 1,
			"DG-Poison": 2,
		},
	},
	"Ghost": {
		inherit: true,
		damageTaken: {
			trapped: 3,
			"Bug": 2,
			"Dark": 1,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 3,
			"Fire": 0,
			"Flying": 0,
			"Ghost": 1,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Normal": 3,
			"Poison": 2,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 0,
			"Water": 0,
			"DG-Fire": 0,
			"DG-Water": 0,
			"DG-Electric": 0,
			"DG-Grass": 0,
			"DG-Fairy": 0,
			"DG-Dark": 1,
			"DG-Normal": 3,
			"DG-Steel": 0,
			"DG-Poison": 2,
		},
	},
	"Dragon": {
		inherit: true,
		damageTaken: {
			"Bug": 0,
			"Dark": 0,
			"Dragon": 1,
			"Electric": 2,
			"Fairy": 1,
			"Fighting": 0,
			"Fire": 2,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 0,
			"Ice": 1,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 0,
			"Water": 2,
			"DG-Fire": 2,
			"DG-Water": 2,
			"DG-Electric": 2,
			"DG-Grass": 2,
			"DG-Fairy": 1,
			"DG-Dark": 0,
			"DG-Normal": 0,
			"DG-Steel": 0,
			"DG-Poison": 0,
		},
	},
	"Dark": {
		inherit: true,
		damageTaken: {
			prankster: 3,
			"Bug": 1,
			"Dark": 2,
			"Dragon": 0,
			"Electric": 0,
			"Fairy": 1,
			"Fighting": 1,
			"Fire": 0,
			"Flying": 0,
			"Ghost": 2,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Normal": 0,
			"Poison": 0,
			"Psychic": 3,
			"Rock": 0,
			"Steel": 0,
			"Water": 0,
			"DG-Fire": 0,
			"DG-Water": 0,
			"DG-Electric": 0,
			"DG-Grass": 0,
			"DG-Fairy": 1,
			"DG-Dark": 2,
			"DG-Normal": 0,
			"DG-Steel": 0,
			"DG-Poison": 0,
		},
	},
	"Steel": {
		inherit: true,
		damageTaken: {
			psn: 3,
			tox: 3,
			sandstorm: 3,
			"Bug": 2,
			"Dark": 0,
			"Dragon": 2,
			"Electric": 0,
			"Fairy": 2,
			"Fighting": 1,
			"Fire": 1,
			"Flying": 2,
			"Ghost": 0,
			"Grass": 2,
			"Ground": 1,
			"Ice": 2,
			"Normal": 2,
			"Poison": 3,
			"Psychic": 2,
			"Rock": 2,
			"Steel": 2,
			"Water": 0,
			"DG-Fire": 1,
			"DG-Water": 0,
			"DG-Electric": 0,
			"DG-Grass": 2,
			"DG-Fairy": 2,
			"DG-Dark": 0,
			"DG-Normal": 2,
			"DG-Steel": 2,
			"DG-Poison": 3,
		},
	},
	"Fairy": {
		inherit: true,
		damageTaken: {
			"Bug": 2,
			"Dark": 2,
			"Dragon": 3,
			"Electric": 0,
			"Fairy": 0,
			"Fighting": 2,
			"Fire": 0,
			"Flying": 0,
			"Ghost": 0,
			"Grass": 0,
			"Ground": 0,
			"Ice": 0,
			"Normal": 0,
			"Poison": 1,
			"Psychic": 0,
			"Rock": 0,
			"Steel": 1,
			"Water": 0,
			"DG-Fire": 0,
			"DG-Water": 0,
			"DG-Electric": 0,
			"DG-Grass": 1,
			"DG-Fairy": 0,
			"DG-Dark": 2,
			"DG-Normal": 0,
			"DG-Steel": 1,
			"DG-Poison": 1,
		},
	},
}; exports.TypeChart = TypeChart;

 //# sourceMappingURL=sourceMaps/typechart.js.map