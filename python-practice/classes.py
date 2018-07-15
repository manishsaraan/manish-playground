__metaclass__ = type
students = []


class Student:
    school_name = "Springfield Elementry"

    def __init__(self, name, student_id=None):
        """ Add student

        Arguments:
            name {[string]} -- [name of student]

        Keyword Arguments:
            student_id {[number]} -- [id of the student] (default: {None})
        """

        self.name = name
        self.student_id = student_id
        students.append(self)


    def __str__(self):
        return "Student" + self.name


    def get_return_capitalize(self):
        return self.name.capitalize()


    def get_school_name(self):
        return self.school_name


class HighSchool(Student):
    school_name="Springfield Highshool"

    def get_school_name(self):
        return 'this is a high school student'

    def get_return_capitalize(self):
        original_value = super(HighSchool, self).get_return_capitalize()
        return original_value + '-HS'
