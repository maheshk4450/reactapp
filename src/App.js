
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


// import MyForms from './componets&CR/19112022/Crenderforms'
// import OUtput from './componets&CR/22112022/Coutput'
// import MainForm from './componets&CR/21112022/formCR';
// import OUtput from './componets&CR//22112022/Coutput'
// import State1 from './props&state/states'
// import Home from './props&state/routes.js/home';
// import Table from './componets&CR/21112022/table';
import ApiCrud from './crudapi.js/apiparent'



function App() {
    // let a = 20;
    // let b = 30;

    // const loggedIn = () => {
    //     return (
    //         <h1>
    //             hello
    //         </h1>
    //     )
    // }


    return (


        <BrowserRouter>
            <div class="sign-in-container">

                {/* <ul>
                    <li><Link to="/m">home</Link></li>
                    <li><Link to="/z/:43546">about</Link></li>
                    <li><Link to="/add/:addition">addition</Link></li>
                    <li><Link to='/withR/:id'>WR</Link></li>
                    <li><Link to='/x/10'>HOME</Link></li>


                </ul> */}

                <ul>
                    <li><Link to='/parent'>apicrud</Link></li>
                </ul>




                <Switch>

                    <Route path='/parent'> <ApiCrud/> </Route>





                    {/* <Route path='/m'  >
                        <Table />

                    </Route>
                    <Route path="/z/:display">
                        <MyForms />
                    </Route>
                    <Route path="/add/:addition">
                        <OUtput />
                    </Route>
                    <Route path='/withR/:id'>
                        <State1 />
                    </Route>
                    <Route path='/x/10'>
                        <Home />
                    </Route> */}


                </Switch>





                {/* <OUtput/> */}



                {/* <MyForms/> */}


                {/* <State1/>

            <Objects />
    <Addition  A={a} B={b}/>
   <Subraction A={a} B={b}/>
    <Multiplication A={a} B={b}/>
    <Division A={a} B={b}/> */}

                {/* <div class="sign-in-card">
                    <div class="sign-in-logo">
                        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="logo" />
                    </div>
                    <div class="sign-card-header">
                        <h1> sign in </h1>
                        <p>already a member of apple</p>

                    </div>
                    <form class="sign-in-card-form">

                        <div class="form-item">

                            <label class="me-5"><h4>user</h4>  </label>

                            <input type="text" class="form-control" placeholder="username" required autofocus />
                        </div>

                        <div class="form-item">
                            <span class="material-symbols-outlined ">
                                <h4>email</h4>
                            </span> <input type="text" class="form-control ml-3" placeholder="email" required autofocus />
                        </div>

                        <div class="form-item">
                            <span class="material-symbols-outlined">
                                <h4>password</h4>
                            </span> <input type="text" class="form-control ml-5" placeholder="enter password" required />
                        </div>

                        <div class="form-itemcheck">
                            <input type="checkbox" class="checkbox" />
                            <label>Remenber me!</label>
                        </div>

                        <button class="btn btn-dark" >sign in</button>
                        <div class="sign-in-forgotpassword">
                            <a href="https://support.google.com/mail/answer/41078?hl=en&co=GENIE.Platform%3DDesktop">Forgot password</a>
                        </div>


                        <div><a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjQ5p7L3577AhUTnUsFHcSnCqAYABAAGgJzZg&ohost=www.google.com&cid=CAESauD2j4_Hkh1iO4uOVULvudICcdOYqj6rfdvbHyYU5Dmw-0UZbx4HlQCDRaSLLlQYcTovkdBskM6teNS5qXdqoazErasptOLzy0VBa9MvmTj9jCduPao62yibWBMa0gMV5CFX7UyawcZit58&sig=AOD64_1yZeyXtm7_13FTz-l6jbG1faUc9w&q&adurl&ved=2ahUKEwifqpjL3577AhWL9zgGHa0vANsQ0Qx6BAgJEAE">create new account?</a></div>
                    </form>
                    <div class="sign-in-footer">
                        <div class="other-platforms">
                            <a href="https://www.youtube.com/"><svg xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-brand-facebook" width="44" height="44"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
                                stroke-linejoin="round"  >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                            </svg></a>
                            <a href="https://in.linkedin.com/?src=go-pa&trk=sem-ga_campid=14650114788_asid=127961666300_crid=601257986824_kw=linkedin%20login_d=c_tid=kwd-12704335873_n=g_mt=e_geo=9062129_slid=&mcid=6844056167778418689&cid=&gclid=Cj0KCQiAmaibBhCAARIsAKUlaKSJXSkIZlA86X1_ajPdpMjqEudCEqAGwpUqut1lHY74NxhXfX8oa2IaAhnCEALw_wcB&gclsrc=aw.ds"><svg xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-brand-google" width="44" height="44" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" />
                            </svg></a>
                            <a href="https://myaccount.google.com/"><svg xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <rect x="4" y="4" width="16" height="16" rx="4" />
                                <circle cx="12" cy="12" r="3" />
                                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                            </svg></a>
                        </div>
                    </div>
                </div> */}

            </div>

        </BrowserRouter>

    );
}

export default App;
