import { useEffect, useState} from "react";

function LoginForm(){

    const [detail, setDetail] = useState({email: "", password: ""});
    // const [err, setErr] = useState("");
    
    function handleSubmit(e){
        e.preventDefault();
        console.log(detail)
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