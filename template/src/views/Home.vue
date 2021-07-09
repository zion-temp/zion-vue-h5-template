<template>
  <div class="home">
      <h1>This is an home page</h1>
      <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import { Toast } from 'vant';
// import {userApiList} from '../api/index'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  setup(){
  //  userId=1&systemType=0
    //  userApiList({
    //   userId:'1',
    //   systemType:0
    // }).then((res)=>{
    //   console.log(res)
    // })
    // debugger;
  }
}
</script>
<style scoped>
h1 {
  font-size: 0.12rem;
}
</style>
