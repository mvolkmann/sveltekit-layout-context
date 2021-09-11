<script context="module" lang="ts">
  import type {LoadInput, LoadOutput} from '@sveltejs/kit';

  export async function load({fetch, page}: LoadInput): Promise<LoadOutput> {
    const {pageNum} = page.params;
    console.log('__layout.svelte load: pageNum =', pageNum);
    if (!pageNum) return {};

    const res = await fetch('/api/data');
    if (res.ok) {
      const data = await res.json();
      console.log('__layout.svelte load: data =', data);
      //return {context: data, maxage: 10};
      return {context: data};
    }

    const error = await res.text();
    return {error, status: res.status};
  }
</script>

<h1>My Layout</h1>
<slot />
