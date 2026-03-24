import { appState } from '$lib/state/app-state.svelte';

export class LeftSidebarViewModel {
    readonly sidebar_items: string[] = ['Rageborne', 'Carapace Queen', 'Wayward One', 'Soon', 'Soon'];

    isOpen = $state(true);
    showContent = $state(true);

    toggleSidebar() {
        this.isOpen = !this.isOpen;
        if (!this.isOpen) {
            this.showContent = false;
        }
    }

    onItemClick(item: string) {
        appState.changeView(item);
        this.toggleSidebar();
    }

    onTransitionEnd() {
        this.showContent = this.isOpen;
    }
}
