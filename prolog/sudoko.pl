onetoninelist(ls) :- member(1,ls)
                    ,member(2,ls)
		    ,member(3,ls)
		    ,member(4,ls)
		    ,member(5,ls)
		    ,member(6,ls)
		    ,member(7,ls)
		    ,member(8,ls)
		    ,member(9,ls).

onetonine(R,S,T,U,V,W,Y,Z) :- onetoninelist([R,S,T,U,V,W,X,Y,Z]).

sudoko(P,S) :- P = S, P = [[R1,R2,R3,R4,R5,R6,R7,R8,R9]
                          ,[S1,S2,S3,S4,S5,S6,S7,S8,S9]
			  ,[T1,T2,T3,T4,T5,T6,T7,T8,T9]
			  ,[U1,U2,U3,U4,U5,U6,U7,U8,U9]
			  ,[V1,V2,V3,V4,V5,V6,V7,V8,V9]
			  ,[W1,W2,W3,W4,W5,W6,W7,W8,W9]
			  ,[X1,X2,X3,X4,X5,X6,X7,X8,X9]
			  ,[Y1,Y2,Y3,Y4,Y5,Y6,Y7,Y8,Y9]
			  ,[Z1,Z2,Z3,Z4,Z5,Z6,Z7,Z8,Z9]]
               , LS1 = [R1,R2,R3,R4,R5,R6,R7,R8,R9]
               , LS2 = [S1,S2,S3,S4,S5,S6,S7,S8,S9]
	       , LS3 = [T1,T2,T3,T4,T5,T6,T7,T8,T9]
               , LS4 = [U1,U2,U3,U4,U5,U6,U7,U8,U9]
	       , LS5 = [V1,V2,V3,V4,V5,V6,V7,V8,V9]
	       , LS6 = [W1,W2,W3,W4,W5,W6,W7,W8,W9]
	       , LS7 = [X1,X2,X3,X4,X5,X6,X7,X8,X9]
	       , LS8 = [Y1,Y2,Y3,Y4,Y5,Y6,Y7,Y8,Y9]
	       , LS9 = [Z1,Z2,Z3,Z4,Z5,Z6,Z7,Z8,Z9]
	       , onetoninelist(LS1), onetoninelist(LS2)
	       , onetoninelist(LS3), onetoninelist(LS4)
	       , onetoninelist(LS5), onetoninelist(LS6)
	       , onetoninelist(LS7), onetoninelist(LS8)
	       , onetoninelist(LS9)
	       , onetonine(R1,R2,R3,S1,S2,S3,T1,T2,T3)
	       , onetonine(R4,R5,R6,S4,S5,S6,T4,T5,T6)
	       , onetonine(R7,R8,R9,S7,S8,S9,T7,T8,T9)
	       , onetonine(U1,U2,U3,V1,V2,V3,W1,W2,W3)
	       , onetonine(U4,U5,U6,V4,V5,V6,W4,W5,W6)
	       , onetonine(U7,U8,U9,V7,V8,V9,W7,W8,W9)
	       , onetonine(X1,X2,X3,Y1,Y2,Y3,Z1,Z2,Z3)
	       , onetonine(X4,X5,X6,Y4,Y5,Y6,Z4,Z5,Z6)
	       , onetonine(X7,X8,X9,Y7,Y8,Y9,Z7,Z8,Z9)
	       , onetonine(R1,S1,T1,U1,V1,W1,X1,Y1,Z1)
	       , onetonine(R2,S2,T2,U2,V2,W2,X2,Y2,Z2)
	       , onetonine(R3,S3,T3,U3,V3,W3,X3,Y3,Z3)
	       , onetonine(R4,S4,T4,U4,V4,W4,X4,Y4,Z4)
	       , onetonine(R5,S5,T5,U5,V5,W5,X5,Y5,Z5)
	       , onetonine(R6,S6,T6,U6,V6,W6,X6,Y6,Z6)
	       , onetonine(R7,S7,T7,U7,V7,W7,X7,Y7,Z7)
	       , onetonine(R8,S8,T8,U8,V8,W8,X8,Y8,Z8)
	       , onetonine(R9,S9,T9,U9,V9,W9,X9,Y9,Z9).
