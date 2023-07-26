<script>
import { store } from "../store";
import axios from "axios";

export default {
  data() {
    return {
      store,
      name: "",
      email: "",
      message: "",
      newsletter: true,
      showSuccess: false,
      isSending: false,
      hasError: false,
    };
  },
  methods: {
    sendLead() {
      this.isSending = true;
      axios
        .post(this.store.baseUrl + "api/leads", {
          name: this.name,
          email: this.email,
          message: this.message,
          newsletter: this.newsletter,
        })
        .then((response) => {
          this.isSending = false;

          if (response.data.success) {
            this.showSuccess = true;
            this.resetForm();
          } else {
            this.hasError = true;
          }
        });
    },
    resetForm() {
      this.name = "";
      this.email = "";
      this.message = "";
      this.newsletter = "";
    },
  },
};
</script>

<template>
  <h1>Contattaci</h1>

  <div
    v-if="showSuccess"
    class="alert alert-success alert-dismissible fade show"
    role="alert"
  >
    Messaggio inviato con successo
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>

  <div
    v-if="hasError"
    class="alert alert-success alert-dismissible fade show"
    role="alert"
  >
    Errore invio messaggio
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>

  <form @submit.prevent="sendLead" novalidate class="form mx-auto">
    <div class="flex" novalidate>
      <label for="name" class="form-label">
        <input
          class="input form-control"
          id="name"
          v-model="name"
          aria-describedby="emailHelp"
          type="text"
          required=""
        />
        <span>Name</span>
      </label>
    </div>

    <div class="mb-3">
      <label for="message" class="form-label text-white">Message here</label>
      <textarea class="form-control" id="message" v-model="message" rows="3">
      </textarea>
    </div>

    <label for="email" class="form-label">
      <input
        class="input form-control"
        id="email"
        v-model="email"
        type="email"
        aria-describedby="emailHelp"
        placeholder=""
        required=""
      />
      <span>E-mail</span>
    </label>

    <div class="mb-3 form-check">
      <input
        type="checkbox"
        class="form-check-input"
        id="exampleCheck1"
        v-model="newsletter"
      />
      <label class="form-check-label text-white" for="newsletters"
        >Subscribe to the NewsLetters</label
      >
    </div>

    <button href="#" class="fancy" :disabled="isSending">
      <span class="top-key"></span>
      <span class="text">SUBMIT</span>
      <span class="bottom-key-1"></span>
      <span class="bottom-key-2"></span>
    </button>
  </form>
</template>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1100px;
  background-color: #355891;
  padding: 20px;
  border-radius: 10px;
  position: relative;
}

.message {
  color: #355891;
  font-size: 14px;
}

.flex {
  display: flex;
  width: 100%;
  gap: 2rem;
}

.form label {
  position: relative;
}

.form label .input {
  width: 100%;
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 1px solid #355891;
  border-radius: 5px;
}

.form label .input + span {
  position: absolute;
  left: 10px;
  top: 15px;
  color: #355891;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.form label .input:placeholder-shown + span {
  top: 15px;
  font-size: 0.9em;
}

.form label .input:focus + span,
.form label .input:valid + span {
  top: 30px;
  font-size: 0.7em;
  font-weight: 600;
}

.form label .input:valid + span {
  color: green;
}

.input01 {
  width: 100%;
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 1px solid #355891;
  border-radius: 5px;
}

.form label .input01 + span {
  position: absolute;
  left: 10px;
  top: 50px;
  color: #355891;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.form label .input01:placeholder-shown + span {
  top: 40px;
  font-size: 0.9em;
}

.form label .input01:focus + span,
.form label .input01:valid + span {
  top: 50px;
  font-size: 0.7em;
  font-weight: 600;
}

.form label .input01:valid + span {
  color: green;
}

.fancy {
  background-color: white;
  border: 2px solid #355891;
  border-radius: 0px;
  box-sizing: border-box;
  color: #355891;
  cursor: pointer;
  display: inline-block;
  font-weight: 390;
  letter-spacing: 2px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 8px 30px;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  transition: all 0.3s ease-in-out;
  user-select: none;
  font-size: 13px;
}

.fancy:hover {
  color: #355891;
  background: #5f82a9;
}

.fancy:hover::before {
  background: #355891;
}

.fancy:hover .text {
  color: white;
}

.fancy:hover .top-key {
  width: 0px;
}
</style>
