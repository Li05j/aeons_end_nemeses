<script lang="ts">
    import type { NemesisCard } from '$lib/types';
    import { cn } from '$lib/utils';
    import * as Card from '$lib/components/ui/card/index.js';
    import { Separator } from '$lib/components/ui/separator/index.js';
    import { Badge } from '$lib/components/ui/badge/index.js';

    let { card_data, is_current_card = false }: {
        card_data: NemesisCard | undefined;
        is_current_card?: boolean;
    } = $props();

    let type_bg = $derived.by(() => {
        if (!card_data) return '';
        switch (card_data.type) {
            case 'attack': return 'bg-attack-bg border-attack/30';
            case 'power': return 'bg-power-bg border-power/30';
            case 'minion': return 'bg-minion-bg border-minion/30';
            default: return '';
        }
    });

    let type_label_class = $derived.by(() => {
        if (!card_data) return '';
        switch (card_data.type) {
            case 'attack': return 'bg-attack/20 text-attack border-attack/30';
            case 'power': return 'bg-power/20 text-power border-power/30';
            case 'minion': return 'bg-minion/20 text-minion border-minion/30';
            default: return '';
        }
    });

    let ring_class = $derived.by(() => {
        if (is_current_card) return 'ring-2 ring-primary ring-offset-2 ring-offset-background';
        if (card_data && ((card_data.type === 'power' && card_data.power <= 0) || (card_data.type === 'minion' && card_data.health <= 0))) {
            return 'ring-2 ring-destructive ring-offset-2 ring-offset-background';
        }
        return '';
    });
</script>

<Card.Root class={cn("w-72 h-[18rem] shrink-0 overflow-hidden relative flex flex-col", type_bg, ring_class)}>
    {#if card_data === undefined}
        <Card.Content class="flex-1 flex items-center justify-center p-6">
            <p class="text-muted-foreground text-sm">No more cards</p>
        </Card.Content>
    {:else}
        <Card.Header class="pb-2 space-y-2">
            <div class="flex items-center justify-between gap-2">
                <Card.Title class={cn("text-base leading-snug", card_data.is_nemesis_specific_card ? "text-nemesis-accent" : "text-card-foreground")}>
                    {card_data.title}
                </Card.Title>
                <Badge class={cn("shrink-0 text-[10px] uppercase tracking-wider", type_label_class)}>
                    {card_data.type}
                </Badge>
            </div>
        </Card.Header>

        <Separator class="mx-4 w-auto" />

        <Card.Content class="flex-1 pt-3 pb-2 overflow-y-auto">
            <p class="whitespace-pre-line text-sm text-card-foreground/85 leading-relaxed">{card_data.description}</p>
        </Card.Content>

        <Separator class="mx-4 w-auto" />

        <Card.Footer class="justify-between items-center pt-3 pb-3">
            {#if card_data.type === 'power'}
                <div class="flex items-center gap-2">
                    <span class="text-xs text-power font-medium">Power</span>
                    <input
                        type="number"
                        bind:value={card_data.power}
                        class="w-14 h-7 text-center text-sm bg-background/50 border border-input rounded-md text-foreground"
                        min="-1"
                    />
                </div>
            {:else if card_data.type === 'minion'}
                <div class="flex items-center gap-3">
                    {#if card_data.shield}
                        <div class="flex items-center gap-1.5">
                            <span class="text-xs text-minion font-medium">Shield</span>
                            <input
                                type="number"
                                bind:value={card_data.shield}
                                class="w-14 h-7 text-center text-sm bg-background/50 border border-input rounded-md text-foreground"
                                min="0"
                            />
                        </div>
                    {/if}
                    <div class="flex items-center gap-1.5">
                        <span class="text-xs text-minion font-medium">HP</span>
                        <input
                            type="number"
                            bind:value={card_data.health}
                            class="w-14 h-7 text-center text-sm bg-background/50 border border-input rounded-md text-foreground"
                            min="0"
                        />
                    </div>
                </div>
            {:else}
                <div></div>
            {/if}

            <div class="text-right">
                {#if card_data.upgraded}
                    <span class="text-[10px] text-primary/70 font-medium uppercase tracking-wider">Upgraded T{card_data.tier}</span>
                {:else}
                    <span class={cn("text-[10px] font-medium uppercase tracking-wider", card_data.is_nemesis_specific_card ? "text-nemesis-accent/70" : "text-muted-foreground")}>Tier {card_data.tier}</span>
                {/if}
            </div>
        </Card.Footer>
    {/if}
</Card.Root>
