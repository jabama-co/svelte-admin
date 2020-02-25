<script>
	export let name;
	export let title;
</script>

<style lang="scss">
@import "./styles/variables.scss";
	h1 {
		font: {
			size: $size-font-large;
		} 
		color: $color-font-success;
	}
	h2 {
		font: {
			size: $size-font-medium;
		}
		color: $color-font-error	;

	}
	h3 {
		font: {
			size: $size-font-small;
		}
		color: $color-font-warning;
	}
</style>

<h1>Hello {name} {title}!</h1>
<h2>Hello {name} {title}!</h2>
<h3>Hello {name} {title}!</h3>