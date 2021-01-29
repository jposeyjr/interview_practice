def open_or_senior(data):
    my_list = [] 
    for age, handicap in data: 
        if (age >= 55 and handicap > 7):
            my_list.append("Senior") 
        else: 
            my_list.append("Open")
        
    return my_list 


#senior must be 55 or older AND have a handicap > 7 
#handicaps range from -2 to +26 and better players have lower handicaps 
#other option is open 

#input will be a list containing two items each, each list contains info for a single member
#info consists of an int for age and int for handicap rating
#[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
#should output other Open or Senior in a list of strings 