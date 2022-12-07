
import { NavLink, useHistory } from "react-router-dom";

const Skill = () => {
    const goto = useHistory()

    //   const  historychange=()=>{

    //     goto.push('/x/10')
    //   }


    return (
        <main>
            <h1>hello skills</h1>
            <button onClick={() => goto.push("/x/10")}>goto</button>
            <ul>
                <li><NavLink to='/m'>home1</NavLink></li>
                <li>
                    <NavLink to="/m"
                        style={isActive => ({
                            color: isActive ? "yellow" : "red"
                        })}
                    >
                        navlink
                    </NavLink></li>
                <li><NavLink
                    to="/m"
                    Style={{
                        fontweight: 'lighter',
                        color: "red"
                    }}
                >
                    FAQs
                </NavLink></li>


            </ul>

        </main>
    )
}
export default Skill;