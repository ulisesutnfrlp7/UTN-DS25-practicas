import Libro from '../components/Libro';
import itImg from '../assets/images/terror_1.jpeg';
import resplandorImg from '../assets/images/terror_2.jpeg';
import frankensteinImg from '../assets/images/terror_3.jpeg';
import draculaImg from '../assets/images/terror_4.jpeg';
import cthulhuImg from '../assets/images/lovecraft.jpg';
import horlaImg from '../assets/images/terror_6.jpeg';

const S_Terror = () => {
  return (
    <section className="flex-1 w-full px-6 py-4 space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold text-center font-[Impact] text-brown">
        NUESTRAS HISTORIAS DE TERROR...
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Libro
          titulo="IT - STEPHEN KING"
          sinopsis="Un ente malévolo aterroriza a un grupo de niños en un pueblo de Maine."
          imagen={itImg}
        />
        <Libro
          titulo="EL RESPLANDOR - STEPHEN KING"
          sinopsis="Una familia queda aislada en un hotel embrujado durante el invierno."
          imagen={resplandorImg}
        />
        <Libro
          titulo="FRANKENSTEIN - MARY SHELLEY"
          sinopsis="Un científico crea vida y enfrenta las consecuencias de jugar a ser Dios."
          imagen={frankensteinImg}
        />
        <Libro
          titulo="DRÁCULA - BRAM STOKER"
          sinopsis="El conde Drácula viaja a Inglaterra, propagando el terror y el vampirismo."
          imagen={draculaImg}
        />
        <Libro
          titulo="LA LLAMADA DE CTHULHU - H. P. LOVECRAFT"
          sinopsis="Horror cósmico sobre una deidad antigua que habita más allá de la razón humana."
          imagen={cthulhuImg}
        />
        <Libro
          titulo="EL HORLA - GUY DE MAUPASSANT"
          sinopsis="Relato de un hombre que cree estar siendo acechado por una entidad invisible."
          imagen={horlaImg}
        />
      </div>
    </section>
  );
};

export default S_Terror;