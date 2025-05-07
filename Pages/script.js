const shayaris = [
    "तुम्हारी आँखों में जो जादू है,<br>उससे हर लम्हा मेरा दिल बंधा है।<br>क्या तुम मेरी ज़िंदगी में आओगी,<br>तुम्हारे बिना ये सफर अधूरा सा है।",
    "मैं वादा करता हूँ,<br>मैं तुम्हारी हार्डडिस्क में सिर्फ अच्छी मेमोरी स्टोर करूंगा,<br>512GB RAM की कसम, तुम्हें कभी हैंग नहीं होने दूंगा,<br>प्यार तो दुनिया करती है, मैं तो तुमसे पेयर करूंगा वो भी ब्लूटूथ से,<br>और तुम्हारी जिंदगी की हर मुश्किल को मेरे एंटीवायरस से गुजरना पड़ेगा,<br>तो क्या तुम मुझे पूरी जिंदगी तुम्हारा पासवर्ड बनाओगी?",
    "तेरे बिना हर सुबह अधूरी है,<br>तेरे साथ हर शाम सुहानी है।<br>क्या तुम मेरी ज़िंदगी का हिस्सा बनोगी,<br>मेरी हर खुशी की तुम ही कहानी हो।",
    "Computer Science is the study of algorithms, data structures, and computational processes. <br>'और इसका एक' important system 'है' <br>that is called a database 'जहाँ पर' large amounts of data 'स्टोर किया जाता है'<br> 'और' human-based databases 'को'  brain 'कहते हैं'<br> 'जहाँ पर इंसानों का हर किस्म का डेटा स्टोर होता है <br> और मेरा डेटाबेस हैक हो गया है'<br> 'और अब मेरी सारी फाइल्स पर तुम्हारा नाम लिखा दिखा रहा है'.",    
    "तुम्हें देखकर समझ नहीं आता,<br>कि तुम्हें देखते रह जाऊं,<br>या ये धड़कनें संभालें जाऊं।<br>तुम्हें देखकर समझ नहीं आता,<br>कि तुम वाकई हकीकत हो मेरे,<br>या तुम्हें ख्वाब कह दिया जाए।<br>तुम खास हो,<br>तुम ख्वाब हो,<br>तुम जरूरत हो,<br>तुम जरूरी हो।<br><br>सुनो,<br>तुम मोहब्बत हो।",
    "The day i will be on the knees,<br>for the another girl is the day i will tie the shoe lace of<br><br><br><br> our daughter"
];

let currentShayariIndex = 0;

function displayShayari() {
    const shayariDisplay = document.getElementById('shayariDisplay');
    const nextButton = document.getElementById('nextButton');
    const nextPageButton = document.getElementById('nextPageButton');

    shayariDisplay.innerHTML = shayaris[currentShayariIndex];

    if (currentShayariIndex === shayaris.length - 1) {
        nextButton.style.display = 'none';
        nextPageButton.style.display = 'inline-block';
    } else {
        nextButton.style.display = 'inline-block';
        nextPageButton.style.display = 'none';
    }
}

document.getElementById('nextButton').addEventListener('click', function () {
    currentShayariIndex = (currentShayariIndex + 1) % shayaris.length;
    displayShayari();
});

function handleNextPage() {
    window.location.href = "6.html";
}

// Show first shayari on load
displayShayari();