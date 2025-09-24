import './App.css'
import { ListaAnimales } from './componentes/ListaAnimales'
import { Frutas } from './componentes/Frutas'
import { Diasdelasemana } from './componentes/Diasdelasemana'
import { Straykids } from './componentes/Straykids'

function App() {
  const animales = [{nombre:"gato", imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg"},
                    {nombre:"perro", imagen:"https://eq2imhfmrcc.exactdn.com/wp-content/uploads/2016/08/golden-retriever.jpg?strip=all&lossy=1&ssl=1"},
                    {nombre:"lobo", imagen:"https://static.nationalgeographicla.com/files/styles/image_3200/public/05_nationalgeographic_2711495.webp?w=839&h=839"}
                  ] 
  const frutas = ["manzana","pera","uva"]
  const dias = [ "lunes","martes","miercoles","jueves","viernes","sabado","domingo"]
  const perdidos = [{nombre:"Bangchan", imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Stray_Kids_Bang_Chan_W_Korea_October_2024.jpg/250px-Stray_Kids_Bang_Chan_W_Korea_October_2024.jpg"},
                    {nombre:"Leeknow", imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS304lx0PDizyx7tzVjtIz_D2EVlXGRmKYY9xcN4VIVM166Au1NlYsDgKxuUuyfA08Eoxk&usqp=CAU"},
                    {nombre:"Changbin", imagen:"https://www.sonymusic.co.jp/img/common/artist_image/70009000/70009633/images/Pre-Teaser-Image-1_Changbin-low.jpg"},
                    {nombre:"Hyunjin", imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpviEAhAsGsjWp46CgTdJaMBE0Ux6_cvkLrw&s"},
                    {nombre:"Felix", imagen:"https://upload.wikimedia.org/wikipedia/commons/3/38/Felix_of_Stray_Kids_at_a_Louis_Vuitton_event%2C_August_22%2C_2025.png"},
                    {nombre:"Seungmin", imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Stray_Kids_Seungmin_Chanel_April_2024.jpg/250px-Stray_Kids_Seungmin_Chanel_April_2024.jpg"},
                    {nombre:"I.N", imagen:"https://upload.wikimedia.org/wikipedia/commons/d/d2/I.N_of_Stray_Kids%2C_March_2%2C_2025.png"}
                  ] 


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
    <h2>Stray Kids </h2>
    {perdidos.map(function(perdidos){
     return<Straykids foto={perdidos.imagen} integrantes={perdidos.nombre}/>
    })}


  </>
  )
}

export default App
