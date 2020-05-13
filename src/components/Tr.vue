<template>
	<tr :id="thisSymbol.symbol">
		<th>{{ thisSymbol.symbol }}</th>
		<th>
			{{ thisSymbol.price }}
		</th>
		<th>
			<slot> </slot>
		</th>
	</tr>
</template>

<script>
export default {
	name: "Tr",
	data() {
		return {
			thisTR: null,
		};
	},
	props: {
		thisSymbol: Object,
	},
	methods: {
		changeColor(changes) {
			this.thisTR.className = changes ? "green" : "red";
			setTimeout(() => {
				this.thisTR.removeAttribute("class");
			}, 1000);
		},
	},
	watch: {
		thisSymbol(now, before) {
			if (now.price > before.price) {
				console.log("now.price", now.price);
				this.changeColor(true);
			} else if (before.price > now.price) {
				this.changeColor(false);
			}
		},
	},
	mounted() {
		this.thisTR = document.getElementById(this.thisSymbol.symbol);
	},
};
</script>
