import { useState } from 'react';

<div id="app"></div>
        const app = document.getElementById('app');

        function Header({ title }){
            return <h1>{title ? title : 'Default Title'}</h1>;
        }

        export default function HomePage(){
        const [likes, setLikes] = useState(0);
        const names = ['first', 'second', 'third'];
            function handleClick(){
                setLikes(likes+1);
            }

            return (
                <div>
                    <Header title="sea-com" />
                    <ul>
                        {names.map((name) =>(
                        <li key={name}>{name}</li>
                        ))}
                    </ul>

                    <button onClick={handleClick}>Like({likes})</button>
                </div>
        );
        }
        ReactDOM.render(
<HomePage />, app);
