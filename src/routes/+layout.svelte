<script>
  import Header from "../components/+header.svelte";
  import Footer from "../components/+Footer.svelte";
  import "../index.css"
</script>

<div class=" overflow-hidden">
  <div class="h-[10%] sticky">
    <Header />
  </div>
  <div class="">
    <div class="outlet h-[90%]">
      <slot />
    </div>
    <div class="footer">
      <!-- <Footer /> -->
    </div>
  </div>
</div>
