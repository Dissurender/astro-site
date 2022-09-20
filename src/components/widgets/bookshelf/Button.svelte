<script>
  import { isManage } from '@atom/manage';
</script>

<div class="w-full mx-auto">
  <button on:click={() => isManage.set(!$isManage)} class="btn hover:btn-accent">Manage</button>
</div>
