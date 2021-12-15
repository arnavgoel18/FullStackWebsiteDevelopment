import './App.css'
import logo from "./components/logo.png"
import logo1 from "./components/logo1.png"
import pic from "./components/pic.png"

function App() {
  return (
    <div>
      <div className='header'>
        <img src={logo} id='logo' alt='not found' />
        <div className='navbar'>
          <li>
            <a>1</a>
          </li>
          <li>
            <a>2</a>
          </li>
          <li>
            <a>3</a>
          </li>
          <li>
            <a>4</a>
          </li>
          <li>
            <a>5</a>
          </li>
        </div>
        <div className='extraspace'>extraspace</div>
      </div>

      <div className='bodyhead_extraspace'>
        <div className='imgcircle'>
          <img src={logo1} id='logo1' alt='not' />
        </div>

        <div className='topicname'>
          <span> &nbsp;&nbsp;&nbsp;&nbsp; TOPIC NAME &emsp;</span>
          {/* &nbsp; for spaces to count similar type code for  &ensp -2spaces; &emsp; -4spaces */}
        </div>

        <div className='extraspace '>extraspace</div>
      </div>

      <div className='body'>
        <div id='bodyContent'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          voluptates doloremque rem quidem doloribus blanditiis facilis
          distinctio dolorem, error reprehenderit impedit est et eaque culpa
          alias facere nostrum repellat laudantium nobis hic id minus! Explicabo
          vitae temporibus numquam excepturi tempora voluptas est animi ab
          perspiciatis sequi, fugiat qui non totam dicta quasi natus iure omnis
          modi. Aspernatur unde molestiae dolores aliquid voluptate optio, ut
          voluptas odio tempore velit rerum vero omnis ea dignissimos sed
          officiis similique beatae deserunt vel necessitatibus, culpa
          perferendis. Quasi, numquam quas itaque nobis accusamus fuga minima
          cumque aliquid possimus, pariatur atque! Enim vero voluptatem sunt
          explicabo.
          <br />
          <div id="image">
            <img src={pic} alt='im not known' id='pic' height='100px' />
          </div>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo adipisci
          tempore, veritatis odit aliquam optio non, aliquid, voluptatum
          mollitia quibusdam harum eum est in itaque! Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Explicabo tenetur enim, error
          blanditiis distinctio soluta est autem voluptatem, qui ullam
          consequatur esse dicta consectetur sunt pariatur! Ab cum mollitia
          nam?200 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Alias corporis ratione aliquam dignissimos laborum saepe sunt libero
          excepturi odio nam suscipit incidunt mollitia sapiente amet debitis
          iure, at asperiores illo eveniet pariatur. Nihil ullam, aliquam
          sapiente voluptates aperiam harum repudiandae, facilis consectetur
          ipsum non aspernatur atque minus modi neque nostrum nemo provident
          eligendi, repellendus placeat beatae quaerat animi! Voluptatum
          possimus perspiciatis enim deserunt illum velit quaerat aut delectus
          deleniti nam, voluptatem animi. Eius obcaecati animi nobis nulla quo
          est, sed quod, temporibus excepturi, velit tenetur asperiores dolorum
          modi reprehenderit molestias. Possimus officiis delectus optio velit,
          ipsa iure quasi consequatur dolorum, numquam voluptatibus esse cum
          quia quo facilis molestias obcaecati labore! Nemo veritatis veniam
          error consequuntur enim saepe consectetur a perferendis fugit debitis!
          Recusandae illum excepturi quia aspernatur libero eum architecto ex
          delectus maiores! Officiis odit deserunt officia repudiandae rerum,
          doloribus est corporis vero ut labore, possimus pariatur eum cumque
          expedita cupiditate reiciendis. Rem facere similique incidunt
          reiciendis eveniet a expedita ab, recusandae id enim quis accusamus
          tenetur animi quod voluptatum asperiores, vitae aliquam inventore
          cumque sequi? Dicta id at ipsam autem ipsa expedita fugit repudiandae,
          sunt quia, exercitationem voluptatem. Culpa voluptatem, rem illo dicta
          id facilis fugit facere aliquam eveniet.
        </div>
        <div className='extraspace a'>extraspace</div>
      </div>
      <hr />
      <div className='end'>do whatever u like here</div>
      <div className='footer'></div>
    </div>
  )
}

export default App
