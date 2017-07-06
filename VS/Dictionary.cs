using System.Collections.Generic;
using System;

class Dictionaries {
    static void Main(string[] args)
    {
        Dictionary<string, string> names = new Dictionary<string, string>();

        names.Add("firstName","John");
        names.Add("lastName","Williams");

        string firstName;
        names.TryGetValue("firstName", out firstName);
        Console.WriteLine(firstName);

        foreach (var entry in names) {
            Console.WriteLine("The student's" + entry.Key + " is: \t\t"  + entry.Value);
        }
    }
}