//https://teachablemachine.withgoogle.com/models/NoL7QGaGK/



Webcam.set({

    width: 300,
    height: 200,
    image_format: 'png',
    png_quality: 90
    
    });
    var camera = document.getElementById("webcam");
    
    Webcam.attach(camera);
    
    
    function takephotobutfunction(){
    
    Webcam.snap(function(data_uri){
    
    document.getElementById("outcome").innerHTML = "<img id='photo' src='" + data_uri + "'> "
    
    })
    
    
    }
    console.log("ml5 version = " , ml5.version);
    
    
    var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/NoL7QGaGK/model.json', modelLoaded)
    
    
    function modelLoaded(){
    
    console.log("yeah the model loaded, yey.");
    
    }


    function analysebutfunction(){

        image = document.getElementById("photo");
        
        classifier.classify(image, gotResult);
        
        }
        
        
        function gotResult(error, results){
        
        if(error){
        
        console.error(error);
        
        }
        else{
        
        console.log("It worked uwu owo!!!");
        console.log(results);
        
        document.getElementById("oject").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(2);
        
        }
        
        }