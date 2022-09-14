<script>
  import Books from './Books.svelte';
  import AddBook from './AddBook.svelte';
  import { isManage } from '@atom/manage';
  import Button from '@src/widgets/bookshelf/Button.svelte';
</script>

<div class="w-full max-w-4xl mt-4 mx-auto">
  <Button />
  {#if $isManage}
    <AddBook />
  {/if}

  <Books />
</div>
