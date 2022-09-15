<script>
  import { FeedbackStore } from "../stores";
  import { v4 as uuidv4 } from "uuid";
  import RatingSelect from "./RatingSelect.svelte";
  import Card from "./Card.svelte";
  import Button from "./Button.svelte";

  let text = "";
  let rating = 10;
  let btnDisabled = true;
  let minNumOfWords = 10;
  let message;

  const handleInput = () => {
    if (text.trim().length <= minNumOfWords) {
      message = `Text must be at least ${minNumOfWords} characters long`;
      btnDisabled = true;
    } else {
      message = null;
      btnDisabled = false;
    }
  };

  const handleSelect = e => (rating = e.detail);

  const handleSubmit = () => {
    if (text.trim().length > minNumOfWords) {
      const newFeedback = {
        id: uuidv4(),
        text,
        rating: +rating,
      };

      FeedbackStore.update(currentFeedback => {
        return [newFeedback, ...currentFeedback];
      });

      text = "";
      btnDisabled = true;
    }
  };
</script>

<Card>
  <header>
    <h2>How would you rate your service with us?</h2>
  </header>

  <form on:submit|preventDefault={handleSubmit}>
    <RatingSelect on:rating-select={handleSelect} />
    <div class="input-group">
      <input
        type="text"
        placeholder="Tell us something"
        on:input={handleInput}
        bind:value={text}
      />
      <Button type="submit" disabled={btnDisabled}>Send</Button>
    </div>

    {#if message}
      <div class="message">
        <span>
          {message}
        </span>
      </div>
    {/if}
  </form>
</Card>

<style>
  header {
    max-width: 400px;
    margin: auto;
  }

  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }

  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }

  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
  }

  input:focus {
    outline: none;
  }

  .message {
    padding-top: 10px;
    text-align: center;
    color: rebeccapurple;
  }
</style>
