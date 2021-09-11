<script context="module" lang="ts">
  import type {LoadInput, LoadOutput} from '@sveltejs/kit';

  export async function load({context, page}: LoadInput): Promise<LoadOutput> {
    console.log('[pageNum].svelte load: context =', context);
    const {pageNum} = page.params;
    console.log('[pageNum].svelte load: pageNum =', pageNum);
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
