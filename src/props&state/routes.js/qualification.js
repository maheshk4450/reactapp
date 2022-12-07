import { useEffect } from "react";


const Qualifi = () => {

    useEffect(() => {
        //get method//
        fetch('http://localhost:3000/posts')
            .then((response) => response.json())
            .then((json) => console.log(json));
        ///get///


        //psot//
        fetch('http://localhost:3000/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: '65656656565',
                body: 'm565565shar',
                userId: 656,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
        ///post//

        //put///

        fetch('http://localhost:3000/posts/15', {
            method: 'PUT',
            body: JSON.stringify({
                id: 56565,
                title: '555555555555555555555',
                body: 'sdsdsdsd',
                userId: 9897,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
        ///put///
        

        //delete//
        fetch('http://localhost:3000/posts/10', {
  method: 'DELETE',
});


    })



    return (
        <main>
            <h1>
                hello qualification
            </h1>
        </main>
    )
}
export default Qualifi;