<script>
  import { onMount } from 'svelte';
  import Book from './Book.svelte';

  const url = 'https://web-production-172e.up.railway.app/';
  export let books = [];

  // on page load, retrieve books
  onMount(async () => {
    await fetch(url + 'home', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((result) => result.json())
      .then((data) => {
        console.log(data)
        books = data;
      });
  });

  // TODO - add a sample request to populate 5 random books
  function sampleBook() {
    fetch(url + 'books/sample', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((result) => result.json())
      .then((data) => {
        books = data;
      });
  }
</script>

<!-- HTML component -->

<div class="w-full">
  <div class="book-actions flex justify-end mx-2">
    <button
      on:click={() => sampleBook()}
      class="btn hover:btn-accent"
      >Suggest</button
    >
  </div>

  <!-- Iter through books array to display the shelf -->
  {#if books.length > 0}
    <ul class="flex justify-around flex-wrap w-full p-0 m-2 list-none ">
      {#each books as book}
        <li class="block w-80 h-80 m-2">
          <Book {book} />
        </li>
      {/each}
    </ul>
  {:else}
    <p>hy</p>
  {/if}
</div>

<!-- CSS used

	ul {
		width: 100%;
		margin: 10px;
		list-style-type: none;
		padding: 0px;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}

	li {
		display: block;
		width: 25vw;
		height: 20vh;
	}

 -->

