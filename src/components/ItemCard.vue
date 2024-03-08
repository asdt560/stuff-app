<template>
  <div class="border-green-700 border-2 flex flex-col justify-center items-center w-32 h-20"> 
    <p class="underline text-green-700 text-center">
      <slot name="name"></slot>
    </p>
    <p class="text-green-700 text-center">
      <slot name="description"></slot>
    </p>
    <p class="text-green-700">
      <slot name="date"></slot>
    </p>
  </div>
</template>