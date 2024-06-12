import ListItem from "./ListItem"

const agenda = [

  {
    nombre: 'Camila Duarte',
    correo: 'camidu@gmail.com',
    número_telefónico: '2871569487',
    cargo: 'Secretaria'
  },

  {
    nombre: 'Nana Okotsu',
    correo: 'hachiko11@gmail.com',
    número_telefónico: '287459976',
    cargo: 'Actor'
  },

  {
    nombre: 'Miguel Carbadillo',
    correo: 'craft02@gmail.com',
    número_telefónico: '2871149044',
    cargo: 'Doctor'
  }

]

function App() {

  return (
    
    <div> 
        <h1>Agenda Personal</h1>
        <hr />
        <ul>
          {
            agenda.map((agen)=>(
              <ListItem 
              key={agen.nombre}
              nombre={agen.nombre}
              correo={agen.correo}
              número_telefónico={agen.número_telefónico}
              cargo={agen.cargo}
              />
            ))
          }
        </ul>
      </div>
       
  )
}

export default App
