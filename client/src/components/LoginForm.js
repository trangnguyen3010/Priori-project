import { useEffect, useState} from "react";

function LoginForm({auth}){

    const [detail, setDetail] = useState({email: "", password: ""});
    const [err, setErr] = useState(null);
    
    function handleSubmit(e){
        e.preventDefault();
        var status;

        fetch("/login", {
          method: "POST",
          headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({email: detail.email, password: detail.password})
        })
        .then(res => {
            // console.log(res)
            status = res.status;
            return res.json();
        })
        .then(data =>{
            if(status !== 200){
                console.log("err occured");
                console.log(data);
                setErr(data);
            }
            else{
                /////// TEST TOKEN //////////
                fetch("/login/test", {
                    headers: {
                        "authorization": `Bearer ${data}`
                    }
                })
                .then(response => response.json())
                // .then(data => console.log("Test message", data));
                localStorage.setItem("token", data); // STORAGE HAS BEEN SET, NEED TO RETRIEVE UPON LOAD
                auth(data);

                /////// TEST TOKEN ////////////

            }
        })
    }


    useEffect(() => {
        console.log("Rerendered Page");
        
    }, [])

    

    return(
        <div className="container login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className = "form-inner">
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
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>

    )

}

export default LoginForm;