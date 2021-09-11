<script context="module" lang="ts">
  import type {LoadInput, LoadOutput} from '@sveltejs/kit';

  export async function load({context, page}: LoadInput): Promise<LoadOutput> {
    console.log('[pageNum].svelte load: context =', context);
    const pageNum = Number(page.params.pageNum);
    console.log('[pageNum].svelte load: pageNum =', pageNum);
    if (pageNum > 3) return {error: 'bad page', status: 404};
    if (pageNum < 1) throw new Error('non-positive page');
    const props = {pageNum, timestamp: context.timestamp};
    return {props, maxage: 10};
  }
</script>

<script lang="ts">
  export let pageNum: number;
  export let timestamp: number;

  console.log('[pageNum].svelte script: entered');
</script>

<h2>Page {pageNum}</h2>

<p>timestamp = {timestamp}</p>
