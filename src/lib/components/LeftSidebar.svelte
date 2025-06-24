<script lang="ts">
    export let items: string[] = [];
    let isOpen = true;

    function toggleSidebar() {
        isOpen = !isOpen;
    }
</script>

<div class="bg-gray-800 text-white h-screen transition-all duration-300 ease-in-out drop-shadow-2xl {isOpen ? 'w-64' : 'w-16'}">
    <button 
        class="w-full p-4 text-left hover:bg-gray-700 border-b border-gray-700"
        on:click={toggleSidebar}
    >
        {isOpen ? '← Hide' : '→'}
    </button>

    <!-- Menu items -->
    {#if isOpen}
        <nav class="p-4 space-y-2">
            {#each items as item}
                <button class="w-full p-3 text-left hover:bg-gray-700 rounded transition-colors">
                    {item}
                </button>
            {/each}
        </nav>
    {/if}
</div>