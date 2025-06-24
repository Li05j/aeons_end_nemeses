<script>
    import LeftSidebar from '$lib/components/LeftSidebar.svelte';
  
    const sidebarItems = ['Dashboard', 'Profile', 'Settings', 'Analytics', 'Help'];
</script>

<div class="flex h-screen">
    <LeftSidebar items={sidebarItems} />
  
    <main class="flex-1 flex items-center justify-center bg-surface-50">
        <div class="text-center">
        <h1 class="h1 text-surface-900 mb-4">Welcome</h1>
        <p class="text-surface-600">Choose an item on the left sidebar</p>
        </div>
    </main>
</div>