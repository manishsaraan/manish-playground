students = []
file_name = "students.text"
def get_students_titlecase():
    student_titlecase = []
    for student in students:
        student_titlecase.append(student["name"].title())
    return student_titlecase


def print_student_titlecase():
    student_titlecase = get_students_titlecase()
    print student_titlecase


def add_student(name, student_id = None):
    """ Add student

    Arguments:
        name {[string]} -- [name of student]

    Keyword Arguments:
        student_id {[number]} -- [id of the student] (default: {None})
    """

    student = {
        "name": name,
        "student_id": student_id
    }
    students.append(student)

def save_file(student):
    """ Save student name in file

    Arguments:
        student {[string]} -- [name of student]
    """
    try:
        f = open(file_name, "a")
        f.write(student + "\n")
        f.close()
    except:
        print "Could not open the file"

def read_file():
    try:
        f = open(file_name, "r")
        for student in read_students(f):
            add_student(student)
        f.close()
    except:
        print "Could not read file"

# a generator function for reading the file
def read_students(f):
    for line in f:
        yield line


read_file()
print_student_titlecase()

is_add_student = raw_input('Do you want to add student ?: ')
if is_add_student == 'y':
    student_name = raw_input("Enter student name: ")
    student_id = raw_input('Enter student ID: ')

    add_student(student_name, student_id)
    save_file(student_name)
    print_student_titlecase()



