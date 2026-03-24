<script lang="ts">
    import * as Card from '$lib/components/ui/card/index.js';
    import { Separator } from '$lib/components/ui/separator/index.js';
    import { cn } from '$lib/utils';

    let { husks_count }: { husks_count: number } = $props();

    const tiers = [
        { range: '0–3', effect: 'Place four husks into play.', thresholds: [1, 2, 3] },
        { range: '4–6', effect: 'Any player discards a prepped spell.\nPlace 2 husks into play.', thresholds: [4, 5, 6] },
        { range: '7–10', effect: 'Gravehold suffers 5 damage.', thresholds: [7, 8, 9, 10] },
        { range: '11–12', effect: 'The player with the lowest life suffers 3 damage.\nDiscard a husk.', thresholds: [11, 12] },
        { range: '13+', effect: 'The players lose.', thresholds: [13, 14, 15] },
    ];

    function is_active_tier(tier: typeof tiers[0]): boolean {
        const min = tier.thresholds[0];
        const max = tier.thresholds[tier.thresholds.length - 1];
        return husks_count >= min && husks_count <= max;
    }
</script>

<Card.Root class="w-auto">
    <Card.Header class="pb-2">
        <Card.Title class="text-sm text-muted-foreground uppercase tracking-wider">Husk Track</Card.Title>
    </Card.Header>
    <Card.Content class="space-y-3">
        {#each tiers as tier, i}
            <div class={cn(
                "flex items-center gap-4 rounded-md px-3 py-2 transition-colors",
                is_active_tier(tier) ? "bg-primary/10 border border-primary/30" : "opacity-60"
            )}>
                <div class="flex gap-1.5 shrink-0">
                    {#each tier.thresholds as t}
                        <div class={cn(
                            "w-6 h-6 rounded-full border-2 transition-colors",
                            husks_count >= t ? "bg-primary border-primary" : "border-muted-foreground/40"
                        )}></div>
                    {/each}
                </div>
                <div>
                    <span class="text-xs font-semibold text-foreground">{tier.range}:</span>
                    <p class="text-xs text-muted-foreground whitespace-pre-line leading-relaxed">{tier.effect}</p>
                </div>
            </div>
            {#if i < tiers.length - 1}
                <Separator />
            {/if}
        {/each}
    </Card.Content>
</Card.Root>
