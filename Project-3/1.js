let inp=document.getElementById("inp");
let inp1=document.getElementById("inp1");
let p=document.querySelector(".para")

function add() 
    {
        if (inp.value === "" || inp1.value === "") 
            alert("Please enter values");    
        else 
            p.innerHTML = Number(inp.value) + Number(inp1.value);
    }

    function sub() 
    {
        if (inp.value === "" || inp1.value === "") 
            alert("Please enter values");
        else 
            p.innerHTML = Number(inp.value) - Number(inp1.value);
    }

    function mul() 
    {
        if (inp.value === "" || inp1.value === "") 
            alert("Please enter values");
        else 
            p.innerHTML = Number(inp.value) * Number(inp1.value);
    }

    function div() 
    {
        if (inp.value === "" || inp1.value === "") 
            alert("Please enter values");
        else 
            p.innerHTML = Number(inp.value) / Number(inp1.value);
    }

    let arr=["red","green","Blue","Pink","yellow","grey","golden"]
    let cnt=0
    function change() 
    {
        let bg=document.getElementById("bg")
        bg.style.backgroundColor=arr[cnt];
        cnt++;
        if(cnt>=arr.length)
        {
            cnt=0;
        }
    }
    
    let inp2=document.getElementById("inp2");
    let inp3=document.getElementById("inp3");
    let inp4=document.getElementById("inp4");
    let inp5=document.getElementById("inp5");
    let inp6=document.getElementById("inp6");
    let total=document.querySelector(".total");
    let percentage=document.querySelector(".percentage");

    function totalall()
    {        
        if(inp2.value==="" || inp3.value==="" || inp4.value==="" || inp5.value==="" || inp6.value===" ")
        {
            alert("Please enter all subject of marks");
        }
        else
        {
            total.innerHTML = Number(inp2.value) + Number(inp3.value) + Number(inp4.value) + Number(inp5.value) + Number(inp6.value);
            percentage.innerHTML = (Number(inp2.value) + Number(inp3.value) + Number(inp4.value) + Number(inp5.value) + Number(inp6.value)) * 100 / 500;
        }
    }
    function clearall()
    {
        document.getElementById("inp2").value="";
        document.getElementById("inp3").value="";
        document.getElementById("inp4").value="";
        document.getElementById("inp5").value="";
        document.getElementById("inp6").value="";
        total.innerHTML="";
        percentage.innerHTML="";
    }

        
    let insta1=document.getElementById("insta1");
    let insta2=document.getElementById("insta2");
    let  p1=document.getElementById("p1");
    let  p2=document.getElementById("p2");
    let  tglbtn=document.getElementById("tglbtn");

    function login()
    {
        if(insta1.value===""||insta2.value==="")
        {
            alert("Please fill all the fields")
        }
        else if(insta1.value==="parmar@123" && insta2.value==="dmp1981")
        {
            alert("logged in successfully !!")
            document.getElementById("insta1").value="";
            document.getElementById("insta2").value="";
        }
        else
        {
            alert("please enter valid username & password ");
            document.getElementById("insta1").value="";
            document.getElementById("insta2").value="";
        }
    }
    function tgl()
    {
        if(insta2.type=="password")
        {
            insta2.type="text";
        }
        else
        {
            insta2.type="password";  
        }

    }