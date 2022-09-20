<script>
  export let manage = true;
  const url = 'https://web-production-172e.up.railway.app/';

  let book;

  const deleteBook = (book) => {
    fetch(url + 'books/', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: book._id,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          console.log('Delete request');
          window.location.href = '/books/';
        }
      })
  };
</script>


<!-- HTML component -->

<div
  class="shelf bg-lighter border border-darker
		w-full h-full my-2 mx-1 p-3 shadow-md shadow-darker 
		hover:scale-125 hover:shadow-lg hover:shadow-darker hover:-translate-y-4 
		rounded-md"
>
  <section class="m-2">
    {#if manage}
      <div class="book-actions">
        <button
          on:click={() => deleteBook(book)}
          class="p-1 bg-accent2 border border-darker rounded-sm uppercase text-sm font-bold cursor-pointer"
          >Delete</button
        >
      </div>
    {/if}
    <div class="book-info text-center text-dark">
      <h1>{book.title}</h1>
      <h2 class="border-b-2 border-darker">{book.author}</h2>
      <p class=" border-b-2 border-darker">
        {book.pages} pages --- {book.rating}/10
      </p>
      <p>{book.desc}</p>
    </div>
  </section>
</div>

<!-- CSS used

	.shelf {
		width: 100%;
		margin: 10px 5px;
		padding: 10px;
		box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
		display: flex;
		justify-content: space-between;
	}

	.book-actions button {
		background: #f5f5f5;
		border: 1px solid #d4d4d5;
		border-radius: 3px;
		color: #333;
		cursor: pointer;
		font-size: 14px;
		font-weight: bold;
		padding: 5px 10px;
		text-transform: uppercase;
	}
-->
<style>
</style>
