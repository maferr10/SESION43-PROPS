import './App.css'
import { ListaAnimales } from './componentes/ListaAnimales'
import { Frutas } from './componentes/Frutas'
import { Diasdelasemana } from './componentes/Diasdelasemana'

function App() {
  const animales = [{nombre:"gato", imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg"},
                    {nombre:"perro", imagen:"https://eq2imhfmrcc.exactdn.com/wp-content/uploads/2016/08/golden-retriever.jpg?strip=all&lossy=1&ssl=1"},
                    {nombre:"lobo", imagen:"https://static.nationalgeographicla.com/files/styles/image_3200/public/05_nationalgeographic_2711495.webp?w=839&h=839"}
                  ] 
  const frutas = ["manzana","pera","uva"]
  const dias = [ "lunes","martes","miercoles","jueves","viernes","sabado","domingo"]
  return (
    <>
    <h1>Lista de Animales</h1>
    {animales.map(function(animal){

    return<ListaAnimales imagen={animal.imagen} nombre={animal.nombre} />

  })}
  <h2>Lista de Frutas</h2>
  <ul>{
    frutas.map(function(fruta){
      return<Frutas nombre={fruta} />
    })
    }

  </ul>
  <h2>Lista de dias de la semana</h2>
  <ul>{
    dias.map(function(dias){
      return <Diasdelasemana nombre={dias}/>
    })
    }</ul>

  </>
  )
}

export default App
