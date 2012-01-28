Matrix := Object clone do (
  storage := list()  
  dim := method(x,y,
           storage = List clone
           for(i, 1, x, 1, storage append(list()))
           storage foreach(i, v, for(i, 1, y, 1, v append(nil)))
         )
  get := method(x,y, storage at(x-1) at(y-1))
  set := method(x,y,value, storage at(x-1) atPut(y-1,value) )
  
  horsize := method(storage size)
  versize := method(storage at(1) size)

  trans := method(
    mattrans := Matrix clone
    mattrans dim (versize, horsize)
    for(i, 1, horsize, 1, for(j, 1, versize, 1, mattrans set(j,i, self get(i,j))))
    mattrans
  )
)


mat := Matrix clone
mat dim(10,12)
mat set(5,6,10)
mat get(5,6) println

matnew := mat trans

matnew get(6,5) println
