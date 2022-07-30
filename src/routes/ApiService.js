export default class ApiService{
    static LoginUser(body){
        return fetch("https://pisurv.herokuapp.com/auth",{
            method:'POST',
            headers: {
                'Content-Type':"application/json"
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static LogoutUser(){
        return fetch("https://pisurv.herokuapp.com/company/logout",{
            method:'POST',
            headers: {
                'Content-Type':"application/json"
            },
        }).then(resp => resp.json())
    }

    static RegisterUser(body){
        return fetch("https://pisurv.herokuapp.com/company/register/",{
            method:'POST',
            mode:'cors',
            headers: {
                'Content-Type':"application/json"
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static PostSurveyData(body,token){
        return fetch("https://pisurv.herokuapp.com/company/available-survey/",{
            method:'POST',
            headers: {
                'Content-Type':"application/json",
                "Authorization":`Token ${token}`
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static FetchSurveyData(token){
        return fetch("https://pisurv.herokuapp.com/company/company-list/",{
            method:'GET',
            headers: {
                'Content-Type':"application/json",
                "Authorization":`Token ${token}`
            },
            
        }).then(resp => resp.json())
    }
    static FetchHistoryData(token){
        return fetch("https://pisurv.herokuapp.com/company/history/",{
            method:'GET',
            headers: {
                'Content-Type':"application/json",
                "Authorization":`Token ${token}`
            },
            
        }).then(resp => resp.json())
    }

    static FetchAllSurvey(token){
        return fetch("https://pisurv.herokuapp.com/company/available-survey/",{
            method:'GET',
            headers: {
                'Content-Type':"application/json",
                "Authorization":`Token ${token}`
            },
            
        }).then(resp => resp.json())
    }
    static SubmitAnswer(body,token,id){
        return fetch(`https://pisurv.herokuapp.com/company/available-survey/${id}/submit_answers/`,{
            method:'POST',
            headers: {
                'Content-Type':"application/json",
                "Authorization":`Token ${token}`
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json()).then(resp=>console.log(body))
    }

}
