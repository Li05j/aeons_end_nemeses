<script lang="ts">

export let husks_count: number;

function set_husk_color(husks: number, threshold: number): string {
    if (husks >= threshold) {
        return 'bg-blue-600';
    } else {
        return '';
    }
}

</script>

<div class="flex items-center">
    <div class="flex flex-col items-center gap-4">
        <div class="text-center">
            <p>0-3 husks:</p>
            <p>Place four husks into play.</p>
        </div>
        <div class="text-center">
            <p>4-6 husks:</p>
            <p>Any player discards a prepped spell.</p>
            <p>Place 2 husks into play.</p>
        </div>
        <div class="text-center">
            <p>7-10 husks:</p>
            <p>Gravehold suffers 5 damage.</p>
        </div>
        <div class="text-center">
            <p>11-12 husks:</p>
            <p>The player with the lowest life suffers 3 damage.</p>
            <p>Discard a husk.</p>
        </div>
        <div class="text-center">
            <p>13+ husks:</p>
            <p>The players lose.</p>
        </div>
    </div>
    <div class="flex flex-col items-center gap-11">
        <div class="flex gap-2">
            <div class="w-8 h-8 rounded-full border-2 border-black {set_husk_color(husks_count, 1)}"></div>
            <div class="w-8 h-8 rounded-full border-2 border-black {set_husk_color(husks_count, 2)}"></div>
            <div class="w-8 h-8 rounded-full border-2 border-black {set_husk_color(husks_count, 3)}"></div>
        </div>
        <div class="flex gap-2">
            <div class="w-8 h-8 rounded-full border-2 border-black {set_husk_color(husks_count, 4)}"></div>
            <div class="w-8 h-8 rounded-full border-2 border-black {set_husk_color(husks_count, 5)}"></div>
            <div class="w-8 h-8 rounded-full border-2 border-black {set_husk_color(husks_count, 6)}"></div>
        </div>
        <div class="flex gap-2">
            <div class="w-8 h-8 rounded-full border-2 border-black {set_husk_color(husks_count, 7)}"></div>
            <div class="w-8 h-8 rounded-full border-2 border-black {set_husk_color(husks_count, 8)}"></div>
            <div class="w-8 h-8 rounded-full border-2 border-black {set_husk_color(husks_count, 9)}"></div>
            <div class="w-8 h-8 rounded-full border-2 border-black {set_husk_color(husks_count, 10)}"></div>
        </div>
        <div class="flex gap-2">
            <div class="w-8 h-8 rounded-full border-2 border-black {set_husk_color(husks_count, 11)}"></div>
            <div class="w-8 h-8 rounded-full border-2 border-black {set_husk_color(husks_count, 12)}"></div>
        </div>
        <div class="flex gap-2">
            <div class="w-8 h-8 rounded-full border-2 border-black {set_husk_color(husks_count, 13)}"></div>
            <div class="w-8 h-8 rounded-full border-2 border-black {set_husk_color(husks_count, 14)}"></div>
            <div class="w-8 h-8 rounded-full border-2 border-black {set_husk_color(husks_count, 15)}"></div>
        </div>
    </div>
</div>