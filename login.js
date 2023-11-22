function checking()
{
    let x=document.getElementById('id');
    let y=document.getElementById('password');
    if(x.value=='20CSE54' && y.value=='Utkarsh')
    {
        location.href="index.html";
    }
    else if(x.value=='20CSE60' && y.value=='Yash')
    {
        location.href="index.html";
    }
    else if(x.value=='20CSE31' && y.value=='Mayank')
    {
        location.href="index.html";
    }
    else
    {
        alert("Wrong User_id or password");
    }

}

function checking1()
{
    let x=document.getElementById('text');
    console.log('your order has been placed');
}