<script lang="ts">
  // TODO: figure out a better way to get Quote type
  import type { Quote } from "../../server/src/types";

  async function getAllQuotes() {
    const response = await fetch("http://localhost:3000/api/quote/all");
    const quotes = (await response.json()) as Quote[];
    return quotes;
  }
</script>

<main>
  <h1>Quotes</h1>
  {#await getAllQuotes() then quotes}
    {#each quotes as quote (quote._id)}
      {#each quote.quote as { author, content }}
        <section>
          <p>{author ? `${author}: ` : null}{content}</p>
        </section>
      {/each}
    {/each}
  {:catch}
    <p>Sorry, something went wrong.</p>
  {/await}
</main>
