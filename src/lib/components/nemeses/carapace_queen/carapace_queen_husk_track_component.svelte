<script lang="ts">
    import { cn } from '$lib/utils';

    let { husks_count }: { husks_count: number } = $props();

    const tiers = [
        { range: '0–3', effect: 'Place four husks into play.', thresholds: [1, 2, 3] },
        { range: '4–6', effect: 'Discard a prepped spell. Place 2 husks into play.', thresholds: [4, 5, 6] },
        { range: '7–10', effect: 'Gravehold suffers 5 damage.', thresholds: [7, 8, 9, 10] },
        { range: '11–12', effect: 'Lowest life player suffers 3 damage. Discard a husk.', thresholds: [11, 12] },
        { range: '13+', effect: 'The players lose.', thresholds: [13, 14, 15] },
    ];

    function is_active_tier(tier: typeof tiers[0]): boolean {
        const min = tier.thresholds[0];
        const max = tier.thresholds[tier.thresholds.length - 1];
        return husks_count >= min && husks_count <= max;
    }
</script>

<div class="flex items-stretch gap-2">
    {#each tiers as tier}
        <div class={cn(
            "flex flex-col items-center gap-2 rounded-lg px-3 py-3 w-32 transition-colors",
            is_active_tier(tier) ? "bg-primary/10 border border-primary/30" : "border border-transparent"
        )}>
            <div class="flex gap-1.5">
                {#each tier.thresholds as t}
                    <div class={cn(
                        "w-6 h-6 rounded-full border-2 transition-colors",
                        husks_count >= t ? "bg-primary border-primary" : "border-muted-foreground/40"
                    )}></div>
                {/each}
            </div>
            <span class={cn(
                "text-xs font-semibold",
                is_active_tier(tier) ? "text-primary" : "text-muted-foreground"
            )}>{tier.range}</span>
            <p class={cn(
                "text-[11px] leading-snug text-center",
                is_active_tier(tier) ? "text-foreground" : "text-foreground/75"
            )}>{tier.effect}</p>
        </div>
    {/each}
</div>
