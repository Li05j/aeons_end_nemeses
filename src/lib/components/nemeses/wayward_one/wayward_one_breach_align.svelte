<script lang="ts">
    import * as Card from '$lib/components/ui/card/index.js';
    import { cn } from '$lib/utils';

    let { breach_align }: { breach_align: 1 | 2 | 3 | 4 } = $props();

    const labels = ['I', 'II', 'III', 'IV'] as const;
</script>

<Card.Root class="w-auto">
    <Card.Header class="pb-2">
        <Card.Title class="text-sm text-muted-foreground uppercase tracking-wider">Breach Alignment</Card.Title>
    </Card.Header>
    <Card.Content>
        <div class="flex items-center gap-4">
            {#each labels as label, i}
                {@const position = (i + 1) as 1 | 2 | 3 | 4}
                <div class={cn(
                    "w-20 h-20 rounded-lg border-2 flex items-center justify-center transition-all",
                    breach_align === position
                        ? "border-primary bg-primary/15 text-primary shadow-lg shadow-primary/20"
                        : "border-muted-foreground/30 text-muted-foreground"
                )}>
                    <span class="text-3xl font-bold">{label}</span>
                </div>
            {/each}
        </div>
    </Card.Content>
</Card.Root>
