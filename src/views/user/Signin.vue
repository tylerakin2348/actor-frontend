<!-- recordstore-frontend/src/components/Signin.vue -->

<template>

  <div class="block-container h-100 d-flex">
    <div class="block-container-row align-items-start h-100 flex-column
    justify-content-start w-50 pr-2">
      <SubjectBlock
        link_url="/"
        link_image_src="assets/next-to-normal/next_to_normal1.jpg"
        link_text_line_1="Go back"
        link_text_line_2="home"
        classes="top-left h-25 w-100"
      />
      <PageTitleBlock page_title="Sign In" classes="h-auto h1 pt-5" />
    </div>
    <div class="block-container-row h-100 py-5 align-items-start text-align-left
    px-5 font-weight-normal overflow-auto">      
    <h3 class="text-2xl mb-6 text-grey-darkest">Sign In</h3>
      <form @submit.prevent="signin">
        <div class="text-red" v-if="error">{{ error }}</div>

        <div class="mb-6">
          <label for="email" class="label w-100">E-mail Address</label>
          <input type="email" v-model="email" class="input" id="email" placeholder="andy@web-crunch.com">
        </div>
        <div class="mb-6">
          <label for="password" class="label w-100">Password</label>
          <input type="password" v-model="password" class="input" id="password" placeholder="Password">
        </div>
        <button type="submit" class="font-sans font-bold px-4 rounded cursor-pointer no-underline bg-green hover:bg-green-dark block w-full py-4 text-white items-center justify-center">Sign In</button>

        <div class="my-4"><router-link to="/signup" class="link-grey">Sign up</router-link></div>
      </form>
    </div>
  </div>
</template>

<script>

import SubjectBlock from '@/components/homepage/SubjectBlock.vue';
import PageTitleBlock from '@/components/common/PageTitleBlock.vue';
import LayoutRow from '@/components/layout-containers/LayoutRow.vue';
import LayoutColumn from '@/components/layout-containers/LayoutColumn.vue';
import SingleActingCredit from '@/components/crud/acting-credit/SingleActingCredit.vue';

export default {
name: 'Signin',
components: {
    SubjectBlock,
    PageTitleBlock,
    LayoutRow,
    LayoutColumn,
    SingleActingCredit,
  },
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  created () {
    this.checkSignedIn()
  },
  updated () {
    this.checkSignedIn()
  },
  methods: {
    signin () {
      this.$http.plain.post(`${this.$availableEndpoints.signin}`, { 
        email: this.email, 
        password: this.password 
      })
      .then(response => this.signinSuccessful(response))
      .catch(error => this.signinFailed(error))
    },
    signinSuccessful (response) { 
      console.log(response)
      this.$store.commit( 'set_current_user', response.data.user )
      localStorage.signedIn = true
      this.error = ''
      this.$router.replace('/admin')
    },
    signinFailed (error) {
      console.log('asdf')
      if (error.response.status === 401) {
        this.error = "Invalid email or password"
      } else {
        this.error = (error.response && error.response.data && error.response.data.error) || ''
      }

      delete localStorage.signedIn
    },
    checkSignedIn () {
      if (localStorage.signedIn) {
        this.$router.replace('/admin')
      }
    }
  }
}
</script>