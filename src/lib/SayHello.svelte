<svelte:options customElement="my-sayhello"></svelte:options>

<script>
    export let name = "Peter"
</script>

<div>
    <h1>Hello {name}!</h1>
    <input type="text" bind:value={name} />
</div>