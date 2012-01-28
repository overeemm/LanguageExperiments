using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AgileDemo
{
    public enum State { UT, NV, TX, AL, CA }

    public class Calculation
    {
        private Dictionary<State, double> states = new Dictionary<State, double>();


        public Calculation()
        {

            states.Add(State.UT, 1.0685);
            states.Add(State.NV, 1.08);
            states.Add(State.TX, 1.0625);
            states.Add(State.AL, 1.04);
            states.Add(State.CA, 1.0825);
        }

        public double Calculate(int amount, double price, State state)
        {
            int inta = amount;
            double intp = price;

            double total = inta * intp;

            double brutototal = total;
            //if (total > 1000)
            //    _abovethousand = true;

            total = total * states[state];

            if (brutototal >= 50000)
                total = total * 0.85;
            else if (brutototal >= 10000)
                total = total * 0.9;
            else if (brutototal >= 7000)
                total = total * 0.93;
            else if (brutototal > 5000)
                total = total * 0.95;
            else if (brutototal > 1000)
                total = total * 0.97;

            return total;
        }


        public static bool StateLookup(string state, out State parsed)
        {
            if ("UT".Equals(state))
            {
                parsed = State.UT;
                return true;
            }
            if ("NV".Equals(state))
            {
                parsed = State.NV; return true;
            }
            if ("TX".Equals(state))
            {
                parsed = State.TX; return true;
            }
            if ("AL".Equals(state))
            {
                parsed = State.AL; return true;
            }
            if ("CA".Equals(state))
            {
                parsed = State.CA; return true;
            }
            parsed = State.UT;
            return false;
        }

    }
}
