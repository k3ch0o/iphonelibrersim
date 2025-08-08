document.getElementById("btn-comprar").addEventListener("click", function() {
    let numero = "526351062284"; // Cambia por tu número de WhatsApp
    let mensaje = "Hola, me interesa comprar una R-SIM para iPhone.";
    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
});
