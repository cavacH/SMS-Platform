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


class WelcomePage extends React.Component{



render(){

return (
  <div>
  <div className="container-1 take-all-space-you-can">
  <img id="background-main" src="assets/doctor.jpg" />
  <div className="content-1">
    <h1>Safinia</h1>
    <p>A SMS platform with data visualization and privacy</p>
  </div>
</div>
<div></div>
<div className="row">
  <div className="col" align="center">
  <img id="search-page" className="icons" src="assets/magnifier-icon.png" />
  <div></div>
  TextA1
  </div>

  <div className="col" align="center">
  <img id="graph-page" className="icons" src="assets/graph-icon.png" />
  <div></div>
  TextA2
  </div>
  
  <div className="col" align="center">
      <img id="doctor-page" className="icons" src="assets/doctor-icon.png" />
      <div></div>
      TextA3
  </div>
  <div className="col" align="center">
  <img id="patient-page" className="icons" src="assets/patient-icon.png" />
  <div></div>
  TextA4
  </div>
</div>

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

    <div className="navbar-header">
      <a className="navbar-brand" href="index.html">
        <img className ="img-responsive" src="assets/safinia_gradient.png" alt="Safinia"/>
      </a>
    </div>

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


    <nav className="navbar navbar-expand-sm bg-light navbar-light">
  <form className="form-inline" action="">
    <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
    <button className="btn btn-success" type="submit">Search</button>
  </form>
</nav>



  </div>
</nav>
  );
  }}

  class MainPageNav extends React.Component{
    render(){
      return(
        <div>
  <ul className="nav nav-tabs nav-justified">
    
  <li className="nav-item   " >
    <a className="nav-link active " data-toggle="tab" href="#home">Main Page</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" data-toggle="tab" href="#patients">For patients</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" data-toggle="tab" href="#care_and_services">Find Care and Services</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" data-toggle="tab" href="#news">News</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" data-toggle="tab" href="#contact_us">Contact us</a>
  </li>

  </ul>

<div className="tab-content">
  <div className="tab-pane container active w-100 p-3" id="home" ><WelcomePage/></div>
  <div className="tab-pane container fade" id="patients">...</div>
  <div className="tab-pane container fade" id="care_and_services">...</div>
  <div className="tab-pane container fade" id="news">...</div>
  <div className="tab-pane container fade" id="contact_us">...</div>
</div>
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
