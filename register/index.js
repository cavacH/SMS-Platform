/*      <!--
    Source: https://medium.com/wdstack/bootstrap-4-form-examples-c18ac5e9cd30
    I do not own the code snippet.
*/

var username = ""

var currentStatus = "REGI"


class Register_Notice extends React.Component{
  render(){
    return (

<div className="container py-5">
    <div className="row">
        <div className="col-md-12">
            <h2 className="text-center text-white mb-4">Register Form</h2>
            <div className="row">
                <div className="col-md-6 mx-auto">


                    <div className="card rounded-0">
                        <div className="card-header">
                            <h3 className="mb-0">Register</h3>
                        </div>
                        <div className="card-body">
                            
                                <div className="form-group">
                                    <label htmlFor="uname1">Username</label>
                                    <input type="text" className="form-control form-control-lg rounded-0" name="uname1" id="uname1" required=""/>
                                    <div className="invalid-feedback">Oops, you missed this one.</div>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control form-control-lg rounded-0" id="pwd1" required="" autoComplete="new-password"/>
                                    <div className="invalid-feedback">Enter your password too!</div>
                                </div>
                                <div>
                                    <label className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input"/>
                                      <span className="custom-control-indicator"></span>
                                      
                                    </label>
                                </div>
                                <button onClick={()=>{register();}} className="btn btn-success btn-lg float-right" id="btnLogin">Register</button>
                        </div>

                    </div>


                </div>


            </div>
            </div>            </div>            </div>


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

function getRegisterData() {
  username = $("#usr").val()
  var json = {
      "username": $("#uname1").val(),// Get the username from the form
      "password": $("#pwd1").val()// Get the password from the form
  };
  return json;
}



function register(){
    
  $.ajax({
      type: "POST",
      url: "register_ajax.php",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(getRegisterData()),
      dataType: "json",
      success: function (data) {
          if(data.success){
            currentStatus == 'AAA'
            setTimeout(function(){ window.location.replace("../app/"); }, 3000);
          ReactDOM.render((<div className="alert alert-info"><strong>Registration Successful;</strong> Hello, {username}! Please wait and the browser's going to navigate you to the main page.</div>),document.getElementById('client_message'));
          ReactDOM.render((<div className="container py-5">
          <div className="row">
              <div className="col-md-12">
                  <h2 className="text-center text-white mb-4">Register Form</h2>
                  <div className="row">
                      <div className="col-md-6 mx-auto">
      
      
                          <div className="card rounded-0">
                              <div className="card-header">
                                  <h3 className="mb-0">Register</h3>
                              </div>
                              <div className="card-body">
                                  


                                      <div>
                                          <label className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"/>
                                            <span className="custom-control-indicator"></span>
                                            
                                          </label>
                                          <div >If it doesn't work, please click on this reference.       <a href="../app">Navigate to the next page</a> </div>
                                      </div>
                                      
                              </div>
      
                          </div>
      
      
                      </div>
      
      
                  </div>
                  </div>            </div>            </div>
      
      
      ),document.getElementById('app_page'));//Seal any attempt to attack
        }else{
              ReactDOM.render((<div className="alert alert-danger"><strong>Registration Error!</strong>&nbsp; Please enter valid username-password combinations!</div>),document.getElementById('client_message'));
          }
      },
      error: function (data) {
          ReactDOM.render((<div className="alert alert-danger"><strong>Registering Process Error!</strong>&nbsp; Please enter valid username-password combinations!</div>),document.getElementById('client_message'));
      }
  });
};

/**/
$("#btnLogin").click(function(event) {

    //Fetch form to apply custom Bootstrap validation
    var form = $("#formLogin")

    if (form[0].checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    
    form.addClass('was-validated');
  });



  function status_decision(){
    if(currentStatus == 'REGI'){
        ReactDOM.render((<div><WelNavBar/><Register_Notice/></div>),document.getElementById('app_page'))
        ReactDOM.render((<div></div>),document.getElementById('client_message'))
    }
};


status_decision();
