const resimler = [
    {
        dosya: "paris.jpg",
        konum: "📍 Paris, Fransa"
    },
    {
        dosya: "bruj.jpg",
        konum: "📍 Brugge, Belçika"
    },
    {
        dosya: "san.jpg",
        konum: "📍  San Sebastian, Ispanya"
    },
    {
        dosya: "acchen.jpg",
        konum: "📍  Acchen, Almanya"
    },
    {
        dosya: "alsace.jpg",
        konum: "📍  Alsace, Fransa"
    },
    {
        dosya: "alsace2..jpg",
        konum: "📍 Alsace, Fransa"
    },
    {
        dosya: "ams1.jpg",
        konum:"📍 Amsterdam, Hollanda"
    },
    {
        dosya: "amss.jpg",
        konum:"📍 Amsterdam, Hollanda"
    },
    {
        dosya: "amsterdam.jpg",
        konum: "📍 Amsterdam, Holanda"
    },
    {
        dosya: "baden.jpg",
        konum: "📍 Baden Baden, Hollanda"
    },
    {
        dosya: "balle.jpg",
        konum: "📍 Balle, Isvicre"
    },
    {
        dosya: "biar.jpg",
        konum: "📍 Biarritz, Fransa"
    },
    {
        dosya: "bruksel.jpg",
        konum: "📍 Bruksel, Belcika"
    },
    {
        dosya: "etre.jpg",
        konum: "📍 Etretat, Fransa"
    },
    {
        dosya: "fon.jpg",
        konum: "📍 Quartier Latin, Paris"
    },
    {
        dosya: "halle.jpg",
        konum: "📍 Halle, Belcika"
    },
    {
        dosya: "italy.jpg",
        konum: "📍 Major Golu, Italya"
    },
    {
        dosya: "jean.jpg",
        konum: "📍 Saint Jean de Luz, Fransa"
    },
    {
        dosya: "koln.jpg",
        konum: "📍 Koln, Almanya"
    },
    {
        dosya: "munih.jpg",
        konum: "📍 Munih, Almanya"
    },
   
    {
        dosya: "nus.jpg",
        konum: "📍 Neuschwanstein Şatosu, Almanya"
    },
    {
        dosya: "rouen.jpg",
        konum: "📍 Rouen, Fransa"
    },
    {
        dosya: "uthricht.jpg",
        konum: "📍 Utricht, Hollanda"
    },
    {
        dosya: "viy.jpg",
        konum: "📍 Viyana, Avusturya"
    },
    {
        dosya: "viyana.jpg",
        konum: "📍 Viyana, Avusturya"
    },
    {
        dosya: "viyanna.jpg",
        konum: "📍 Viyana, Avusturya"
    },
  
];

const galeri = document.getElementById("galeri");
const carouselIcerik = document.getElementById("carousel-icerik");
const carousel = document.querySelector("#carouselGaleri");

resimler.forEach((resim, index) => {
    
    const kart = document.createElement("div");
    kart.className = "col-md-3 mb-4";
    kart.innerHTML = `
    <div class="card h-100 scroll-anim">
      <img src="img/${resim.dosya}" class="card-img-top img-fluid galeri-resim" alt="${resim.konum}" data-index="${index}" data-bs-toggle="modal" data-bs-target="#galeriModal">
      <div class="card-body text-center"><small>${resim.konum}</small></div>
    </div>
  `;
    galeri.appendChild(kart);

   
    const slayt = document.createElement("div");
    slayt.className = `carousel-item${index === 0 ? " active" : ""}`;
    slayt.innerHTML = `
    <img src="img/${resim.dosya}" class="d-block w-100" alt="${resim.konum}">
    <div class="carousel-caption d-none d-md-block">
     <h5 class="text-uppercase fw-bold" style="letter-spacing: 1px; text-shadow: 1px 1px 3px rgba(0,0,0,0.3);">
  ${resim.konum}
</h5>
    </div>
  `;
    carouselIcerik.appendChild(slayt);
});


document.addEventListener("click", function (e) {
    if (e.target.classList.contains("galeri-resim")) {
        const index = parseInt(e.target.getAttribute("data-index"));
        const carouselInstance = bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel);
        carouselInstance.to(index);
    }
});

const toggle = document.getElementById("themeToggle");
const body = document.body;

toggle.addEventListener("change", () => {
    body.classList.toggle("dark-theme");
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('.scroll-anim').forEach(el => {
    observer.observe(el);
});
