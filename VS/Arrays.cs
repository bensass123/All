//arrays

using System;

class Arrays {
    static void Main(string[] args) {
        string[] names = new string[10];
        names[0] = "Mike";
        names[1] = "Carries";
        names[2] = "Mikey";
        names[3] = "Cars";
        names[4] = "Mie";
        names[5] = "Cies";
        names[6] = "ke";
        names[7] = "Cries";
        names[8] = "Mik";
        names[9] = "Ca";


        foreach (string name in names) {
            Console.WriteLine("The Current name is: " + name);
        }
    }
}