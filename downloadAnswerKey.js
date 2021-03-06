ques = document.getElementsByClassName("col-11 question-box-title");
answer = document.getElementsByClassName("col-10");

data = ""
for(i=0;i<buttons.length/4;i++){
    data += i.toString() + ". " + ques[i].innerText + "\n";
    for(j=0;j<4;j++){
        if(buttons[i*4+j].checked)
            data += "[x] ";
        else data += "[ ] ";
        data += answer[i*4+j+1].innerText + "\n";
    }
    data += "\n";
}

var element = document.createElement('a');
element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
element.setAttribute('download', "dap_an.txt");

element.style.display = 'none';
document.body.appendChild(element);

element.click();

document.body.removeChild(element);

// * https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server
