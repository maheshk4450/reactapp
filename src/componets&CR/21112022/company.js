import react from "react"
import { useState } from "react"

const Company = (props) => {
    const [comapnyname, setcompany] = useState(false)

    const [status, setStatus] = useState("")

    const upstatus = (e) => {
        setStatus(e.target.value)


    }

    return (
        <main>

            <div>
                <form>
                    <b> companydetails:-</b>
                    <input type="checkbox"
                        aria-label="checkbox"
                        name="checkbox"


                        onClick={() => setcompany(!comapnyname)}
                    />

                    {comapnyname &&
                        <div> <input type="text"
                            name="company"
                            class="form-control"
                            placeholder="company"
                            label="company"
                            onChange={(i) => setcompany(i.target.value)}


                        /><br></br>
                            <input type="text"
                                class="form-control"

                                name="address"
                                placeholder="address"
                                label="address"
                                onChange={(i) => setcompany(i.target.value)}
                            /><br></br>
                            <input type="text"
                                class="form-control"

                                name="totalemp"
                                placeholder="total empls"
                                aria-label="totalemp"
                                onChange={(i) => setcompany(i.target.value)}
                            /><br></br>
                            <b> active:</b> <input type="radio"value={setStatus}
                                name="status" onClick={(e) => upstatus(e)}
                            />
                            <b>inactive:</b><input type="radio"
                                name="status" value={setStatus}
                                onClick={(e) => upstatus(e)} /><br></br>
                            <input type="text" class="form-control"
                                value={status} name="result"
                                onClick={(e) => upstatus(e)}
                                disabled />
                        </div>}
                </form>



            </div>






        </main>
    )
}
export default Company;