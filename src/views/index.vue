<template>
  <div>
    <h3>校验身份证号码</h3>
    <input type="text" placeholder="输入18位身份证号码" :maxlength="18" @input="handleValidateInput" />
    <div v-if="isValidatePass" class="tip pass">随机码与身份证号码匹配</div>
    <div v-else class="tip err">随机码与身份证号码不匹配</div>
  </div>

  <div>
    <h3>生成校验码</h3>
    <input type="text" placeholder="身份证号码前17位" :maxlength="17" @input="handleCalcInput" />
    <div class="tip">随机码: {{ verifyCode ? verifyCode : '-' }}</div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { checkIdCard, calcIdCardVerifyCode } from '../utils/validate'

defineOptions({
  name: 'Index'
})

const isValidatePass = ref(true)
const verifyCode = ref('')

const handleValidateInput = (event: Event) => {
  isValidatePass.value = checkIdCard((event.target as HTMLInputElement).value)
}

const handleCalcInput = (event: Event) => {
  verifyCode.value = calcIdCardVerifyCode((event.target as HTMLInputElement).value)
}
</script>

<style scoped>
  .tip {
    margin-top: 10px;
  }

  .tip.pass {
    color: #609926;
  }

  .tip.err {
    color: rgb(255, 100, 100);
  }

  input {
    width: 250px;
    text-align: center;
  }

  .verify-code {
    width: 50px;
  }
</style>