$(document).ready(()=>{
    
    $.ajax({
        url:'http://localhost:8080/users',
        type: 'GET',
        dataType: 'json',
        success: function (res){
            let data=''
            res.forEach(element => {
                data+=` 
                <tr>
                    <td>${element.id}</td>
                    <td>${element.username}</td>
                    <td>${element.email}</td>

                </tr>
                ` 
                $('#tbody').html(data);
                
                    
                
            });
        }  
    })
})