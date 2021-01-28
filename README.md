# user-adventure

Alright buckle up your seatbelts because we're making a user adeventure game. I'm not entirely sure what it's gonna be about or how I'm gonna do it, but thats part of the fun.

What We Know: 
    - We need 4 pages.
      - Homepage
      - Map/List of options page
      - Quests/Quizes/Adventures page
      - Results
    - a dataSet
    - tracking some sort of state such as health/gold in dani's adventure.

What we don't know:
    - Everything

# Let's start with the pages
    1) Homepage 
        - We need some sort of form. Think of this as a long in. Take in the user's Name/Email using a text input.
        - Have them use radio buttons to pick a character/class
        - Store all the form data in local storage!!!
        - A button that triggers the game! This should re-direct the user to the map/list page. 
    2) Mappage/Lists
        - So this page is essentially where the user picks the quests/quiz that they are going to do. 
        - Create three different adventures that the user can go through that would give them a different result each time depending on the options they choose.
        - If the user has already completed all 3 neeeded quests, render the results page.
        - If not, when a user clicks on a specific quest generate the quest page.
        -Keep track off which quests the user has already completed. Check off the ones they have finished.
    3) Quests
        - Each quest needs to have a header, image, paragraph and a list of radio button options the user can click on and a submit button.
          - In order to do this we need to grab the id of the quest from the URL
          - Use the 'findById' function to render the quest data.
          - Once the user clicks a submit button calculate the users new stats and store in local storage.
    4) Results 
        - Display custom user results depending on the user's stats and the options they chose.
        - Render a button so that the user can play again.
            - Remember to clear local storage and re-direct the user to homepage. 

IT HAS JUST DAWNED ON ME THAT I WILL BE CREATING A HARRY POTTER THEMED USER ADVENTURE GAME STAY TUNED....
