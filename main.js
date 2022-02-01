function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/vRzb50qXn/model.json", modelReady)
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error,results){
if(error){
    console.error(error);}
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear:" + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy is " + (results[0].confidence * 100).toFixed(2) + "%";
        
        image_1 = document.getElementById("ear.png");

        if(results[0].label == "Roar"){
            image1.src = "lion.jpeg";
        }
        else if(results[0].label == "Barking"){
            image1.src = "dog.jpeg";
        }
        else if(results[0].label == "Meow"){
            image1.src = "cat.jpeg";
        }
        else if(results[0].label == "Moo"){
            image1.src = "cow.jpeg";
        }
    }
}