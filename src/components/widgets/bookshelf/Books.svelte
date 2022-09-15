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

<div class="shelf w-full">
  <div class="book-actions flex justify-end mx-2">
    <button
      on:click={() => sampleBook()}
      class=" p-2 bg-darker border border-slate-700 rounded-sm uppercase text-sm font-bold cursor-pointer"
      >Suggest</button
    >
  </div>

  <!-- Iter through books array to display the shelf -->
  {#if books}
    <ul class="flex justify-around flex-wrap w-full p-0 m-2 list-none ">
      {#each books as book}
        <li class="block w-80 h-80 m-2">
          <Book {book} />
        </li>
      {/each}
    </ul>
  {:else}
    <!-- use pulse animation with blank book while loading if books are not retrieved -->
    <ul class="flex justify-around flex-wrap w-full p-0 m-2 list-none ">
      <li class="block w-56 h-44 m-2">
        <div
          class="border border-blue-300 shadow rounded-md p-4 h-full w-full mx-auto"
        >
          <div class="animate-pulse flex space-x-4">
            <div class="flex-1 space-y-6 py-1">
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-700 rounded col-span-2" />
                  <div class="h-2 bg-slate-700 rounded col-span-1" />
                </div>
                <div class="h-2 bg-slate-700 rounded" />
              </div>
              <div class="h-2 bg-slate-700 rounded" />
              <div class="h-2 bg-slate-700 rounded" />
              <div class="h-2 bg-slate-700 rounded" />
            </div>
          </div>
        </div>
      </li>
    </ul>
    <p class="loading opacity-0 text-center font-semibold">loading...</p>
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
<style>
  .loading {
    animation: 0.5s 0.6s forwards fade-in;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
</style>
