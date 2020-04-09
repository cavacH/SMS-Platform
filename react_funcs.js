let currentStatus = "WELCOME";

document.title = 'Health Literacy Project|Welcome!';

let username = ""


// Particle.js


function callParticleJS(){

particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
}






class WelcomePage extends React.Component{



render(){

return (
<div>
    <div id="particles-js">
        <div className="welcome" >
<div className="row"> 
           <div className="col-lg-4 col-md-4 col-sm-12" >
<br/>
<br/>
<br/>
  <div >

<h1>WashU Health Literacy Project</h1>
  <p style={{fontSize: "2em"}} >Answers your healthcare concerns in no time!</p>
<button type="button" class="btn btn-primary">Motivations</button>
<button type="button" class="btn btn-primary">GitHub</button>
</div>
</div> 
 <div className="col-lg-8 col-md-8 col-sm-12">
<div className="container">
<br/><br/>
  <div className="jumbotron">
  <h1></h1>
  <h2>An SMS platform with data visualization and privacy</h2>
  <hr className="my-4"/>
  <p>Embedded with NLP, we strive to simplify health education terminology in an anonymous environment; we hope to provide clinicians with optimal patient-provider interactions.</p>
  <p>
    <div className="btn-toolbar">
    <a className="btn btn-primary btn-lg" href="#"style={{marginRight: '15px'}} role="button">Learn more</a>
    <a className="btn btn-primary btn-lg" href="#" role="button">Login</a>
    </div>
  </p>
</div>
</div>
</div>
      
            </div>
        </div>


    </div>
</div>
);

}

componentDidMount(){
    callParticleJS()
}



}

/*
A Welcome NavBar.

*/

class WelNavBar extends React.Component{
    render(){
    return  (
<nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">DSC's Health Literacy Project Ver 0.1.0</a>
    </div>
    <ul className="nav navbar-nav">
      <li>
    <div className="btn-group">
    <a href="https://developers.google.com/community/dsc">
        <button type="btn btn-info navbar-btn" id = "DASHBOARD" className="btn btn-primary" href="https://developers.google.com/community/dsc">Learn More about DSC</button>
        </a>
        <a href="https://www.linkedin.com/company/dsc-washu">
        <button type="btn btn-info navbar-btn" id = "LOGOUT" className="btn btn-primary" href="https://www.linkedin.com/company/dsc-washu"><span className="glyphicon glyphicon-log-out"></span>Learn More about DSC @ WashU</button>
    </a>
    </div>
    </li>
    </ul>
  </div>
</nav>
  );
  }}





function status_decision(){
    if(currentStatus === 'WELCOME'){
        ReactDOM.render((<div><WelNavBar/><WelcomePage/></div>),document.getElementById('app_page'))
        ReactDOM.render((<div></div>),document.getElementById('client_message'))
    }
};


status_decision();
