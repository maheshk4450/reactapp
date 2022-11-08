// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="sign-in-container">
    <div class="sign-in-card">
        <div class="sign-in-logo">
            <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="logo"/>
        </div>
        <div class="sign-card-header">
            <h1> sign in </h1>
            <p>already a member of apple</p>

        </div>
        <form class="sign-in-card-form">

            <div class="form-item">
                <span class="material-symbols-outlined">
                    person
                </span>

                <input type="text" class="input" placeholder="mail" required autofocus/>
            </div>

            <div class="form-item">
                <span class="material-symbols-outlined">
                    mail
                </span> <input type="text" class="input" placeholder="mail" required autofocus/>
            </div>

            <div class="form-item">
                <span class="material-symbols-outlined">
                    lock
                </span> <input type="text" class="input" placeholder="enter password" required/>
            </div>

            <div class="form-itemcheck">
                <input type="checkbox" class="checkbox"/>
                <label>remenber me</label>
            </div>
            <div class="sign-in-forgotpassword">
                <a href="#">forgot password</a>
            </div>

            <button class="sign-in-btn">sign in</button>

            <div><a href="#">create new account?</a></div>


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


    </div>



</div>
    
  );
}

export default App;
