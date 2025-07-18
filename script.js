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
    }
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
