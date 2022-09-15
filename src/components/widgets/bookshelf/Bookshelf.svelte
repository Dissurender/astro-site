<script>
  import Books from './Books.svelte';
  import AddBook from './AddBook.svelte';
  import { isManage } from '@atom/manage.js';
  import Button from '@lib/widgets/bookshelf/Button.svelte';

  let toggle = $isManage;
</script>

<div class="w-full max-w-4xl mt-4 mx-auto">
  <Button />
  {#if { toggle }}
    <AddBook />
  {/if}

  <Books />
</div>
