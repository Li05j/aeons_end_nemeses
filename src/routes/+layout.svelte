<script>
	import '../app.postcss';
	import { browser } from '$app/environment';
</script>

<div class="flex">
	<div style="background-color: #aaaaaa" class="flex-1">
		<slot></slot> <!-- Page content will be injected here -->
	</div>
</div>
