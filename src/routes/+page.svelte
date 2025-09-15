<script lang="ts">
    import LeftSidebar from '$lib/components/left_sidebar_component.svelte';
    import RageborneView from '$lib/components/nemeses/rageborne/rageborne_view.svelte';
    import CarapaceQueenView from '$lib/components/nemeses/carapace_queen/carapace_queen_view.svelte';
    import type { Nemesis } from '$lib/types';
    import WaywardOneView from '$lib/components/nemeses/wayward_one/wayward_one_view.svelte';
  
    var current_view: Nemesis = 'none';

    function change_view(item: string) {
        switch (item) {
            case 'Rageborne':
                current_view = 'rageborne';
                break;
            case 'Carapace Queen':
                current_view = 'carapace_queen';
                break;
            case 'Wayward One':
                current_view = 'wayward_one';
                break;
            case 'Soon':
                current_view = 'none';
                break;
            default:
                current_view = 'none';
        }
    }

</script>

<div class="relative h-screen">
    <div class="fixed left-0 top-0 h-full z-50">
        <LeftSidebar change_view={change_view} />
    </div>

    <main class="h-full pl-16 pr-8 flex items-center justify-center bg-surface-50">
        {#if current_view === 'none'}
            <div class="text-center">
                <h1 class="h1 text-surface-900 mb-4">Welcome</h1>
                <p class="text-surface-600">Choose a Nemesis on the left sidebar.</p>
            </div>
        {:else if current_view === 'rageborne'}
            <div class="flex-1 h-full p-4">
                <RageborneView />
            </div>
        {:else if current_view === 'carapace_queen'}
            <div class="flex-1 h-full p-4">
                <CarapaceQueenView />
            </div>
        {:else if current_view === 'wayward_one'}
            <div class="flex-1 h-full p-4">
                <WaywardOneView />
            </div>
        {/if}
    </main>
</div>
