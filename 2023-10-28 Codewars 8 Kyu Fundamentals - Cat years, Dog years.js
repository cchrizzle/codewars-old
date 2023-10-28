// 10/28/23 Saturday Codewars 8 Kyu Fundamentals - Cat years, Dog years

// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

/*
Kata Task

I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

    humanYears >= 1
    humanYears are whole numbers only

Cat Years

    15 cat years for first year
    +9 cat years for second year
    +4 cat years for each year after that

Dog Years

    15 dog years for first year
    +9 dog years for second year
    +5 dog years for each year after that

References

    http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
    http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html

If you liked this Kata there is another related one here (https://www.codewars.com/kata/cat-years-dog-years-2).
*/




// 3rd attempt - working
var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears;
    let dogYears;
    if(humanYears < 2) {
        catYears = 15;
        dogYears = 15;
    } else if(humanYears < 3) {
        catYears = 24;
        dogYears = 24;
    } else if(humanYears >= 3) {                    // Didn't have = in >=
        catYears = 24 + ( (humanYears - 2) * 4);
        dogYears = 24 + ( (humanYears - 2) * 5);
    }
    return [humanYears,catYears,dogYears];
}

    // More efficient from other solutions
    var humanYearsCatYearsDogYears = function(y) {
        if (y == 1) return [1, 15, 15]
        if (y == 2) return [2, 24, 24]
        return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
    }


    // Another nice solution
    const humanYearsCatYearsDogYears = (humanYears) => {
        let catYears = 0;
        let dogYears = 0;
        
        for (let i = 1; i <= humanYears; i++) {                 // Using same concept as I originally thought with adding years based on age through +=
          if (i === 1) {
            catYears += 15;
            dogYears += 15;
          }
          else if (i === 2) {
            catYears += 9;
            dogYears += 9;
          }
          else {
            catYears += 4;
            dogYears += 5;
          }
        }
        return [humanYears,catYears,dogYears];
      }



    // Cleaning up code
    var humanYearsCatYearsDogYears = function(humanYears) {
        let catYears;
        let dogYears;
        if(humanYears < 2) {
            catYears = dogYears = 15;
        } else if(humanYears < 3) {
            catYears = dogYears = 24;
        } else if(humanYears >= 3) {
            catYears = 24 + ( (humanYears - 2) * 4);
            dogYears = 24 + ( (humanYears - 2) * 5);
        }
        return [humanYears,catYears,dogYears];
    }




// 1st attempt
var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears;
    let dogYears;
    if(humanYears < 2) {
        catYears = 15;
        dogYears = 15;
    } else if(humanYears < 3) {
        catYears = 24;
        dogYears = 24;
    } else if(humanYears > 3) {
        catYears = 24 + (humanYears * 4);
        dogYears = 24 + (humanYears * 5);
    }
    return [humanYears,catYears,dogYears];
}




// 2nd attempt
var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears;
    let dogYears;
    if(humanYears < 2) {
        catYears = 15;
        dogYears = 15;
    } else if(humanYears < 3) {
        catYears = 24;
        dogYears = 24;
    } else if(humanYears > 3) {
        catYears = 24 + ( (humanYears - 2) * 4);
        dogYears = 24 + ( (humanYears - 2) * 5);
    }
    return [humanYears,catYears,dogYears];
}