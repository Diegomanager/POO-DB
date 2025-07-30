class reproductor {
    constructor() {
        this.tipo = "reproductor";
    }

    reproducir() {
        console.log("Reproduciendo contenido...");
    }
    pausar() {
        console.log("Contenido pausado.");
    }
}

class reproductorVideo extends reproductor {
    constructor() {
        super();
        this.tipo = "reproductor de video";
    }

    reproducir() {
        console.log("Reproduciendo video...");
    }
    pausar() {
        console.log("Video pausado.");
    }
}

class reproductorAudio extends reproductor {
    constructor() {
        super();
        this.tipo = "reproductor de audio";
    }

    reproducir() {
        console.log("Reproduciendo audio...");
    }
    pausar() {
        console.log("Audio pausado.");
    }
}
const reproductor1 = new reproductor();
const reproductor2 = new reproductorVideo();
const reproductor3 = new reproductorAudio();

reproductor1.reproducir(); 
reproductor1.pausar();
reproductor2.reproducir();
reproductor2.pausar();
reproductor3.reproducir();
reproductor3.pausar();