document.getElementById('delete-btn').addEventListener('click', function(){
    const deleteAccount = document.getElementById('delete-account');
    deleteAccount.style.display = 'none';
})
//Key Up
document.getElementById('text-field').addEventListener('keyup', function(event){
     if(event.target.value === 'Delete'){
       document.getElementById('delete-btn').removeAttribute('disabled');
     }
     else{
        document.getElementById('delete-btn').setAttribute('disabled', true);
     } 
})