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

resimler.forEach((resim, index) => {
    const modalId = `modal${index}`;

    galeri.innerHTML += `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="img/${resim.dosya}" alt="Fotoğraf" class="card-img-top img-fluid" data-bs-toggle="modal" data-bs-target="#${modalId}">
      </div>
    </div>

    <div class="modal fade" id="${modalId}" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body text-center">
            <img src="img/${resim.dosya}" class="img-fluid mb-3" alt="Büyük Fotoğraf">
            <h5>${resim.konum}</h5>
          </div>
        </div>
      </div>
    </div>
  `;
});

