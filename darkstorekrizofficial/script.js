/* — LOADER — */
window.addEventListener("load",()=>{
  document.getElementById("loader").style.display="none";
});

/* — LANGUAGE — */
function setLang(lang){
  document.querySelectorAll("[data-en]").forEach(el=>{
    el.innerText = el.getAttribute(`data-${lang}`);
  });
  localStorage.setItem("lang",lang);
}

const saved = localStorage.getItem("lang") || "en";
setLang(saved);
