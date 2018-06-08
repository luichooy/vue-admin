<template>

</template>

<script>
  import {sessionStorage} from 'src/assets/js/storage';

  export default {
    name: 'Auth',
    created() {
      this.checkAuth();
    },
    methods: {
      checkAuth() {
        let token = this.$store.state.token;
        let user = this.$store.state.user;
        if (token) {
          if (!user) {
            this.$store.commit('SET_USER', sessionStorage.getItem('user'));
          }
        } else if (sessionStorage.getItem('token')) {
          this.$store.commit('SET_TOKEN', sessionStorage.getItem('token'));
          this.$store.commit('SET_USER', sessionStorage.getItem('user'));
        } else {
          this.$router.replace('/login');
        }
      }
    }
  }
</script>

<style scoped>

</style>
