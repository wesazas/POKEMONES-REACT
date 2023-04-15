import logo from './logo.svg';
import './App.css';
import Pokemon  from './componentes/Pokemon';

 function App() {
  return (
    <div className="App">
    <h1>Pokemones Iniciales Región Kanto</h1>
      <div className='contenedor-principal'>
        
        <Pokemon
          imagen="001" 
          nombre="Bulbasaur "
          tipo="planta"
          descripcion="Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo." />
        <Pokemon
          imagen="002" 
          nombre="Ivysaur  "
          tipo="planta"
          descripcion="Cuando le crece bastante el bulbo del lomo, pierde la capacidad de erguirse sobre las patas traseras." />
        <Pokemon
          imagen="003" 
          nombre="Venusaur   "
          tipo="planta"
          descripcion="La planta florece cuando absorbe energía solar, lo cual le obliga a buscar siempre la luz del sol." />
         <Pokemon
          imagen="004" 
          nombre="Charmander    "
          tipo="fuego"
          descripcion="Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola." />
         <Pokemon
          imagen="005" 
          nombre="Charmeleon    "
          tipo="fuego"
          descripcion="Este Pokémon de naturaleza agresiva ataca en combate con su cola llameante y hace trizas al rival con sus afiladas garras." />
         <Pokemon
          imagen="006" 
          nombre="Charizard    "
          tipo="fuego"
          descripcion="Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer." />
         <Pokemon
          imagen="007" 
          nombre="Squirtle    "
          tipo="agua"
          descripcion="Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble." />
         <Pokemon
          imagen="008" 
          nombre="Wartortle    "
          tipo="agua"
          descripcion="Se lo considera un símbolo de longevidad. Los ejemplares más ancianos tienen musgo sobre el caparazón." />
         <Pokemon
          imagen="009" 
          nombre="Blastoise    "
          tipo="agua"
          descripcion="Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón." /> 
             


      </div>
    </div>
  );
}

export default App;
