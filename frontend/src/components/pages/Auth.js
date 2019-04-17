import React,{Component} from 'react';

class AuthPage extends Component{

    state={
        isLogin:true
    }

    constructor(props)
    {
        super(props);
        this.emailEl=React.createRef();
        this.passwordEl=React.createRef();
    }
    switchModeHandler=()=>{
        this.setState(prevState=>{
            return {isLogin:!prevState.isLogin}
        })
    }
    submitHandler=(event)=>{
        event.preventDefault();
        const email=this.emailEl.current.value;
        const password=this.passwordEl.current.value;

        if(email.trim().length===0 || password.trim().length===0 )
        {
            return;
        }
        let requestBody={
            query:`
            query {
                login(email:"${email}",password:"${password}"){userId,token,tokenExpiration}
            }`
        };
        if(!this.state.isLogin)
        {
         requestBody={
            query:`
            mutation {
                createUser(userInput:{email:"${email}",password:"${password}"}){_id,email,password}
            }`
        };
    }
        fetch('http://localhost:8000/graphql',{
            method:'POST',
            body:JSON.stringify(requestBody),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>{
            console.log(res);
            if(res.status!==200 && res.status!==201)
                {
                    throw new Error('!Failed');
                }
            return res.json();
        }).then(resData=>{
            console.log(resData);
        }).catch(err=>{
            throw err;
        });
    };
    render(){
        return (
            <form onSubmit={this.submitHandler} className="container">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email" ref={this.emailEl} aria-describedby="emailHelp" placeholder="Enter email"/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="password" ref={this.passwordEl}  placeholder="Password"/>
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button> 
            <button type="button"  onClick={this.switchModeHandler} className="btn btn-primary">Switch to {this.state.isLogin?'SignUp':'Login'}</button>

          </form>
            )
    }
}
export default AuthPage;
