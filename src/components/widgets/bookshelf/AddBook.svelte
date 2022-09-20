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

<div class="flex flex-1 my-3 max-w-full">
  
  <form
    on:submit|preventDefault={onSubmit}
    id="add-form"
    class="
     m-1 form-control"
  >
  <div class=" flex gap-36 mx-auto max-w-lg">
    
    <div>
      <div class="m-2 w-20 ">
        <input
          type="text"
          id="title"
          class="input input-bordered focus:input-accent"
          name="title"
          placeholder="Title of book"
        />
      </div>

      <div class="m-2 w-20 author">
        <input
          type="text"
          id="author"
          class="input input-bordered focus:input-accent"
          name="author"
          placeholder="Author of book"
        />
      </div>

      <div class="m-2 w-20 pages">
        <input
          type="number"
          id="pages"
          class="input input-bordered focus:input-accent"
          name="pages"
          placeholder="Pages in book"
        />
      </div>

      <div class="m-2 w-20 ">
        <input
          type="number"
          id="rating"
          class="input input-bordered focus:input-accent"
          name="rating"
          placeholder="Rating out of 10"
        />
      </div>
    </div>

    <div>
      <textarea
        name="desc"
        id="desc"
        rows="7"
        cols="28"
        spellcheck="true"
        class="textarea textarea-bordered focus:textarea-accent m-2 resize-none"
        placeholder="Book Description"
      />
    </div>
  </div>
  <div class="mx-auto my-2">
    <button class="btn btn-wide hover:btn-accent">Submit</button>
  </div>
</form>

    <!-- TODO - Replace button styling -->
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
