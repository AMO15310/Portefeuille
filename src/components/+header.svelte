<script>
  import { onMount } from "svelte";

  let text = "";
  const message = "AMOS WACHIRA";
  let currentIndex = 0;

  function startTyping() {
    if (currentIndex < message.length) {
      text += message[currentIndex];
      currentIndex += 1;
      setTimeout(startTyping, 100); // Adjust the typing speed here (in milliseconds)
    }
  }

  onMount(() => {
    startTyping();
  });
</script>

<div
  class=" overflow-hidden w-[100vw] p-5 bg-black flex justify-between text-white first-letter:capitalize sticky top-0"
>
  <div class="name flex items-center pl-4 text-2xl capitalize">{text}</div>
  <div class=" flex items-center gap-4 pr-4">
    <div class=" rounded border border-white-1 px-3 py-1 cursor-pointer">
      Home
    </div>
    <div class="rounded border border-white-1 px-3 py-1 cursor-pointer">
      Projects
    </div>
    <div class=" rounded border border-white-1 px-3 py-1 cursor-pointer">
      Get in touch
    </div>
    <div class="rounded border border-white-1 px-3 py-1 cursor-pointer">
      Follow me
    </div>
  </div>
</div>
