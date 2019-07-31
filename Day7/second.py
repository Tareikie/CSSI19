num = raw_input("Enter a number:")
num = int(num)  #Converts the variable into a integer

if type(num) <> type(int()):
    print "not a integer"
elif num < 1 or num > 10:
    print "Between 1 and 10 pls"
elif num % 2 == 0:
    if num == 2:
        print "Your number is a even prime"
    else:
        print "your number is not prime"
else:
    if num == 3 or num == 5 or num == 7:
        print "Your number is prime"
    else:
        print "Your number is not prime"