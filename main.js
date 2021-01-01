var imageFile =document.getElementById("imageFile")

var canvas =document.getElementById("canvas")

var button =document.getElementById("button")

button.onclick = handleImageToPdf

    function handleImageToPdf(){
html2canvas(canvas,{
    onrendered: function(canvas){
var imgData = canvas.toDataURL('image/png')


var doc = new jsPDF('p','mm');

doc.addImage(imgData,'PNG',55,20)

doc.save('image.pdf');

    }
})
    }


var ctx = canvas.getContext('2d')


imageFile.addEventListener("change",handleImage,false)


function handleImage(e){
var reader = new FileReader()

reader.onload=function(event){

    var image =new Image()

    image.onload =function(){
        canvas.width= image.width
        canvas.height= image.height
        ctx.drawImage(image,0,0)
    }
    image.src= event.target.result
}

reader.readAsDataURL(e.target.files[0])
}
