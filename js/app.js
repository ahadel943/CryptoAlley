const input = document.querySelector(".input");
const md5Placeholder = document.querySelector('[data-md5-hash]');
const sha1Placeholder = document.querySelector('[data-sha1-hash]');
const sha256Placeholder = document.querySelector('[data-sha256-hash]');
const sha512Placeholder = document.querySelector('[data-sha512-hash]');
const sha3Placeholder = document.querySelector('[data-sha3-hash]');
const ripemd160Placeholder = document.querySelector('[data-ripemd160-hash]');
const clearBtn = document.getElementById('clear-all');

input.addEventListener('input', (e) => {
    let md5Hash = CryptoJS.MD5(input.value);
    md5Placeholder.textContent = "";
    md5Placeholder.textContent = md5Hash;

    let sha1Hash = CryptoJS.SHA1(input.value);
    sha1Placeholder.textContent = "";
    sha1Placeholder.textContent = sha1Hash;

    let sha256Hash = CryptoJS.SHA256(input.value);
    sha256Placeholder.textContent = "";
    sha256Placeholder.textContent = sha256Hash;

    let sha512Hash = CryptoJS.SHA512(input.value);
    sha512Placeholder.textContent = "";
    sha512Placeholder.textContent = sha512Hash;

    let sha3Hash = CryptoJS.SHA3(input.value);
    sha3Placeholder.textContent = "";
    sha3Placeholder.textContent = sha3Hash;

    let ripemd160Hash = CryptoJS.RIPEMD160(input.value);
    ripemd160Placeholder.textContent = "";
    ripemd160Placeholder.textContent = ripemd160Hash;
})

clearBtn.addEventListener('click', (e) => {
    input.value = "";
    md5Placeholder.textContent = "";
    sha1Placeholder.textContent = "";
    sha256Placeholder.textContent = "";
    sha512Placeholder.textContent = "";
    sha3Placeholder.textContent = "";
    ripemd160Placeholder.textContent = "";
})