conc := Object clone
conc run := method ( for(i, 1, 10, 1, i println; yield) )

canc := Object clone
canc ran := method ( for(j, 11, 20, 1, j println; yield) )

conc @@run; canc @@ran

Coroutine currentCoroutine pause
