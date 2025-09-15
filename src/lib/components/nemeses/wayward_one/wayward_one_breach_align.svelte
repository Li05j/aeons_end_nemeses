<script lang="ts">

let { breach_align } = $props()

</script>

<div class="flex items-center gap-20">
    <div class="{breach_align === 1 ? 'outline outline-4 outline-orange-300' : ''} p-4">
        <div class="text-center text-7xl">I</div>
    </div>
    <div class="{breach_align === 2 ? 'outline outline-4 outline-orange-300' : ''} p-4">
        <div class="text-center text-7xl">II</div>
    </div>
    <div class="{breach_align === 3 ? 'outline outline-4 outline-orange-300' : ''} p-4">
        <div class="text-center text-7xl">III</div>
    </div>
    <div class="{breach_align === 4 ? 'outline outline-4 outline-orange-300' : ''} p-4">
        <div class="text-center text-7xl">IV</div>
    </div>
</div>
