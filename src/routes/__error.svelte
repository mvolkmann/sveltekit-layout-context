<script context="module" lang="ts">
  import type {ErrorLoadInput, LoadOutput} from '@sveltejs/kit';

  export function load({error}: ErrorLoadInput): LoadOutput {
    return {
      props: {message: error.message}
    };
  }
</script>

<script lang="ts">
  export let message: string;
</script>

<h1>My Error Page</h1>

<p>{message}</p>
