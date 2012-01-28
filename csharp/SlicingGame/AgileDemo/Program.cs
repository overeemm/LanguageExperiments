using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AgileDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            System.Console.WriteLine("Enter number of items");
            string items = Console.ReadLine();
            int itemsint;

            if (!int.TryParse(items, out itemsint))
            {
                System.Console.WriteLine("Not a valid number.");
                return;
            }

            System.Console.WriteLine("Enter price");
            string price = Console.ReadLine();

            double pricedouble;

            if (!double.TryParse(price, out pricedouble))
            {
                System.Console.WriteLine("Not a valid price.");
                return;
            }

            System.Console.WriteLine("Enter state");
            string state = Console.ReadLine();
            State parsedstate;
            if (!Calculation.StateLookup(state, out parsedstate))
            {
                System.Console.WriteLine("Not a valid state.");
                return;
            }

            Calculation c = new Calculation();

            double output = c.Calculate(itemsint, pricedouble, parsedstate);

            System.Console.WriteLine("The result is");
            System.Console.WriteLine(output.ToString());
            System.Console.WriteLine("The state is");
            System.Console.WriteLine(state);

            Console.ReadLine();
        }
    }
}
