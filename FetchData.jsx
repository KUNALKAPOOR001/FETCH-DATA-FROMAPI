import userContent from "./userData.json"
import design from "./style.module.css"
const FetchData=()=>{

    return(
        <div id={design.nav}>
            {userContent.map((ele)=>{
              
              let sendRequest=()=>{
                alert(`friend request sent to ${ele.login}`)
                let x = document.getElementById(ele.id)
                 x.innerText ="cancel Request"// if else pic

                // console.log(e)
                // e.target.innerText ="cancel"
              }


                return(
                    <div> 
                        <img src={ele.avatar_url}  />
                        
                        <h1>{ele.login}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rerum facilis omnis architecto beatae hic praesentium eum dolorum nemo dolores exercitationem, in accusamus esse, ipsa doloribus placeat vel, incidunt qui!</p>
                        <button onClick={sendRequest} id ={ele.id}>ADD</button>
                        <button>Message</button>
                        {/* <h1>Id:{ele.id}</h1>
                    
                        <h1>Login:{ele.login}</h1> */}

                    </div>

                )
            })}

          





         {/* <table >
            <tr>
            <td>Id </td>
            <td>Node id </td>
            <td>Login </td>
            <td>Picture</td>
            </tr>
           {userContent.map((ele)=>{
                return (
                    <tr>
                        <td>{ele.id}</td>
                        <td>{ele.node_id}</td>
                        <td>{ele.login}</td>
                        <td> <img  height="100px" width="100px" src={ele.avatar_url} /></td>
                    </tr>
                )

           })}

         </table> */}

            {/* <h1>fetch data</h1> */}
            {/* {userContent.map((element)=>{
                return(
                    <div>
                        <h1>Id:{element.id}</h1>
                        <h1>Login:{element.login}</h1>
                       <img src={element.avatar_url} />
                        
                         </div>
                )
            })}  */}

        </div>
    )
}
export default FetchData
