let form=document.querySelector(".form1");
let output=document.querySelector(".output");
console.log(form["name"].value);
let title=document.querySelector(".title");

function f1()
{
    form.style.display="none"
     output.style.height="700px"
     title.style.display="none"
    

    output.innerHTML=`
    
            
            

           <div id="l">

               <div id="ot"><h1>${form["name"].value}</h1></div>

               <div>
               <h2>PROFFESIONAL SUMMARY</h2>
               <h3><div>${form["ps"].value}</div></h3>
               </div>

               <div>
               <h2>WORK HISTORY</h2>
               <h3><div>${form["wh"].value}</div></h3>
               
               
               
               </div>
               
           </div>



           <div id="r">
            <div style="    padding-left: 32px;
    padding-top: 34px;
    font-size: 12px;">
            <h3><div><i class="fa-solid fa-location-dot"></i>${form["loc"].value}</div></h3>
            <br>
            <h3><div> <i class="fa-solid fa-phone"></i> ${form["pn"].value}</div></h3>
            <br>
            <h3><div><i class="fa-solid fa-envelope"></i>${form["ea"].value}</div></h3>
            </div>

            <button onclick="window.print();" class="printingbtn">PRINT PAGE</button>


            <div class="oskills">
            <h2>SKILLS</h2>
            <h3><div>${form["skills"].value}</div></h3>
            
            </div>


            <div class="oedu">
            <h2>EDUCATION</h2>
            <h3><div>${form["edu"].value}</div></h3>
            </div>


            <div class="oaf">
            <h2>Affiliations</h2>
            <h3><div>${form["af"].value}</div></h3>
            </div>


           </div>

           

                


            
   
    `



    

    }

   
