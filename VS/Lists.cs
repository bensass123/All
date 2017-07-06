using System.Collections.Generic;
using System;

class Lists {
    static void Main(string[] args)
    {
        List<string> names = new List<string>();

        names.Add("John");
        names.Add("Bill");
        
        foreach (string name in names) {
            Console.WriteLine("Name:\t\t" + name);
        }
    }
}