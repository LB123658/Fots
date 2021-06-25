name = input('Enter your name:')
print('Hello',name)
choice = input('''
What do you need help with?
1: Ordering Fots
2: Making Fots recipes
3: Emailing Fots
4: Fots websites
5: Other
Enter the number for your question
''')
if choice == '1':
    print('Order Fots on the new Fots website at: https://lb123658.github.io/Fots')
elif choice == '2':
    print('The Fots website at https://lb123658.github.io/Fots has lots of Fots recipes including the Rispe™ Fot, meat Fot, olive Fot, and more.')
elif choice == '3':
    print('You can contact Fots at fotsofficial671@gmail.com')
elif choice == '4':
    print('Visit the new Fots website at https://lb123658.github.io/Fots or see out page on Connәct at https://lb123658.github.io/Connect/users/thisisfots')
else:
    print('It seems your question was not on the list.')
    next = input('''
    Pick the number that best suits your question:
        1: Question unrelated to Fots
        2: What is a Fot?
        3: Does Fots deliver?
        4: Other
        ''')
        
if next == '1':
       print('I cannot help with non Fot questions.')
elif next == '1':
    print('A Fot is a shot of food that you drinkm usually dried crushed food in a shot glass.')
elif next == '3':
    print('Fots does not devilver, but you can download recipes from the Fots website at https://lb123658.github.io/Fots')
else:
    print('If you have another unrelated question I am sorry I cannot answer it. I can help you search for it on Google.')
    google = input('''Enter your question:
        ''')
    if google == 'help':
        print('Go to: https://www.google.com/search?q=',google)
    else:
        print('Go to: https://www.google.com/search?q=',google)
