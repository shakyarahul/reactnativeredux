import { FETCH_DATA,REMOVE_DATA, LOGIN_DATA, FETCH_DATA_FROM_KEY,SIGNUP_DATA, LOADING_DATA} from '../actions/types'
//import { push } from 'connected-react-router'
/*export function fetchPosts(){
    return function(dispatch){*/
export const fetchDatas = () => async dispatch =>{
        dispatch({
            type:LOADING_DATA,
            payload: {
                loading:true
            }
        })
        await fetch('http://earnupv1.test/api/auth/user',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+localStorage.getItem('accessKey'),
                'Accept':'application/json'
            }
        })
        .then(res => res.json())
        .then(data =>  
            dispatch({
                type: FETCH_DATA,
                payload: {
                    data: data.data && data.data,
                    message:data.message && data.message,
                    links:data.links && data.links,
                    meta:data.meta && data.meta,                    
                }
            })
        )
            //return 0;
}
export const fetchPage = (s,page,accessKey) => dispatch =>{
    dispatch({
        type:LOADING_DATA,
        payload: {
            loading:true
        }
    })
    var url=(s === null || s === "")?'http://earnupv1.test/api/auth/user?page='+page:'http://earnupv1.test/api/auth/users/'+s+'?page='+page
    //console.log('http://earnupv1.test/api/auth/users/'+s+'?page='+page)
    fetch(url,{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer '+localStorage.getItem('accessKey'),
            'Accept':'application/json'
        }
    })
    .then(res => res.json())
    .then(data =>  
        dispatch({
            type: FETCH_DATA,
            payload: {
                data: data.data && data.data,
                message:data.message && data.message,
                links:data.links && data.links,
                meta:data.meta && data.meta,
            }
        }) 
    )
        //return 0;
}
export const searchDatas = (s, accessKey) => dispatch =>{
    dispatch({
        type:LOADING_DATA,
        payload: {
            loading:true
        }
    })
    fetch('http://earnupv1.test/api/auth/users/'+s,{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer '+localStorage.getItem('accessKey'),
            'Accept':'application/json'
        }
    })
    .then(res => res.json())
    .then(data =>  
        dispatch({
            type: FETCH_DATA,
            payload: {
                data: data.data && data.data,
                message:data.message && data.message,
                links:data.links && data.links,
                meta:data.meta && data.meta,
            }
        })
        )
        //return 0;
}
export const fetchDataFromKey = () => dispatch =>{
    dispatch({
        type:FETCH_DATA_FROM_KEY
    })
}
export const loginDatas = (datas) =>async dispatch =>{
    dispatch({
        type:LOADING_DATA,
        payload: {
            loading:true
        }
    })
    await fetch('http://earnupv1.test/api/auth/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body:JSON.stringify(datas)
    })
    .then(res => res.json())
    .then(data =>  
        dispatch({
            type: LOGIN_DATA,
            payload: {
                data:data.access_token && data.access_token,
                message:data.message && data.message
            }
        }),
        dispatch(push('/user'))
    )
    
    //return 0;
}
export const signupDatas = (datas) => async dispatch =>{
    dispatch({
        type:LOADING_DATA,
        payload: {
            loading:true
        }
    })
    await fetch('http://earnupv1.test/api/auth/user',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body:JSON.stringify(datas)
    })
    .then(res => res.json())
    .then(data =>  
        dispatch({
            type: SIGNUP_DATA,
            payload: {
                user:data.data && data.data,
                message:data.message && data.message,
            }
        })
    )
    
    //return 0;
}
export const removedata = (id) => async dispatch =>{
    dispatch({
        type:LOADING_DATA,
        payload: {
            loading:true
        }
    })
    await fetch('http://earnupv1.test/api/auth/user/'+id,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer '+localStorage.getItem('accessKey'),
            'Accept':'application/json'
        },
        body:JSON.stringify({status:"Disabled"})
    })  
    .then(async res => {res.json()
        dispatch(fetchDatas())
    } )
        //return 0;
}
export const viewdata = (id) => dispatch =>{
    dispatch({
        type:LOADING_DATA,
        payload: {
            loading:true
        }
    })
    fetch('http://earnupv1.test/api/auth/user/'+id,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer '+localStorage.getItem('accessKey'),
            'Accept':'application/json'
        },
        body:JSON.stringify({status:"Disabled"})
    })
    .then(res => res.json())
    .then(data =>  
            console.log(data)
        )
        //return 0;
}
export const updatedata = (id) => dispatch =>{
    dispatch({
        type:LOADING_DATA,
        payload: {
            loading:true
        }
    })
    fetch('http://earnupv1.test/api/auth/user/'+id,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer '+localStorage.getItem('accessKey'),
            'Accept':'application/json'
        },
        body:JSON.stringify({status:"Disabled"})
    })
    .then(res => res.json())
    .then(data =>  
            data.data && alert("disabled")

        )
        //return 0;
}