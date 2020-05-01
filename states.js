let statesHash = { "ca": 27, "nm": 3, "ak": 1, "ga": 1, "md": 3, "la": 3, "ny": 10, "in": 1, "pa": 4, "az": 1, "va": 3, "wi": 3, "oh": 3, "dc": 1, "fl": 3, "mi": 4, "ky": 2, "ct": 1, "ia": 1, "nc": 3, "hi": 1, "tn": 2, "il": 3, "mn": 1, "nh": 1, "or": 2, "wa": 2, "ma": 1, "vt": 1, "ks": 1, "co": 1,
	// Canada:0 1,
}

jQuery(document).ready(function () {

	// Then connect it to the page and add some code to make visualization:

	var max = 0,
		min = Number.MAX_VALUE,
		cc,
		startColor = [255, 230, 230],
		endColor = [255, 200, 200],
		colors = {},
		hex;

	//find maximum and minimum values
	for (cc in statesHash) {
		if (parseFloat(statesHash[cc]) > max) {
			max = parseFloat(statesHash[cc]);
		}
		if (parseFloat(statesHash[cc]) < min) {
			min = parseFloat(statesHash[cc]);
		}
	}

	//set colors according to values of GDP
	for (cc in statesHash) {
		if (statesHash[cc] > 0) {
			colors[cc] = '#';
			for (var i = 0; i < 3; i++) {
				hex = Math.round(startColor[i]
					+ (endColor[i]
						- startColor[i])
					* (statesHash[cc] / (max - min))).toString(16);

				if (hex.length == 1) {
					hex = '0' + hex;
				}

				colors[cc] += (hex.length == 1 ? '0' : '') + hex;
			}
		}
	}

	jQuery('#vmap').vectorMap(
		{
			map: 'usa_en',
			backgroundColor: null,
			borderColor: 'rgb(255,150,150)',
			borderOpacity: 1,
			borderWidth: 1,
			color: "#fff",
			colors: colors,
			enableZoom: false,
			hoverOpacity: 0.7,
			normalizeFunction: 'linear',
			selectedColor: null,
			selectedRegions: null,
			showTooltip: false,
			onRegionOver: function (element, code, region) {
				let count = statesHash[code.toString()] ? statesHash[code.toString()] : 0;
				let participantsString = count === 1 ? "participant" : "participants";
				let percent = ((count / 101) * 100).toFixed(2).toString() + `%`;
				let message = `${region} (${code.toUpperCase()}): ${count} survey ${participantsString} (${percent} of total)`
				document.querySelector(".map-hover-notes").innerHTML = message;
			}
		});
});








let statesArr = [
	{name: "CA",	value: 1},
	{name: "NM",	value: 2},
	{name: "CA",	value: 1},
	{name: "AK",	value: 1},
	{name: "GA",	value: 1},
	{name: "MD",	value: 2},
	{name: "LA",	value: 1},
	{name: "NY",	value: 1},
	{name: "CA",	value: 2},
	{name: "IN",	value: 1},
	{name: "NY",	value: 3},
	{name: "NY",	value: 1},
	{name: "NY",	value: 1},
	{name: "PA",	value: 1},
	{name: "AZ",	value: 1},
	{name: "VA",	value: 1},
	{name: "WI",	value: 1},
	{name: "OH",	value: 2},
	{name: "DC",	value: 1},
	{name: "FL",	value: 1},
	{name: "MI",	value: 1},
	{name: "MI",	value: 1},
	{name: "KY",	value: 1},
	{name: "CA",	value: 1},
	{name: "CA",	value: 1},
	{name: "CA",	value: 3},
	{name: "CT",	value: 1},
	{name: "IA",	value: 1},
	{name: "NC",	value: 1},
	{name: "HI",	value: 1},
	{name: "CA",	value: 1},
	{name: "TN",	value: 1},
	{name: "CA",	value: 1},
	{name: "MI",	value: 1},
	{name: "NC",	value: 1},
	{name: "IL",	value: 1},
	{name: "MD",	value: 1},
	{name: "CA",	value: 1},
	{name: "CA",	value: 1},
	{name: "MN",	value: 1},
	{name: "NY",	value: 1},
	{name: "WI",	value: 1},
	{name: "PA",	value: 1},
	{name: "NC",	value: 1},
	{name: "NH",	value: 1},
	{name: "FL",	value: 1},
	{name: "Canada",	value: 1},
	{name: "OH",	value: 1},
	{name: "VA",	value: 1},
	{name: "CA",	value: 1},
	{name: "KY",	value: 1},
	{name: "TN",	value: 1},
	{name: "CA",	value: 2},
	{name: "CA",	value: 1},
	{name: "LA",	value: 1},
	{name: "IL",	value: 1},
	{name: "CA",	value: 1},
	{name: "CA",	value: 1},
	{name: "CA",	value: 2},
	{name: "IL",	value: 1},
	{name: "NY",	value: 1},
	{name: "OR",	value: 1},
	{name: "WA",	value: 1},
	{name: "NY",	value: 1},
	{name: "VA",	value: 1},
	{name: "LA",	value: 1},
	{name: "CA",	value: 1},
	{name: "CA",	value: 1},
	{name: "CA",	value: 1},
	{name: "NM",	value: 1},
	{name: "FL",	value: 1},
	{name: "MI",	value: 1},
	{name: "WA",	value: 1},
	{name: "MA",	value: 1},
	{name: "NY",	value: 1},
	{name: "VT",	value: 1},
	{name: "CA",	value: 1},
	{name: "PA",	value: 1},
	{name: "OR",	value: 1},
	{name: "PA",	value: 1},
	{name: "KS",	value: 1},
	{name: "CA",	value: 1},
	{name: "WI",	value: 1},
	{name: "CO",	value: 1},
	{name: "CA",	value: 1},
]