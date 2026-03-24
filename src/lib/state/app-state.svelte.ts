import type { Nemesis } from '$lib/types';
import { GameDeckM } from '$lib/stores/game_deck_manager_store.svelte';

class AppState {
    current_view: Nemesis = $state('none');

    changeView(item: string) {
        GameDeckM.reset();
        switch (item) {
            case 'Rageborne':
                this.current_view = 'rageborne';
                break;
            case 'Carapace Queen':
                this.current_view = 'carapace_queen';
                break;
            case 'Wayward One':
                this.current_view = 'wayward_one';
                break;
            default:
                this.current_view = 'none';
        }
    }
}

export const appState = new AppState();
