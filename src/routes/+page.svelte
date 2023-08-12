<script>
//   import Header from "../components/+header.svelte";
  import { onMount } from "svelte";

  let text1 = "";
  let text2 = "";
  const message1 = "Biomedical Engineer. 🧬";
  const message2 = "Software Engineer. </>";
  let currentIndex1 = 0;
  let currentIndex2 = 0;

  function startTyping1() {
    if (currentIndex1 < message1.length) {
      text1 += message1[currentIndex1];
      currentIndex1 += 1;
      setTimeout(startTyping1, 100); // Adjust the typing speed here (in milliseconds)
    }
  }
  function startTyping2() {
    if (currentIndex2 < message2.length) {
      text2 += message2[currentIndex2];
      currentIndex2 += 1;
      setTimeout(startTyping2, 100);
    }
  }
  onMount(() => {
    startTyping1();
    startTyping2();
  });
</script>

<div class=" h-[100vh] w-[100vw] overflow-hidden flex">
  <!-- <Header /> -->
  <div
    class="biomed w-[50%] bg-blue-400 h-[100vh] text-white flex flex-col py-[5rem] text-lg"
  >
    <div class="flex justify-center text-xl font-semibold">{text1}</div>
    <div class="biomed-text pt-7 p-4">
      As a passionate and skilled biomedical engineer, I am dedicated to
      creating cutting-edge solutions that positively impact healthcare and
      improve lives. With a strong foundation in biomedical engineering, I have
      honed my expertise in medical device design, biomedical instrumentation,
      and data analysis.
    </div>
    <div class="last flex bottom-0 justify-center text-xl italic mt-[8rem]">
      &ldquo;Catalyzing Innovations at the Crossroads of Science and
      Medicine&rdquo;
    </div>
  </div>

  <div
    class="software w-[50%] bg-orange-400 h-[100vh] text-white flex flex-col py-[5rem] text-lg"
  >
    <div class="flex justify-center text-xl font-semibold">
      {text2}
    </div>
    <div class="software-text pt-7 p-4">
      As a dedicated and self-taught software developer, I am driven by the art
      of crafting elegant and efficient digital solutions. With a solid
      foundation in programming, I have honed my skills in web development, app
      creation, and software architecture.
    </div>
    <div class="last flex bottom-0 justify-center text-xl italic mt-[8rem]">
      &ldquo;Code Empowering Care: Synergizing Biomedicine and Technology&rdquo;
    </div>
  </div>
</div>
