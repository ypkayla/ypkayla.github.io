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
      minOutputLength?: number;
      minOutputLines?: number;
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
              minOutputLength: 1
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
              minOutputLines: 3
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
  },
  {
    id: 'python-projects',
    title: 'Python Projects & Practice',
    description: 'Level up with practical patterns: functions, lists, dictionaries, and mini projects',
    level: 'intermediate',
    estimatedHours: 6,
    lessons: [
      {
        id: 'functions-and-returns',
        title: 'Functions That Return Values',
        description: 'Write reusable logic and return results',
        xp: 20,
        content: `
## Functions that return

Functions help you reuse logic. When a function **returns** a value, you can store or use it later.

\`\`\`python
def add(a, b):
    return a + b

total = add(3, 5)
print(total)
\`\`\`

### Your turn
Write a function \`greet(name)\` that returns a friendly greeting string.
`,
        starterCode: `# Create a function greet(name) that returns "Hello, <name>"

name = "Python"

# Call greet and print the result
`,
        solution: `def greet(name):
    return f"Hello, {name}"

name = "Python"
print(greet(name))`,
        exercise: {
          title: 'Exercise: Greet Function',
          description: 'Return a greeting and print it for the name "Python".',
          tests: [
            {
              description: 'Should print Hello, Python',
              expectedOutput: 'Hello, Python'
            }
          ]
        }
      },
      {
        id: 'lists-and-loops',
        title: 'Lists and Loops',
        description: 'Work with collections and repeat logic',
        xp: 20,
        content: `
## Lists + loops

Lists let you store multiple values. Use a loop to process them.

\`\`\`python
numbers = [3, 5, 2]
total = 0
for n in numbers:
    total += n

print(total)
\`\`\`

### Your turn
Sum the list and print the total.
`,
        starterCode: `numbers = [3, 5, 2]
total = 0

# Sum the numbers and print the total
`,
        solution: `numbers = [3, 5, 2]
total = 0

for n in numbers:
    total += n

print(total)`,
        exercise: {
          title: 'Exercise: Sum a List',
          description: 'Print the total of the list [3, 5, 2].',
          tests: [
            {
              description: 'Should print 10',
              expectedOutput: '10'
            }
          ]
        }
      },
      {
        id: 'dictionaries',
        title: 'Dictionaries in Practice',
        description: 'Store key/value data and access it cleanly',
        xp: 20,
        content: `
## Dictionaries

Dictionaries store key/value pairs.

\`\`\`python
profile = {"language": "Python", "level": "intermediate"}
print(profile["language"])
\`\`\`

### Your turn
Print the value for the key \`language\`.
`,
        starterCode: `profile = {
    "language": "Python",
    "level": "intermediate"
}

# Print the language
`,
        solution: `profile = {
    "language": "Python",
    "level": "intermediate"
}

print(profile["language"])`,
        exercise: {
          title: 'Exercise: Dictionary Lookup',
          description: 'Print the language value from the profile dictionary.',
          tests: [
            {
              description: 'Should print Python',
              expectedOutput: 'Python'
            }
          ]
        }
      },
      {
        id: 'mini-project-vowels',
        title: 'Mini Project: Count Vowels',
        description: 'Combine loops and conditionals to solve a real task',
        xp: 25,
        content: `
## Mini Project: Count Vowels

You’re given a string. Count how many vowels it contains and print the total.

\`\`\`python
text = "Hello Python"
vowels = "aeiou"
count = 0

for char in text.lower():
    if char in vowels:
        count += 1

print(count)
\`\`\`

### Your turn
Complete the code to count vowels.
`,
        starterCode: `text = "Hello Python"
vowels = "aeiou"
count = 0

# Count the vowels and print the number
`,
        solution: `text = "Hello Python"
vowels = "aeiou"
count = 0

for char in text.lower():
    if char in vowels:
        count += 1

print(count)`,
        exercise: {
          title: 'Exercise: Vowel Count',
          description: 'Count vowels in "Hello Python" and print the number.',
          tests: [
            {
              description: 'Should print 3',
              expectedOutput: '3'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'control-flow',
    title: 'Control Flow Deep Dive',
    description: 'Make programs think: conditions, loops, and decision patterns',
    level: 'beginner',
    estimatedHours: 5,
    lessons: [
      {
        id: 'if-elif-else',
        title: 'If / Elif / Else',
        description: 'Teach your program to make decisions',
        xp: 15,
        content: `
## If / Elif / Else

Control flow lets your code choose different paths.

\`\`\`python
age = 20
if age >= 18:
    print("Adult")
elif age >= 13:
    print("Teen")
else:
    print("Child")
\`\`\`

### Tips
- Conditions evaluate to **True** or **False**
- Use \`elif\` for multiple branches
- The \`else\` block runs when nothing else matches
`,
        starterCode: `age = 15

# Print "Adult" if age >= 18
# Print "Teen" if age >= 13
# Otherwise print "Child"
`,
        solution: `age = 15

if age >= 18:
    print("Adult")
elif age >= 13:
    print("Teen")
else:
    print("Child")`,
        exercise: {
          title: 'Exercise: Age Group',
          description: 'Use if/elif/else to print the correct group for age = 15.',
          tests: [
            {
              description: 'Should print Teen',
              expectedOutput: 'Teen'
            }
          ]
        }
      },
      {
        id: 'boolean-logic',
        title: 'Boolean Logic',
        description: 'Combine conditions with and/or/not',
        xp: 15,
        content: `
## Boolean Logic

Combine conditions with \`and\`, \`or\`, and \`not\`.

\`\`\`python
is_member = True
has_coupon = False

if is_member or has_coupon:
    print("Discount applied")
\`\`\`

### Quick rules
- \`and\`: both must be True
- \`or\`: at least one must be True
- \`not\`: flips True/False
`,
        starterCode: `is_raining = True
has_umbrella = True

# Print "Go outside" if not raining or you have an umbrella
`,
        solution: `is_raining = True
has_umbrella = True

if (not is_raining) or has_umbrella:
    print("Go outside")`,
        exercise: {
          title: 'Exercise: Umbrella Check',
          description: 'Print "Go outside" given the variables.',
          tests: [
            {
              description: 'Should print Go outside',
              expectedOutput: 'Go outside'
            }
          ]
        }
      },
      {
        id: 'loops-basics',
        title: 'Loops Basics',
        description: 'Repeat actions with for and while',
        xp: 20,
        content: `
## Loops

Loops repeat code. Use \`for\` for lists and \`while\` for conditions.

\`\`\`python
for i in range(3):
    print(i)
\`\`\`

### While loop
\`\`\`python
count = 0
while count < 3:
    print(count)
    count += 1
\`\`\`
`,
        starterCode: `# Print numbers 1 to 5 using a for loop
`,
        solution: `for i in range(1, 6):
    print(i)`,
        exercise: {
          title: 'Exercise: Count to 5',
          description: 'Print 1,2,3,4,5 each on a new line.',
          tests: [
            {
              description: 'Should print 5 lines',
              minOutputLines: 5
            }
          ]
        }
      }
    ]
  },
  {
    id: 'functions-and-modules',
    title: 'Functions & Modules',
    description: 'Break problems into reusable pieces and import tools',
    level: 'intermediate',
    estimatedHours: 6,
    lessons: [
      {
        id: 'parameters',
        title: 'Parameters and Arguments',
        description: 'Pass data into functions',
        xp: 20,
        content: `
## Parameters and Arguments

Parameters are placeholders. Arguments are the actual values.

\`\`\`python
def multiply(a, b):
    return a * b

print(multiply(3, 4))
\`\`\`
`,
        starterCode: `# Create a function double(x) that returns x * 2

`,
        solution: `def double(x):
    return x * 2

print(double(7))`,
        exercise: {
          title: 'Exercise: Double',
          description: 'Print the result of double(7).',
          tests: [
            {
              description: 'Should print 14',
              expectedOutput: '14'
            }
          ]
        }
      },
      {
        id: 'default-params',
        title: 'Default Parameters',
        description: 'Make arguments optional',
        xp: 20,
        content: `
## Default values

\`\`\`python
def greet(name, emoji="👋"):
    return f"Hello {name} {emoji}"

print(greet("Sam"))
\`\`\`
`,
        starterCode: `def greet(name, emoji="👋"):
    # return a greeting string
    pass

print(greet("Sam"))
`,
        solution: `def greet(name, emoji="👋"):
    return f"Hello {name} {emoji}"

print(greet("Sam"))`,
        exercise: {
          title: 'Exercise: Default Emoji',
          description: 'Use the default emoji to greet Sam.',
          tests: [
            {
              description: 'Should print Hello Sam 👋',
              expectedOutput: 'Hello Sam 👋'
            }
          ]
        }
      },
      {
        id: 'modules',
        title: 'Using Modules',
        description: 'Import built‑in tools',
        xp: 20,
        content: `
## Modules

Python ships with modules you can import.

\`\`\`python
import math
print(math.sqrt(16))
\`\`\`
`,
        starterCode: `import math

# Print the square root of 81
`,
        solution: `import math

print(math.sqrt(81))`,
        exercise: {
          title: 'Exercise: Math Module',
          description: 'Print sqrt(81).',
          tests: [
            {
              description: 'Should print 9.0',
              expectedOutput: '9.0'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'data-structures',
    title: 'Data Structures',
    description: 'Lists, tuples, sets, and dictionaries in real use',
    level: 'intermediate',
    estimatedHours: 7,
    lessons: [
      {
        id: 'list-methods',
        title: 'List Methods',
        description: 'Append, remove, sort, and slice',
        xp: 20,
        content: `
## List methods

\`\`\`python
items = ["apple", "banana"]
items.append("cherry")
items.remove("banana")
print(items)
\`\`\`
`,
        starterCode: `items = ["apple", "banana"]

# Add "cherry" and remove "banana"
`,
        solution: `items = ["apple", "banana"]
items.append("cherry")
items.remove("banana")

print(items)`,
        exercise: {
          title: 'Exercise: List Update',
          description: 'Print the final list.',
          tests: [
            {
              description: 'Should print [\'apple\', \'cherry\']',
              expectedOutput: "['apple', 'cherry']"
            }
          ]
        }
      },
      {
        id: 'tuples-sets',
        title: 'Tuples and Sets',
        description: 'When order matters and when it doesn’t',
        xp: 20,
        content: `
## Tuples and Sets

Tuples are immutable. Sets store unique values.

\`\`\`python
coords = (10, 20)
tags = {"python", "python", "code"}
print(coords)
print(tags)
\`\`\`
`,
        starterCode: `coords = (5, 8)
tags = {"a", "b", "a"}

# Print both
`,
        solution: `coords = (5, 8)
tags = {"a", "b", "a"}

print(coords)
print(tags)`,
        exercise: {
          title: 'Exercise: Unique Tags',
          description: 'Print a tuple and a set.',
          tests: [
            {
              description: 'Should print at least 2 lines',
              minOutputLines: 2
            }
          ]
        }
      },
      {
        id: 'dict-patterns',
        title: 'Dictionary Patterns',
        description: 'Count and lookup patterns',
        xp: 25,
        content: `
## Counting with dictionaries

\`\`\`python
text = "hello"
counts = {}
for ch in text:
    counts[ch] = counts.get(ch, 0) + 1
print(counts)
\`\`\`
`,
        starterCode: `text = "banana"
counts = {}

# Count letters and print the dict
`,
        solution: `text = "banana"
counts = {}

for ch in text:
    counts[ch] = counts.get(ch, 0) + 1

print(counts)`,
        exercise: {
          title: 'Exercise: Letter Count',
          description: 'Count letters in "banana" and print the dict.',
          tests: [
            {
              description: 'Should print something',
              minOutputLength: 1
            }
          ]
        }
      }
    ]
  },
  {
    id: 'file-io',
    title: 'Files & Text Processing',
    description: 'Read and write text, clean data, and parse lines',
    level: 'intermediate',
    estimatedHours: 5,
    lessons: [
      {
        id: 'strings-advanced',
        title: 'String Tools',
        description: 'Split, join, replace, and format',
        xp: 20,
        content: `
## String tools

\`\`\`python
text = "apple,banana,pear"
parts = text.split(",")
print(parts)
print(" | ".join(parts))
\`\`\`
`,
        starterCode: `text = "one two three"

# Split by space and print the list
`,
        solution: `text = "one two three"

parts = text.split(" ")
print(parts)`,
        exercise: {
          title: 'Exercise: Split Text',
          description: 'Split the string and print the list.',
          tests: [
            {
              description: 'Should print 1 line',
              minOutputLines: 1
            }
          ]
        }
      },
      {
        id: 'csv-like',
        title: 'CSV‑Style Parsing',
        description: 'Parse lines into fields',
        xp: 20,
        content: `
## Parsing CSV‑style text

\`\`\`python
line = "Ada,36,Engineer"
name, age, job = line.split(",")
print(name)
\`\`\`
`,
        starterCode: `line = "Ada,36,Engineer"

# Print the job
`,
        solution: `line = "Ada,36,Engineer"
name, age, job = line.split(",")
print(job)`,
        exercise: {
          title: 'Exercise: Parse Line',
          description: 'Print the job field.',
          tests: [
            {
              description: 'Should print Engineer',
              expectedOutput: 'Engineer'
            }
          ]
        }
      },
      {
        id: 'formatting',
        title: 'Clean Output',
        description: 'Use f-strings for clear output',
        xp: 20,
        content: `
## f-strings

\`\`\`python
name = "Ada"
score = 92
print(f"{name} scored {score}")
\`\`\`
`,
        starterCode: `name = "Ada"
score = 92

# Print: "Ada scored 92"
`,
        solution: `name = "Ada"
score = 92

print(f"{name} scored {score}")`,
        exercise: {
          title: 'Exercise: Format Output',
          description: 'Use an f-string to print the message.',
          tests: [
            {
              description: 'Should print Ada scored 92',
              expectedOutput: 'Ada scored 92'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'error-handling',
    title: 'Errors & Debugging',
    description: 'Handle mistakes and read error messages',
    level: 'intermediate',
    estimatedHours: 4,
    lessons: [
      {
        id: 'try-except',
        title: 'Try / Except',
        description: 'Protect your program from crashing',
        xp: 20,
        content: `
## Try / Except

\`\`\`python
try:
    x = int("abc")
except ValueError:
    print("Invalid number")
\`\`\`
`,
        starterCode: `# Convert input and handle errors
text = "abc"

`,
        solution: `text = "abc"

try:
    number = int(text)
    print(number)
except ValueError:
    print("Invalid number")`,
        exercise: {
          title: 'Exercise: Handle Error',
          description: 'Print "Invalid number" for text = "abc".',
          tests: [
            {
              description: 'Should print Invalid number',
              expectedOutput: 'Invalid number'
            }
          ]
        }
      },
      {
        id: 'reading-tracebacks',
        title: 'Reading Tracebacks',
        description: 'Find the real line that failed',
        xp: 15,
        content: `
## Tracebacks

When Python crashes, it shows a traceback. Start at the **last line** of the traceback.

Learn to look for:
- file name
- line number
- error type
`,
        starterCode: `# Fix the error and print "OK"
numbers = [1, 2, 3]
print(numbers[3])
`,
        solution: `numbers = [1, 2, 3]
print("OK")`,
        exercise: {
          title: 'Exercise: Fix the Index',
          description: 'Remove the error and print OK.',
          tests: [
            {
              description: 'Should print OK',
              expectedOutput: 'OK'
            }
          ]
        }
      },
      {
        id: 'assertions',
        title: 'Assertions',
        description: 'Catch incorrect logic early',
        xp: 15,
        content: `
## Assertions

Assertions are sanity checks.

\`\`\`python
x = 5
assert x > 0
\`\`\`
`,
        starterCode: `x = 5

# Add an assertion that x is positive
`,
        solution: `x = 5

assert x > 0
print("OK")`,
        exercise: {
          title: 'Exercise: Assert Positive',
          description: 'Assert and print OK.',
          tests: [
            {
              description: 'Should print OK',
              expectedOutput: 'OK'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'oop-basics',
    title: 'Object‑Oriented Python',
    description: 'Build your own classes and objects',
    level: 'intermediate',
    estimatedHours: 7,
    lessons: [
      {
        id: 'classes',
        title: 'Your First Class',
        description: 'Define objects with attributes',
        xp: 25,
        content: `
## Classes

\`\`\`python
class Dog:
    def __init__(self, name):
        self.name = name

buddy = Dog("Buddy")
print(buddy.name)
\`\`\`
`,
        starterCode: `class Dog:
    def __init__(self, name):
        self.name = name

dog = Dog("Buddy")

# Print the dog's name
`,
        solution: `class Dog:
    def __init__(self, name):
        self.name = name

dog = Dog("Buddy")
print(dog.name)`,
        exercise: {
          title: 'Exercise: Class Attribute',
          description: 'Print Buddy.',
          tests: [
            {
              description: 'Should print Buddy',
              expectedOutput: 'Buddy'
            }
          ]
        }
      },
      {
        id: 'methods',
        title: 'Instance Methods',
        description: 'Add behavior to your class',
        xp: 25,
        content: `
## Methods

\`\`\`python
class Dog:
    def __init__(self, name):
        self.name = name
    def bark(self):
        return f"{self.name} says woof"

dog = Dog("Buddy")
print(dog.bark())
\`\`\`
`,
        starterCode: `class Dog:
    def __init__(self, name):
        self.name = name
    def bark(self):
        # return a message
        pass

dog = Dog("Buddy")
print(dog.bark())
`,
        solution: `class Dog:
    def __init__(self, name):
        self.name = name
    def bark(self):
        return f"{self.name} says woof"

dog = Dog("Buddy")
print(dog.bark())`,
        exercise: {
          title: 'Exercise: Bark',
          description: 'Make bark return the message.',
          tests: [
            {
              description: 'Should print Buddy says woof',
              expectedOutput: 'Buddy says woof'
            }
          ]
        }
      },
      {
        id: 'inheritance',
        title: 'Inheritance',
        description: 'Reuse behavior with parent classes',
        xp: 25,
        content: `
## Inheritance

\`\`\`python
class Animal:
    def speak(self):
        return "sound"

class Cat(Animal):
    def speak(self):
        return "meow"

print(Cat().speak())
\`\`\`
`,
        starterCode: `class Animal:
    def speak(self):
        return "sound"

class Cat(Animal):
    def speak(self):
        return "meow"

# Print the cat sound
`,
        solution: `class Animal:
    def speak(self):
        return "sound"

class Cat(Animal):
    def speak(self):
        return "meow"

print(Cat().speak())`,
        exercise: {
          title: 'Exercise: Cat Sound',
          description: 'Print meow.',
          tests: [
            {
              description: 'Should print meow',
              expectedOutput: 'meow'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'testing-debugging',
    title: 'Testing & Debugging',
    description: 'Build confidence with tests and debugging habits',
    level: 'intermediate',
    estimatedHours: 4,
    lessons: [
      {
        id: 'print-debugging',
        title: 'Print Debugging',
        description: 'Inspect values as your code runs',
        xp: 15,
        content: `
## Print debugging

Use print statements to see what your variables contain.
`,
        starterCode: `nums = [1, 2, 3]

# Print each number and its square
`,
        solution: `nums = [1, 2, 3]

for n in nums:
    print(n, n * n)`,
        exercise: {
          title: 'Exercise: Print Squares',
          description: 'Print number and square for each value.',
          tests: [
            {
              description: 'Should print 3 lines',
              minOutputLines: 3
            }
          ]
        }
      },
      {
        id: 'simple-tests',
        title: 'Simple Tests',
        description: 'Use expected output to verify behavior',
        xp: 15,
        content: `
## Simple tests

If a function returns the same input doubled, test it.
`,
        starterCode: `def double(x):
    return x * 2

print(double(4))
`,
        solution: `def double(x):
    return x * 2

print(double(4))`,
        exercise: {
          title: 'Exercise: Double Test',
          description: 'Should print 8.',
          tests: [
            {
              description: 'Should print 8',
              expectedOutput: '8'
            }
          ]
        }
      },
      {
        id: 'edge-cases',
        title: 'Edge Cases',
        description: 'Think about unusual inputs',
        xp: 20,
        content: `
## Edge cases

Try empty lists, zero values, or missing data.
`,
        starterCode: `items = []

# If empty, print "Empty"
`,
        solution: `items = []

if len(items) == 0:
    print("Empty")`,
        exercise: {
          title: 'Exercise: Empty List',
          description: 'Print Empty when list has no items.',
          tests: [
            {
              description: 'Should print Empty',
              expectedOutput: 'Empty'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'web-apis',
    title: 'Working with Web APIs',
    description: 'Learn how web data is structured and used',
    level: 'intermediate',
    estimatedHours: 5,
    lessons: [
      {
        id: 'json-basics',
        title: 'JSON Basics',
        description: 'Understand the most common web data format',
        xp: 20,
        content: `
## JSON

JSON looks like Python dictionaries and lists.
`,
        starterCode: `data = {"name": "Ada", "skills": ["python", "math"]}

# Print the first skill
`,
        solution: `data = {"name": "Ada", "skills": ["python", "math"]}

print(data["skills"][0])`,
        exercise: {
          title: 'Exercise: JSON Access',
          description: 'Print python.',
          tests: [
            {
              description: 'Should print python',
              expectedOutput: 'python'
            }
          ]
        }
      },
      {
        id: 'dict-to-json',
        title: 'Serialize Data',
        description: 'Convert dictionaries to JSON strings',
        xp: 20,
        content: `
## Serialize

\`\`\`python
import json
data = {"id": 1, "title": "Post"}
print(json.dumps(data))
\`\`\`
`,
        starterCode: `import json
data = {"id": 1, "title": "Post"}

# Print the JSON string
`,
        solution: `import json
data = {"id": 1, "title": "Post"}

print(json.dumps(data))`,
        exercise: {
          title: 'Exercise: JSON Dump',
          description: 'Print the JSON string.',
          tests: [
            {
              description: 'Should print JSON',
              minOutputLength: 5
            }
          ]
        }
      },
      {
        id: 'parse-json',
        title: 'Parse JSON',
        description: 'Load JSON into a dictionary',
        xp: 20,
        content: `
## Parse JSON

\`\`\`python
import json
text = '{"name": "Ada"}'
data = json.loads(text)
print(data["name"])
\`\`\`
`,
        starterCode: `import json
text = '{"name": "Ada"}'

# Parse and print the name
`,
        solution: `import json
text = '{"name": "Ada"}'

data = json.loads(text)
print(data["name"])`,
        exercise: {
          title: 'Exercise: JSON Load',
          description: 'Print Ada.',
          tests: [
            {
              description: 'Should print Ada',
              expectedOutput: 'Ada'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'data-viz',
    title: 'Data & Visualization',
    description: 'Work with numbers and present results clearly',
    level: 'advanced',
    estimatedHours: 6,
    lessons: [
      {
        id: 'summary-stats',
        title: 'Summary Stats',
        description: 'Compute mean, min, max',
        xp: 25,
        content: `
## Summary stats

\`\`\`python
nums = [2, 4, 8]
print(sum(nums) / len(nums))
\`\`\`
`,
        starterCode: `nums = [2, 4, 8]

# Print the average
`,
        solution: `nums = [2, 4, 8]

print(sum(nums) / len(nums))`,
        exercise: {
          title: 'Exercise: Average',
          description: 'Print 4.6666666667',
          tests: [
            {
              description: 'Should print something',
              minOutputLength: 1
            }
          ]
        }
      },
      {
        id: 'simple-chart',
        title: 'Text Charts',
        description: 'Visualize numbers using text',
        xp: 25,
        content: `
## Text charts

\`\`\`python
values = [3, 1, 4]
for v in values:
    print("#" * v)
\`\`\`
`,
        starterCode: `values = [3, 1, 4]

# Print bars using #
`,
        solution: `values = [3, 1, 4]

for v in values:
    print("#" * v)`,
        exercise: {
          title: 'Exercise: Bars',
          description: 'Print 3 lines of bars.',
          tests: [
            {
              description: 'Should print 3 lines',
              minOutputLines: 3
            }
          ]
        }
      },
      {
        id: 'normalize',
        title: 'Normalize Data',
        description: 'Scale values to a range',
        xp: 25,
        content: `
## Normalization

\`\`\`python
values = [10, 20, 30]
min_v = min(values)
max_v = max(values)
normalized = [(v - min_v) / (max_v - min_v) for v in values]
print(normalized)
\`\`\`
`,
        starterCode: `values = [10, 20, 30]

# Normalize values to 0-1 and print the list
`,
        solution: `values = [10, 20, 30]

min_v = min(values)
max_v = max(values)
normalized = [(v - min_v) / (max_v - min_v) for v in values]
print(normalized)`,
        exercise: {
          title: 'Exercise: Normalize',
          description: 'Print the normalized list.',
          tests: [
            {
              description: 'Should print a list',
              minOutputLength: 3
            }
          ]
        }
      }
    ]
  },
  {
    id: 'automation',
    title: 'Automation Patterns',
    description: 'Build scripts that save time',
    level: 'advanced',
    estimatedHours: 6,
    lessons: [
      {
        id: 'clean-text',
        title: 'Clean Text',
        description: 'Remove extra spaces and format strings',
        xp: 25,
        content: `
## Clean text

\`\`\`python
text = "  hello   world  "
clean = " ".join(text.split())
print(clean)
\`\`\`
`,
        starterCode: `text = "  hello   world  "

# Clean the text and print it
`,
        solution: `text = "  hello   world  "
clean = " ".join(text.split())
print(clean)`,
        exercise: {
          title: 'Exercise: Cleanup',
          description: 'Print cleaned text.',
          tests: [
            {
              description: 'Should print hello world',
              expectedOutput: 'hello world'
            }
          ]
        }
      },
      {
        id: 'batch-format',
        title: 'Batch Formatting',
        description: 'Apply changes to many values',
        xp: 25,
        content: `
## Batch formatting

\`\`\`python
names = ["ada", "grace"]
fixed = [n.title() for n in names]
print(fixed)
\`\`\`
`,
        starterCode: `names = ["ada", "grace"]

# Title-case the names and print the list
`,
        solution: `names = ["ada", "grace"]

fixed = [n.title() for n in names]
print(fixed)`,
        exercise: {
          title: 'Exercise: Title Case',
          description: 'Print the title‑cased list.',
          tests: [
            {
              description: 'Should print [\'Ada\', \'Grace\']',
              expectedOutput: "['Ada', 'Grace']"
            }
          ]
        }
      },
      {
        id: 'mini-report',
        title: 'Mini Report',
        description: 'Combine steps into a simple report',
        xp: 25,
        content: `
## Mini report

\`\`\`python
scores = [88, 92, 75]
avg = sum(scores) / len(scores)
print(f"Average: {avg}")
\`\`\`
`,
        starterCode: `scores = [88, 92, 75]

# Print the average in a message
`,
        solution: `scores = [88, 92, 75]
avg = sum(scores) / len(scores)
print(f"Average: {avg}")`,
        exercise: {
          title: 'Exercise: Average Report',
          description: 'Print the average message.',
          tests: [
            {
              description: 'Should print Average:',
              minOutputLength: 5
            }
          ]
        }
      }
    ]
  },
  {
    id: 'algorithms',
    title: 'Algorithms & Thinking',
    description: 'Build problem‑solving habits',
    level: 'advanced',
    estimatedHours: 7,
    lessons: [
      {
        id: 'linear-search',
        title: 'Linear Search',
        description: 'Find a value by scanning',
        xp: 25,
        content: `
## Linear search

\`\`\`python
items = [4, 7, 1]
target = 7
found = False
for item in items:
    if item == target:
        found = True

print(found)
\`\`\`
`,
        starterCode: `items = [4, 7, 1]
target = 7
found = False

# Set found to True if target is in items
`,
        solution: `items = [4, 7, 1]
target = 7
found = False

for item in items:
    if item == target:
        found = True

print(found)`,
        exercise: {
          title: 'Exercise: Search',
          description: 'Print True.',
          tests: [
            {
              description: 'Should print True',
              expectedOutput: 'True'
            }
          ]
        }
      },
      {
        id: 'sorting-intro',
        title: 'Sorting Basics',
        description: 'Order values and understand comparisons',
        xp: 25,
        content: `
## Sorting

\`\`\`python
nums = [3, 1, 2]
nums.sort()
print(nums)
\`\`\`
`,
        starterCode: `nums = [3, 1, 2]

# Sort and print
`,
        solution: `nums = [3, 1, 2]
nums.sort()
print(nums)`,
        exercise: {
          title: 'Exercise: Sort',
          description: 'Print [1, 2, 3].',
          tests: [
            {
              description: 'Should print [1, 2, 3]',
              expectedOutput: '[1, 2, 3]'
            }
          ]
        }
      },
      {
        id: 'big-o',
        title: 'Thinking About Efficiency',
        description: 'Understand why some solutions scale',
        xp: 20,
        content: `
## Efficiency

You don’t need math to get the idea: fewer steps is better when data grows.

Try counting operations in a loop and compare two approaches.
`,
        starterCode: `# Print OK to finish this lesson
`,
        solution: `print("OK")`,
        exercise: {
          title: 'Exercise: Done',
          description: 'Print OK.',
          tests: [
            {
              description: 'Should print OK',
              expectedOutput: 'OK'
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
