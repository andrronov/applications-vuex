<script>
export default {
  data() {
    return {
      login: "",
      password: "",
      loginFocused: false,
      passwordFocused: false,
      showPassword: false,
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <form class="card">
      <div class="card__header">
        <span>Авторизация</span>
      </div>
      <div class="card__input">
        <img src="/icons/phone.svg" alt="phone icon" />
        <div class="card__input_wrapper">
          <label :class="{ active: loginFocused || login }"
            >Логин или Телефон</label
          >
          <input
            type="text"
            v-model="login"
            @focus="loginFocused = true"
            @blur="loginFocused = false"
          />
        </div>
      </div>

      <!-- Пароль -->
      <div class="card__input">
        <img src="/icons/lock.svg" alt="log icon" />
        <div class="card__input_wrapper">
          <label :class="{ active: passwordFocused || password }">Пароль</label>
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            @focus="passwordFocused = true"
            @blur="passwordFocused = false"
          />
          <span class="toggle-password" @click="togglePassword">
            <img :src="`/icons/eye-${showPassword}.svg`" alt="eye icon" />
          </span>
        </div>
      </div>
      <button class="card__button">Войти</button>
    </form>
    <img src="/background.webp" alt="background" />
  </div>
</template>

<style lang="scss">
$green_col: #44a248;
$border_radius: 5px;

.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    filter: brightness(70%);
    object-fit: cover;
  }
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 2rem;
    z-index: 50;
    width: clamp(200px, 85%, 340px);
    height: 290px;
    background-color: white;
    border-radius: $border_radius;

    .card__header {
      width: clamp(170px, 90%, 308px);
      height: 56px;
      position: absolute;
      display: grid;
      top: -16px;
      background-color: $green_col;
      border-radius: $border_radius;
      color: white;

      span {
        font-size: 1.25rem;
        align-self: center;
        justify-self: center;
        font-weight: 500;
        line-height: 20px;
      }
    }

    .card__input {
      position: relative;
      display: flex;
      align-items: center;
      width: clamp(170px, 90%, 308px);
      margin-bottom: 1.5rem;

      img {
        z-index: 30;
        width: 20px;
        object-fit: contain;
        height: 100%;
      }

      .card__input_wrapper {
        position: relative;
        flex-grow: 1;
        display: flex;
        width: 100%;
        align-items: center;

        input {
          width: 100%;
          padding: 0.5rem;
          padding-left: 2rem;
          border-bottom: 1px solid #ccc;
          outline: none;
          transition: border-color 0.3s;

          &:focus {
            border-color: $green_col;
          }
        }

        label {
          position: absolute;
          top: 50%;
          left: 2rem;
          transform: translateY(-50%);
          transition: 0.3s;
          color: #777;
          pointer-events: none;

          &.active {
            top: -0.8rem;
            left: 2rem;
            font-size: 0.75rem;
            color: $green_col;
            background: white;
            padding: 0 0.25rem;
          }
        }
        .toggle-password {
          position: absolute;
          top: 10px;
          right: 1.5rem;
          cursor: pointer;

          img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }

    .card__button {
      width: clamp(100px, 40%, 110px);
      height: 36px;
      margin-top: 1rem;
      background-color: $green_col;
      border-radius: $border_radius;
      color: white;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.45);
      cursor: pointer;

      &:hover {
        background-color: #338337;
        transition: background-color 200ms ease-in;
      }
    }
  }
}
</style>
