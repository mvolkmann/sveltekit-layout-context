<script context="module" lang="ts">
  import type {LoadInput, LoadOutput} from '@sveltejs/kit';

  export async function load({fetch, page}: LoadInput): Promise<LoadOutput> {
    const {pageNum} = page.params;
    console.log('__layout.svelte load: pageNum =', pageNum);

    // Need to reference page.path so SvelteKit
    // knows to rerun this any time that changes.
    console.log('__layout.svelte load: page.path =', page.path);

    if (!pageNum) return {};

    const res = await fetch('/api/data');
    if (res.ok) {
      const data = await res.json();
      console.log('__layout.svelte load: data =', data);
      return {context: data, maxage: 10};
    }

    const error = await res.text();
    return {error, status: res.status};
  }
</script>

<nav>
  <a href="/">Home</a>
  <a href="/page/1">Page 1</a>
  <a href="/page/2">Page 2</a>
  <a href="/page/3">Page 3</a>
</nav>

<h1>My Layout</h1>
<slot />
