<!--Card component and styling. Slot elements have child content that comes from 
when we reuse the Card component and actually putsome stuff inside of it-->
<div class="card">
    <slot></slot>
</div>

<style>
    .card{
        background: #fff;
        padding: 20px;
        border-radius: 6px;
        box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
    }
</style>