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
      <PageTitleBlock page_title="Sign Up" classes="h-auto h1 pt-5" />
    </div>
    <div class="block-container-row h-100 py-5 align-items-start text-align-left
    px-5 font-weight-normal overflow-auto">      
    <h3 class="text-2xl mb-6 text-grey-darkest">Sign Up</h3>
      <form @submit.prevent="signup">
        <div class="text-red" v-if="error">{{ error }}</div>

        <div class="form-group">
          <label for="email" class="label w-100">E-mail Address</label>
          <input type="email" v-model="email" class="form-control" id="email" placeholder="andy@web-crunch.com">
        </div>

        <div class="form-group">
          <label for="password" class="label w-100">Password</label>
          <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
        </div>

        <div class="form-group">
          <label for="password_confirmation" class="label w-100">Password Confirmation</label>
          <input type="password" v-model="password_confirmation" class="form-control" id="password_confirmation" placeholder="Password Confirmation">
        </div>
        
        <button type="submit" class="p-2 btn btn-primary">Sign Up</button>

        <div class="my-4">
          <router-link to="/" class="btn btn-secondary">Sign In</router-link>
        </div>
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
      password_confirmation: '',
      error: ''
    }
  },
  created () {
    this.checkedSignedIn()
  },
  updated () {
    this.checkedSignedIn()
  },
  methods: {
    signup () {
      this.$http.plain.post('/signup', { email: this.email, password: this.password, password_confirmation: this.password_confirmation })
        .then(response => this.signupSuccessful(response))
        .catch(error => this.signupFailed(error))
    },
    signupSuccessful (response) {
      if (!response.data.csrf) {
        this.signupFailed(response)
        return
      }

      localStorage.csrf = response.data.csrf
      localStorage.signedIn = true
      this.error = ''
      this.$router.replace('/admin')
    },
    signupFailed (error) {
      this.error = (error.response && error.response.data && error.response.data.error) || 'Something went wrong'
      delete localStorage.csrf
      delete localStorage.signedIn
    },
    checkedSignedIn () {
      if (localStorage.signedIn) {
        this.$router.replace('/admin')
      }
    }
  }
}
</script>