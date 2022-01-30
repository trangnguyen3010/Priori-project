import { useEffect, useState} from "react";

function RegistrationForm(){


    const [detail, setDetail] = useState({email: "", password: "", passwordConfirm: "",
                                          name: "", studentID: "", school: ""});
    const [err, setErr] = useState(null)

    function sendRegisterData(obj){
        var status;
        fetch("/register", {
          method: "POST",
          headers:{
            "Accept": "application/json",
            "Content-Type": "application/json" 
          },
          body: JSON.stringify(obj)
        })
        .then(res => {
            status = res.status;
            return res.json()
        })
        .then((data) => {
            if(status !== 200){
                console.log("err occured");
                setErr(data);
            }
            else{
                // redirect to successful page
                console.log("Account created!");
                window.location.replace("/")
            }
        })
        
    }

    function clearErr(){
        setErr(null)
    }


    function handleSubmit(e){
        e.preventDefault();
        sendRegisterData(detail);

    }



    return(
        <div className="container register">
            <h1>Register</h1>

            {err && err.map(errMsg => <div key={errMsg.msg}>{errMsg.msg}</div>)} 
            
            <form onSubmit={handleSubmit}>
                <div className = "form-inner">
                    {/* Name */}
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder="First Last: John Doe"
                        onChange={(e) => setDetail({...detail, name: e.target.value})}></input>
                    </div>
                    {/* School */}
                    <div className="form-group">
                        <label htmlFor="school">School</label>
                        <input type="text" name="school"
                        onChange={(e) => setDetail({...detail, school: e.target.value})}></input>
                    </div>
                    {/* Student ID */}
                    <div className="form-group">
                        <label htmlFor="stid">Student ID</label>
                        <input type="text" name="stid"
                        onChange={(e) => setDetail({...detail, studentID: e.target.value})}></input>
                    </div>
                    {/* Email */}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="johndoe@email.com"
                        onChange={(e) => setDetail({...detail, email: e.target.value})}></input>
                    </div>
                    {/* Password */}
                    <div className="form-group">
                        <label htmlFor="pass">Password</label>
                        <input type="password" name="pass"
                        onChange={(e) => setDetail({...detail, password: e.target.value})}></input>
                    </div>
                    {/* Password confirmation */}
                    <div className="form-group">
                        <label htmlFor="passCon">Confirm password</label>
                        <input type="password" name="passCon"
                        onChange={(e) => setDetail({...detail, passwordConfirm: e.target.value})}></input>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
                <button type="button" className="btn btn-danger" onClick={clearErr}>clearErrors</button>
            </form>
        </div>

    )

}

export default RegistrationForm;