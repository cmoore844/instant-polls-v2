<script>
    export let dialog
</script>

<!--we will bind the dialog variable to the dialog component so we can access its methods
on:close will forward the close event to the parent(kinda like a prop)-->
<dialog bind:this={dialog} on:close>
    <slot/>
</dialog>