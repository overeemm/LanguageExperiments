namespace Test01

import System

class Duck (IQuackFu) :

	def QuackInvoke(name as string, args as (object)) as object:
		if name == "Kwak":
			for nummer in range(args[0]): 
				print "kwak"
		if name == "Spring":
			for nummer in range(args[0]) :
				print "poing"
		return null

	def QuackSet(name as string, parameters as (object), value) as object:
		pass
	
	def QuackGet(name as string, parameters as (object)) as object:
		pass