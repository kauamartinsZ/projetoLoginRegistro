document.addEventListener("DOMContentLoaded", function() {
    const captchaBox = document.querySelector(".captcha-box");
    const userInput = document.querySelector(".captcha-container input");
    const form = document.querySelector(".form");
    const emailInput = document.querySelector("#email");
    const senhaInput = document.querySelector("#senha");
    const confirmaSenhaInput = document.querySelector("#confirmaSenha");
    const errorMsg = document.createElement("div");
    errorMsg.style.color = "red";
    errorMsg.style.display = "none";
    errorMsg.style.marginTop = "10px";
    form.appendChild(errorMsg);

    function generateCaptcha() {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let code = "";
        for (let i = 0; i < 5; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        captchaBox.textContent = code;
        userInput.value = "";
        errorMsg.style.display = "none";
    }

    generateCaptcha();

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 



        const senha = senhaInput.value;
        if (senha.length < 8) {
            errorMsg.textContent = "A senha deve ter no mínimo 8 caracteres!";
            errorMsg.style.display = "block";
            return;
        }

        const confirmaSenha = confirmaSenhaInput.value;
        if (senha !== confirmaSenha) {
            errorMsg.textContent = "As senhas não coincidem!";
            errorMsg.style.display = "block";
            return;
        }

        const userCode = userInput.value.trim().toUpperCase();
        const correctCode = captchaBox.textContent;

        if (userCode === correctCode) {
            alert("Cadastro realizado com sucesso!");
            generateCaptcha();
            form.reset(); 
            window.location.href = "Login.html";
        } else {
            alert("Código do Captcha incorreto!");
            errorMsg.style.display = "block";
            generateCaptcha();
        }
    });
});