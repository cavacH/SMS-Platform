let currentStatus = "WELCOME";

document.title = 'Safinia-Health Literacy Project|Welcome!';

let username = ""


// Particle.js

//Reserved for future uses.

function callParticleJS(){

particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
}



class WelcomePage_Tweaked extends React.Component{
  render(){
    return (
<div className="container">
<div>
<br/>
<div align = "center" className = "hundred_panel">
  <div className="container-center">
  <p>
  <div className="topimage">
<img src="assets/safinia_new_clean.png" className = " title-image" alt="Safinia"/>

<h2 align="center">Clarifying Complex Medical Terminology.</h2>
</div>
</p>
</div><br/>
</div></div>
</div>
    );
  }
}

class WelcomePage_Tweaked_Second extends React.Component{
  render(){
    return (<div>
      <div className="tweaked_intro container-fluid replicate_background" align = "center">
        
        <h5 className = "eighty-width white">St. Louis has the highest rate of Sexually Transmitted Infections in the country.</h5>
        <br/>
        <br/>
        <h5 className = "eighty-width white">Safinia is aiming to reduce the STI rate by introducing a SMS platform that can bridge key knowledge gaps in STI literacy. </h5>

        <br/>
        <button type="button" className="btn btn-outline-warning">Learn More</button>

      </div>

  </div>
    );


  }

  componentDidMount(){
    //callParticleJS()
}


}




class WelcomePage_0 extends React.Component{



  render(){
  
  return (
<div className="row">
<div className="col" align="center"></div>
<div className="col" align="center"></div>

<div className="replicate col" align="center">Contact:Andy</div>
<div className="col" align="center"></div>
<div className="col" align="center"></div>

<div className="col" align="center"></div>
<div className="col" align="center"></div>
<div className="col" align="center">
</div>
<div className="col" align="center"></div><div className="col" align="center"><div  style={{textAlign: 'right'}}>
      <a href="./register">Register</a>
</div></div>

  <div className="col" align="center">
      <div>
      <a href="./app">Login</a>
      </div>
    </div><div className="col" align="center"></div>
    </div>
  
  );
  
  }
  
  componentDidMount(){
      //callParticleJS()
  }
  
  
  
  }

/* Gives out the Welcome Page. */


class WelcomePage_1 extends React.Component{



render(){

return (
  <div className="container-fluid">
  <div className="container-1 take-all-space-you-can">


</div>
<div>
<br/>

<h1 align="center"className="eighty-width">Simple Medical Explanations for Everyone.</h1>
<h3 align="center" className="eighty-width">Safinia helps lower the barrier to approach professional definitions of medical terminologies and proper aid.</h3>
<h4 align="center" className="eighty-width"></h4>
<br/>
</div>
<div></div>
<div className="row">
  <div className="col" align="center">
  <img id="search-page" className="icons" src="assets/magnifier-icon.png" />

  <div></div>
  <br/>
  <h4><b> Search Terminology </b></h4>
<div></div>
  <div className="eighty-width">Implemented with NLP, Safinia helps those in need with easy and fast searches.</div>
  
  </div>

  <div className="col" align="center">
  <img id="graph-page" className="icons" src="assets/graph-icon.png" />


  <div></div>
  <br/>
  <h4><b>Data Visualization</b></h4>
  <div></div>
  <div className="eighty-width">With the aid of data visualization, doctors can look at major concerns of patients and give useful feedback.</div>
  </div>
  
  <div className="col" align="center">
      <img id="doctor-page" className="icons" src="assets/doctor-icon.png" />
      <div></div>
      <br/>
      <h4><b> Doctor's Account </b></h4>
      <div className="eighty-width">With Doctor's Account, physicians can access data visualization, and view patients' messages.</div>
  </div>
  <div className="col" align="center">
  <img id="patient-page" className="icons" src="assets/patient-icon.png" />
  <div></div>
  <br/>
  <h4><b> Patient's Account </b></h4>
  <div className="eighty-width">With Patient's Account, patients can use SMS messaging to consult medical terminologies.</div>
  </div>
</div>



<div>


<br/>
</div>
<br/>
</div>

);

}

componentDidMount(){
    //callParticleJS()
}



}

/*

Welcome Page Two. 

Introduces different words for testing.

Might have to navigate to another website.

Start.


*/




class WelcomePage_2 extends React.Component{



  render(){
  
  return (
    <div className="container-fluid" align = "center">
  <div className="outer-container">
    <div id="particles-js"></div>
    <div className="your-content">
    
    <br/><br/>
    <h1 >Try Our Anonymous SMS Platform!</h1>
    <div align="center">
    <h3 >COVID-19 and Related Searches:</h3>
    <button type="button" className="btn-1 info mr-2 mr-2">Virus</button>
    <button type="button" className="btn-1 info mr-2 mr-2">Coronavirus</button>
    <button type="button" className="btn-1 info mr-2 mr-2">Vaccine</button>
    <button type="button" className="btn-1 info mr-2 mr-2">Cough</button>
    <button type="button" className="btn-1 info mr-2 mr-2">Lung</button>
    </div>
    <br/>
    <h3 >Other Searches:</h3>
    <div align="center">
    <button type="button" className="btn-1 info mr-2 mr-2">Bacteria</button>
    <button type="button" className="btn-1 info mr-2 mr-2">Fever</button>
    <button type="button" className="btn-1 info mr-2 mr-2">Depression</button>
    <button type="button" className="btn-1 info mr-2 mr-2">Bipolar</button>
    <button type="button" className="btn-1 info mr-2 mr-2">Antidote</button>
    <button type="button" className="btn-1 info mr-2 mr-2">STI</button>
    </div>
    <br/>
    <div align="center">
    <button type="button" className="btn-1 info mr-2 mr-2">Surgery</button>
    <button type="button" className="btn-1 info mr-2 mr-2">Recognition</button>
    <button type="button" className="btn-1 info mr-2 mr-2">Allergy</button>
    <button type="button" className="btn-1 info mr-2 mr-2">Toothache</button>
    <button type="button" className="btn-1 info mr-2 mr-2">Pregnancy</button>
    </div>
    <div></div>
    <br/>
    <button type="button" className="btn-1 info mr-2 mr-2">See how it works!</button>
  </div>

  <br/>
</div>
<br/>
</div>

  );
  
  }
  
  componentDidMount(){
      callParticleJS()
  }
  
  
  
  }


/*

Welcome Page Two. 

Introduces different words for testing.

Might have to navigate to another website.

Start.


*/




class WelcomePage_3 extends React.Component{



  render(){
  
  return (
    <div className="container-fluid" align = "center">
  <div className="aaaa">

    
    <br/>
    <h1 className="eighty-width" align = "center">Safinia is designed for convenience and simpleness, not obscurity.</h1>
    <div align="center">
    <h4>With no prior installation required, we strive to provide fast and comfortable experiences for those in need.</h4>
    <div className="row">
  <div className="col" align="center">
  <img id="anonymous" className="graphs" src="assets/anonymous.png" />
   </div>
  <div className="col" align="center"> 
  <br/><br/>
  
  <h3>Anonymous Messaging</h3>
  <h5 className="text-center eighty-width">Focusing on protecting patients' privacy, we have set up a anonymous messaging platform that allows patients to ask questions/access contents without worries about privacy.</h5>


  </div>  
    </div>


    <div className="row">
  <div className="col" align="center">


  <br/><br/>

<h3>Data Analytics and Visualization</h3>
  <h5 className="text-center eighty-width">We help doctors understand patients' concern much faster, with provided data visualization on searched words.</h5>
   </div>
  <div className="col" align="center"> 
    <img id="anonymous" className="graphs" src="assets/data-visualization.png" />
  
  </div>  
    </div>


    <div className="row">
  <div className="col" align="center"> </div>
  <div className="col" align="center"> </div>  
    </div>

  </div>

  <br/>
</div>
<br/>
</div>

  );
  
  }
  
  componentDidMount(){
      //callParticleJS()
  }
  
  
  
  }
  
  

/*
A Welcome NavBar.
DORE: NavBar Characteristics:
Divided with li.

  <li>
    <div className="navbar-header">
      <a className="navbar-brand" href="index.html">
        <img className ="img-responsive" src="assets/safinia_gradient.png" alt="Safinia"/>
      </a>
    </div>
    </li>

*/

class WelNavBar extends React.Component{
    render(){
    return  (
<nav className="navbar navbar-expand-sm bg-transparent navbar-custom">


<li>
<div className="navbar-header"><h5>
 Call: xxx-xxx-xxxx
    </h5></div>
</li>

<ul className="navbar-nav ml-auto"> 
    <li className="nav-item">
    <a href="./about/">
    About
        </a>
    </li>

    <li className="nav-item">
    <a href="./services/">
    Services
        </a>
    </li>
    
    <li className="nav-item">
        <a href="./contact_us/">
        Contact us
      </a>
  </li>
  <li className="nav-item">
    <a href="./register/">
    Register
        </a>
    </li>
  <li className="nav-item">
        <a href="./login/">
        Login
      </a>
  </li>
</ul>






</nav>
  );
  }}

  class MainPageNav extends React.Component{
    render(){
      return(
        <div>


  <div><WelcomePage_Tweaked/><br/><WelcomePage_Tweaked_Second/></div>

        </div>
      );

    }
  }





function status_decision(){
    if(currentStatus === 'WELCOME'){
        ReactDOM.render((<div><WelNavBar/><MainPageNav/></div>),document.getElementById('app_page'))
        ReactDOM.render((<div></div>),document.getElementById('client_message'))
    }
};


status_decision();
