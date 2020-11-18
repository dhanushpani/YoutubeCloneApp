import React from 'react'
import {Grid} from "@material-ui/core";
import Youtube from "./api/youtube"
import {SearchBar , VideoDetails} from "./Components"
 

class App extends React.Component{
    handleSubmit = async (searchTerm) =>{
        const response = await Youtube.get('search',{
            params : {
                part : 'snippet',
                maxResults : 5,
                key : 'AIzaSyAd2QA3J88Sj-Mk7GzxnQn4KeLb95h_y7Q',
                q: searchTerm,
           }
        });
        console.log(response.data.items)
    }
    render(){
        
        return(
        <Grid justify="center" container spacing={10}>
            <Grid item xs={12}>
                <Grid container spacing={10}> 
                    <Grid item xs={12}>
                        <SearchBar onFormSubmit ={this.handleSubmit} />
                    </Grid>
                    <Grid item xs={8}>
                       <VideoDetails />
                    </Grid>
                    <Grid item cs={4}>
                        {/* {videos} */}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        )
    }
}
export default App