using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;

using AgileDemo;

namespace TestProject1
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            Calculation c = new Calculation();
            double output = c.Calculate(1, 100, State.UT);

            // 97

            Assert.AreEqual(106.85 , output);
        }

        [TestMethod]
        public void TestMethod2()
        {
            Calculation c = new Calculation();
            double output = c.Calculate(5, 100, State.AL);

            Assert.AreEqual(520, output);
        }

        [TestMethod]
        public void TestMethod3()
        {
            Calculation c = new Calculation();
            double output = c.Calculate(8, 1000, State.AL);

            Assert.AreEqual(7737.6, output);
        }

        [TestMethod]
        public void TestMethod4()
        {
            Calculation c = new Calculation();
            double output = c.Calculate(100, 1000, State.AL);

            Assert.AreEqual(88400, output);
        }
    }
}
