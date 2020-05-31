/*      <!--
    Source: https://medium.com/wdstack/bootstrap-4-form-examples-c18ac5e9cd30
    I do not own the code snippet.
*/

var username = ""

var currentStatus = "LOGIN"


class Login_Notice extends React.Component{
  render(){
//https://startbootstrap.com/snippets/login/
    return (

        <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-img-left d-none d-md-flex">
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Login</h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <input type="text" id="inputUserame" className="form-control" placeholder="Username" required autofocus/>
                    <label for="inputUserame">Username</label>
                  </div>
    
                  <hr/>
    
                  <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                    <label for="inputPassword">Password</label>
                  </div>
                  

    
                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Login</button>

                  <hr className="my-4"/>
                
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}






class WelNavBar extends React.Component{
  render(){
  return  (
<nav className="navbar bg-light">
<div className="container-fluid">

<li>
  <div className="navbar-header">
    <a className="navbar-brand" href="../index.html">
      <img className ="img-responsive" src="../assets/safinia_gradient.png" alt="Safinia"/>
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







/**/




  function status_decision(){
    if(currentStatus == 'LOGIN'){
        ReactDOM.render((<div><WelNavBar/><Login_Notice/></div>),document.getElementById('app_page'))
        ReactDOM.render((<div></div>),document.getElementById('client_message'))
    }
};


status_decision();
