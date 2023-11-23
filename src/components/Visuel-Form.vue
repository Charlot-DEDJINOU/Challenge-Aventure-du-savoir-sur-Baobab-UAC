<script>
import VisuelItem from './Visuel-Item.vue'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { downloadImage } from './untils'

export default {
  name: 'VisuelForm',
  components: {
    VisuelItem
  },
  setup() {
    const store = useStore()
    const url_image = ref(computed(() => store.state.image))

    const data = ref({
      name: null,
      citation: null
    })

    const declancheClick = (e) => {
      e.preventDefault()
      const input_file = document.getElementById('file2')
      input_file.click()
    }

    const submit = (e) => {
      e.preventDefault()
      downloadImage(data.value.name)
    }

    return {
      declancheClick,
      url_image,
      data,
      submit
    }
  }
}
</script>

<template>
  <div class="visuel-form container my-5">
    <div class="visuel"><VisuelItem :infos="data" /></div>
    <div class="form">
      <form class="container">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Nom & Prénom</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            v-model="data.name"
            required
          />
        </div>
        <div class="mb-3">
          <label for="citation" class="form-label">Citation</label>
          <textarea
            type="text"
            class="form-control"
            id="citation"
            aria-describedby="citationHelp"
            v-model="data.citation"
            required
          ></textarea>
          <div id="citationHelp" class="form-text fst-italic">
            Un petit résumé du cours que vous avez suivi
          </div>
        </div>
        <div class="mb-3 upload">
          <button class="button" id="image" @click="declancheClick">
            Cliquez pour changer la photo
          </button>
          <i>{{ url_image }}</i>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          style="background-color: #68bc47; border: none"
          @click="submit"
        >
          Telecharger
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.visuel-form {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.visuel-form .form {
  width: 45%;
}
.visuel-form .visuel {
  width: 50%;
}
.visuel-form .form .upload {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.visuel-form .form .upload .button {
  height: 45px;
  border-radius: 5px;
  padding: 10px 20px;
  color: white;
  font-size: 15px;
  border: none;
  background-color: #68bc47;
}
@media (max-width: 900px) {
  .visuel-form {
    flex-direction: column;
  }
  .visuel-form .visuel {
    width: 100%;
    zoom: 0.8;
  }
  .visuel-form .form {
    width: 100%;
    margin-top: 60px;
  }
}
@media (max-width: 700px) {
  .visuel-form .visuel {
    zoom: 0.68;
  }
}
@media (max-width: 500px) {
  .visuel-form .visuel {
    zoom: 0.52;
  }
  .visuel-form .form .upload {
    width: 100%;
    align-items: center;
  }
  .visuel-form .form .upload i {
    width: 100%;
    margin: 10px 0px;
    text-align: center;
  }
  .visuel-form .form .upload .button {
    width: 100%;
  }
}
</style>
