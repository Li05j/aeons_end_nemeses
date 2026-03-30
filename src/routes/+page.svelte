<script lang="ts">
    import LeftSidebar from '$lib/components/left_sidebar_component.svelte';
    import ChooseModeComponent from '$lib/components/game_view.svelte';
    import { appState } from '$lib/state/app-state.svelte';
</script>

<div class="relative h-screen">
    <div class="fixed left-0 top-0 h-full z-50">
        <LeftSidebar />
    </div>

    <main class="h-full pl-16 flex items-center justify-center">
        {#if appState.current_view === 'none'}
            <div class="text-center space-y-3">
                <h1 class="text-4xl font-bold tracking-tight text-foreground">Aeon's End</h1>
                <p class="text-lg text-muted-foreground">Choose a Nemesis from the sidebar.</p>
            </div>
        {:else}
            <div class="flex-1 h-full p-4 min-w-0">
                <ChooseModeComponent />
            </div>
        {/if}
    </main>
</div>
