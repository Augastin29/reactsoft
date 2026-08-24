import React, { useState } from 'react'
import Child from '../component/child'
import { themecontext } from '../component/theme'
import axios from 'axios'
import CustomerTable from '../component/data_table'
 function Homepage (){
    const [theme, setTheme] = useState('light')
    const [search, setSearch] = useState('')
    function submit(e) {
        e.preventDefault()
        console.log('search===', search)
        axios.post('https://mindi-unevinced-lakenya.ngrok-free.dev/chat', { 'text': search })
            .then(res => {
                console.log('res===hdjksj', res.data)

            })
            .catch(err => {

            })


    }

    return (
        <div>
            <themecontext.Provider value={{ theme, setTheme }}>
                <h1>value2:{theme}</h1>

                <Child />
            </themecontext.Provider>

            <form onSubmit={submit}>
                <label htmlFor='search'>search</label>
                <input id='search' name='search' value={search} onChange={(e) => setSearch(e.target.value)} style={{ borderColor: "white" }} />
                <button type='submit'>submit</button>
            </form>
            <CustomerTable/>
        </div>
    )
}
export default Hompage;
