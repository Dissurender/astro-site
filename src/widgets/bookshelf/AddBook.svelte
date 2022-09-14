<script>
  async function onSubmit(e) {
    const url = 'https://web-production-172e.up.railway.app/';
    // bundle form data
    const formData = new FormData(e.target);
    const data = {};

    for (let feild of formData) {
      const [key, value] = feild;
      data[key] = value;
    }

    // add new book to shelf
    await fetch(url + 'books/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(() => {
      console.log('Post request');
      // TODO: append to body, cut load times -- retrieve message from server
      window.location.reload();
    });
  }
</script>

<div class="flex flex-1 justify-center my-3 mx-auto max-w-2xl">
  <form
    on:submit|preventDefault={onSubmit}
    id="add-form"
    class="grid grid-cols-3 gap-0 grid-flow-row
		 m-1"
  >
    <section class="div1 col-span-1">
      <div class="m-2 w-20 title">
        <input
          type="text"
          id="title"
          class="p-2
					font-normal placeholder-darker
					text-base bg-lighter bg-clip-padding
					border border-solid border-darker
					rounded"
          name="title"
          placeholder="Title of book"
        />
      </div>

      <div class="m-2 w-20 author">
        <input
          type="text"
          id="author"
          class="p-2
					font-normal placeholder-darker
					text-base bg-lighter bg-clip-padding
					border border-solid border-darker
					rounded"
          name="author"
          placeholder="Author of book"
        />
      </div>

      <div class="m-2 w-20 pages">
        <input
          type="number"
          id="pages"
          class="p-2
					font-normal placeholder-darker
					text-base bg-lighter bg-clip-padding
					border border-solid border-darker
					rounded"
          name="pages"
          placeholder="Pages in book"
        />
      </div>

      <div class="m-2 w-20 rating">
        <input
          type="number"
          id="rating"
          class="p-2
					font-normal placeholder-darker
					text-base bg-lighter bg-clip-padding
					border border-solid border-darker
					rounded"
          name="rating"
          placeholder="Rating out of 10"
        />
      </div>
    </section>

    <div class="m-2 pl-4 w-full desc col-span-2 ">
      <textarea
        name="desc"
        id="desc"
        rows="8"
        class="block p-4 w-full text-base bg-lighter rounded-lg 
					border border-darker 
					placeholder-darker dark:text-white"
        placeholder="Book Description"
      />
    </div>

    <!-- TODO - Replace button styling -->
    <div class="bttn m-2 col-span-3">
      <button class="button-9 bg-darker border border-slate-700">Submit</button>
    </div>
  </form>
</div>

<!-- 
.form-group {
		margin: 10px;
		width: 20rem;
	}

 .form-group input[type='text'],
 input[type='number'],
 textarea {
	 padding: 10px;
 }

 form {
	 display: grid;
	 grid-template-columns: 1fr 1fr;
	 grid-template-rows: 60px 60px 60px 60px 60px;
	 gap: 0px 0px;
	 grid-auto-flow: row;
	 grid-template-areas:
		 'title desc'
		 'author desc'
		 'pages desc'
		 'rating desc'
		 'bttn bttn';
 }

 /* TODO - Figure out textarea */
 .desc {
	 grid-area: desc;
	 resize: none;
 }

 .bttn {
	 grid-area: bttn;
 }

 -->
<style>
  .button-9 {
    appearance: button;
    backface-visibility: hidden;

    border-radius: 6px;
    border-width: 0;
    box-sizing: border-box;
    color: rgb(0, 0, 0);
    cursor: pointer;
    font-size: 100%;
    height: 50px;
    width: 40rem;
    line-height: 1.15;
    outline: none;
    overflow: hidden;
    padding: 0 25px;
    position: relative;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    transition: all 0.2s, box-shadow 0.08s ease-in;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .button-9:disabled {
    cursor: default;
  }

  .button-9:hover {
    box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
      rgba(50, 50, 93, 0.2) 0 6px 15px 0, rgba(0, 0, 0, 0.1) 0 2px 2px 0,
      rgba(50, 151, 211, 0.3) 0 0 0 4px;
  }
</style>
