// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// matches valid phone numbers
test('check 123-456-7890 is phone number', () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});
test('check (123) 456-7890 is phone number', () => {
    expect(functions.isPhoneNumber("(123) 456-7890")).toBe(true);
});
test('check 1234567890 is not phone number', () => {
    expect(functions.isPhoneNumber("1234567890")).toBe(false);
});
test('check 123456-789 is not phone number', () => {
    expect(functions.isPhoneNumber("123456-789")).toBe(false);
});

// matches valid emails
test('check john@gmail.com is email', () => {
    expect(functions.isEmail("john@gmail.com")).toBe(true);
});
test('check alice_123@gmail.co is email', () => {
    expect(functions.isEmail("alice_123@gmail.co")).toBe(true);
});
test('check bob@gmail.c is not email', () => {
    expect(functions.isEmail("bob@gmail.c")).toBe(false);
});
test('check .@example.com is not email', () => {
    expect(functions.isEmail(".@example.com")).toBe(false);
});

/**
 * The password's first character must be a letter, it must contain at least * 4 characters and no more than 15 characters and no characters other than * * letters, numbers and the underscore may be used
 */
test('check Hello123 is a password', () => {
    expect(functions.isStrongPassword("Hello123")).toBe(true);
});
test('check world_hello is a password', () => {
    expect(functions.isStrongPassword("world_hello")).toBe(true);
});
test('check 123Hello is not a password', () => {
    expect(functions.isStrongPassword("123Hello")).toBe(false);
});
test('check _word is not a password', () => {
    expect(functions.isStrongPassword("_word")).toBe(false);
});

// 	This regular expressions matches dates of the form XX / XX / YYYY where 
// XX can be 1 or 2 digits long and YYYY is always 4 digits long.
test('check 05/21/2023 is a date', () => {
    expect(functions.isDate("05/21/2023")).toBe(true);
});
test('check 1/1/2022 is a date', () => {
    expect(functions.isDate("1/1/2022")).toBe(true);
});
test('check 2000/09/06 is not a date', () => {
    expect(functions.isDate("2000/09/06")).toBe(false);
});
test('check 20-11-2000 is not a date', () => {
    expect(functions.isDate("20-11-2000")).toBe(false);
});

// Matches valid 3 or 6 character hex codes used for HTML or CSS.
test('check #FFA500 is a hexColor', () => {
    expect(functions.isHexColor("#FFA500")).toBe(true);
});
test('check 2F4 is a hexColor', () => {
    expect(functions.isHexColor("2F4")).toBe(true);
});
test('check G12B89 is not a hexColor', () => {
    expect(functions.isHexColor("G12B89")).toBe(false);
});
test('check #FFFFF is not a hexColor', () => {
    expect(functions.isHexColor("#FFFFF")).toBe(false);
});