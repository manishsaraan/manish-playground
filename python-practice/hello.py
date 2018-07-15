import random;
import sys;
import os;

# this is a single line comment
'''
 This is a multi line comment
'''
print('Hello world')

name  = "Manihs"

print(name)

singlelinequote = "\" this is a stirng"
mulitlien = '''
 this si a multi lien qujorer
'''

print(singlelinequote)
print(mulitlien)

grocery_list_array = [1,'string','antoher string'];
print(grocery_list_array[1])

second_arr = [6,7,87]

# combiing array
combined_arr = [grocery_list_array, second_arr];
print(combined_arr[1][1])

#pushing
second_arr.append('lastitem')
print(second_arr)

#insert at specific position
second_arr.insert(1,'inserted')

#remove a value
second_arr.remove('lastitem')

#sort
second_arr.sort()

#reverse
second_arr.reverse()

#delete a specfic index
del second_arr[1]

print(second_arr)

#combining
todolist = second_arr + grocery_list_array;

#length
print(len(todolist))

#----------------------------------tuples-----------------------------------
pi_tuple = (3,14,2,4,5) #you cant chagne it
pi_list = list(pi_tuple) #chagned to list
pi_tuple = tuple(pi_list)

#------------------dictonary-----------------
dictonary = {'first': 'first', 'laset': 'ast', 'what': 'wtat'}
print(dictonary['what'])
del dictonary['what']
dictonary['laset'] = 'updated'
dictonary_len = len(dictonary)
get_first = dictonary.get('get_first')
print(dictonary.keys())
print(dictonary.values(),'-------------',get_first)

#----------------conditions---------------
age= 23
if(age <= 16) : 
    print('can drive')
elif age >= 21 :
    print('can drive tractor')
else :
    print('you are no old enough')

if( (age >= 1) and (age <= 18) ) : 
    print('you ant vote')
elif not( (age >= 18) and (age <=21) ) : #not is equoa to !
    print('you can vote')
else : 
    print('YOu can do pretty much anything.')

#------------------looping-------------------
for x in range(0, 10) :
    print(x, '---')

print('\n')

for y in grocery_list_array : 
    print(y)

num_list = [[1,2,3], [10,20,30], [100, 200, 300]]

for x in range(0,3) : 
    for n in range(0, 3) : 
        print(num_list[x][n])

# random_num = random.rand(0, 100)
# while(random_num != 15) : 
#     print random_num

i=0
while(i <= 20) : 
        if(i % 2 == 0) : 
            print i
        elif(i == 9) : 
            break
        else : 
            i += 1
            continue
        i += 1

#---------------------functions------------------------------
def addNumbers(fNumber, lNumber) :
    sumNum = fNumber + lNumber
    return sumNum

print('addNumbers--',addNumbers(1,3))

print('what is your name')
#name = sys.stdin.readline()
#print('Helllow',name)

#a lambda function can be used in hof
double = lambda x: x * 2

#---------------string---------------------
long_string = 'I\'ll catch you if you fall'
print(long_string[0:3]) #get first n characters
print(long_string[-5:]) #get last n character

#formatting a string
print('%c is my %s letter and my number %d number is %.5f' % ('X', 'favourate', 20, .14))
print(long_string.capitalize()) #capitalize first character
print(long_string.find('fall')) #find index case sensitive
print(long_string.isalpha()) #check if alphabetic
print(long_string.isalnum()) #check if number
print(len(long_string)) #get length
print(long_string.replace('fall','falling')) #replace
print(long_string.strip()) #remove whitespaces
print(long_string.split(' ')) #string to list

#-------------------------menuplating files----------------------
test_file = open('test.txt', 'wb')
print(test_file.mode)
print(test_file.name)
# test_file.write(bytes('write me to the newil\n', 'UTF-8'))
# test_file.close()

#-------------------------OO---------------------
class Animal : 
    __name = None #declaring private value
    __height = 0
    __sound = 0

    def __init__(self, name, height, weight, sound) : 
        self.__name = name
        self.__height = height
        self.__sound = sound

    def set_name(self, name) :
        self.__name = name
    
    def get_name(self) : 
        return self.__name
    
    def get_type(self) :
        print('Animal')
 
    def toString(self) : 
        return "{} is {} cm tall and {} kgs and say {}".format(self.__name,
        self.__height,
        self.__sound,
        self.__sound)   

cat = Animal('Whiskers',33, 10, 'Meow')
print(cat.toString())

class Dog(Animal): 
    __owner = ''

    def __init__(self,  name, height, weight, sound, owner) : 
        self.__owner = owner
        super(Dog, self).__init__(name, height, weight, sound)
         
    def set_owner(self, owner) : 
        self.__owner = owner
    
    def get_owner(self) :
        return self.__owner
    
    def get_type(self) : 
        print('Dog')
    
    def toString(self) :
        return 'toString override :)'
    

dog = Dog('Whiskers',33, 10, 'Meow', 'manish')
print(dog.toString())