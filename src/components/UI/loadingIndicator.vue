<style lang="scss">
.loading-indicator {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 55;
  color: white;

  svg {
    width: 2rem; // w-8
    height: 2rem; // h-8
    margin-right: 0.75rem; // mr-3
    margin-left: -0.25rem; // -ml-1
    color: white; // text-white
    &.dark {
      color: black; // dark:text-black
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0; // Начальная непрозрачность
  }
  to {
    opacity: 1; // Конечная непрозрачность
  }
}
</style>

<template>
  <div class="loading-indicator">
    <p>Загрузка...</p>
  </div>
</template>
