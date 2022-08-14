<template>
  <div v-if="loading">
    <LoadingTool></LoadingTool>
  </div>
  <div v-else>
    <div>
      <img alt="Vue logo" src="@/assets/logo.png" />
    </div>
    <el-select class="mb-20"></el-select>
    <div class="flex flex-column abc">
      <button
        class="text-green bg-dark fs-sm mb-10"
        style="width: 1.0417rem; height: 0.1667rem; border-radius: 4px;"
        @click="getByArea()"
      >
        <span>发送请求</span>
      </button>
      <el-button class="mb-10" @click="cancelRequest('/posts')"
        >取消请求</el-button
      >
      <el-button style="margin-left: 0;" @click="cancelAllRequest"
        >取消全部请求</el-button
      >
      <input
        ref="getFile"
        type="file"
        multiple
        accept="image/*"
        @change="importOne"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import LoadingTool from '@/components/loadingTool.vue'
import { useLoadingStore } from '@/store/modules/loading'
import { storeToRefs } from 'pinia'
import { cancelRequest, cancelAllRequest } from '@/utils/request'
import $test from '@/api/test'
import { ref } from 'vue'

const loadingStore = useLoadingStore()
const { loading } = storeToRefs(loadingStore)

async function getByArea() {
  await $test.get15DaysWeatherByArea({ id: 2 })
}

const getFile = ref(null)
// onMounted(() => {
//   console.log(file)
// })

// async function importOne() {
//   const files = getFile.value.files

//   const formData = new FormData()
//   console.log(files, 'Data')
//   formData.append('files', files[0])
//   await $test.postFileArr(formData)
// }
// async function importArr() {
//   const files = getFile.value.files

//   const formData = new FormData()
//   console.log(files, 'Data')
//   formData.append('files', files[0])
//   formData.append('files', files[1])

//   await $test.postFileArr(formData)
// }
// async function importMore() {
//   const files = getFile.value.files

//   const formData = new FormData()
//   console.log(files, 'Data')
//   formData.append('files', files[0])
//   formData.append('files', files[1])

//   await $test.postFileMore(formData)
// }
</script>

<style scoped lang="scss">
.abc {
  position: absolute;
  left: 50%;
  width: 200px;
  transform: translateX(-50%);
}
</style>
