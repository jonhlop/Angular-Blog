import { Injectable } from '@angular/core';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root',
})
export class GestorService {
  arrPost: Post[];

  constructor() {
    this.arrPost = [
      {
        titulo: 'Como conoci a vuestra madre',
        texto: `Sé que alguno pensaréis que estoy loca de remate por haberme vuelto a meter nueve temporadas de una serie que acabó hace tan poco y con tanta decepción, y más lo pensaréis cuando os aclare que no lo he hecho para escribir este post, sino que simplemente ha coincidido.

      Hace ya un par de meses me decidí a volver a ver ‘How I Met Your Mother‘ porque estaba en Netflix, porque era fácil, porque estaba en régimen de semi-vacaciones de Recap, porque me apetecía algo digerible y comprensible y pensar poco. ¡Vacaciones, gente! Menos juzgar…`,
        autor: 'Marina Ortiz',
        imagen: '',
        fecha: '03-12-2016',
        categoria: 'series',
      },
      {
        titulo: 'VENGADORES: INFINITY WAR / AVENGERS: INFINITY WAR (2018)',
        texto: `La película cuenta con la mayor cantidad de superhéroes vista en cualquier otra película de Marvel, pues incluirá a la mayoría de ellos vistos en las películas de Guardianes de la Galaxia o “Capitán América: Civil War”. Así, en el reparto tenemos a Josh Brolin como Thanos enfrentándose a los Vengadores, formados por Robert Downey Jr.(Iron Man), Chris Hemsworth (Thor), Mark Ruffalo (Hulk), Chris Evans (Capitán América), Scarlett Johansson (Viuda Negra), Jeremy Renner (Ojo de Halcón), Elizabeth Olsen (Bruja Escarlata) y Paul Bettany (Visión).

        El Titán Loco también tendrá que lidiar con los Guardianes de la Galaxia, grupo integrado por Chris Pratt (Star-Lord), Zoe Saldana (Gamora), Dave Bautista (Drax), Vin Diesel (voz de Groot), Bradley Cooper (voz de Mapache Cohete), Karen Gillan (Nébula) y Pom Klemenntief (Mantis).
        
        Finalmente, por libre tenemos a Benedict Cumberbatch (Doctor Extraño), Benedict Wong (Wong), Tom Holland (Spider-Man), Anthony Mackie (Halcón), Paul Rudd (Ant-Man), Chadwick Boseman (Pantera Negra), Winston Duke (M’Bake), Letitia Wright (Shuri) , Sebastian Stan (Soldado de Invierno), , Tessa Thompson (Valquiria), Cobie Smulders (Maria Hill), Tom Hiddleston (Loki), Benicio del Toro (El Coleccionista) y Samuel L. Jackson (Nick Fury).
        
        La película está dirigida por los hermanos Joe y Anthony Russo, quienes ya han dirigido “Capitán América: El Soldado de Invierno” y “Capitán América: Civil War”, sobre un guión de Christopher Markus y Stephen McFeely.`,
        autor: 'Angel Gonzalez',
        imagen: '',
        fecha: '27-03-2018',
        categoria: 'peliculas',
      },
      {
        titulo:
          'Vuelta al Entrenamiento en Fútbol: ¿Qué tener en cuenta para volver sin riesgos?',
        texto: `Tras dos meses de confinamiento parece que, por fin, comenzamos a ver la luz al final del túnel. Las restricciones y el confinamiento empiezan a suavizarse, permitiéndonos en ciertos horarios salir, incluso a realizar actividad física al aire libre. ¿Sabes cómo es la vuelta al entrenamiento, por ejemplo, en el fútbol?

        Parece que las competiciones profesionales tienen intención de reanudar su actividad tras casi 8 semanas paradas. Sin embargo, las competiciones inferiores (de 2ªB hacia abajo) no volverán a competir, a priori, hasta la próxima temporada (sin fechas aún confirmadas).…`,
        autor: 'Carlos Gallardo',
        imagen: '',
        fecha: '16-05-2020',
        categoria: 'deportes',
      },
      {
        titulo:
          'Estas son nuestras sillas gaming favoritas para jugar cómodamente por menos de 250 euros',
        texto: `Los jugadores tendemos a pasar un buen número de horas frente a la pantalla, especialmente cuando algún lanzamiento que esperábamos termina por salir al mercado. La naturaleza sedentaria de nuestra afición no es dañina per-sé con las prevenciones adecuadas; por desgracia, en muchas ocasiones no se tienen en cuenta dichas precauciones. Una de las más recomendables, especialmente cuando tu trabajo también es de naturaleza sedentaria, es tener con nosotros una postura adecuada y un asiento que nos permita estar de forma cómoda y correcta. Para esto último en el mercado podemos encontrar una infinitud de sillas que, presumiblemente, se adaptan a todas estas necesidades. Hoy queremos hablar de cuales son nuestros modelos favoritos de este, muchas veces ignorado, accesorio; con un límite impuestos de 250 euros, para no dejar fuera a nadie en esta importante labor.`,
        autor: 'Manuel Buzón',
        imagen: '',
        fecha: '23-05-2020',
        categoria: 'videojuegos',
      },
    ];
  }

  agregarPost(post): void {
    console.log(post);
    var nuevoPost = post;
    this.arrPost.push(nuevoPost);
   
  }
  getAllPost(): Post[] {

    return this.arrPost;
  }
  getPostByCategoria(pCategoria): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      const filtroCategoria = this.arrPost.filter((post) => {
        return post.categoria === pCategoria;
      });
      resolve(filtroCategoria);
    });
  }
}
