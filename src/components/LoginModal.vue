<template>
  <!-- Modal -->
  <div class="login-modal" @click="close()"></div>

  <div class="inner-modal">
    <div class="login">
      <div class="login-inner">
        <div
          class="
            d-flex
            justify-content-between
            pb-3
            px-2
            pt-2
            position-relative
          "
        >
          <h3 class="display-5 text-center w-100">Login</h3>
          <button
            type="button"
            class="btn-close"
            @click="$emit('close-login-modal')"
          ></button>
        </div>
        <div class="login-form px-2 pb-2 pt-3">
          <div class="mb-3">
            <form action="" method="POST">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Email Address</label
                >
                <input
                  ref="emailRef"
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  v-model="email"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  v-model="password"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1"
                  >I agree with the terms & conditions</label
                >
              </div>
              <div class="d-grid gap-2">
                <button
                  type="button"
                  class="btn btn-primary btn-block text-center"
                  @click="submit"
                  v-if="!isLoading"
                >
                  Login
                </button>

                <button v-else class="btn btn-primary" type="button" disabled>
                  <span
                    class="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Logging in...
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div></div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase from "../utilities/firebase";
export default {
  name: "LoginModal",
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
    };
  },
  methods: {
    submit() {
      this.isLoading = true;
      const auth = getAuth(firebase);

      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.email = "";
          this.password = "";
          this.isLoading = false;
          this.close();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    close() {
      this.$emit("close-login-modal");
    },
  },
  computed: {},
  mounted() {
    this.$refs.emailRef.focus();
  },
  emits: ["close-login-modal"],
};
</script>

<style scoped>
.login-modal {
  height: 100vh;
  width: 100vw;
  background-color: #000000;
  opacity: 0.6;
  position: fixed;
  top: 0;
  z-index: 20 !important;
}

.inner-modal {
  position: absolute;
  inset: 0;
}

.login {
  display: flex;
  height: 100%;
}

.login-inner {
  background-color: #ffffff;
  margin: auto;
  padding: 0 15px;
  border-radius: 5px;
  box-shadow: 20%;
  z-index: 1000 !important;
}

.btn-close {
  position: absolute;
  right: -7px;
  top: 9px;
}
</style>