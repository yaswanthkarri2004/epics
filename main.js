let sentences =[
    ["A healthy outside starts from the inside.", "Robert Urich"],
    ["A fit body, a calm mind, a house full of love. These things cannot be bought – they must be earned.", "Naval Ravikant"],
    ["The wish for healing has always been half of health.", "Lucius Annaeus Seneca"],
    ["A good laugh and a long sleep are the best cures in the doctor’s book.","Irish proverb"],
    ["The more you understand yourself, the more silence there is, the healthier you are.","Maxime Lagacé"],
    ["Let food be thy medicine and medicine be thy food.","Hippocrates"],
    ["To ensure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain an interest in life.", "William Londen"],
    ["Physical fitness is the first requisite of happiness.","Joseph Pilates"],
    ["I have chosen to be happy because it is good for my health. - Voltaire"],
    ["A sad soul can be just as lethal as a germ.", "John Steinbeck"],
    ["Healthy citizens are the greatest asset any country can have.","Winston Churchill"],
    ["Good health is not something we can buy. However, it can be an extremely valuable savings account.","Anne Wilson Schaef"],
    ["He who has health has hope, and he who has hope has everything.","Thomas Carlyle"],
    ["Health is not valued until sickness comes.","Thomas Fuller"],
    ["You only live once, but if you do it right, once is enough."," Mae West"],
    ["Your body hears everything your mind says.","Naomi Judd"],
    ["Success is getting what you want, happiness is wanting what you get.","W.P. Kinsella"],
    ["Good health and good sense are two of life’s greatest blessings.","Publilius Syrus"],
    ["A fit, healthy body — that is the best fashion statement.","Jess C. Scott"],
    ["I believe that the greatest gift you can give your family and the world is a healthy you.","Joyce Meyer"],
    ["It is health which is real wealth and not pieces of gold and silver.","Mahatma Gandhi"],
    ["The way you think, the way you behave, the way you eat, can influence your life by 30 to 50 years.","Deepak Chopra"],
    ["Happiness lies first of all in health.","George William Curtis"],
    ["If you're happy, if you're feeling good, then nothing else matters."," Robin Wright"],
    ["Looking after my health today gives me a better hope for tomorrow. "," Anne Wilson Schaef"],
    ["The first wealth is health. "," Ralph Waldo Emerson"]
    ]
    let randomIndex = Math.floor(Math.random() * sentences.length);
    var randomSentence = sentences[randomIndex][0] + "-" + sentences[randomIndex][1];
    // document.write(randomSentence);
    document.getElementById("q").innerHTML = sentences[randomIndex][0]+"<br/><b>-'"+sentences[randomIndex][1]+"'</b>";