const questionlist=[
    {que:"Which of the following languages is primarily used for styling web pages?",
    ans:[
        "JavaScript","Python","Html","CSS",
    ],
    right:"4"
    },
    {que:"What does HTML stand for?",
    ans:[
    "Hyper Text Markup Language","Home Tool Markup Language","High Traffic Management Language","Hyperlink and Text Markup Language",
],
    right:"1"
    },
    {que:"Which of the following is not a programming language used in web development?",
    ans:[
        "PHP","Ruby","SQL","HTML",
    ],
    right:"4"
    },
    {que:"What is the purpose of JavaScript in web development?",
    ans:[
        "Styling web pages","Adding interactivity to web pages","Defining the structure of web pages","Storing data on the server",
    ],
    right:"2"
    },
   
]

let question=document.querySelector(".question");
let answer=document.querySelector('answer');
let btn=document.querySelectorAll('.btn');
let next=document.querySelector(".next")
let quiz=document.querySelector('.quiz');
let index=0;
let score=0;
let flag=true;


const start=()=>{
  if(index<4){
    question.innerHTML=`${index+1}) ${questionlist[index].que}`

    btn.forEach((ele)=>{
     ele.innerHTML=`${questionlist[index].ans[ele.id-1]}`
    })
  }

  else
  {
  quiz.innerHTML=`
  <h1 class="question">Thanks for participating in this quiz</h1>
  <h3 class="score">Your score is ${score}/4</h3>`
  }
}

btn.forEach((ele)=>{
    ele.addEventListener('click',()=>{
        next.style.display="block";
        if(ele.id==questionlist[index].right){
        ele.style.backgroundColor="green"
        score++;
        }

        else{
            ele.style.backgroundColor="red";
            btn.forEach((demo)=>{
                if(demo.id==questionlist[index].right)
             demo.style.backgroundColor="green"

            })
        }

        disable();
    })
})


let disable=()=>{
 btn.forEach((ele)=>{
    ele.disabled=flag;
 })
}

next.addEventListener('click',()=>{
    index++;
    start();
    flag=false;
    disable();
    flag=true;
    next.style.display="none";

    btn.forEach((ele)=>{
        ele.style.backgroundColor="white";
    })

})

start()