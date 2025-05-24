<script>
    import "$lib/global.css";
    import Menu from "$lib/Menu.svelte";

    let {children} = $props();
</script>

<div class="InletSites">
    <Menu/>

    {@render children()}
</div>

<style>
    .InletSites{
        max-width: 100vw;
    }
</style>
