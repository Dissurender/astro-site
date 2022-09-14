<script>
  import { isManage } from '@atom/manage';
</script>

<button on:click={() => isManage.set(!$isManage)}>Manage</button>
