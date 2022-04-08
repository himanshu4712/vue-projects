<template>  
    <p role="button" class="text-center d-block cursor-pointer lead google" @click="loginWithGoogle">Login With Google</p>  
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebase from "../utilities/firebase";
export default {
    name: "LoginWithGoogle",
    methods: {
        loginWithGoogle() {
            const provider = new GoogleAuthProvider();

            const auth = getAuth(firebase);
            signInWithPopup(auth, provider)
            .then(() => {
                this.$emit("close-modal");
            }).catch((e) => {
               console.log(e);
            });
        }
    },
    emits: ["close-modal"],
}
</script>

<style scoped>

.google {
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
}

.google:hover {
    text-decoration: underline;
}

</style>