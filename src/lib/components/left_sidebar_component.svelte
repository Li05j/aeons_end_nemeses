<script lang="ts">
    import { LeftSidebarViewModel } from './left_sidebar_component.svelte.ts';
    import { Button } from '$lib/components/ui/button/index.js';
    import { Separator } from '$lib/components/ui/separator/index.js';

    const vm = new LeftSidebarViewModel();
</script>

<div
    class="bg-card border-r border-border text-card-foreground h-screen transition-all duration-300 ease-in-out shadow-lg
    {vm.isOpen ? 'w-52' : 'w-12'}"
    ontransitionend={() => vm.onTransitionEnd()}
>
    <button
        class="w-full h-12 flex items-center justify-center hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
        onclick={() => vm.toggleSidebar()}
    >
        {vm.showContent ? '←' : '→'}
    </button>

    <Separator />

    {#if vm.showContent}
        <nav class="p-2 space-y-1">
            {#each vm.sidebar_items as item}
                <Button
                    variant="ghost"
                    class="w-full justify-start text-muted-foreground hover:text-foreground {item === 'Soon' ? 'opacity-30 pointer-events-none' : ''}"
                    onclick={() => vm.onItemClick(item)}
                >
                    {item}
                </Button>
            {/each}
        </nav>
    {/if}
</div>
