const form=document.querySelector('#my-form');
const linkInput=document.querySelector('#linkInput');
const topInput=document.querySelector('#topInput');
const bottomInput=document.querySelector('#bottomInput');
const box=document.querySelector('#div');



box.addEventListener('click',deleteMeme);  //delete meme when it's click

form.addEventListener('submit',function(evt){   //submit the form by clicking on the submit button
    evt.preventDefault();
    console.log('you submited');

//    form.addEventListener('keypress',function(evt){
//        evt.preventDefault();
     /*   if(evt.key==='Enter'){
        console.log('you pressed Enter');
        makeMeme(linkInput.value,topInput.value,bottomInput.value);
        }


    //if (evt.code === 'Enter')
        {
            evt.preventDefault();
            document.querySelector('form').submit();
        }
    });
*/
    makeMeme(linkInput.value,topInput.value,bottomInput.value);
    form.reset();


});


function makeMeme(link,top,bottom){
    let newDiv=document.createElement('div');

    let newImg=document.createElement('img');

    let newDiv2=document.createElement('div');

    let newP=document.createElement('p');

    let newP2=document.createElement('p');

    let blanket =`<div class="blanket"> <div class="blanket-text">Click to delete</div> </div>`;


        newDiv.setAttribute('class','meme-container');
        newImg.setAttribute('class','img');
        newImg.setAttribute('src', link);
        newDiv2.setAttribute('class','context');
        newP.setAttribute('class','toptext');
        newP2.setAttribute('class','bottomtext');


        newP.innerText=top;
        newP2.innerText=bottom;

newDiv2.append(newP,newP2);
newDiv.append(newDiv2,newImg);
box.append(newDiv);

newDiv.innerHTML +=blanket;


}

function deleteMeme(evt){
    let blanketClick=evt.target;
    if(blanketClick.className=='blanket-text'){
        blanketClick.parentElement.parentElement.remove();
    }
}
