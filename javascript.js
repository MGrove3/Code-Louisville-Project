history.pushState(null, null, document.title);
window.addEventListener('popstate', function () {
    history.pushState(null, null, document.title);
});

function goToHome () { 
    window.location.href = "index.html"
};