# Password Generation

A JavaScript program to generate a system generated password and username using user details like name, mobile, id, etc.

## User details

1. First name
2. Last name
3. Date of Birth
4. Mobile Number
5. ID Proof(1/3 oprtions)

## Password Requirements

1. Fetch last two characters of last name.
2. Fetch first two characters of first name.
3. Fetch odd place digits of mobile number, add them. Add two digits of sum together. Return first digit of that sum.
4. Reverse the first and last digits of date and year respectively.
5. Fetch all vowels from ID proof.
6. Fetch all the unique even numbers and sort them in ascending order.

## Username Requirements

1. Fetch first two characters of first name.
2. Fetch last two characters of last name.
3. Add any four digit random number at end.

## Example

1. First Name - `Ayush`.
2. Last Name - `Gupta`.
3. Mobile Number - `7877791648`
4. Date of Birth - `06-06-1997`
5. ID Proof - `PAN`: `A891UAB7B35DUE73BD`

### Password Generation Result

1. Fetch last two characters of last name - `ta`
2. Fetch first two characters of first name - `Ay`
3. Fetch odd place digits of mobile number, add them. Add two digits of sum together. Return first digit of that sum.

* Odd Place Digits - `77714`
* Sum of odd place digits - `7+7+7+1+4 = 26`
* Sum of digits of sum - `6+2 = 8`

4. Date of Birth - `70`
5. Vowels of ID - `AUAUE`
6. Unique Even numbers - `8`
7. Password - `taAy970AUAUE8`

### Username Generation Result

1. Fetch first two characters of first name - `Ay`.
2. Fetch last two characters of last name - `ta`
3. Any for digit random number, say `2913`.
4. Username - `AyGu2913`.
