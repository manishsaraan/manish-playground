passeryby_speech = 'hello'

def getdata() :
    if passeryby_speech == 'hello' or passeryby_speech == 'hi' :
        print('speechi is hello')

getdata()

pythonCourse = True
javaCourse = False
alient_found = None #like null in js

number = 5
if number:
    print('number is 5')
else :
    print('njumber is not 5')

if alient_found :
    print 'there are some alients'

a = 1
b = 2

bigger = "Bigger" if a > b else "smaller" # ternary codition in pyton
print bigger

list  = [1,2,3]
print list[-1]
print 1 in list
print list[1:] #ignoreing the first
print list[:-1] #ignoring the last

key = 0
for name in list :
    print('name is {0} with index {1}'.format(name, key))
    key += 1

for value in range(5, 19, 2) :  # start from 5, goes upto 10 and increase by 2
    if value == 11 :
        print 'range vlaue is {0}'.format(value)
        break
    print 'value is {0}'.format(value)