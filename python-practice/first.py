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

student = {
    "name": "Derek",
    "id" : 12345,
    "feedback": None
}
student['last_name'] = "test"

try :
    last_name = student['last_name']
    numbered_last_name = last_name + 3
except KeyError: 
    print 'Error finding last name'
except TypeError:
    print 'cnat add these two togther'
except Exception as error:
    print error
print 'this code exicutes'

unordered_list = [3,5,5,4,5,6,7,7]
print(set(unordered_list))

def custom_print(name, *args) :  #works as rest in js
    print name
    print args


def named_args(name, **kwargs) : #pass arguments with name like rest
    print name
    print kwargs['desc']

named_args('mark', desc="hello pyton", aware=None, student=False)
custom_print('hllo', 1, 2,3, None, 'type sometinign.')