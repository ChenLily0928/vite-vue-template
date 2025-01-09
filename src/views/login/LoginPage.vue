<style lang="scss" module scoped>
.page-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    row-gap: 16px;
    padding: 0 2.5rem;
    height: 100%;

    .title-wrapper {
        margin-top: 1.5rem;

    }
}
</style>

<template>
    <section :class="$style['page-wrapper']">
        <img alt="Vue logo" class="logo" src="@assets/logo.svg" width="64" height="64" />
        <div :class="$style['title-wrapper']">
            <h1 class="text-4xl font-bold">歡迎回來</h1>
        </div>
        <div>
            <div class="flex items-center gap-x-3">
                <input type="Ttext" id="username" name="username"
                    class="py-1.5 pl-1 pr-3 text-base text-[#2d333a] border rounded-md placeholder:text-gray-400 focus:outline"
                    placeholder="email" />
            </div>
            <div class="flex items-center gap-x-3">
                <button class="p-4 bg-green-600 text-white">繼續</button>
            </div>
            <div id="google-signin-button"></div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

// Google Sign-In 初始化邏輯
const initializeGoogleSignIn = () => {
    window.google?.accounts.id.initialize({
        client_id: import.meta.env.VITE_APP_CLIENT_ID,
        callback: handleCredentialResponse,
        cancel_on_tap_outside: true,
        context: 'signin',
    });
    window.google?.accounts.id.renderButton(document.getElementById('google-signin-button'), {
        theme: 'outline',
        size: 'large',
    });
    window.google?.accounts.id.prompt(); // 顯示 One Tap 對話框
};

onMounted(() => {
    // include script
    const recaptchaScript = document.createElement('script');
    recaptchaScript.setAttribute('src', 'https://accounts.google.com/gsi/client');
    recaptchaScript.setAttribute('async', '');
    recaptchaScript.setAttribute('defer', '');
    recaptchaScript.onload = () => initializeGoogleSignIn();
    document.head.appendChild(recaptchaScript);
});

// 處理憑證響應
const handleCredentialResponse = (response: { credential: string }) => {
    console.log('Encoded JWT ID token: ' + response.credential);
    // 這裡可以將憑證發送到後端進行驗證
};
</script>
