/* ***************************************************************************
 *
 * BRIEF //
 *   Your firm is implementing its student management prototype in Python.
 *   It's a command-line program, which the registrar's office will use to
 *   add students to the database upon enrollment.
 *
 *   The program should prompt the user for a student's first name; last name;
 *   middle initial; physical address; email address; and phone number.
 *
 *   After each prompt, the program should wait for the user's input. 
 *
 *   Once the user has entered every piece of information, the program should
 *   print it all back to the console, and prompt the user to enter Y if the
 *   information is correct, or any other key otherwise.
 *
 *   For now, you should collect the user's response--i.e., y or otherwise--but
 *   don't worry about handling it. We'll get to that shorly.
 *
 ******************************************************************************/

// What function prints a message to the screen and waits for user input?
// Use it here to collect a student's information--first name, last name, etc.
// ***************************************************************************
// ...Your Code Here...

// Once you've gotten all of that, print it all back to the screen. 
// ***************************************************************************
// ...Your Code Here...

// Then, use the same function you used to prompt users for information to ask 
// them to confirm whether or not the information is correct. Save their 
// response, but don't worry about doing anything with it yet!
// ***************************************************************************
// ...Your Code Here...

//student's first name; last name;
 //*   middle initial; physical address; email address; and phone number.

using System;

public class Program {

    static void Main(string[] args)
    {
        System.Console.WriteLine("First Name");
        String firstname = System.Console.ReadLine();
        System.Console.WriteLine("Last Name");
        String lastname = System.Console.ReadLine();
        System.Console.WriteLine("Middle Initial");
        String middlei = System.Console.ReadLine();
        System.Console.WriteLine("Address");
        String address = System.Console.ReadLine();
        System.Console.WriteLine("Phone #");
        String phone = System.Console.ReadLine();
        System.Console.WriteLine("Email");
        String email = System.Console.ReadLine();

        System.Console.WriteLine(System.Environment.NewLine + "---------------------------------------------" + System.Environment.NewLine + "First:\t\t\t" + firstname + System.Environment.NewLine+ "Middle:\t\t\t" +middlei + System.Environment.NewLine + "Last:\t\t\t" +lastname + System.Environment.NewLine + "Address:\t\t" + address  + System.Environment.NewLine + "Phone Number:\t\t" + phone + System.Environment.NewLine + "Email:\t\t\t" +email+ System.Environment.NewLine + "---------------------------------------------" );
    }
    
}