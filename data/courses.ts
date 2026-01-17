export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  starterCode?: string;
  solution?: string;
  exercise?: {
    title: string;
    description: string;
    tests: Array<{
      input?: string;
      expectedOutput?: string;
      description: string;
      testCode?: string;
    }>;
  };
  xp: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  lessons: Lesson[];
  estimatedHours: number;
}

export const courses: Course[] = [
  {
    id: 'python-basics',
    title: 'Python Basics',
    description: 'Start your Python journey with fundamental concepts and syntax',
    level: 'beginner',
    estimatedHours: 10,
    lessons: [
      {
        id: 'hello-world',
        title: 'Hello, World!',
        description: 'Your first Python program',
        xp: 10,
        content: `
## Welcome to Python!

Python is one of the most popular and beginner-friendly programming languages. Let's start with the traditional first program: printing "Hello, World!" to the screen.

### The print() Function

In Python, we use the \`print()\` function to display text (or other values) to the screen. Here's the syntax:

\`\`\`python
print("Hello, World!")
\`\`\`

### How It Works

- \`print()\` is a **function** that outputs text
- The text inside the quotes is called a **string**
- You can use either single quotes (\`'...')\` or double quotes (\`"..."\`)

### Try Different Messages

\`\`\`python
print("Welcome to Python!")
print('Learning is fun!')
print("2024")
\`\`\`

### Multiple Lines

You can call \`print()\` multiple times to print multiple lines:

\`\`\`python
print("Line 1")
print("Line 2")
print("Line 3")
\`\`\`
        `,
        starterCode: `# Write your first Python program!
# Print "Hello, World!" to the screen

`,
        solution: `print("Hello, World!")`,
        exercise: {
          title: 'Exercise: Print Your Name',
          description: 'Write a program that prints your name to the screen.',
          tests: [
            {
              description: 'Program should print something',
              testCode: `
import sys
from io import StringIO
old_stdout = sys.stdout
sys.stdout = StringIO()

# Run the user's code
exec(compile(open('__main__').read(), '__main__', 'exec'))

output = sys.stdout.getvalue()
sys.stdout = old_stdout

if len(output.strip()) > 0:
    print("PASS")
else:
    print("FAIL: No output detected")
              `
            }
          ]
        }
      },
      {
        id: 'variables',
        title: 'Variables and Data Types',
        description: 'Learn to store and work with data',
        xp: 15,
        content: `
## Variables: Storing Data

Variables are like containers that hold information. In Python, creating a variable is simple:

\`\`\`python
name = "Alice"
age = 25
height = 5.8
is_student = True
\`\`\`

### Variable Names

Rules for naming variables:
- Must start with a letter or underscore
- Can contain letters, numbers, and underscores
- Case-sensitive (\`age\` and \`Age\` are different)
- Cannot use Python keywords (like \`print\`, \`if\`, \`for\`)

**Good examples:**
\`\`\`python
user_name = "Bob"
total_score = 100
is_valid = True
\`\`\`

**Bad examples:**
\`\`\`python
2nd_place = "Silver"  # Can't start with number
my-variable = 5       # Can't use hyphens
class = "Math"        # Can't use keywords
\`\`\`

### Basic Data Types

Python has several built-in data types:

#### 1. Strings (text)
\`\`\`python
greeting = "Hello"
name = 'Python'
\`\`\`

#### 2. Integers (whole numbers)
\`\`\`python
age = 25
year = 2024
\`\`\`

#### 3. Floats (decimal numbers)
\`\`\`python
price = 19.99
temperature = 98.6
\`\`\`

#### 4. Booleans (True/False)
\`\`\`python
is_active = True
is_closed = False
\`\`\`

### Using Variables

\`\`\`python
name = "Alice"
age = 25

print("My name is", name)
print("I am", age, "years old")
\`\`\`

### The type() Function

You can check a variable's type:

\`\`\`python
x = 42
print(type(x))  # <class 'int'>

y = 3.14
print(type(y))  # <class 'float'>

z = "Hello"
print(type(z))  # <class 'str'>
\`\`\`
        `,
        starterCode: `# Create variables for your information
# Then print them out

# Your code here:

`,
        solution: `name = "Python Learner"
age = 20
favorite_number = 7

print("Name:", name)
print("Age:", age)
print("Favorite number:", favorite_number)`,
        exercise: {
          title: 'Exercise: Create and Print Variables',
          description: 'Create three variables: your favorite color (string), a lucky number (integer), and a decimal number. Print all three.',
          tests: [
            {
              description: 'Should create and print at least 3 variables',
              testCode: `
import sys
from io import StringIO
old_stdout = sys.stdout
sys.stdout = StringIO()

exec(compile(open('__main__').read(), '__main__', 'exec'))

output = sys.stdout.getvalue()
sys.stdout = old_stdout

# Check if there are at least 3 lines of output
lines = [line for line in output.split('\\n') if line.strip()]
if len(lines) >= 3:
    print("PASS")
else:
    print(f"FAIL: Expected at least 3 outputs, got {len(lines)}")
              `
            }
          ]
        }
      },
      {
        id: 'math-operations',
        title: 'Math Operations',
        description: 'Perform calculations with Python',
        xp: 15,
        content: `
## Arithmetic in Python

Python can perform all basic mathematical operations:

### Basic Operators

\`\`\`python
# Addition
result = 10 + 5
print(result)  # 15

# Subtraction
result = 20 - 8
print(result)  # 12

# Multiplication
result = 6 * 7
print(result)  # 42

# Division (always returns float)
result = 15 / 3
print(result)  # 5.0

# Integer division (returns whole number)
result = 17 // 5
print(result)  # 3

# Modulus (remainder)
result = 17 % 5
print(result)  # 2

# Exponentiation (power)
result = 2 ** 3
print(result)  # 8
\`\`\`

### Order of Operations

Python follows PEMDAS (Parentheses, Exponents, Multiplication/Division, Addition/Subtraction):

\`\`\`python
result = 2 + 3 * 4
print(result)  # 14 (not 20!)

result = (2 + 3) * 4
print(result)  # 20
\`\`\`

### Math with Variables

\`\`\`python
price = 19.99
quantity = 3
total = price * quantity
print("Total:", total)  # 59.97

# Update variables
count = 10
count = count + 5  # count is now 15

# Shorthand operators
count += 5   # Same as: count = count + 5
count -= 2   # Same as: count = count - 2
count *= 2   # Same as: count = count * 2
count /= 3   # Same as: count = count / 3
\`\`\`

### Combining Numbers and Strings

Be careful! You can't directly add numbers and strings:

\`\`\`python
age = 25
# This won't work:
# message = "I am " + age + " years old"

# Convert number to string:
message = "I am " + str(age) + " years old"
print(message)

# Or use multiple arguments:
print("I am", age, "years old")
\`\`\`
        `,
        starterCode: `# Practice math operations

# Calculate the area of a rectangle
length = 10
width = 5
area = 0  # Fix this calculation

print("Area:", area)

# Calculate the average of three numbers
num1 = 85
num2 = 90
num3 = 78
average = 0  # Fix this calculation

print("Average:", average)
`,
        solution: `length = 10
width = 5
area = length * width
print("Area:", area)

num1 = 85
num2 = 90
num3 = 78
average = (num1 + num2 + num3) / 3
print("Average:", average)`,
        exercise: {
          title: 'Exercise: Temperature Converter',
          description: 'Convert 75 degrees Fahrenheit to Celsius using the formula: C = (F - 32) * 5/9. Print the result.',
          tests: [
            {
              description: 'Should correctly convert 75°F to Celsius (≈23.89)',
              expectedOutput: '23.88888888888889'
            }
          ]
        }
      },
      {
        id: 'strings',
        title: 'Working with Strings',
        description: 'Master text manipulation in Python',
        xp: 15,
        content: `
## Strings: Working with Text

Strings are sequences of characters. Python provides many ways to work with text.

### Creating Strings

\`\`\`python
single = 'Hello'
double = "World"
multiline = """This is
a multiline
string"""
\`\`\`

### String Concatenation

\`\`\`python
first = "Hello"
last = "World"
full = first + " " + last
print(full)  # "Hello World"
\`\`\`

### String Repetition

\`\`\`python
laugh = "ha" * 3
print(laugh)  # "hahaha"

line = "=" * 20
print(line)  # "===================="
\`\`\`

### String Methods

Python strings have many useful methods:

\`\`\`python
text = "Python Programming"

# Convert to uppercase/lowercase
print(text.upper())      # "PYTHON PROGRAMMING"
print(text.lower())      # "python programming"

# Check what string starts/ends with
print(text.startswith("Py"))  # True
print(text.endswith("ing"))   # True

# Replace text
new_text = text.replace("Python", "Java")
print(new_text)  # "Java Programming"

# Remove whitespace
messy = "  hello  "
clean = messy.strip()
print(clean)  # "hello"

# Split into list
sentence = "Hello World Python"
words = sentence.split()
print(words)  # ['Hello', 'World', 'Python']

# Count occurrences
text = "hello hello hello"
print(text.count("hello"))  # 3

# Find position
position = text.find("Pro")
print(position)  # 7
\`\`\`

### String Indexing

Access individual characters:

\`\`\`python
word = "Python"
print(word[0])   # "P" (first character)
print(word[1])   # "y"
print(word[-1])  # "n" (last character)
print(word[-2])  # "o"
\`\`\`

### String Slicing

Extract portions of strings:

\`\`\`python
text = "Python Programming"
print(text[0:6])    # "Python"
print(text[7:])     # "Programming"
print(text[:6])     # "Python"
print(text[::2])    # "Pto rgamn" (every 2nd char)
\`\`\`

### F-Strings (Formatted Strings)

The modern way to format strings:

\`\`\`python
name = "Alice"
age = 25
message = f"My name is {name} and I am {age} years old"
print(message)

# With expressions
x = 10
y = 20
print(f"The sum of {x} and {y} is {x + y}")

# Formatting numbers
price = 19.99
print(f"Price: \${price:.2f}")  # "Price: $19.99"
\`\`\`

### String Length

\`\`\`python
text = "Hello"
length = len(text)
print(length)  # 5
\`\`\`
        `,
        starterCode: `# String manipulation practice

name = "python programming"

# Convert to title case and print


# Create a message using f-string
language = "Python"
year = 1991
# Print: "Python was created in 1991"


# Split this sentence into words
sentence = "I love coding in Python"
# Print each word on a new line

`,
        solution: `name = "python programming"
print(name.title())

language = "Python"
year = 1991
print(f"{language} was created in {year}")

sentence = "I love coding in Python"
words = sentence.split()
for word in words:
    print(word)`,
        exercise: {
          title: 'Exercise: String Manipulation',
          description: 'Create a variable with the text "  hello world  " (with spaces), strip the spaces, convert to uppercase, and print it.',
          tests: [
            {
              description: 'Should output "HELLO WORLD"',
              expectedOutput: 'HELLO WORLD'
            }
          ]
        }
      },
      {
        id: 'user-input',
        title: 'Getting User Input',
        description: 'Make interactive programs',
        xp: 15,
        content: `
## User Input

Make your programs interactive by getting input from users.

### The input() Function

\`\`\`python
name = input("What is your name? ")
print(f"Hello, {name}!")
\`\`\`

### Important: input() Returns a String

\`\`\`python
age = input("How old are you? ")
print(type(age))  # <class 'str'>
\`\`\`

Even if the user types a number, \`input()\` returns it as a string!

### Converting Input

To work with numbers, convert the input:

\`\`\`python
# Convert to integer
age = input("Enter your age: ")
age = int(age)
print(f"Next year you'll be {age + 1}")

# Convert to float
price = input("Enter price: ")
price = float(price)
total = price * 1.08  # Add 8% tax
print(f"Total with tax: \${total:.2f}")

# Shorthand version
age = int(input("Enter your age: "))
\`\`\`

### Multiple Inputs

\`\`\`python
name = input("Name: ")
age = int(input("Age: "))
city = input("City: ")

print(f"{name} is {age} years old and lives in {city}")
\`\`\`

### Error Handling (Preview)

What if user enters invalid data?

\`\`\`python
try:
    age = int(input("Enter age: "))
    print(f"You are {age} years old")
except ValueError:
    print("That's not a valid number!")
\`\`\`

### Simple Calculator Example

\`\`\`python
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

sum_result = num1 + num2
diff_result = num1 - num2
product_result = num1 * num2

print(f"Sum: {sum_result}")
print(f"Difference: {diff_result}")
print(f"Product: {product_result}")
\`\`\`

### Note for Web-Based Python

Since we're running Python in the browser, \`input()\` works differently. For exercises, we'll provide the input directly in the code or use pre-defined variables.
        `,
        starterCode: `# For this exercise, we'll use pre-defined input
# In a real program, you'd use: name = input("Enter name: ")

# Simulate user input
user_name = "Alice"
user_age = "25"

# Convert age to integer and print a greeting
# Example: "Hello Alice! You are 25 years old."

`,
        solution: `user_name = "Alice"
user_age = "25"

age_number = int(user_age)
print(f"Hello {user_name}! You are {age_number} years old.")`,
        exercise: {
          title: 'Exercise: Name Length',
          description: 'Given a name variable "Python", print how many letters are in the name using the len() function.',
          tests: [
            {
              description: 'Should print 6',
              expectedOutput: '6'
            }
          ]
        }
      }
    ]
  }
];

export function getCourse(courseId: string): Course | undefined {
  return courses.find(c => c.id === courseId);
}

export function getLesson(courseId: string, lessonId: string): Lesson | undefined {
  const course = getCourse(courseId);
  return course?.lessons.find(l => l.id === lessonId);
}

export function getAdjacentLessons(courseId: string, lessonId: string): {
  previous?: Lesson;
  next?: Lesson;
} {
  const course = getCourse(courseId);
  if (!course) return {};

  const currentIndex = course.lessons.findIndex(l => l.id === lessonId);
  if (currentIndex === -1) return {};

  return {
    previous: currentIndex > 0 ? course.lessons[currentIndex - 1] : undefined,
    next: currentIndex < course.lessons.length - 1 ? course.lessons[currentIndex + 1] : undefined,
  };
}
