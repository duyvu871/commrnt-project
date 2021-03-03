import users from './users'
import comments from './comments';
const myAccount = {
    id:0,
    name:'myZOO',
    comments:'',
    login_information:{
        login_name:'myZOO',
        login_pass:'adc1234@',
        login_email:'zoocp123@gmail.com',
    },
    avatar_url:'',
}
function comment(option) {
    function handleComment(newComments) {
        let content = document.querySelector('#writeComment').value;
        let user = document.querySelector('#emailPost').value;
        
        comments.concat([{
            id:comments.length,
            id_user:users.find(value => value.login_information.login_email === user).id,
            content,
            post_to:'Duy'
        }]);
        
    };
    function postToSever(newComment) {
            console.log(newComment);
    }
    setEvent('.user')
    setEvent('.post',true,'click',(e)=>{
        handleComment();
        postToSever(comments[comments.length-1]);
    });
    
}
