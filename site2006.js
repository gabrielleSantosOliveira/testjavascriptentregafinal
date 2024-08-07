// // scripts.js

// function validateForm() {
//     var name = document.getElementById('name').value;
//     var password = document.getElementById('password').value;
//     var confirmPassword = document.getElementById('confirmPassword').value;
//     var birthdateInput = document.getElementById('birthdate').value;
//     var email = document.getElementById('email').value;
//     var musicStyle = document.querySelector('input[name="musicStyle"]:checked');

  
//     // Validar se todos os campos estão preenchidos
//     if (name === "" || password === "" || confirmPassword === "" || birthdateInput === "" || email === "" || !musicStyle || state === "" || city === "") {
//         displayErrorMessage("Por favor, preencha todos os campos.");
//         return;
//     }
  
//     // Validar se a senha e a confirmação de senha são iguais
//     if (password !== confirmPassword) {
//         displayErrorMessage("As senhas não coincidem.");
//         return;
//     }
  
//     // Validar idade
//     var birthdate = new Date(birthdateInput);
//     var today = new Date();
//     var age = today.getFullYear() - birthdate.getFullYear();
//     var monthDiff = today.getMonth() - birthdate.getMonth();
  
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
//         age--;
//     }
  
//     if (age < 18) {
//         displayErrorMessage("Você é menor de idade e não pode enviar o formulário.");
//         return;
//     }
  
//     // Limpar mensagem de erro caso todos os campos sejam válidos
//     clearErrorMessage();
  
//     // Exibir mensagem de sucesso
//     displaySuccessMessage();
  
//     var formData = new FormData(document.getElementById('userForm'));
//     fetch('processar_formulario.php', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => {
//         console.log('Formulário enviado com sucesso!');
//     })
//     .catch(error => {
//         console.error('Erro ao enviar o formulário:', error);
//     });
//   }
  
//   function displayErrorMessage(message) {
//     var errorMessage = document.getElementById('errorMessage');
//     errorMessage.textContent = message;
//   }
  
//   function clearErrorMessage() {
//     var errorMessage = document.getElementById('errorMessage');
//     errorMessage.textContent = "";
//   }
  
//   function displaySuccessMessage() {
//     var successMessage = document.getElementById('successMessage');
//     successMessage.textContent = "Você foi dez! Formulário preenchido.";
//   }

//     function validatePassword(password, confirmPassword) {
//         // Requisitos de senha
//         var hasUpperCase = /[A-Z]/.test(password);
//         var hasNumber = /[0-9]/.test(password);
//         var hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

//         // Atualiza a lista de requisitos
//         uppercaseRequirement.className = hasUpperCase ? 'valid' : 'invalid';
//         numberRequirement.className = hasNumber ? 'valid' : 'invalid';
//         specialRequirement.className = hasSpecialChar ? 'valid' : 'invalid';

//         // Validar a senha e confirmar a senha
//         if (password !== confirmPassword) {
//             displayErrorMessage("As senhas não coincidem.");
//             return false;
//         } else {
//             // clearErrorMessage();
//             return true;
//         }

//         // Verificar se todos os requisitos são atendidos
//         if (hasUpperCase && hasNumber && hasSpecialChar) {
//             return true;
//         } else {
//             displayErrorMessage("A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial.");
//             return false;
//         }

//     }
 

//       document.addEventListener('DOMContentLoaded', function () {
//         let currentFontSize = parseInt(window.localStorage.getItem('fontSize')) || 16;
    
//         document.body.style.fontSize = currentFontSize + 'px';
    
//         document.querySelector('#increase-font').addEventListener('click', function () {
//             if (currentFontSize < 100) { // Verifica se o tamanho não ultrapassa 100px
//                 currentFontSize += 2; // Aumenta o tamanho da fonte
//                 document.body.style.fontSize = currentFontSize + 'px';
//                 window.localStorage.setItem('fontSize', currentFontSize);
//             }
//         });
    
//         document.querySelector('#decrease-font').addEventListener('click', function () {
//             if (currentFontSize > 10) { // Verifica se o tamanho não é menor que 10px
//                 currentFontSize -= 2; // Diminui o tamanho da fonte
//                 document.body.style.fontSize = currentFontSize + 'px';
//                 window.localStorage.setItem('fontSize', currentFontSize);
//             }
//         });
//       });
    
//       // Atualiza a contagem de caracteres
//       const maxChars = 25;
//       function countChars() {
//           const textarea = document.getElementById('myTextarea');
//           const charCountElem = document.getElementById('charCount');
//           const warningMessage = document.getElementById('warningMessage');
    
//           const currentLength = textarea.value.length;
//           const remainingChars = maxChars - currentLength;
    
//           charCountElem.textContent = remainingChars;
    
//           if (remainingChars <= 0) {
//               warningMessage.style.display = 'block';
//           } else {
//               warningMessage.style.display = 'none';
//           }
//       } 
    
//       let isInverted = false;
    
//       function toggleInvertColors() {
//           const body = document.body;
//           isInverted = !isInverted; // Alterna o estado da inversão de cores
    
//           if (isInverted) {
//               body.style.filter = 'invert(1)'; // Aplica o filtro de inversão de cores
//           } else {
//               body.style.filter = 'invert(0)'; // Remove o filtro de inversão de cores
//           }
//       }
    
//       // Adiciona o listar de evento ao botão de inversão de cores
//       document.getElementById('invert-colors').addEventListener('click', toggleInvertColors);
    