<script lang="ts">
    import type { RageborneStrikeCard } from '$lib/types';
    import * as Card from '$lib/components/ui/card/index.js';
    import { Separator } from '$lib/components/ui/separator/index.js';

    let { card_data }: { card_data: RageborneStrikeCard | undefined } = $props();
</script>

<Card.Root class="w-80 h-[22rem] overflow-hidden bg-strike-bg border-strike/40 ring-2 ring-strike ring-offset-2 ring-offset-background">
    {#if card_data === undefined}
        <Card.Content class="flex-1 flex items-center justify-center p-6 h-full">
            <p class="text-destructive text-sm">Error: Strike deck is empty.</p>
        </Card.Content>
    {:else}
        <Card.Header>
            <Card.Title class="text-strike text-center">
                Strike: {card_data.title}
            </Card.Title>
        </Card.Header>

        <Separator class="mx-4 w-auto" />

        <Card.Content class="pt-4">
            <p class="whitespace-pre-line text-sm text-card-foreground/85 leading-relaxed">{card_data.description}</p>
        </Card.Content>
    {/if}
</Card.Root>
