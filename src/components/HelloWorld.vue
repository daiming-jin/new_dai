<script setup></script>

<template>
  <div>
    <div display: inline>
      <img
        src="../images/appm3V1L6Y3C3podIGShCo686dXRRY4i.png"
        class="w-[40vw] h-[55vw] flex items-center"
      />
    </div>
       <p class="w-[24vw] h-[2vw] ">登录，即创造你的应用</p>
       <div>
      <input type="uername" class="w-[10vw] h-[2.5vw]" />

      <el-input
        v-model="input"
        style="width: 240px"
        type="password"
        placeholder="Please input password"
        show-password
      />
    </div>
  </div>
</template>

<style scoped></style>
