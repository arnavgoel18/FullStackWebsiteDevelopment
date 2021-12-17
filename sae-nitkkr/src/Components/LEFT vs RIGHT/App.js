import './App.css'
import logo from './components/logo.png'
import logo1 from './components/logo1.png'
import pic from './components/pic.png'
import one from './components/one.jpg'
import two from './components/two.jpg'
import three from './components/three.jpg'
import four from './components/four.jpg'

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
          <span> &nbsp;&nbsp;&nbsp;&nbsp; LEFT vs RIGHT &emsp;</span>
          {/* &nbsp; for spaces to count similar type code for  &ensp -2spaces; &emsp; -4spaces */}
        </div>

        <div className='extraspace '>extraspace</div>
      </div>

      <div className='body'>
        <div id='bodyContent'>
          <div id='image'>
            <img src={one} alt='im not known' id='pic' height='100px' />
          </div>
          <br />
          <div className='right'>(Image Source: www.todayifoundout.com)</div>
          <br />
          <div>Last updated: July 4, 2020</div>
          <br />
          When you make up your mind to have a ride in your car, what is the
          first thing you do? You walk down to your car standing in the parking
          space and open its door to get yourself to the driving seat. Have you
          ever noticed from which side you most probably approach the door -
          right or left? If your answer is right, your answer is right (such a
          pun!). It's because in our country, we have "right hand steering".
          Right hand steering means the position of the steering wheel is on the
          right side of the vehicle while left hand steering means steering
          wheel positioned on the left. Britain along with most of the nations
          that had earlier been its colonies, follow left hand traffic (LHT),
          which means driving vehicles on the left side of the road.
          Traditionally countries that use LHT adhere to right hand steering
          while countries that practise right hand traffic (RHT) go for left
          hand steering. Out of 195 countries recognized by the UN, 141
          (including America, China and Russia) keep the traffic to the right
          side of the road (which means they practise RHT), while the remaining
          54 prefer LHT (Data Source: wikipedia.com).
          <br />
          <div id='image'>
            <img src={two} alt='im not known' id='pic' height='100px' />
          </div>
          <br />
          <div className='right'>(Image source: caracademyenglish.com)</div>
          <br />
          <h3>
            Why is there such a disparity in selecting the side of the traffic?
          </h3>
          To answer this question, let us move backwards along the arrow of
          time. First we shall probe into the matter for LHT. The practice of
          LHT got its impetus from the soldiers of ancient times. Right-handed
          soldiers kept their swords in the scabbard placed in the left side of
          their body. They
          <div id='image'>
            <img src={three} alt='im not known' id='pic' height='100px' />
          </div>
          <br />
          <div className='right'>(Image source: www.local21news.com)</div>
          <br />
          preferred walking on the left side to reduce the chance of their
          scabbard hitting any ongoing pedestrian. This also made it easier for
          them to take off their sword and attack with it in case of any sudden
          encounter of an opponent charging against them. Another reason that
          added to the impetus was the way right-handed people mount on any
          animal; they climb any animal from the left. Romans steered their
          carts and chariots with the left hand so that they could use their
          right hand against any enemy attack. Driving on the left put the
          right-handed soldiers in a position to actively use their dominant
          hand. Besides these, there are many other instances from history that
          championed the practice of LHT, but those discussed here are the most
          famous stories. In 1835, Britain mandated the practice of LHT in its
          territory along with its colonies. However, the countries like Japan,
          Indonesia and Thailand have never been under the rule of the British
          empire, but still own LHT. After gaining independence, many countries
          in an attempt to completely obliterate the remaining links with its
          colonial period, shifted to RHT.
          <h3>Interesting facts:</h3>* Although RHT was a custom in America, it
          wasn't until 1915 that the vehicles with left-hand steering became
          common. RHT was followed with vehicles having right-hand steering
          until then. * In 1908, Model T by Ford was the first car featuring
          left-hand steering. * In most countries, rail traffic follows the same
          side as road traffic. However, in many countries the rail traffic
          didn't switch partially/completely to RHT even after transformation of
          road traffic to RHT because railways were built using LHT British
          technology. * 90% of the world's population is right-handed, therefore
          logically the LHT (that uses right hand steering) fits best. Contrary
          to this fact, two-thirds of the world go for RHT.
          <div id='image'>
            <img src={four} alt='im not known' id='pic' height='100px' />
          </div>
          <br />
          <div className='right'>
            {' '}
            Ford Model T (Image source: auto.howstuffworks.com)
          </div>
          <pre>
            To check your understanding, kindly participate in the quiz (link
            below).
          </pre>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSef8EnVIqOM-H02JyCO51QTi-u8bChOeOVaqlbmkHDt45E7pA/viewform?usp=sf_link'>
            https://docs.google.com/forms/d/e/1FAIpQLSef8EnVIqOM-H02JyCO51QTi-u8bChOeOVaqlbmkHDt45E7pA/viewform?usp=sf_link
          </a>
          <ol>
            REFERENCES:
            <li>wikipedia.com</li>
            <li>businessinsider.com</li>
          </ol>
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
