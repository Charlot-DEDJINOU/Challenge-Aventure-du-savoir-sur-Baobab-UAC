<script>
export default {
  name: 'FormItem',
}
</script>
<template>
  <form class="container">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Nom & Prénom</label>
      <input type="text" class="form-control" id="exampleInputEmail1" />
    </div>
    <div class="mb-3">
      <label for="citation" class="form-label">Citation</label>
      <textarea
        type="text"
        class="form-control"
        id="citation"
        aria-describedby="citationHelp"
      ></textarea>
      <div id="citationHelp" class="form-text fst-italic">
        Un petit résumé du cours que vous avez suivi
      </div>
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Cochez moi</label>
    </div>
    <button type="submit" class="btn btn-primary">Telecharger</button>
  </form>
</template>
