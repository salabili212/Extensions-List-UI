
    let darkMood = true;
    document.querySelector('.btn-a').addEventListener('click',Makechange);        
    const containers=document.querySelectorAll('.container');
    document.querySelector('.active').addEventListener('click',showActive);
    document.querySelector('.all').addEventListener('click',showall);
    document.querySelector('.inactive').addEventListener('click',inActive);
    const buttons=document.querySelectorAll('.active,.inactive,.all');

    buttons.forEach(btn =>{
        btn.addEventListener('click',function (){
            buttons.forEach(b => b.style.background = '');
            this.style.background = 'red';
        });
    })


    function inActive(){
        containers.forEach(container =>{
            const checka=container.querySelector('.active-checkbox');
            if(checka&&!checka.checked){
                container.style.display = 'block';
            }else{
                container.style.display = 'none';
            }
        });
        makeAction('inactive');
    }
    





    function showall(){
        containers.forEach(container=>{
            container.style.display='block';
        });
        makeAction('all');
    }
    


    function showActive(){
        containers.forEach(container =>{
            const checkbox=container.querySelector('.active-checkbox');
            if(checkbox && checkbox.checked) {
                container.style.display='block';
            }else{
                container.style.display='none';
            }
        });
        makeAction('active');
    }
    
    

    document.querySelectorAll('.btn-remove').forEach(button =>{
        button.addEventListener('click', function () {
            this.closest('.container').remove();

        });
    });






    function Makechange(){
        
        if(darkMood){
            document.body.style.background ='#e9f3fb';
            darkMood=false;

            document.querySelectorAll('h1').forEach(h1=>{
                h1.style.color='black';
            });
            document.querySelectorAll('button').forEach(button=>{
                button.style.color ='black';
                button.style.background = 'white';
            });
            document.querySelectorAll('.container').forEach(container=>{
                container.style.background = 'white';
            });
            document.querySelector('header').style.background='white';

            document.querySelector('.sun-icon').setAttribute('src','icon-moon.svg');
            document.querySelector('.sun-icon').style.background='lightgray';
            

        }else{
            document.body.style.background = 'linear-gradient(to bottom, rgb(1, 1, 10),rgb(15, 15, 84))';
            document.querySelectorAll('h1').forEach(h1=>{
                h1.style.color='white';
            });
            document.querySelectorAll('button').forEach(button=>{
                button.style.color ='white';
                button.style.background = 'rgba(43, 45, 54, 0.664)';
            });
            document.querySelectorAll('.container').forEach(container=>{
                container.style.background = 'rgba(41, 41, 48, 0.839)';
            });
            document.querySelector('header').style.background='rgba(43, 45, 54, 0.664)';

            document.querySelector('.sun-icon').setAttribute('src','icon-sun.svg');
            document.querySelector('.sun-icon').style.background='rgb(57, 56, 79)';
            darkMood=true;
        }
    };