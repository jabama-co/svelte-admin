<script>
	export let name;
	export let title;
</script>

<style lang="scss">
@import "./build/scss/variables.scss";
	h1 {
		color: $color-base-deep-purple-a-700;
	}
</style>

<h1>Hello {name} {title}!</h1>