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
    <h1 className="white-h1">Try Our Anonymous SMS Platform!</h1>
    <div align="center">
    <h3 className="white-h1">COVID-19 and Related Searches:</h3>
    <button type="button" className="btn-1 info mr-2 mr-2">Virus</button>
    <button type="button" className="btn-1 info mr-2 mr-2">Coronavirus</button>
    <button type="button" className="btn-1 info mr-2 mr-2">Vaccine</button>
    <button type="button" className="btn-1 info mr-2 mr-2">Cough</button>
    <button type="button" className="btn-1 info mr-2 mr-2">Lung</button>
    </div>
    <br/>
    <h3 className="white-h1">Other Searches:</h3>
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
*/

class WelNavBar extends React.Component{
    render(){
    return  (
<nav className="navbar bg-light">
  <div className="container-fluid">

  <li>
    <div className="navbar-header">
      <a className="navbar-brand" href="index.html">
        <img className ="img-responsive" src="assets/safinia_gradient.png" alt="Safinia"/>
      </a>
    </div>
    </li>


    <li className="nav-item">
    <a href="https://developers.google.com/community/dsc">
    Learn More about DSC
        </a>
        </li>
        <li className="nav-item">
        <a href="https://5eab2d671027897e5485f8ab--silly-pare-495ace.netlify.app/">
        Learn More about DSC @ WashU
      </a>
      </li>

      <li>
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
  <form className="form-inline" action="">
    <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
    <button className="btn btn-success" type="submit">Search</button>
  </form>
</nav>
</li>




  </div>
</nav>
  );
  }}

  class MainPageNav extends React.Component{
    render(){
      return(
        <div>


  <div><WelcomePage_1/><WelcomePage_2/><WelcomePage_3/></div>

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
