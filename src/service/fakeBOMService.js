const bomRelationships = [
    {
        "BomLevel": 1,
        "ParentKey": "A060A0050",
        "id": "A060A0050",
        "ParentDescription": "VH 1000 ASS 1.66 SQM X 1 NOS 1030HT",
        "ChildKey": "A060A0050A061A0060",
        "Child": "A061A0060",
        "ChildDescription": "VH 1000 BODY 1030      HT(BOSCH 250 LPM)",
        "AsslyQty": 1
    },
    {
        "BomLevel": 1,
        "ParentKey": "A060A0050",
        "id": "A060A0050",
        "ParentDescription": "VH 1000 ASS 1.66 SQM X 1 NOS 1030HT",
        "ChildKey": "A060A0050A06300030",
        "Child": "A06300030",
        "ChildDescription": "VH 1000 HEAD(STD PAPER)",
        "AsslyQty": 1
    },
    {
        "BomLevel": 1,
        "ParentKey": "A060A0050",
        "id": "A060A0050",
        "ParentDescription": "VH 1000 ASS 1.66 SQM X 1 NOS 1030HT",
        "ChildKey": "A060A0050A06C00020",
        "Child": "A06C00020",
        "ChildDescription": "VH 1000 CHAIN &        SCRAPER 1MTR",
        "AsslyQty": 84
    },
    {
        "BomLevel": 1,
        "ParentKey": "A060A0050",
        "id": "A060A0050",
        "ParentDescription": "VH 1000 ASS 1.66 SQM X 1 NOS 1030HT",
        "ChildKey": "A060A0050A06JA0040",
        "Child": "A06JA0040",
        "ChildDescription": "VH 1000 BRK TANK VOL   675 LITS",
        "AsslyQty": 1
    },
    {
        "BomLevel": 1,
        "ParentKey": "A060A0050",
        "id": "A060A0050",
        "ParentDescription": "VH 1000 ASS 1.66 SQM X 1 NOS 1030HT",
        "ChildKey": "A060A0050A06M00200",
        "Child": "A06M00200",
        "ChildDescription": "DIFFUSER 400 X 400 X   100 HT (PORT 100 NB)",
        "AsslyQty": 1
    },
    {
        "BomLevel": 1,
        "ParentKey": "A060A0050",
        "id": "A060A0050",
        "ParentDescription": "VH 1000 ASS 1.66 SQM X 1 NOS 1030HT",
        "ChildKey": "A060A0050A06N90010",
        "Child": "A06N90010",
        "ChildDescription": "VH 1000 PNEUMATICS",
        "AsslyQty": 1
    },
    {
        "BomLevel": 1,
        "ParentKey": "A060A0050",
        "id": "A060A0050",
        "ParentDescription": "VH 1000 ASS 1.66 SQM X 1 NOS 1030HT",
        "ChildKey": "A060A0050A06O90010",
        "Child": "A06O90010",
        "ChildDescription": "VH 1000 ELECTRICALS",
        "AsslyQty": 1
    },
    {
        "BomLevel": 1,
        "ParentKey": "A060A0050",
        "id": "A060A0050",
        "ParentDescription": "VH 1000 ASS 1.66 SQM X 1 NOS 1030HT",
        "ChildKey": "A060A0050A27000070",
        "Child": "A27000070",
        "ChildDescription": "DUST BIN 1100 L 500 W   500 H",
        "AsslyQty": 1
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A061A0060",
        "id": "A061A0060",
        "ParentDescription": "VH 1000 BODY 1030      HT(BOSCH 250 LPM)",
        "ChildKey": "A060A0050A061A0060A061A0070",
        "Child": "A061A0070",
        "ChildDescription": "VH 1000 BTM TANK 1030  HT VOL 2000 LITS",
        "AsslyQty": 1
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A061A0060",
        "id": "A061A0060",
        "ParentDescription": "VH 1000 BODY 1030      HT(BOSCH 250 LPM)",
        "ChildKey": "A060A0050A061A0060A06BA0010",
        "Child": "A06BA0010",
        "ChildDescription": "VH 1.66 SQM GRILL WITH    CHAMBER DETAILS",
        "AsslyQty": 1
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06300030",
        "id": "A06300030",
        "ParentDescription": "VH 1000 HEAD(STD PAPER)",
        "ChildKey": "A060A0050A06300030A06301010",
        "Child": "A06301010",
        "ChildDescription": "VH 1000 HEAD(STD PAPER) MANUFACTURING ASSLY",
        "AsslyQty": 1
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06300030",
        "id": "A06300030",
        "ParentDescription": "VH 1000 HEAD(STD PAPER)",
        "ChildKey": "A060A0050A06300030A06301020",
        "Child": "A06301020",
        "ChildDescription": "VH 1000 HEAD(STD PAPER) VEERAJA SCOPE B/O",
        "AsslyQty": 1
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06C00020",
        "id": "A06C00020",
        "ParentDescription": "VH 1000 CHAIN &        SCRAPER 1MTR",
        "ChildKey": "A060A0050A06C000200101011",
        "Child": "0101011",
        "ChildDescription": "HEX BOLT M8 X 25 L, HT",
        "AsslyQty": 4
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06C00020",
        "id": "A06C00020",
        "ParentDescription": "VH 1000 CHAIN &        SCRAPER 1MTR",
        "ChildKey": "A060A0050A06C000200102015",
        "Child": "0102015",
        "ChildDescription": "HEX NUT M8, HT",
        "AsslyQty": 4
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06C00020",
        "id": "A06C00020",
        "ParentDescription": "VH 1000 CHAIN &        SCRAPER 1MTR",
        "ChildKey": "A060A0050A06C000200103003",
        "Child": "0103003",
        "ChildDescription": "SPRING WASHER, SIZE- M8, M.S , PLATED",
        "AsslyQty": 4
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06C00020",
        "id": "A06C00020",
        "ParentDescription": "VH 1000 CHAIN &        SCRAPER 1MTR",
        "ChildKey": "A060A0050A06C000200103015",
        "Child": "0103015",
        "ChildDescription": "PLAIN WASHER, SIZE- M8, M.S , PLATED",
        "AsslyQty": 4
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06C00020",
        "id": "A06C00020",
        "ParentDescription": "VH 1000 CHAIN &        SCRAPER 1MTR",
        "ChildKey": "A060A0050A06C000200201002",
        "Child": "0201002",
        "ChildDescription": "ANGLE MS 35X35X5 LOCAL MAKE - 2.6 KG/MTR",
        "AsslyQty": 1
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06C00020",
        "id": "A06C00020",
        "ParentDescription": "VH 1000 CHAIN &        SCRAPER 1MTR",
        "ChildKey": "A060A0050A06C000200603001",
        "Child": "0603001",
        "ChildDescription": "CHAIN 2.5 INCH CONVEYOR BUSH TYPE",
        "AsslyQty": 0.25
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06JA0040",
        "id": "A06JA0040",
        "ParentDescription": "VH 1000 BRK TANK VOL   675 LITS",
        "ChildKey": "A060A0050A06JA00400101012",
        "Child": "0101012",
        "ChildDescription": "HEX BOLT STD M8 X 25 L, M.S, PLATED.",
        "AsslyQty": 8
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06JA0040",
        "id": "A06JA0040",
        "ParentDescription": "VH 1000 BRK TANK VOL   675 LITS",
        "ChildKey": "A060A0050A06JA00400101033",
        "Child": "0101033",
        "ChildDescription": "HEX BOLT STD M12 X 45 L MS PLATED",
        "AsslyQty": 4
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06JA0040",
        "id": "A06JA0040",
        "ParentDescription": "VH 1000 BRK TANK VOL   675 LITS",
        "ChildKey": "A060A0050A06JA00400103003",
        "Child": "0103003",
        "ChildDescription": "SPRING WASHER, SIZE- M8, M.S , PLATED",
        "AsslyQty": 8
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06JA0040",
        "id": "A06JA0040",
        "ParentDescription": "VH 1000 BRK TANK VOL   675 LITS",
        "ChildKey": "A060A0050A06JA00400103007",
        "Child": "0103007",
        "ChildDescription": "SPRING WASHER, SIZE-   M12, M.S , PLATED",
        "AsslyQty": 4
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06JA0040",
        "id": "A06JA0040",
        "ParentDescription": "VH 1000 BRK TANK VOL   675 LITS",
        "ChildKey": "A060A0050A06JA00400103015",
        "Child": "0103015",
        "ChildDescription": "PLAIN WASHER, SIZE- M8, M.S , PLATED",
        "AsslyQty": 16
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06JA0040",
        "id": "A06JA0040",
        "ParentDescription": "VH 1000 BRK TANK VOL   675 LITS",
        "ChildKey": "A060A0050A06JA00400103019",
        "Child": "0103019",
        "ChildDescription": "PLAIN WASHER, SIZE- M12, M.S , PLATED",
        "AsslyQty": 4
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06JA0040",
        "id": "A06JA0040",
        "ParentDescription": "VH 1000 BRK TANK VOL   675 LITS",
        "ChildKey": "A060A0050A06JA00400201002",
        "Child": "0201002",
        "ChildDescription": "ANGLE MS 35X35X5 LOCAL MAKE - 2.6 KG/MTR",
        "AsslyQty": 9
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06JA0040",
        "id": "A06JA0040",
        "ParentDescription": "VH 1000 BRK TANK VOL   675 LITS",
        "ChildKey": "A060A0050A06JA00400203006",
        "Child": "0203006",
        "ChildDescription": "PLATE MS 5 MM THK HR",
        "AsslyQty": 0.9
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06JA0040",
        "id": "A06JA0040",
        "ParentDescription": "VH 1000 BRK TANK VOL   675 LITS",
        "ChildKey": "A060A0050A06JA00400203016",
        "Child": "0203016",
        "ChildDescription": "SHEET MS (14 G)  2 MM  THK",
        "AsslyQty": 0.1
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06JA0040",
        "id": "A06JA0040",
        "ParentDescription": "VH 1000 BRK TANK VOL   675 LITS",
        "ChildKey": "A060A0050A06JA00400203019",
        "Child": "0203019",
        "ChildDescription": "SHEET MS (10 G)  3.15  MM THK",
        "AsslyQty": 4.3
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06JA0040",
        "id": "A06JA0040",
        "ParentDescription": "VH 1000 BRK TANK VOL   675 LITS",
        "ChildKey": "A060A0050A06JA00400205018",
        "Child": "0205018",
        "ChildDescription": "FLAT MS STD 50 MM WIDTH 8  MM THK",
        "AsslyQty": 0.31
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06JA0040",
        "id": "A06JA0040",
        "ParentDescription": "VH 1000 BRK TANK VOL   675 LITS",
        "ChildKey": "A060A0050A06JA00400206021",
        "Child": "0206021",
        "ChildDescription": "BAR MS STD DIA 8  MM       BRIGHT - 0.39  KG/MTR",
        "AsslyQty": 0.5
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06JA0040",
        "id": "A06JA0040",
        "ParentDescription": "VH 1000 BRK TANK VOL   675 LITS",
        "ChildKey": "A060A0050A06JA00400301003",
        "Child": "0301003",
        "ChildDescription": "PIPE 100 NB  ERW B     CLASS ROUND MS",
        "AsslyQty": 0.75
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06JA0040",
        "id": "A06JA0040",
        "ParentDescription": "VH 1000 BRK TANK VOL   675 LITS",
        "ChildKey": "A060A0050A06JA00400301026",
        "Child": "0301026",
        "ChildDescription": "PIPE 50 NB  ERW B CLASS ROUND MS",
        "AsslyQty": 0.2
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06JA0040",
        "id": "A06JA0040",
        "ParentDescription": "VH 1000 BRK TANK VOL   675 LITS",
        "ChildKey": "A060A0050A06JA00400301030",
        "Child": "0301030",
        "ChildDescription": "PIPE 80 NB  ERW B CLASS ROUND MS",
        "AsslyQty": 0.2
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06JA0040",
        "id": "A06JA0040",
        "ParentDescription": "VH 1000 BRK TANK VOL   675 LITS",
        "ChildKey": "A060A0050A06JA00400303001",
        "Child": "0303001",
        "ChildDescription": "SOCKET MS 1\" BSP",
        "AsslyQty": 1
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06JA0040",
        "id": "A06JA0040",
        "ParentDescription": "VH 1000 BRK TANK VOL   675 LITS",
        "ChildKey": "A060A0050A06JA00400304003",
        "Child": "0304003",
        "ChildDescription": "PLUG, M.S., 1\"  BSP",
        "AsslyQty": 1
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06JA0040",
        "id": "A06JA0040",
        "ParentDescription": "VH 1000 BRK TANK VOL   675 LITS",
        "ChildKey": "A060A0050A06JA00400305019",
        "Child": "0305019",
        "ChildDescription": "FLANGE 80 NB OPEN      VEERAJA STD MS",
        "AsslyQty": 1
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06JA0040",
        "id": "A06JA0040",
        "ParentDescription": "VH 1000 BRK TANK VOL   675 LITS",
        "ChildKey": "A060A0050A06JA0040M32103066",
        "Child": "M32103066",
        "ChildDescription": "LIFTING HOOK 125X75 8  MM THK",
        "AsslyQty": 4
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06M00200",
        "id": "A06M00200",
        "ParentDescription": "DIFFUSER 400 X 400 X   100 HT (PORT 100 NB)",
        "ChildKey": "A060A0050A06M002000102006",
        "Child": "0102006",
        "ChildDescription": "HEX NUT M12, M.S,      STANDARD",
        "AsslyQty": 4
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06M00200",
        "id": "A06M00200",
        "ParentDescription": "DIFFUSER 400 X 400 X   100 HT (PORT 100 NB)",
        "ChildKey": "A060A0050A06M002000201002",
        "Child": "0201002",
        "ChildDescription": "ANGLE MS 35X35X5 LOCAL MAKE - 2.6 KG/MTR",
        "AsslyQty": 1.1
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06M00200",
        "id": "A06M00200",
        "ParentDescription": "DIFFUSER 400 X 400 X   100 HT (PORT 100 NB)",
        "ChildKey": "A060A0050A06M002000203006",
        "Child": "0203006",
        "ChildDescription": "PLATE MS 5 MM THK HR",
        "AsslyQty": 0.09
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06M00200",
        "id": "A06M00200",
        "ParentDescription": "DIFFUSER 400 X 400 X   100 HT (PORT 100 NB)",
        "ChildKey": "A060A0050A06M002000203015",
        "Child": "0203015",
        "ChildDescription": "CHQ PLATE MS 4 MM   THK WT 31.270 KG/M2",
        "AsslyQty": 0.04
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06M00200",
        "id": "A06M00200",
        "ParentDescription": "DIFFUSER 400 X 400 X   100 HT (PORT 100 NB)",
        "ChildKey": "A060A0050A06M002000203019",
        "Child": "0203019",
        "ChildDescription": "SHEET MS (10 G)  3.15  MM THK",
        "AsslyQty": 1
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06M00200",
        "id": "A06M00200",
        "ParentDescription": "DIFFUSER 400 X 400 X   100 HT (PORT 100 NB)",
        "ChildKey": "A060A0050A06M002000301003",
        "Child": "0301003",
        "ChildDescription": "PIPE 100 NB  ERW B     CLASS ROUND MS",
        "AsslyQty": 0.1
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06M00200",
        "id": "A06M00200",
        "ParentDescription": "DIFFUSER 400 X 400 X   100 HT (PORT 100 NB)",
        "ChildKey": "A060A0050A06M00200A24090001",
        "Child": "A24090001",
        "ChildDescription": "100 NB FLG BOTH OPEN   WITH STY 20 GASKET",
        "AsslyQty": 1
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06M00200",
        "id": "A06M00200",
        "ParentDescription": "DIFFUSER 400 X 400 X   100 HT (PORT 100 NB)",
        "ChildKey": "A060A0050A06M00200SSDHA0805",
        "Child": "SSDHA0805",
        "ChildDescription": "HEX BOLT STD SET, M8 X 25 L MS PLATED",
        "AsslyQty": 4
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06N90010",
        "id": "A06N90010",
        "ParentDescription": "VH 1000 PNEUMATICS",
        "ChildKey": "A060A0050A06N90010SSDG20000",
        "Child": "SSDG20000",
        "ChildDescription": "GAUGE VACUUM 2.5\" WITH SWITCH",
        "AsslyQty": 1
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06N90010",
        "id": "A06N90010",
        "ParentDescription": "VH 1000 PNEUMATICS",
        "ChildKey": "A060A0050A06N90010SSDG30000",
        "Child": "SSDG30000",
        "ChildDescription": "PNUMATIC ASS 1/4\" FRL + 1/4\" SOLENOID + BRACKET",
        "AsslyQty": 1
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06O90010",
        "id": "A06O90010",
        "ParentDescription": "VH 1000 ELECTRICALS",
        "ChildKey": "A060A0050A06O900101103004",
        "Child": 1103004,
        "ChildDescription": "PROXIMITY SWITCH M18 X 08 24V DC TECKNIK MAKE PNP",
        "AsslyQty": 1
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A06O90010",
        "id": "A06O90010",
        "ParentDescription": "VH 1000 ELECTRICALS",
        "ChildKey": "A060A0050A06O900101104002",
        "Child": 1104002,
        "ChildDescription": "LIMIT SWITCH TEKNIC    MODEL : NG1SM-510",
        "AsslyQty": 1
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A27000070",
        "id": "A27000070",
        "ParentDescription": "DUST BIN 1100 L 500 W   500 H",
        "ChildKey": "A060A0050A270000700101012",
        "Child": "0101012",
        "ChildDescription": "HEX BOLT STD M8 X 25 L, M.S, PLATED.",
        "AsslyQty": 16
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A27000070",
        "id": "A27000070",
        "ParentDescription": "DUST BIN 1100 L 500 W   500 H",
        "ChildKey": "A060A0050A270000700103003",
        "Child": "0103003",
        "ChildDescription": "SPRING WASHER, SIZE- M8, M.S , PLATED",
        "AsslyQty": 16
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A27000070",
        "id": "A27000070",
        "ParentDescription": "DUST BIN 1100 L 500 W   500 H",
        "ChildKey": "A060A0050A270000700103015",
        "Child": "0103015",
        "ChildDescription": "PLAIN WASHER, SIZE- M8, M.S , PLATED",
        "AsslyQty": 16
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A27000070",
        "id": "A27000070",
        "ParentDescription": "DUST BIN 1100 L 500 W   500 H",
        "ChildKey": "A060A0050A270000700201002",
        "Child": "0201002",
        "ChildDescription": "ANGLE MS 35X35X5 LOCAL MAKE - 2.6 KG/MTR",
        "AsslyQty": 3.4
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A27000070",
        "id": "A27000070",
        "ParentDescription": "DUST BIN 1100 L 500 W   500 H",
        "ChildKey": "A060A0050A270000700203019",
        "Child": "0203019",
        "ChildDescription": "SHEET MS (10 G)  3.15  MM THK",
        "AsslyQty": 2.5
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A27000070",
        "id": "A27000070",
        "ParentDescription": "DUST BIN 1100 L 500 W   500 H",
        "ChildKey": "A060A0050A270000700205045",
        "Child": "0205045",
        "ChildDescription": "FLAT MS STD 100 MM     WIDTH 12 MM THK BRIGHT",
        "AsslyQty": 0.45
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A27000070",
        "id": "A27000070",
        "ParentDescription": "DUST BIN 1100 L 500 W   500 H",
        "ChildKey": "A060A0050A270000700301011",
        "Child": "0301011",
        "ChildDescription": "PIPE 20 NB  ERW B CLASS ROUND MS",
        "AsslyQty": 1.5
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A27000070",
        "id": "A27000070",
        "ParentDescription": "DUST BIN 1100 L 500 W   500 H",
        "ChildKey": "A060A0050A270000700303008",
        "Child": "0303008",
        "ChildDescription": "SOCKET, M.S., 3/4\" BSP",
        "AsslyQty": 1
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A27000070",
        "id": "A27000070",
        "ParentDescription": "DUST BIN 1100 L 500 W   500 H",
        "ChildKey": "A060A0050A270000700304009",
        "Child": "0304009",
        "ChildDescription": "PLUG, M.S., 3/4\"  BSP",
        "AsslyQty": 1
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A27000070",
        "id": "A27000070",
        "ParentDescription": "DUST BIN 1100 L 500 W   500 H",
        "ChildKey": "A060A0050A270000700308004",
        "Child": "0308004",
        "ChildDescription": "PIPE BEND 20 NB  SHORT MS C CLASS ISS FULL LEN",
        "AsslyQty": 2
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A27000070",
        "id": "A27000070",
        "ParentDescription": "DUST BIN 1100 L 500 W   500 H",
        "ChildKey": "A060A0050A270000702001003",
        "Child": 2001003,
        "ChildDescription": "FIXED WHEEL, C.I., 4\"  DIA X1-1/4\" WIDE",
        "AsslyQty": 2
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A27000070",
        "id": "A27000070",
        "ParentDescription": "DUST BIN 1100 L 500 W   500 H",
        "ChildKey": "A060A0050A270000702001006",
        "Child": 2001006,
        "ChildDescription": "SWIVEL WHEEL CI 4\"  DIA X 1-1/4\" WIDE",
        "AsslyQty": 2
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A27000070",
        "id": "A27000070",
        "ParentDescription": "DUST BIN 1100 L 500 W   500 H",
        "ChildKey": "A060A0050A270000702001013",
        "Child": 2001013,
        "ChildDescription": "SWIVEL WHEEL CI 3\"  DIA X 1-1/4\" WIDE",
        "AsslyQty": 2
    },
    {
        "BomLevel": 2,
        "ParentKey": "A060A0050A27000070",
        "id": "A27000070",
        "ParentDescription": "DUST BIN 1100 L 500 W   500 H",
        "ChildKey": "A060A0050A270000702001017",
        "Child": 2001017,
        "ChildDescription": "FIXED WHEEL CI 3\"  DIA X 1-1/4\" WIDE",
        "AsslyQty": 2
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A061A0060A061A0070",
        "id": "A061A0070",
        "ParentDescription": "VH 1000 BTM TANK 1030  HT VOL 2000 LITS",
        "ChildKey": "A060A0050A061A0060A061A00700101012",
        "Child": "0101012",
        "ChildDescription": "HEX BOLT STD M8 X 25 L, M.S, PLATED.",
        "AsslyQty": 16
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A061A0060A061A0070",
        "id": "A061A0070",
        "ParentDescription": "VH 1000 BTM TANK 1030  HT VOL 2000 LITS",
        "ChildKey": "A060A0050A061A0060A061A00700103003",
        "Child": "0103003",
        "ChildDescription": "SPRING WASHER, SIZE- M8, M.S , PLATED",
        "AsslyQty": 16
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A061A0060A061A0070",
        "id": "A061A0070",
        "ParentDescription": "VH 1000 BTM TANK 1030  HT VOL 2000 LITS",
        "ChildKey": "A060A0050A061A0060A061A00700103015",
        "Child": "0103015",
        "ChildDescription": "PLAIN WASHER, SIZE- M8, M.S , PLATED",
        "AsslyQty": 48
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A061A0060A061A0070",
        "id": "A061A0070",
        "ParentDescription": "VH 1000 BTM TANK 1030  HT VOL 2000 LITS",
        "ChildKey": "A060A0050A061A0060A061A00700117008",
        "Child": "0117008",
        "ChildDescription": "HINGE 4\" MS",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A061A0060A061A0070",
        "id": "A061A0070",
        "ParentDescription": "VH 1000 BTM TANK 1030  HT VOL 2000 LITS",
        "ChildKey": "A060A0050A061A0060A061A00700201002",
        "Child": "0201002",
        "ChildDescription": "ANGLE MS 35X35X5 LOCAL MAKE - 2.6 KG/MTR",
        "AsslyQty": 17
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A061A0060A061A0070",
        "id": "A061A0070",
        "ParentDescription": "VH 1000 BTM TANK 1030  HT VOL 2000 LITS",
        "ChildKey": "A060A0050A061A0060A061A00700201003",
        "Child": "0201003",
        "ChildDescription": "ANGLE MS 50X50X5 LOCAL MAKE - 3.8 KG/MTR",
        "AsslyQty": 15
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A061A0060A061A0070",
        "id": "A061A0070",
        "ParentDescription": "VH 1000 BTM TANK 1030  HT VOL 2000 LITS",
        "ChildKey": "A060A0050A061A0060A061A00700202002",
        "Child": "0202002",
        "ChildDescription": "CHANNEL  ISMC  MS 75X40 LOCAL MAKE -6.8  KG/MTR",
        "AsslyQty": 2
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A061A0060A061A0070",
        "id": "A061A0070",
        "ParentDescription": "VH 1000 BTM TANK 1030  HT VOL 2000 LITS",
        "ChildKey": "A060A0050A061A0060A061A00700202003",
        "Child": "0202003",
        "ChildDescription": "CHANNEL  ISMC  MS 100X50 LOCAL MAKE -9.2  KG/MTR",
        "AsslyQty": 0.7
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A061A0060A061A0070",
        "id": "A061A0070",
        "ParentDescription": "VH 1000 BTM TANK 1030  HT VOL 2000 LITS",
        "ChildKey": "A060A0050A061A0060A061A00700203006",
        "Child": "0203006",
        "ChildDescription": "PLATE MS 5 MM THK HR",
        "AsslyQty": 3.25
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A061A0060A061A0070",
        "id": "A061A0070",
        "ParentDescription": "VH 1000 BTM TANK 1030  HT VOL 2000 LITS",
        "ChildKey": "A060A0050A061A0060A061A00700203015",
        "Child": "0203015",
        "ChildDescription": "CHQ PLATE MS 4 MM   THK WT 31.270 KG/M2",
        "AsslyQty": 2
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A061A0060A061A0070",
        "id": "A061A0070",
        "ParentDescription": "VH 1000 BTM TANK 1030  HT VOL 2000 LITS",
        "ChildKey": "A060A0050A061A0060A061A00700203019",
        "Child": "0203019",
        "ChildDescription": "SHEET MS (10 G)  3.15  MM THK",
        "AsslyQty": 7
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A061A0060A061A0070",
        "id": "A061A0070",
        "ParentDescription": "VH 1000 BTM TANK 1030  HT VOL 2000 LITS",
        "ChildKey": "A060A0050A061A0060A061A00700205016",
        "Child": "0205016",
        "ChildDescription": "FLAT MS STD 50 MM WIDTH 5  MM THK",
        "AsslyQty": 9.5
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A061A0060A061A0070",
        "id": "A061A0070",
        "ParentDescription": "VH 1000 BTM TANK 1030  HT VOL 2000 LITS",
        "ChildKey": "A060A0050A061A0060A061A00700206021",
        "Child": "0206021",
        "ChildDescription": "BAR MS STD DIA 8  MM       BRIGHT - 0.39  KG/MTR",
        "AsslyQty": 3
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A061A0060A061A0070",
        "id": "A061A0070",
        "ParentDescription": "VH 1000 BTM TANK 1030  HT VOL 2000 LITS",
        "ChildKey": "A060A0050A061A0060A061A00700301031",
        "Child": "0301031",
        "ChildDescription": "PIPE 15 NB ERW A CLASS ROUND MS ( 22 OD )",
        "AsslyQty": 2
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A061A0060A061A0070",
        "id": "A061A0070",
        "ParentDescription": "VH 1000 BTM TANK 1030  HT VOL 2000 LITS",
        "ChildKey": "A060A0050A061A0060A061A0070A06190050",
        "Child": "A06190050",
        "ChildDescription": "VH 1000 LEVEL GAUGE    ASSLY(750 HT )",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A061A0060A061A0070",
        "id": "A061A0070",
        "ParentDescription": "VH 1000 BTM TANK 1030  HT VOL 2000 LITS",
        "ChildKey": "A060A0050A061A0060A061A0070A061A0030",
        "Child": "A061A0030",
        "ChildDescription": "VH 1000 BASEFRAME",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A061A0060A061A0070",
        "id": "A061A0070",
        "ParentDescription": "VH 1000 BTM TANK 1030  HT VOL 2000 LITS",
        "ChildKey": "A060A0050A061A0060A061A0070A06F00060",
        "Child": "A06F00060",
        "ChildDescription": "VH 1000 PAPER MTG ASS",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A061A0060A061A0070",
        "id": "A061A0070",
        "ParentDescription": "VH 1000 BTM TANK 1030  HT VOL 2000 LITS",
        "ChildKey": "A060A0050A061A0060A061A0070M15100140",
        "Child": "M15100140",
        "ChildDescription": "LEVEL GAUGE MOUNTED    ROUNDED 150 OD 10 THK",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A061A0060A061A0070",
        "id": "A061A0070",
        "ParentDescription": "VH 1000 BTM TANK 1030  HT VOL 2000 LITS",
        "ChildKey": "A060A0050A061A0060A061A0070SSDL00003",
        "Child": "SSDL00003",
        "ChildDescription": "LIFTING HOOK 125X100   12THK MS.",
        "AsslyQty": 4
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A061A0060A06BA0010",
        "id": "A06BA0010",
        "ParentDescription": "VH 1.66 SQM GRILL WITH    CHAMBER DETAILS",
        "ChildKey": "A060A0050A061A0060A06BA0010A06B00080",
        "Child": "A06B00080",
        "ChildDescription": "VH 0.66 SQM GRILL       DETAILS",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A061A0060A06BA0010",
        "id": "A06BA0010",
        "ParentDescription": "VH 1.66 SQM GRILL WITH    CHAMBER DETAILS",
        "ChildKey": "A060A0050A061A0060A06BA0010A06B00100",
        "Child": "A06B00100",
        "ChildDescription": "VH 1 SQM GRILL         DETAILS",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A061A0060A06BA0010",
        "id": "A06BA0010",
        "ParentDescription": "VH 1.66 SQM GRILL WITH    CHAMBER DETAILS",
        "ChildKey": "A060A0050A061A0060A06BA0010A06BA0020",
        "Child": "A06BA0020",
        "ChildDescription": "VH 1.66 SQM  CHAMBER   DETAILS",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A061A0060A06BA0010",
        "id": "A06BA0010",
        "ParentDescription": "VH 1.66 SQM GRILL WITH    CHAMBER DETAILS",
        "ChildKey": "A060A0050A061A0060A06BA0010M04100080",
        "Child": "M04100080",
        "ChildDescription": "BUSH OD 20 ID 9 THK 25 CLR",
        "AsslyQty": 44
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A061A0060A06BA0010",
        "id": "A06BA0010",
        "ParentDescription": "VH 1.66 SQM GRILL WITH    CHAMBER DETAILS",
        "ChildKey": "A060A0050A061A0060A06BA0010M05100120",
        "Child": "M05100120",
        "ChildDescription": "BUSH TAPPED 19 OD M10  THRD 25 THK",
        "AsslyQty": 8
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06300030A06301010",
        "id": "A06301010",
        "ParentDescription": "VH 1000 HEAD(STD PAPER) MANUFACTURING ASSLY",
        "ChildKey": "A060A0050A06300030A06301010A06400030",
        "Child": "A06400030",
        "ChildDescription": "VH 1000 HEAD FAB",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06300030A06301010",
        "id": "A06301010",
        "ParentDescription": "VH 1000 HEAD(STD PAPER) MANUFACTURING ASSLY",
        "ChildKey": "A060A0050A06300030A06301010A06500020",
        "Child": "A06500020",
        "ChildDescription": "VH 1000 DRIVE SHAFT ASS",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06300030A06301010",
        "id": "A06301010",
        "ParentDescription": "VH 1000 HEAD(STD PAPER) MANUFACTURING ASSLY",
        "ChildKey": "A060A0050A06300030A06301010A06600030",
        "Child": "A06600030",
        "ChildDescription": "VH 1000 GEARBOX ASS -  TRASMATIX 4028",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06300030A06301010",
        "id": "A06301010",
        "ParentDescription": "VH 1000 HEAD(STD PAPER) MANUFACTURING ASSLY",
        "ChildKey": "A060A0050A06300030A06301010A06700020",
        "Child": "A06700020",
        "ChildDescription": "VH 1000 WINDING SHAFT  ASS",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06300030A06301010",
        "id": "A06301010",
        "ParentDescription": "VH 1000 HEAD(STD PAPER) MANUFACTURING ASSLY",
        "ChildKey": "A060A0050A06300030A06301010A06800020",
        "Child": "A06800020",
        "ChildDescription": "VH 1000 ROLLER SHAFT   ASS",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06300030A06301010",
        "id": "A06301010",
        "ParentDescription": "VH 1000 HEAD(STD PAPER) MANUFACTURING ASSLY",
        "ChildKey": "A060A0050A06300030A06301010A06900020",
        "Child": "A06900020",
        "ChildDescription": "VH 1000 FREE END SHAFT ASS",
        "AsslyQty": 2
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06300030A06301010",
        "id": "A06301010",
        "ParentDescription": "VH 1000 HEAD(STD PAPER) MANUFACTURING ASSLY",
        "ChildKey": "A060A0050A06300030A06301010A06A00030",
        "Child": "A06A00030",
        "ChildDescription": "VH 1000 CHAIN COVER    DRIVE",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06300030A06301010",
        "id": "A06301010",
        "ParentDescription": "VH 1000 HEAD(STD PAPER) MANUFACTURING ASSLY",
        "ChildKey": "A060A0050A06300030A06301010A06A00040",
        "Child": "A06A00040",
        "ChildDescription": "VH 1000 CHAIN COVER    WINDER",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06300030A06301010",
        "id": "A06301010",
        "ParentDescription": "VH 1000 HEAD(STD PAPER) MANUFACTURING ASSLY",
        "ChildKey": "A060A0050A06300030A06301010A06E00020",
        "Child": "A06E00020",
        "ChildDescription": "VH 1000 DOOR DETAILS",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06300030A06301010",
        "id": "A06301010",
        "ParentDescription": "VH 1000 HEAD(STD PAPER) MANUFACTURING ASSLY",
        "ChildKey": "A060A0050A06300030A06301010A06G00020",
        "Child": "A06G00020",
        "ChildDescription": "WIPER FOR SCRAPER FOR  1000 P/W VAC FILTER",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06300030A06301010",
        "id": "A06301010",
        "ParentDescription": "VH 1000 HEAD(STD PAPER) MANUFACTURING ASSLY",
        "ChildKey": "A060A0050A06300030A06301010A06R00030",
        "Child": "A06R00030",
        "ChildDescription": "VH 1000 SCRAPER FLAT   ASS",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06300030A06301020",
        "id": "A06301020",
        "ParentDescription": "VH 1000 HEAD(STD PAPER) VEERAJA SCOPE B/O",
        "ChildKey": "A060A0050A06300030A063010200401141",
        "Child": "0401141",
        "ChildDescription": "MOTOR STD 0.25 HP 1500 RPM FL 415 V AC",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06300030A06301020",
        "id": "A06301020",
        "ParentDescription": "VH 1000 HEAD(STD PAPER) VEERAJA SCOPE B/O",
        "ChildKey": "A060A0050A06300030A063010200501002",
        "Child": "0501002",
        "ChildDescription": "GEAR BOX TRANS.4028,RATIO:1232 FRAME 63 (0.25 HP)",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06300030A06301020",
        "id": "A06301020",
        "ParentDescription": "VH 1000 HEAD(STD PAPER) VEERAJA SCOPE B/O",
        "ChildKey": "A060A0050A06300030A06301020M11100010",
        "Child": "M11100010",
        "ChildDescription": "SLIP CLUTCH 65M2 MODEL 20 BORE DIA",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06300030A06301020",
        "id": "A06301020",
        "ParentDescription": "VH 1000 HEAD(STD PAPER) VEERAJA SCOPE B/O",
        "ChildKey": "A060A0050A06300030A06301020M11100020",
        "Child": "M11100020",
        "ChildDescription": "SLIP CLUTCH 125M2 MODEL 25 BORE DIA",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06JA0040M32103066",
        "id": "M32103066",
        "ParentDescription": "LIFTING HOOK 125X75 8  MM THK",
        "ChildKey": "A060A0050A06JA0040M321030660203008",
        "Child": "0203008",
        "ChildDescription": "PLATE MS 8 MM THK, HR",
        "AsslyQty": 0.01
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06M00200A24090001",
        "id": "A24090001",
        "ParentDescription": "100 NB FLG BOTH OPEN   WITH STY 20 GASKET",
        "ChildKey": "A060A0050A06M00200A240900010101053",
        "Child": "0101053",
        "ChildDescription": "HEX BOLT STD M16 X 75  L MS PLATED",
        "AsslyQty": 8
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06M00200A24090001",
        "id": "A24090001",
        "ParentDescription": "100 NB FLG BOTH OPEN   WITH STY 20 GASKET",
        "ChildKey": "A060A0050A06M00200A240900010102009",
        "Child": "0102009",
        "ChildDescription": "HEX NUT M16, M.S,      STANDARD",
        "AsslyQty": 8
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06M00200A24090001",
        "id": "A24090001",
        "ParentDescription": "100 NB FLG BOTH OPEN   WITH STY 20 GASKET",
        "ChildKey": "A060A0050A06M00200A240900010103009",
        "Child": "0103009",
        "ChildDescription": "SPRING WASHER, SIZE-   M16, M.S , PLATED",
        "AsslyQty": 8
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06M00200A24090001",
        "id": "A24090001",
        "ParentDescription": "100 NB FLG BOTH OPEN   WITH STY 20 GASKET",
        "ChildKey": "A060A0050A06M00200A240900010103022",
        "Child": "0103022",
        "ChildDescription": "PLAIN WASHER, SIZE- M16, M.S , PLATED",
        "AsslyQty": 8
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06M00200A24090001",
        "id": "A24090001",
        "ParentDescription": "100 NB FLG BOTH OPEN   WITH STY 20 GASKET",
        "ChildKey": "A060A0050A06M00200A240900010305021",
        "Child": "0305021",
        "ChildDescription": "FLANGE 100 NB OPEN      VEERAJA STD MS",
        "AsslyQty": 2
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06M00200A24090001",
        "id": "A24090001",
        "ParentDescription": "100 NB FLG BOTH OPEN   WITH STY 20 GASKET",
        "ChildKey": "A060A0050A06M00200A240900010311028",
        "Child": "0311028",
        "ChildDescription": "GASKET RING, 100 NB,   STYLE 20",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06M00200SSDHA0805",
        "id": "SSDHA0805",
        "ParentDescription": "HEX BOLT STD SET, M8 X 25 L MS PLATED",
        "ChildKey": "A060A0050A06M00200SSDHA08050101012",
        "Child": "0101012",
        "ChildDescription": "HEX BOLT STD M8 X 25 L, M.S, PLATED.",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06M00200SSDHA0805",
        "id": "SSDHA0805",
        "ParentDescription": "HEX BOLT STD SET, M8 X 25 L MS PLATED",
        "ChildKey": "A060A0050A06M00200SSDHA08050102002",
        "Child": "0102002",
        "ChildDescription": "HEX NUT M8, M.S,       STANDARD",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06M00200SSDHA0805",
        "id": "SSDHA0805",
        "ParentDescription": "HEX BOLT STD SET, M8 X 25 L MS PLATED",
        "ChildKey": "A060A0050A06M00200SSDHA08050103003",
        "Child": "0103003",
        "ChildDescription": "SPRING WASHER, SIZE- M8, M.S , PLATED",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06M00200SSDHA0805",
        "id": "SSDHA0805",
        "ParentDescription": "HEX BOLT STD SET, M8 X 25 L MS PLATED",
        "ChildKey": "A060A0050A06M00200SSDHA08050103015",
        "Child": "0103015",
        "ChildDescription": "PLAIN WASHER, SIZE- M8, M.S , PLATED",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06N90010SSDG20000",
        "id": "SSDG20000",
        "ParentDescription": "GAUGE VACUUM 2.5\" WITH SWITCH",
        "ChildKey": "A060A0050A06N90010SSDG200000301011",
        "Child": "0301011",
        "ChildDescription": "PIPE 20 NB  ERW B CLASS ROUND MS",
        "AsslyQty": 0.5
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06N90010SSDG20000",
        "id": "SSDG20000",
        "ParentDescription": "GAUGE VACUUM 2.5\" WITH SWITCH",
        "ChildKey": "A060A0050A06N90010SSDG200000302014",
        "Child": "0302014",
        "ChildDescription": "NIPPLE 3/4\" BSP MS",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06N90010SSDG20000",
        "id": "SSDG20000",
        "ParentDescription": "GAUGE VACUUM 2.5\" WITH SWITCH",
        "ChildKey": "A060A0050A06N90010SSDG200000303003",
        "Child": "0303003",
        "ChildDescription": "SOCKET MS 1/4\" BSP     HEAVY",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06N90010SSDG20000",
        "id": "SSDG20000",
        "ParentDescription": "GAUGE VACUUM 2.5\" WITH SWITCH",
        "ChildKey": "A060A0050A06N90010SSDG200000303008",
        "Child": "0303008",
        "ChildDescription": "SOCKET, M.S., 3/4\" BSP",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06N90010SSDG20000",
        "id": "SSDG20000",
        "ParentDescription": "GAUGE VACUUM 2.5\" WITH SWITCH",
        "ChildKey": "A060A0050A06N90010SSDG200000303009",
        "Child": "0303009",
        "ChildDescription": "SOCKET, M.S., 3/8\" BSP",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06N90010SSDG20000",
        "id": "SSDG20000",
        "ParentDescription": "GAUGE VACUUM 2.5\" WITH SWITCH",
        "ChildKey": "A060A0050A06N90010SSDG200000307005",
        "Child": "0307005",
        "ChildDescription": "ELBOW 3/4\" BSP         THREADING MS",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06N90010SSDG20000",
        "id": "SSDG20000",
        "ParentDescription": "GAUGE VACUUM 2.5\" WITH SWITCH",
        "ChildKey": "A060A0050A06N90010SSDG200000801005",
        "Child": "0801005",
        "ChildDescription": "BALL VALVE, 20 NB,     AUDCO, 20-A44-46-T-BT",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06N90010SSDG20000",
        "id": "SSDG20000",
        "ParentDescription": "GAUGE VACUUM 2.5\" WITH SWITCH",
        "ChildKey": "A060A0050A06N90010SSDG200001102001",
        "Child": 1102001,
        "ChildDescription": "VACUUM SWITCH INDFOSS  MAKE MODEL : 121 RT",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06N90010SSDG20000",
        "id": "SSDG20000",
        "ParentDescription": "GAUGE VACUUM 2.5\" WITH SWITCH",
        "ChildKey": "A060A0050A06N90010SSDG200002302001",
        "Child": 2302001,
        "ChildDescription": "VACUUM GAUGE, 0-760 MM OF HG, 2-1/2\" BOTTOM MTG.",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06N90010SSDG20000",
        "id": "SSDG20000",
        "ParentDescription": "GAUGE VACUUM 2.5\" WITH SWITCH",
        "ChildKey": "A060A0050A06N90010SSDG20000SSDIA020C",
        "Child": "SSDIA020C",
        "ChildDescription": "THREADED PIPE 20NB ONE SIDE 150MM LENGTH MS",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06N90010SSDG30000",
        "id": "SSDG30000",
        "ParentDescription": "PNUMATIC ASS 1/4\" FRL + 1/4\" SOLENOID + BRACKET",
        "ChildKey": "A060A0050A06N90010SSDG300000101007",
        "Child": "0101007",
        "ChildDescription": "HEX BOLT M6 X 45 L, M.S, PLATED.",
        "AsslyQty": 2
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06N90010SSDG30000",
        "id": "SSDG30000",
        "ParentDescription": "PNUMATIC ASS 1/4\" FRL + 1/4\" SOLENOID + BRACKET",
        "ChildKey": "A060A0050A06N90010SSDG300000101104",
        "Child": "0101104",
        "ChildDescription": "HEX BOLT M5 X 35 L MS  PLATED",
        "AsslyQty": 2
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06N90010SSDG30000",
        "id": "SSDG30000",
        "ParentDescription": "PNUMATIC ASS 1/4\" FRL + 1/4\" SOLENOID + BRACKET",
        "ChildKey": "A060A0050A06N90010SSDG300000115009",
        "Child": "0115009",
        "ChildDescription": "SCREW CHEESE HEAD M 4 X 12 L MS PLATED",
        "AsslyQty": 4
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06N90010SSDG30000",
        "id": "SSDG30000",
        "ParentDescription": "PNUMATIC ASS 1/4\" FRL + 1/4\" SOLENOID + BRACKET",
        "ChildKey": "A060A0050A06N90010SSDG300000203019",
        "Child": "0203019",
        "ChildDescription": "SHEET MS (10 G)  3.15  MM THK",
        "AsslyQty": 0.05
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06N90010SSDG30000",
        "id": "SSDG30000",
        "ParentDescription": "PNUMATIC ASS 1/4\" FRL + 1/4\" SOLENOID + BRACKET",
        "ChildKey": "A060A0050A06N90010SSDG300000207004",
        "Child": "0207004",
        "ChildDescription": "BAR SQ MS SQ 12  MM    BLACK",
        "AsslyQty": 0.18
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06N90010SSDG30000",
        "id": "SSDG30000",
        "ParentDescription": "PNUMATIC ASS 1/4\" FRL + 1/4\" SOLENOID + BRACKET",
        "ChildKey": "A060A0050A06N90010SSDG300000901001",
        "Child": "0901001",
        "ChildDescription": "PNUMATIC FRL FESTO     FRC-1/4-D-MINI",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06N90010SSDG30000",
        "id": "SSDG30000",
        "ParentDescription": "PNUMATIC ASS 1/4\" FRL + 1/4\" SOLENOID + BRACKET",
        "ChildKey": "A060A0050A06N90010SSDG300000902001",
        "Child": "0902001",
        "ChildDescription": "PNUMATIC VALVE FESTO   MFH-5-1/4 W/O COIL",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06N90010SSDG30000",
        "id": "SSDG30000",
        "ParentDescription": "PNUMATIC ASS 1/4\" FRL + 1/4\" SOLENOID + BRACKET",
        "ChildKey": "A060A0050A06N90010SSDG300000902002",
        "Child": "0902002",
        "ChildDescription": "PNUMATIC SOLENOID COIL FESTO 24V MSFG-24/42-50/60",
        "AsslyQty": 1
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06N90010SSDG30000",
        "id": "SSDG30000",
        "ParentDescription": "PNUMATIC ASS 1/4\" FRL + 1/4\" SOLENOID + BRACKET",
        "ChildKey": "A060A0050A06N90010SSDG300000904006",
        "Child": "0904006",
        "ChildDescription": "PNUMATIC SILENCER BRASS 1/4\" LOCAL MAKE",
        "AsslyQty": 2
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06N90010SSDG30000",
        "id": "SSDG30000",
        "ParentDescription": "PNUMATIC ASS 1/4\" FRL + 1/4\" SOLENOID + BRACKET",
        "ChildKey": "A060A0050A06N90010SSDG300000904009",
        "Child": "0904009",
        "ChildDescription": "PNUMATIC CONNECTOR PU-8 X 1/4\" BSP LOCAL MAKE",
        "AsslyQty": 12
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06N90010SSDG30000",
        "id": "SSDG30000",
        "ParentDescription": "PNUMATIC ASS 1/4\" FRL + 1/4\" SOLENOID + BRACKET",
        "ChildKey": "A060A0050A06N90010SSDG300000904013",
        "Child": "0904013",
        "ChildDescription": "PNUMATIC TUBE PU-8(8OD & 6ID)LOCAL MAKE",
        "AsslyQty": 3.5
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06N90010SSDG30000",
        "id": "SSDG30000",
        "ParentDescription": "PNUMATIC ASS 1/4\" FRL + 1/4\" SOLENOID + BRACKET",
        "ChildKey": "A060A0050A06N90010SSDG300000904014",
        "Child": "0904014",
        "ChildDescription": "PNUMATIC TEE PU-8 LOCAL MAKE",
        "AsslyQty": 2
    },
    {
        "BomLevel": 3,
        "ParentKey": "A060A0050A06N90010SSDG30000",
        "id": "SSDG30000",
        "ParentDescription": "PNUMATIC ASS 1/4\" FRL + 1/4\" SOLENOID + BRACKET",
        "ChildKey": "A060A0050A06N90010SSDG300001021002",
        "Child": 1021002,
        "ChildDescription": "PVC CABLE TIE          ,SIZE:200MM LENGTH, LOCAL",
        "AsslyQty": 8
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A061A0070A06190050",
        "id": "A06190050",
        "ParentDescription": "VH 1000 LEVEL GAUGE    ASSLY(750 HT )",
        "ChildKey": "A060A0050A061A0060A061A0070A061900500101003",
        "Child": "0101003",
        "ChildDescription": "HEX BOLT STD M6 X 20 L, M.S, PLATED.",
        "AsslyQty": 4
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A061A0070A06190050",
        "id": "A06190050",
        "ParentDescription": "VH 1000 LEVEL GAUGE    ASSLY(750 HT )",
        "ChildKey": "A060A0050A061A0060A061A0070A061900500103002",
        "Child": "0103002",
        "ChildDescription": "SPRING WASHER SIZE M6  MS PLATED",
        "AsslyQty": 4
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A061A0070A06190050",
        "id": "A06190050",
        "ParentDescription": "VH 1000 LEVEL GAUGE    ASSLY(750 HT )",
        "ChildKey": "A060A0050A061A0060A061A0070A061900500103014",
        "Child": "0103014",
        "ChildDescription": "PLAIN WASHER, SIZE- M6, M.S , PLATED",
        "AsslyQty": 4
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A061A0070A06190050",
        "id": "A06190050",
        "ParentDescription": "VH 1000 LEVEL GAUGE    ASSLY(750 HT )",
        "ChildKey": "A060A0050A061A0060A061A0070A061900500203006",
        "Child": "0203006",
        "ChildDescription": "PLATE MS 5 MM THK HR",
        "AsslyQty": 0.03
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A061A0070A06190050",
        "id": "A06190050",
        "ParentDescription": "VH 1000 LEVEL GAUGE    ASSLY(750 HT )",
        "ChildKey": "A060A0050A061A0060A061A0070A061900500203009",
        "Child": "0203009",
        "ChildDescription": "PLATE MS 10MM THK, HR",
        "AsslyQty": 0.02
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A061A0070A06190050",
        "id": "A06190050",
        "ParentDescription": "VH 1000 LEVEL GAUGE    ASSLY(750 HT )",
        "ChildKey": "A060A0050A061A0060A061A0070A061900500301003",
        "Child": "0301003",
        "ChildDescription": "PIPE 100 NB  ERW B     CLASS ROUND MS",
        "AsslyQty": 0.85
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A061A0070A06190050",
        "id": "A06190050",
        "ParentDescription": "VH 1000 LEVEL GAUGE    ASSLY(750 HT )",
        "ChildKey": "A060A0050A061A0060A061A0070A061900500301022",
        "Child": "0301022",
        "ChildDescription": "PIPE 40 NB  ERW B CLASS ROUND MS",
        "AsslyQty": 0.35
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A061A0070A06190050",
        "id": "A06190050",
        "ParentDescription": "VH 1000 LEVEL GAUGE    ASSLY(750 HT )",
        "ChildKey": "A060A0050A061A0060A061A0070A061900500304006",
        "Child": "0304006",
        "ChildDescription": "PLUG, M.S., 1-1/2\"  BSP",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A061A0070A06190050",
        "id": "A06190050",
        "ParentDescription": "VH 1000 LEVEL GAUGE    ASSLY(750 HT )",
        "ChildKey": "A060A0050A061A0060A061A0070A061900500801012",
        "Child": "0801012",
        "ChildDescription": "BALL VALVE, 40 NB,     AUDCO, 40-A44-46-T-BT",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A061A0070A06190050",
        "id": "A06190050",
        "ParentDescription": "VH 1000 LEVEL GAUGE    ASSLY(750 HT )",
        "ChildKey": "A060A0050A061A0060A061A0070A061900501106001",
        "Child": 1106001,
        "ChildDescription": "REED SWITCH FILPRO MAKE MODEL: L1 M 18R 24 V DC, ",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A061A0070A06190050",
        "id": "A06190050",
        "ParentDescription": "VH 1000 LEVEL GAUGE    ASSLY(750 HT )",
        "ChildKey": "A060A0050A061A0060A061A0070A061900501106002",
        "Child": 1106002,
        "ChildDescription": "REED SWITCH FILPRO MAKE MODEL: L1 M 18F 24 V DC, ",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A061A0070A06190050",
        "id": "A06190050",
        "ParentDescription": "VH 1000 LEVEL GAUGE    ASSLY(750 HT )",
        "ChildKey": "A060A0050A061A0060A061A0070A061900502303017",
        "Child": 2303017,
        "ChildDescription": "LEVEL GAUGE 750 MM  HT KALAYADI MAKE",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A061A0070A061A0030",
        "id": "A061A0030",
        "ParentDescription": "VH 1000 BASEFRAME",
        "ChildKey": "A060A0050A061A0060A061A0070A061A00300202003",
        "Child": "0202003",
        "ChildDescription": "CHANNEL  ISMC  MS 100X50 LOCAL MAKE -9.2  KG/MTR",
        "AsslyQty": 7.5
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A061A0070A06F00060",
        "id": "A06F00060",
        "ParentDescription": "VH 1000 PAPER MTG ASS",
        "ChildKey": "A060A0050A061A0060A061A0070A06F000600103052",
        "Child": "0103052",
        "ChildDescription": "PLAIN WASHER, SIZE- 3/8 (3MM THK 25OD 10 ID)",
        "AsslyQty": 4
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A061A0070A06F00060",
        "id": "A06F00060",
        "ParentDescription": "VH 1000 PAPER MTG ASS",
        "ChildKey": "A060A0050A061A0060A061A0070A06F000600201002",
        "Child": "0201002",
        "ChildDescription": "ANGLE MS 35X35X5 LOCAL MAKE - 2.6 KG/MTR",
        "AsslyQty": 2.9
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A061A0070A06F00060",
        "id": "A06F00060",
        "ParentDescription": "VH 1000 PAPER MTG ASS",
        "ChildKey": "A060A0050A061A0060A061A0070A06F000600203019",
        "Child": "0203019",
        "ChildDescription": "SHEET MS (10 G)  3.15  MM THK",
        "AsslyQty": 0
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A061A0070A06F00060",
        "id": "A06F00060",
        "ParentDescription": "VH 1000 PAPER MTG ASS",
        "ChildKey": "A060A0050A061A0060A061A0070A06F000600205011",
        "Child": "0205011",
        "ChildDescription": "FLAT MS STD 40 MM WIDTH 8  MM THK",
        "AsslyQty": 0.18
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A061A0070A06F00060",
        "id": "A06F00060",
        "ParentDescription": "VH 1000 PAPER MTG ASS",
        "ChildKey": "A060A0050A061A0060A061A0070A06F000600205016",
        "Child": "0205016",
        "ChildDescription": "FLAT MS STD 50 MM WIDTH 5  MM THK",
        "AsslyQty": 5.97
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A061A0070A06F00060",
        "id": "A06F00060",
        "ParentDescription": "VH 1000 PAPER MTG ASS",
        "ChildKey": "A060A0050A061A0060A061A0070A06F000600206022",
        "Child": "0206022",
        "ChildDescription": "BAR MS DIA 10 MM       BRIGHT - 0.62 KG/MTR",
        "AsslyQty": 2.6
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A061A0070A06F00060",
        "id": "A06F00060",
        "ParentDescription": "VH 1000 PAPER MTG ASS",
        "ChildKey": "A060A0050A061A0060A061A0070A06F000600301031",
        "Child": "0301031",
        "ChildDescription": "PIPE 15 NB ERW A CLASS ROUND MS ( 22 OD )",
        "AsslyQty": 1.01
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A061A0070A06F00060",
        "id": "A06F00060",
        "ParentDescription": "VH 1000 PAPER MTG ASS",
        "ChildKey": "A060A0050A061A0060A061A0070A06F00060SSDFB1001",
        "Child": "SSDFB1001",
        "ChildDescription": "FILTER PAPER 70 GSM X  1000 P/W X 1 MTR",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A061A0070M15100140",
        "id": "M15100140",
        "ParentDescription": "LEVEL GAUGE MOUNTED    ROUNDED 150 OD 10 THK",
        "ChildKey": "A060A0050A061A0060A061A0070M151001400203010",
        "Child": "0203010",
        "ChildDescription": "PLATE MS 12 MM THK,  HR",
        "AsslyQty": 0.02
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A061A0070SSDL00003",
        "id": "SSDL00003",
        "ParentDescription": "LIFTING HOOK 125X100   12THK MS.",
        "ChildKey": "A060A0050A061A0060A061A0070SSDL000030203010",
        "Child": "0203010",
        "ChildDescription": "PLATE MS 12 MM THK,  HR",
        "AsslyQty": 0.01
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A06BA0010A06B00080",
        "id": "A06B00080",
        "ParentDescription": "VH 0.66 SQM GRILL       DETAILS",
        "ChildKey": "A060A0050A061A0060A06BA0010A06B000800104006",
        "Child": "0104006",
        "ChildDescription": "ALLEN BOLT M8 X 30 L,  M.S, PLATED.",
        "AsslyQty": 24
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A06BA0010A06B00080",
        "id": "A06B00080",
        "ParentDescription": "VH 0.66 SQM GRILL       DETAILS",
        "ChildKey": "A060A0050A061A0060A06BA0010A06B000800204001",
        "Child": "0204001",
        "ChildDescription": "SHEET PERFORATED, 16 G M.S, 1/8\" MM DIA HOLE,",
        "AsslyQty": 0.72
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A06BA0010A06B00080",
        "id": "A06B00080",
        "ParentDescription": "VH 0.66 SQM GRILL       DETAILS",
        "ChildKey": "A060A0050A061A0060A06BA0010A06B000800205004",
        "Child": "0205004",
        "ChildDescription": "FLAT MS STD 25  MM         WIDTH 5 MM THK BRIGHT",
        "AsslyQty": 26.2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A06BA0010A06B00080",
        "id": "A06B00080",
        "ParentDescription": "VH 0.66 SQM GRILL       DETAILS",
        "ChildKey": "A060A0050A061A0060A06BA0010A06B000800206023",
        "Child": "0206023",
        "ChildDescription": "BAR MS STD DIA 12 MM       BRIGHT - 0.89 KG/MTR",
        "AsslyQty": 5
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A06BA0010A06B00100",
        "id": "A06B00100",
        "ParentDescription": "VH 1 SQM GRILL         DETAILS",
        "ChildKey": "A060A0050A061A0060A06BA0010A06B001000104006",
        "Child": "0104006",
        "ChildDescription": "ALLEN BOLT M8 X 30 L,  M.S, PLATED.",
        "AsslyQty": 28
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A06BA0010A06B00100",
        "id": "A06B00100",
        "ParentDescription": "VH 1 SQM GRILL         DETAILS",
        "ChildKey": "A060A0050A061A0060A06BA0010A06B001000204001",
        "Child": "0204001",
        "ChildDescription": "SHEET PERFORATED, 16 G M.S, 1/8\" MM DIA HOLE,",
        "AsslyQty": 1.1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A06BA0010A06B00100",
        "id": "A06B00100",
        "ParentDescription": "VH 1 SQM GRILL         DETAILS",
        "ChildKey": "A060A0050A061A0060A06BA0010A06B001000205004",
        "Child": "0205004",
        "ChildDescription": "FLAT MS STD 25  MM         WIDTH 5 MM THK BRIGHT",
        "AsslyQty": 42
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A06BA0010A06B00100",
        "id": "A06B00100",
        "ParentDescription": "VH 1 SQM GRILL         DETAILS",
        "ChildKey": "A060A0050A061A0060A06BA0010A06B001000206023",
        "Child": "0206023",
        "ChildDescription": "BAR MS STD DIA 12 MM       BRIGHT - 0.89 KG/MTR",
        "AsslyQty": 6.5
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A06BA0010A06BA0020",
        "id": "A06BA0020",
        "ParentDescription": "VH 1.66 SQM  CHAMBER   DETAILS",
        "ChildKey": "A060A0050A061A0060A06BA0010A06BA00200205020",
        "Child": "0205020",
        "ChildDescription": "FLAT MS STD 50 MM WIDTH 12 MM THK BRIGHT",
        "AsslyQty": 10
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A06BA0010A06BA0020",
        "id": "A06BA0020",
        "ParentDescription": "VH 1.66 SQM  CHAMBER   DETAILS",
        "ChildKey": "A060A0050A061A0060A06BA0010A06BA00200301011",
        "Child": "0301011",
        "ChildDescription": "PIPE 20 NB  ERW B CLASS ROUND MS",
        "AsslyQty": 0.2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A06BA0010A06BA0020",
        "id": "A06BA0020",
        "ParentDescription": "VH 1.66 SQM  CHAMBER   DETAILS",
        "ChildKey": "A060A0050A061A0060A06BA0010A06BA00200301030",
        "Child": "0301030",
        "ChildDescription": "PIPE 80 NB  ERW B CLASS ROUND MS",
        "AsslyQty": 0.15
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A06BA0010A06BA0020",
        "id": "A06BA0020",
        "ParentDescription": "VH 1.66 SQM  CHAMBER   DETAILS",
        "ChildKey": "A060A0050A061A0060A06BA0010A06BA0020A06BA0030",
        "Child": "A06BA0030",
        "ChildDescription": "VH 1.66 SQM  CHAMBER   BTM PLATE BENDING",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A06BA0010A06BA0020",
        "id": "A06BA0020",
        "ParentDescription": "VH 1.66 SQM  CHAMBER   DETAILS",
        "ChildKey": "A060A0050A061A0060A06BA0010A06BA0020A24080002",
        "Child": "A24080002",
        "ChildDescription": "80 NB FLG BOTH OPEN    WITH STY 59 GASKET",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A06BA0010M04100080",
        "id": "M04100080",
        "ParentDescription": "BUSH OD 20 ID 9 THK 25 CLR",
        "ChildKey": "A060A0050A061A0060A06BA0010M041000800206026",
        "Child": "0206026",
        "ChildDescription": "BAR MS DIA 20 MM       BRIGHT - 2.47 KG/MTR",
        "AsslyQty": 0.03
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A061A0060A06BA0010M05100120",
        "id": "M05100120",
        "ParentDescription": "BUSH TAPPED 19 OD M10  THRD 25 THK",
        "ChildKey": "A060A0050A061A0060A06BA0010M051001200206026",
        "Child": "0206026",
        "ChildDescription": "BAR MS DIA 20 MM       BRIGHT - 2.47 KG/MTR",
        "AsslyQty": 0.03
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06400030",
        "id": "A06400030",
        "ParentDescription": "VH 1000 HEAD FAB",
        "ChildKey": "A060A0050A06300030A06301010A064000300101012",
        "Child": "0101012",
        "ChildDescription": "HEX BOLT STD M8 X 25 L, M.S, PLATED.",
        "AsslyQty": 12
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06400030",
        "id": "A06400030",
        "ParentDescription": "VH 1000 HEAD FAB",
        "ChildKey": "A060A0050A06300030A06301010A064000300102002",
        "Child": "0102002",
        "ChildDescription": "HEX NUT M8, M.S,       STANDARD",
        "AsslyQty": 16
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06400030",
        "id": "A06400030",
        "ParentDescription": "VH 1000 HEAD FAB",
        "ChildKey": "A060A0050A06300030A06301010A064000300103003",
        "Child": "0103003",
        "ChildDescription": "SPRING WASHER, SIZE- M8, M.S , PLATED",
        "AsslyQty": 12
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06400030",
        "id": "A06400030",
        "ParentDescription": "VH 1000 HEAD FAB",
        "ChildKey": "A060A0050A06300030A06301010A064000300103015",
        "Child": "0103015",
        "ChildDescription": "PLAIN WASHER, SIZE- M8, M.S , PLATED",
        "AsslyQty": 12
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06400030",
        "id": "A06400030",
        "ParentDescription": "VH 1000 HEAD FAB",
        "ChildKey": "A060A0050A06300030A06301010A064000300201002",
        "Child": "0201002",
        "ChildDescription": "ANGLE MS 35X35X5 LOCAL MAKE - 2.6 KG/MTR",
        "AsslyQty": 11
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06400030",
        "id": "A06400030",
        "ParentDescription": "VH 1000 HEAD FAB",
        "ChildKey": "A060A0050A06300030A06301010A064000300203006",
        "Child": "0203006",
        "ChildDescription": "PLATE MS 5 MM THK HR",
        "AsslyQty": 0.65
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06400030",
        "id": "A06400030",
        "ParentDescription": "VH 1000 HEAD FAB",
        "ChildKey": "A060A0050A06300030A06301010A064000300203016",
        "Child": "0203016",
        "ChildDescription": "SHEET MS (14 G)  2 MM  THK",
        "AsslyQty": 0.5
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06400030",
        "id": "A06400030",
        "ParentDescription": "VH 1000 HEAD FAB",
        "ChildKey": "A060A0050A06300030A06301010A064000300206021",
        "Child": "0206021",
        "ChildDescription": "BAR MS STD DIA 8  MM       BRIGHT - 0.39  KG/MTR",
        "AsslyQty": 0.38
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06400030",
        "id": "A06400030",
        "ParentDescription": "VH 1000 HEAD FAB",
        "ChildKey": "A060A0050A06300030A06301010A06400030M32100030",
        "Child": "M32100030",
        "ChildDescription": "LASER CUT FOR VH 1000  SIDE WALL",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06500020",
        "id": "A06500020",
        "ParentDescription": "VH 1000 DRIVE SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A065000200101008",
        "Child": "0101008",
        "ChildDescription": "HEX BOLT STD M8 X 15 L, M.S, PLATED.",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06500020",
        "id": "A06500020",
        "ParentDescription": "VH 1000 DRIVE SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A065000200104004",
        "Child": "0104004",
        "ChildDescription": "ALLEN BOLT M8 X 20 L,  M.S, PLATED.",
        "AsslyQty": 6
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06500020",
        "id": "A06500020",
        "ParentDescription": "VH 1000 DRIVE SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A065000200105009",
        "Child": "0105009",
        "ChildDescription": "SCREW GRUB M6  X 20 L, M.S, PLATED",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06500020",
        "id": "A06500020",
        "ParentDescription": "VH 1000 DRIVE SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A065000200106011",
        "Child": "0106011",
        "ChildDescription": "DOWEL M.S., 8 DIA, 60  MM LONG, PLATED",
        "AsslyQty": 2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06500020",
        "id": "A06500020",
        "ParentDescription": "VH 1000 DRIVE SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A065000200107002",
        "Child": "0107002",
        "ChildDescription": "KEY 8MM X 7MM EN8",
        "AsslyQty": 0.11
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06500020",
        "id": "A06500020",
        "ParentDescription": "VH 1000 DRIVE SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A065000200201003",
        "Child": "0201003",
        "ChildDescription": "ANGLE MS 50X50X5 LOCAL MAKE - 3.8 KG/MTR",
        "AsslyQty": 0.14
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06500020",
        "id": "A06500020",
        "ParentDescription": "VH 1000 DRIVE SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A065000200205010",
        "Child": "0205010",
        "ChildDescription": "FLAT MS 40 MM WIDTH 5  MM THK",
        "AsslyQty": 0.11
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06500020",
        "id": "A06500020",
        "ParentDescription": "VH 1000 DRIVE SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A065000201701021",
        "Child": 1701021,
        "ChildDescription": "BEARING 6206-2Z LOCAL  62 O.D.X 30 I.D. X 16 THK",
        "AsslyQty": 2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06500020",
        "id": "A06500020",
        "ParentDescription": "VH 1000 DRIVE SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A06500020A06500050",
        "Child": "A06500050",
        "ChildDescription": "VH 1000 DRIVE SIDE     SPROCKET ASS",
        "AsslyQty": 2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06500020",
        "id": "A06500020",
        "ParentDescription": "VH 1000 DRIVE SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A06500020M01400010",
        "Child": "M01400010",
        "ChildDescription": "SHAFT OD 40 L 1267 BRG  30",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06500020",
        "id": "A06500020",
        "ParentDescription": "VH 1000 DRIVE SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A06500020M03100080",
        "Child": "M03100080",
        "ChildDescription": "WASHER",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06500020",
        "id": "A06500020",
        "ParentDescription": "VH 1000 DRIVE SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A06500020M06100160",
        "Child": "M06100160",
        "ChildDescription": "FLG OD 100 ID 32 L 12",
        "AsslyQty": 2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06500020",
        "id": "A06500020",
        "ParentDescription": "VH 1000 DRIVE SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A06500020M12100060",
        "Child": "M12100060",
        "ChildDescription": "SPROCKET 3/4\" 21 T 24  BORE NA THK",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06500020",
        "id": "A06500020",
        "ParentDescription": "VH 1000 DRIVE SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A06500020M19100010",
        "Child": "M19100010",
        "ChildDescription": "BRG HSG 6206-2Z BRG NO 3 MTG HOLES",
        "AsslyQty": 2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06600030",
        "id": "A06600030",
        "ParentDescription": "VH 1000 GEARBOX ASS -  TRASMATIX 4028",
        "ChildKey": "A060A0050A06300030A06301010A066000300101041",
        "Child": "0101041",
        "ChildDescription": "HEX BOLT STD M12 X 100 L, M.S, PLATED.",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06600030",
        "id": "A06600030",
        "ParentDescription": "VH 1000 GEARBOX ASS -  TRASMATIX 4028",
        "ChildKey": "A060A0050A06300030A06301010A066000300102006",
        "Child": "0102006",
        "ChildDescription": "HEX NUT M12, M.S,      STANDARD",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06600030",
        "id": "A06600030",
        "ParentDescription": "VH 1000 GEARBOX ASS -  TRASMATIX 4028",
        "ChildKey": "A060A0050A06300030A06301010A066000300105007",
        "Child": "0105007",
        "ChildDescription": "SCREW GRUB M6  X 15 L, M.S, PLATED",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06600030",
        "id": "A06600030",
        "ParentDescription": "VH 1000 GEARBOX ASS -  TRASMATIX 4028",
        "ChildKey": "A060A0050A06300030A06301010A066000300107002",
        "Child": "0107002",
        "ChildDescription": "KEY 8MM X 7MM EN8",
        "AsslyQty": 0.08
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06600030",
        "id": "A06600030",
        "ParentDescription": "VH 1000 GEARBOX ASS -  TRASMATIX 4028",
        "ChildKey": "A060A0050A06300030A06301010A066000300203019",
        "Child": "0203019",
        "ChildDescription": "SHEET MS (10 G)  3.15  MM THK",
        "AsslyQty": 0.42
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06600030",
        "id": "A06600030",
        "ParentDescription": "VH 1000 GEARBOX ASS -  TRASMATIX 4028",
        "ChildKey": "A060A0050A06300030A06301010A066000300205008",
        "Child": "0205008",
        "ChildDescription": "FLAT MS 32  MM         WIDTH 8 MM THK",
        "AsslyQty": 0.51
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06600030",
        "id": "A06600030",
        "ParentDescription": "VH 1000 GEARBOX ASS -  TRASMATIX 4028",
        "ChildKey": "A060A0050A06300030A06301010A066000300205052",
        "Child": "0205052",
        "ChildDescription": "FLAT MS STD 125 MM     WIDTH  12 MM THK BRIGHT",
        "AsslyQty": 0.18
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06600030",
        "id": "A06600030",
        "ParentDescription": "VH 1000 GEARBOX ASS -  TRASMATIX 4028",
        "ChildKey": "A060A0050A06300030A06301010A066000300301006",
        "Child": "0301006",
        "ChildDescription": "PIPE 15 NB  ERW B CLASS ROUND MS",
        "AsslyQty": 0.05
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06600030",
        "id": "A06600030",
        "ParentDescription": "VH 1000 GEARBOX ASS -  TRASMATIX 4028",
        "ChildKey": "A060A0050A06300030A06301010A066000300301029",
        "Child": "0301029",
        "ChildDescription": "PIPE 65 NB  ERW B CLASS ROUND MS",
        "AsslyQty": 0.03
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06600030",
        "id": "A06600030",
        "ParentDescription": "VH 1000 GEARBOX ASS -  TRASMATIX 4028",
        "ChildKey": "A060A0050A06300030A06301010A066000300603006",
        "Child": "0603006",
        "ChildDescription": "ROLLER CHAIN 3/4\"SIMPLEX ROLON MAKE CHAIN NO.R1911",
        "AsslyQty": 3.5
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06600030",
        "id": "A06600030",
        "ParentDescription": "VH 1000 GEARBOX ASS -  TRASMATIX 4028",
        "ChildKey": "A060A0050A06300030A06301010A066000300603011",
        "Child": "0603011",
        "ChildDescription": "CHAIN LOCK FULL LINK   3/4\"   MODEL : R 1911",
        "AsslyQty": 2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06600030",
        "id": "A06600030",
        "ParentDescription": "VH 1000 GEARBOX ASS -  TRASMATIX 4028",
        "ChildKey": "A060A0050A06300030A06301010A06600030A013C0020",
        "Child": "A013C0020",
        "ChildDescription": "CHAIN TENSIONER        ASSEMBLY FOR MAG. DRUM",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06600030",
        "id": "A06600030",
        "ParentDescription": "VH 1000 GEARBOX ASS -  TRASMATIX 4028",
        "ChildKey": "A060A0050A06300030A06301010A06600030M12100080",
        "Child": "M12100080",
        "ChildDescription": "SPROCKET 3/4\" 38 T 60  BORE NA THK",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06600030",
        "id": "A06600030",
        "ParentDescription": "VH 1000 GEARBOX ASS -  TRASMATIX 4028",
        "ChildKey": "A060A0050A06300030A06301010A06600030M12100120",
        "Child": "M12100120",
        "ChildDescription": "SPROCKET 3/4\" 17 T 28  BORE 35 THK",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06600030",
        "id": "A06600030",
        "ParentDescription": "VH 1000 GEARBOX ASS -  TRASMATIX 4028",
        "ChildKey": "A060A0050A06300030A06301010A06600030M34100020",
        "Child": "M34100020",
        "ChildDescription": "HUB OD 35 ID 25 THK 40",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06600030",
        "id": "A06600030",
        "ParentDescription": "VH 1000 GEARBOX ASS -  TRASMATIX 4028",
        "ChildKey": "A060A0050A06300030A06301010A06600030SSDHA1006",
        "Child": "SSDHA1006",
        "ChildDescription": "HEX BOLT STD SET, M10 X 30 L MS PLATED",
        "AsslyQty": 4
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06700020",
        "id": "A06700020",
        "ParentDescription": "VH 1000 WINDING SHAFT  ASS",
        "ChildKey": "A060A0050A06300030A06301010A067000200101008",
        "Child": "0101008",
        "ChildDescription": "HEX BOLT STD M8 X 15 L, M.S, PLATED.",
        "AsslyQty": 5
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06700020",
        "id": "A06700020",
        "ParentDescription": "VH 1000 WINDING SHAFT  ASS",
        "ChildKey": "A060A0050A06300030A06301010A067000200101016",
        "Child": "0101016",
        "ChildDescription": "HEX BOLT STD M8 X 35 L, M.S, PLATED.",
        "AsslyQty": 4
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06700020",
        "id": "A06700020",
        "ParentDescription": "VH 1000 WINDING SHAFT  ASS",
        "ChildKey": "A060A0050A06300030A06301010A067000200102002",
        "Child": "0102002",
        "ChildDescription": "HEX NUT M8, M.S,       STANDARD",
        "AsslyQty": 4
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06700020",
        "id": "A06700020",
        "ParentDescription": "VH 1000 WINDING SHAFT  ASS",
        "ChildKey": "A060A0050A06300030A06301010A067000200102009",
        "Child": "0102009",
        "ChildDescription": "HEX NUT M16, M.S,      STANDARD",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06700020",
        "id": "A06700020",
        "ParentDescription": "VH 1000 WINDING SHAFT  ASS",
        "ChildKey": "A060A0050A06300030A06301010A067000200103003",
        "Child": "0103003",
        "ChildDescription": "SPRING WASHER, SIZE- M8, M.S , PLATED",
        "AsslyQty": 9
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06700020",
        "id": "A06700020",
        "ParentDescription": "VH 1000 WINDING SHAFT  ASS",
        "ChildKey": "A060A0050A06300030A06301010A067000200103015",
        "Child": "0103015",
        "ChildDescription": "PLAIN WASHER, SIZE- M8, M.S , PLATED",
        "AsslyQty": 9
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06700020",
        "id": "A06700020",
        "ParentDescription": "VH 1000 WINDING SHAFT  ASS",
        "ChildKey": "A060A0050A06300030A06301010A067000200106006",
        "Child": "0106006",
        "ChildDescription": "DOWEL M.S, 8 MM DIA, 20 MM LONG, PLATED",
        "AsslyQty": 4
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06700020",
        "id": "A06700020",
        "ParentDescription": "VH 1000 WINDING SHAFT  ASS",
        "ChildKey": "A060A0050A06300030A06301010A067000200107001",
        "Child": "0107001",
        "ChildDescription": "KEY 6MM X 6MM EN8",
        "AsslyQty": 0.08
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06700020",
        "id": "A06700020",
        "ParentDescription": "VH 1000 WINDING SHAFT  ASS",
        "ChildKey": "A060A0050A06300030A06301010A067000200109010",
        "Child": "0109010",
        "ChildDescription": "SPLIT PIN M.S,  1/8\"   DIA, 2\" LONG",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06700020",
        "id": "A06700020",
        "ParentDescription": "VH 1000 WINDING SHAFT  ASS",
        "ChildKey": "A060A0050A06300030A06301010A067000201701019",
        "Child": 1701019,
        "ChildDescription": "BEARING 6205-2Z LOCAL  52 O.D.X 25 I.D. X 15 THK",
        "AsslyQty": 2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06700020",
        "id": "A06700020",
        "ParentDescription": "VH 1000 WINDING SHAFT  ASS",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06700040",
        "Child": "A06700040",
        "ChildDescription": "VH 1000 WINDING SHAFT  PIPE ASS",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06700020",
        "id": "A06700020",
        "ParentDescription": "VH 1000 WINDING SHAFT  ASS",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06H00020",
        "Child": "A06H00020",
        "ChildDescription": "VH 1000 BOW PIPE ASS",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06700020",
        "id": "A06700020",
        "ParentDescription": "VH 1000 WINDING SHAFT  ASS",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06I00010",
        "Child": "A06I00010",
        "ChildDescription": "CHAIN TENSIONER",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06700020",
        "id": "A06700020",
        "ParentDescription": "VH 1000 WINDING SHAFT  ASS",
        "ChildKey": "A060A0050A06300030A06301010A06700020M02100060",
        "Child": "M02100060",
        "ChildDescription": "SHAFT STUB 30 DIA 128.5 L",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06700020",
        "id": "A06700020",
        "ParentDescription": "VH 1000 WINDING SHAFT  ASS",
        "ChildKey": "A060A0050A06300030A06301010A06700020M03100060",
        "Child": "M03100060",
        "ChildDescription": "WASHER OD 30 ID 20.2   THK 11",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06700020",
        "id": "A06700020",
        "ParentDescription": "VH 1000 WINDING SHAFT  ASS",
        "ChildKey": "A060A0050A06300030A06301010A06700020M03100070",
        "Child": "M03100070",
        "ChildDescription": "WASHER OD 30 ID 25.5   THK 5",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06700020",
        "id": "A06700020",
        "ParentDescription": "VH 1000 WINDING SHAFT  ASS",
        "ChildKey": "A060A0050A06300030A06301010A06700020M04100060",
        "Child": "M04100060",
        "ChildDescription": "BUSH OD 30 ID 14 THK 30 CLR",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06700020",
        "id": "A06700020",
        "ParentDescription": "VH 1000 WINDING SHAFT  ASS",
        "ChildKey": "A060A0050A06300030A06301010A06700020M05100030",
        "Child": "M05100030",
        "ChildDescription": "BUSH TAPPED 30 OD M16  THRD 23 THK",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06700020",
        "id": "A06700020",
        "ParentDescription": "VH 1000 WINDING SHAFT  ASS",
        "ChildKey": "A060A0050A06300030A06301010A06700020M05100150",
        "Child": "M05100150",
        "ChildDescription": "BUSH TAPPED 25 OD M16  THREAD 26 THK",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06700020",
        "id": "A06700020",
        "ParentDescription": "VH 1000 WINDING SHAFT  ASS",
        "ChildKey": "A060A0050A06300030A06301010A06700020M12100050",
        "Child": "M12100050",
        "ChildDescription": "SPROCKET 3/4\" 19 T 35  BORE 0 THK",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06700020",
        "id": "A06700020",
        "ParentDescription": "VH 1000 WINDING SHAFT  ASS",
        "ChildKey": "A060A0050A06300030A06301010A06700020M19100020",
        "Child": "M19100020",
        "ChildDescription": "BRG HSG 6205-2Z BRG NO 4 MTG HOLES",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06700020",
        "id": "A06700020",
        "ParentDescription": "VH 1000 WINDING SHAFT  ASS",
        "ChildKey": "A060A0050A06300030A06301010A06700020M26100060",
        "Child": "M26100060",
        "ChildDescription": "ROLLER OD 102.2 ID 25  THK 20",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06700020",
        "id": "A06700020",
        "ParentDescription": "VH 1000 WINDING SHAFT  ASS",
        "ChildKey": "A060A0050A06300030A06301010A06700020M27100030",
        "Child": "M27100030",
        "ChildDescription": "THRD BAR OD 16 L 90    M16X90",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06700020",
        "id": "A06700020",
        "ParentDescription": "VH 1000 WINDING SHAFT  ASS",
        "ChildKey": "A060A0050A06300030A06301010A06700020M32102944",
        "Child": "M32102944",
        "ChildDescription": "LASER CUT FOR WINDING  SHAFT PLATE",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06700020",
        "id": "A06700020",
        "ParentDescription": "VH 1000 WINDING SHAFT  ASS",
        "ChildKey": "A060A0050A06300030A06301010A06700020SSDHA0805",
        "Child": "SSDHA0805",
        "ChildDescription": "HEX BOLT STD SET, M8 X 25 L MS PLATED",
        "AsslyQty": 4
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06800020",
        "id": "A06800020",
        "ParentDescription": "VH 1000 ROLLER SHAFT   ASS",
        "ChildKey": "A060A0050A06300030A06301010A068000200102002",
        "Child": "0102002",
        "ChildDescription": "HEX NUT M8, M.S,       STANDARD",
        "AsslyQty": 4
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06800020",
        "id": "A06800020",
        "ParentDescription": "VH 1000 ROLLER SHAFT   ASS",
        "ChildKey": "A060A0050A06300030A06301010A068000200104005",
        "Child": "0104005",
        "ChildDescription": "ALLEN BOLT M8 X 25 L,  M.S, PLATED.",
        "AsslyQty": 4
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06800020",
        "id": "A06800020",
        "ParentDescription": "VH 1000 ROLLER SHAFT   ASS",
        "ChildKey": "A060A0050A06300030A06301010A068000200106011",
        "Child": "0106011",
        "ChildDescription": "DOWEL M.S., 8 DIA, 60  MM LONG, PLATED",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06800020",
        "id": "A06800020",
        "ParentDescription": "VH 1000 ROLLER SHAFT   ASS",
        "ChildKey": "A060A0050A06300030A06301010A068000201701019",
        "Child": 1701019,
        "ChildDescription": "BEARING 6205-2Z LOCAL  52 O.D.X 25 I.D. X 15 THK",
        "AsslyQty": 2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06800020",
        "id": "A06800020",
        "ParentDescription": "VH 1000 ROLLER SHAFT   ASS",
        "ChildKey": "A060A0050A06300030A06301010A06800020A06800040",
        "Child": "A06800040",
        "ChildDescription": "ROLLER PIPE ASSEMBLY - 1000P/W",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06800020",
        "id": "A06800020",
        "ParentDescription": "VH 1000 ROLLER SHAFT   ASS",
        "ChildKey": "A060A0050A06300030A06301010A06800020M04100090",
        "Child": "M04100090",
        "ChildDescription": "BUSH OD 30 ID 23.1 THK 22 CLR",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06800020",
        "id": "A06800020",
        "ParentDescription": "VH 1000 ROLLER SHAFT   ASS",
        "ChildKey": "A060A0050A06300030A06301010A06800020M12100070",
        "Child": "M12100070",
        "ChildDescription": "SPROCKET 3/4\" 19 T 23  BORE 32 THK",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06800020",
        "id": "A06800020",
        "ParentDescription": "VH 1000 ROLLER SHAFT   ASS",
        "ChildKey": "A060A0050A06300030A06301010A06800020M19100140",
        "Child": "M19100140",
        "ChildDescription": "BRG HSG 6205-2Z BRG NO 2 MTG HOLES",
        "AsslyQty": 2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06900020",
        "id": "A06900020",
        "ParentDescription": "VH 1000 FREE END SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A069000200101003",
        "Child": "0101003",
        "ChildDescription": "HEX BOLT STD M6 X 20 L, M.S, PLATED.",
        "AsslyQty": 8
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06900020",
        "id": "A06900020",
        "ParentDescription": "VH 1000 FREE END SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A069000200101031",
        "Child": "0101031",
        "ChildDescription": "HEX BOLT M12 X 30 L, M.S, PLATED. STD",
        "AsslyQty": 4
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06900020",
        "id": "A06900020",
        "ParentDescription": "VH 1000 FREE END SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A069000200103002",
        "Child": "0103002",
        "ChildDescription": "SPRING WASHER SIZE M6  MS PLATED",
        "AsslyQty": 8
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06900020",
        "id": "A06900020",
        "ParentDescription": "VH 1000 FREE END SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A069000200103007",
        "Child": "0103007",
        "ChildDescription": "SPRING WASHER, SIZE-   M12, M.S , PLATED",
        "AsslyQty": 4
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06900020",
        "id": "A06900020",
        "ParentDescription": "VH 1000 FREE END SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A069000200103014",
        "Child": "0103014",
        "ChildDescription": "PLAIN WASHER, SIZE- M6, M.S , PLATED",
        "AsslyQty": 8
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06900020",
        "id": "A06900020",
        "ParentDescription": "VH 1000 FREE END SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A069000200103019",
        "Child": "0103019",
        "ChildDescription": "PLAIN WASHER, SIZE- M12, M.S , PLATED",
        "AsslyQty": 4
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06900020",
        "id": "A06900020",
        "ParentDescription": "VH 1000 FREE END SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A069000200106010",
        "Child": "0106010",
        "ChildDescription": "DOWEL M.S, 8 MM DIA, 50 MM LONG, PLATED",
        "AsslyQty": 2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06900020",
        "id": "A06900020",
        "ParentDescription": "VH 1000 FREE END SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A069000200114031",
        "Child": "0114031",
        "ChildDescription": "O RING NITRILE 3.5 C/S X 35.5 ID",
        "AsslyQty": 4
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06900020",
        "id": "A06900020",
        "ParentDescription": "VH 1000 FREE END SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A069000201701019",
        "Child": 1701019,
        "ChildDescription": "BEARING 6205-2Z LOCAL  52 O.D.X 25 I.D. X 15 THK",
        "AsslyQty": 4
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06900020",
        "id": "A06900020",
        "ParentDescription": "VH 1000 FREE END SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A06900020A06900040",
        "Child": "A06900040",
        "ChildDescription": "VH 1000 FREE END SHAFT ASS",
        "AsslyQty": 2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06900020",
        "id": "A06900020",
        "ParentDescription": "VH 1000 FREE END SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A06900020A06900050",
        "Child": "A06900050",
        "ChildDescription": "FREE END SHAFT ASS -   UPTO 1000 P/W",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06900020",
        "id": "A06900020",
        "ParentDescription": "VH 1000 FREE END SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A06900020M01100090",
        "Child": "M01100090",
        "ChildDescription": "SHAFT OD 35 L 994 BRG  25",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06900020",
        "id": "A06900020",
        "ParentDescription": "VH 1000 FREE END SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A06900020M03100040",
        "Child": "M03100040",
        "ChildDescription": "WASHER OD 35 ID 25.5   THK 10",
        "AsslyQty": 2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06900020",
        "id": "A06900020",
        "ParentDescription": "VH 1000 FREE END SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A06900020M05100020",
        "Child": "M05100020",
        "ChildDescription": "BUSH TAPPED 25 OD  M12 THRD 30 THK",
        "AsslyQty": 4
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06900020",
        "id": "A06900020",
        "ParentDescription": "VH 1000 FREE END SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A06900020M06100150",
        "Child": "M06100150",
        "ChildDescription": "FLG OD 80 ID 35.2 L 8",
        "AsslyQty": 2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06900020",
        "id": "A06900020",
        "ParentDescription": "VH 1000 FREE END SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A06900020M40500010",
        "Child": "M40500010",
        "ChildDescription": "GASKET 90 OD 48 ID 2 MM THK(STYLE 20)",
        "AsslyQty": 2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06900020",
        "id": "A06900020",
        "ParentDescription": "VH 1000 FREE END SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A06900020M40500050",
        "Child": "M40500050",
        "ChildDescription": "GASKET 90 OD 48 ID 2 MM THK(STYLE 59)",
        "AsslyQty": 2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06A00030",
        "id": "A06A00030",
        "ParentDescription": "VH 1000 CHAIN COVER    DRIVE",
        "ChildKey": "A060A0050A06300030A06301010A06A000300101003",
        "Child": "0101003",
        "ChildDescription": "HEX BOLT STD M6 X 20 L, M.S, PLATED.",
        "AsslyQty": 2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06A00030",
        "id": "A06A00030",
        "ParentDescription": "VH 1000 CHAIN COVER    DRIVE",
        "ChildKey": "A060A0050A06300030A06301010A06A000300101008",
        "Child": "0101008",
        "ChildDescription": "HEX BOLT STD M8 X 15 L, M.S, PLATED.",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06A00030",
        "id": "A06A00030",
        "ParentDescription": "VH 1000 CHAIN COVER    DRIVE",
        "ChildKey": "A060A0050A06300030A06301010A06A000300102001",
        "Child": "0102001",
        "ChildDescription": "HEX NUT M6, M.S,       STANDARD",
        "AsslyQty": 2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06A00030",
        "id": "A06A00030",
        "ParentDescription": "VH 1000 CHAIN COVER    DRIVE",
        "ChildKey": "A060A0050A06300030A06301010A06A000300102002",
        "Child": "0102002",
        "ChildDescription": "HEX NUT M8, M.S,       STANDARD",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06A00030",
        "id": "A06A00030",
        "ParentDescription": "VH 1000 CHAIN COVER    DRIVE",
        "ChildKey": "A060A0050A06300030A06301010A06A000300103030",
        "Child": "0103030",
        "ChildDescription": "PLAIN WASHER SIZE M8   BR",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06A00030",
        "id": "A06A00030",
        "ParentDescription": "VH 1000 CHAIN COVER    DRIVE",
        "ChildKey": "A060A0050A06300030A06301010A06A000300203016",
        "Child": "0203016",
        "ChildDescription": "SHEET MS (14 G)  2 MM  THK",
        "AsslyQty": 0.48
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06A00030",
        "id": "A06A00030",
        "ParentDescription": "VH 1000 CHAIN COVER    DRIVE",
        "ChildKey": "A060A0050A06300030A06301010A06A000300204003",
        "Child": "0204003",
        "ChildDescription": "SHEET PERFORATED, 16 G M.S, 8 MM SQ. HOLE,2 MM P",
        "AsslyQty": 0.38
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06A00030",
        "id": "A06A00030",
        "ParentDescription": "VH 1000 CHAIN COVER    DRIVE",
        "ChildKey": "A060A0050A06300030A06301010A06A000300206024",
        "Child": "0206024",
        "ChildDescription": "BAR MS STD DIA 16 MM       BRIGHT - 1.58 KG/MTR",
        "AsslyQty": 0.26
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06A00030",
        "id": "A06A00030",
        "ParentDescription": "VH 1000 CHAIN COVER    DRIVE",
        "ChildKey": "A060A0050A06300030A06301010A06A000301015003",
        "Child": 1015003,
        "ChildDescription": "PANEL HANDLE DARSHANA  MAKE, TYPE: DHURC 120",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06A00030",
        "id": "A06A00030",
        "ParentDescription": "VH 1000 CHAIN COVER    DRIVE",
        "ChildKey": "A060A0050A06300030A06301010A06A000301901004",
        "Child": 1901004,
        "ChildDescription": "ARROW FOR DIRECTION OF ROTATION",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06A00030",
        "id": "A06A00030",
        "ParentDescription": "VH 1000 CHAIN COVER    DRIVE",
        "ChildKey": "A060A0050A06300030A06301010A06A00030M35100280",
        "Child": "M35100280",
        "ChildDescription": "MACHINED BAR 16 OD 80 L",
        "AsslyQty": 2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06A00040",
        "id": "A06A00040",
        "ParentDescription": "VH 1000 CHAIN COVER    WINDER",
        "ChildKey": "A060A0050A06300030A06301010A06A000400101003",
        "Child": "0101003",
        "ChildDescription": "HEX BOLT STD M6 X 20 L, M.S, PLATED.",
        "AsslyQty": 2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06A00040",
        "id": "A06A00040",
        "ParentDescription": "VH 1000 CHAIN COVER    WINDER",
        "ChildKey": "A060A0050A06300030A06301010A06A000400101008",
        "Child": "0101008",
        "ChildDescription": "HEX BOLT STD M8 X 15 L, M.S, PLATED.",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06A00040",
        "id": "A06A00040",
        "ParentDescription": "VH 1000 CHAIN COVER    WINDER",
        "ChildKey": "A060A0050A06300030A06301010A06A000400102001",
        "Child": "0102001",
        "ChildDescription": "HEX NUT M6, M.S,       STANDARD",
        "AsslyQty": 2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06A00040",
        "id": "A06A00040",
        "ParentDescription": "VH 1000 CHAIN COVER    WINDER",
        "ChildKey": "A060A0050A06300030A06301010A06A000400102002",
        "Child": "0102002",
        "ChildDescription": "HEX NUT M8, M.S,       STANDARD",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06A00040",
        "id": "A06A00040",
        "ParentDescription": "VH 1000 CHAIN COVER    WINDER",
        "ChildKey": "A060A0050A06300030A06301010A06A000400103030",
        "Child": "0103030",
        "ChildDescription": "PLAIN WASHER SIZE M8   BR",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06A00040",
        "id": "A06A00040",
        "ParentDescription": "VH 1000 CHAIN COVER    WINDER",
        "ChildKey": "A060A0050A06300030A06301010A06A000400203016",
        "Child": "0203016",
        "ChildDescription": "SHEET MS (14 G)  2 MM  THK",
        "AsslyQty": 0.49
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06A00040",
        "id": "A06A00040",
        "ParentDescription": "VH 1000 CHAIN COVER    WINDER",
        "ChildKey": "A060A0050A06300030A06301010A06A000400204003",
        "Child": "0204003",
        "ChildDescription": "SHEET PERFORATED, 16 G M.S, 8 MM SQ. HOLE,2 MM P",
        "AsslyQty": 0.3
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06A00040",
        "id": "A06A00040",
        "ParentDescription": "VH 1000 CHAIN COVER    WINDER",
        "ChildKey": "A060A0050A06300030A06301010A06A000400206021",
        "Child": "0206021",
        "ChildDescription": "BAR MS STD DIA 8  MM       BRIGHT - 0.39  KG/MTR",
        "AsslyQty": 0.25
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06A00040",
        "id": "A06A00040",
        "ParentDescription": "VH 1000 CHAIN COVER    WINDER",
        "ChildKey": "A060A0050A06300030A06301010A06A000400206024",
        "Child": "0206024",
        "ChildDescription": "BAR MS STD DIA 16 MM       BRIGHT - 1.58 KG/MTR",
        "AsslyQty": 0.26
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06A00040",
        "id": "A06A00040",
        "ParentDescription": "VH 1000 CHAIN COVER    WINDER",
        "ChildKey": "A060A0050A06300030A06301010A06A000401015003",
        "Child": 1015003,
        "ChildDescription": "PANEL HANDLE DARSHANA  MAKE, TYPE: DHURC 120",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06A00040",
        "id": "A06A00040",
        "ParentDescription": "VH 1000 CHAIN COVER    WINDER",
        "ChildKey": "A060A0050A06300030A06301010A06A000401901004",
        "Child": 1901004,
        "ChildDescription": "ARROW FOR DIRECTION OF ROTATION",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06A00040",
        "id": "A06A00040",
        "ParentDescription": "VH 1000 CHAIN COVER    WINDER",
        "ChildKey": "A060A0050A06300030A06301010A06A00040M35100280",
        "Child": "M35100280",
        "ChildDescription": "MACHINED BAR 16 OD 80 L",
        "AsslyQty": 2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06E00020",
        "id": "A06E00020",
        "ParentDescription": "VH 1000 DOOR DETAILS",
        "ChildKey": "A060A0050A06300030A06301010A06E000200101003",
        "Child": "0101003",
        "ChildDescription": "HEX BOLT STD M6 X 20 L, M.S, PLATED.",
        "AsslyQty": 4
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06E00020",
        "id": "A06E00020",
        "ParentDescription": "VH 1000 DOOR DETAILS",
        "ChildKey": "A060A0050A06300030A06301010A06E000200101012",
        "Child": "0101012",
        "ChildDescription": "HEX BOLT STD M8 X 25 L, M.S, PLATED.",
        "AsslyQty": 12
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06E00020",
        "id": "A06E00020",
        "ParentDescription": "VH 1000 DOOR DETAILS",
        "ChildKey": "A060A0050A06300030A06301010A06E000200102001",
        "Child": "0102001",
        "ChildDescription": "HEX NUT M6, M.S,       STANDARD",
        "AsslyQty": 4
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06E00020",
        "id": "A06E00020",
        "ParentDescription": "VH 1000 DOOR DETAILS",
        "ChildKey": "A060A0050A06300030A06301010A06E000200103003",
        "Child": "0103003",
        "ChildDescription": "SPRING WASHER, SIZE- M8, M.S , PLATED",
        "AsslyQty": 12
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06E00020",
        "id": "A06E00020",
        "ParentDescription": "VH 1000 DOOR DETAILS",
        "ChildKey": "A060A0050A06300030A06301010A06E000200103015",
        "Child": "0103015",
        "ChildDescription": "PLAIN WASHER, SIZE- M8, M.S , PLATED",
        "AsslyQty": 12
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06E00020",
        "id": "A06E00020",
        "ParentDescription": "VH 1000 DOOR DETAILS",
        "ChildKey": "A060A0050A06300030A06301010A06E000200117006",
        "Child": "0117006",
        "ChildDescription": "BLACK STAR KNOB M-8 X  40 EXTERNAL THREAD",
        "AsslyQty": 2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06E00020",
        "id": "A06E00020",
        "ParentDescription": "VH 1000 DOOR DETAILS",
        "ChildKey": "A060A0050A06300030A06301010A06E000200203016",
        "Child": "0203016",
        "ChildDescription": "SHEET MS (14 G)  2 MM  THK",
        "AsslyQty": 1.2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06E00020",
        "id": "A06E00020",
        "ParentDescription": "VH 1000 DOOR DETAILS",
        "ChildKey": "A060A0050A06300030A06301010A06E000200205016",
        "Child": "0205016",
        "ChildDescription": "FLAT MS STD 50 MM WIDTH 5  MM THK",
        "AsslyQty": 0.78
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06E00020",
        "id": "A06E00020",
        "ParentDescription": "VH 1000 DOOR DETAILS",
        "ChildKey": "A060A0050A06300030A06301010A06E000200206024",
        "Child": "0206024",
        "ChildDescription": "BAR MS STD DIA 16 MM       BRIGHT - 1.58 KG/MTR",
        "AsslyQty": 0.52
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06E00020",
        "id": "A06E00020",
        "ParentDescription": "VH 1000 DOOR DETAILS",
        "ChildKey": "A060A0050A06300030A06301010A06E000201015003",
        "Child": 1015003,
        "ChildDescription": "PANEL HANDLE DARSHANA  MAKE, TYPE: DHURC 120",
        "AsslyQty": 2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06E00020",
        "id": "A06E00020",
        "ParentDescription": "VH 1000 DOOR DETAILS",
        "ChildKey": "A060A0050A06300030A06301010A06E00020M35100280",
        "Child": "M35100280",
        "ChildDescription": "MACHINED BAR 16 OD 80 L",
        "AsslyQty": 4
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06E00020",
        "id": "A06E00020",
        "ParentDescription": "VH 1000 DOOR DETAILS",
        "ChildKey": "A060A0050A06300030A06301010A06E00020SSDHA0803",
        "Child": "SSDHA0803",
        "ChildDescription": "HEX BOLT STD SET, M8 X 15 L MS PLATED",
        "AsslyQty": 12
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06G00020",
        "id": "A06G00020",
        "ParentDescription": "WIPER FOR SCRAPER FOR  1000 P/W VAC FILTER",
        "ChildKey": "A060A0050A06300030A06301010A06G000200101086",
        "Child": "0101086",
        "ChildDescription": "HEX BOLT M16 X 100  L  MS PLATED",
        "AsslyQty": 2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06G00020",
        "id": "A06G00020",
        "ParentDescription": "WIPER FOR SCRAPER FOR  1000 P/W VAC FILTER",
        "ChildKey": "A060A0050A06300030A06301010A06G000200102009",
        "Child": "0102009",
        "ChildDescription": "HEX NUT M16, M.S,      STANDARD",
        "AsslyQty": 2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06G00020",
        "id": "A06G00020",
        "ParentDescription": "WIPER FOR SCRAPER FOR  1000 P/W VAC FILTER",
        "ChildKey": "A060A0050A06300030A06301010A06G000200109004",
        "Child": "0109004",
        "ChildDescription": "SPLIT PIN M.S,  1/8\"   DIA, 1\" LONG",
        "AsslyQty": 2
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06G00020",
        "id": "A06G00020",
        "ParentDescription": "WIPER FOR SCRAPER FOR  1000 P/W VAC FILTER",
        "ChildKey": "A060A0050A06300030A06301010A06G000200203016",
        "Child": "0203016",
        "ChildDescription": "SHEET MS (14 G)  2 MM  THK",
        "AsslyQty": 0.18
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06G00020",
        "id": "A06G00020",
        "ParentDescription": "WIPER FOR SCRAPER FOR  1000 P/W VAC FILTER",
        "ChildKey": "A060A0050A06300030A06301010A06G000200205003",
        "Child": "0205003",
        "ChildDescription": "FLAT MS STD 25  MM         WIDTH 3 MM THK BLACK",
        "AsslyQty": 0.3
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06G00020",
        "id": "A06G00020",
        "ParentDescription": "WIPER FOR SCRAPER FOR  1000 P/W VAC FILTER",
        "ChildKey": "A060A0050A06300030A06301010A06G000200205004",
        "Child": "0205004",
        "ChildDescription": "FLAT MS STD 25  MM         WIDTH 5 MM THK BRIGHT",
        "AsslyQty": 0.08
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06G00020",
        "id": "A06G00020",
        "ParentDescription": "WIPER FOR SCRAPER FOR  1000 P/W VAC FILTER",
        "ChildKey": "A060A0050A06300030A06301010A06G000200301006",
        "Child": "0301006",
        "ChildDescription": "PIPE 15 NB  ERW B CLASS ROUND MS",
        "AsslyQty": 0.16
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301010A06R00030",
        "id": "A06R00030",
        "ParentDescription": "VH 1000 SCRAPER FLAT   ASS",
        "ChildKey": "A060A0050A06300030A06301010A06R000300205016",
        "Child": "0205016",
        "ChildDescription": "FLAT MS STD 50 MM WIDTH 5  MM THK",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301020M11100010",
        "id": "M11100010",
        "ParentDescription": "SLIP CLUTCH 65M2 MODEL 20 BORE DIA",
        "ChildKey": "A060A0050A06300030A06301020M111000100605004",
        "Child": "0605004",
        "ChildDescription": "TORQUE LIMITER 65 M2   NUTECK MAKE",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301020M11100010",
        "id": "M11100010",
        "ParentDescription": "SLIP CLUTCH 65M2 MODEL 20 BORE DIA",
        "ChildKey": "A060A0050A06300030A06301020M11100010SSDTA0065",
        "Child": "SSDTA0065",
        "ChildDescription": "SPANNER FOR 65M2 TORQUE LIMITER",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301020M11100020",
        "id": "M11100020",
        "ParentDescription": "SLIP CLUTCH 125M2 MODEL 25 BORE DIA",
        "ChildKey": "A060A0050A06300030A06301020M111000200605005",
        "Child": "0605005",
        "ChildDescription": "TORQUE LIMITER 125 M2  NUTECK MAKE",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06300030A06301020M11100020",
        "id": "M11100020",
        "ParentDescription": "SLIP CLUTCH 125M2 MODEL 25 BORE DIA",
        "ChildKey": "A060A0050A06300030A06301020M11100020SSDTA0125",
        "Child": "SSDTA0125",
        "ChildDescription": "SPANNER FOR 125M2      TORQUE LIMITER",
        "AsslyQty": 1
    },
    {
        "BomLevel": 4,
        "ParentKey": "A060A0050A06N90010SSDG20000SSDIA020C",
        "id": "SSDIA020C",
        "ParentDescription": "THREADED PIPE 20NB ONE SIDE 150MM LENGTH MS",
        "ChildKey": "A060A0050A06N90010SSDG20000SSDIA020C0301011",
        "Child": "0301011",
        "ChildDescription": "PIPE 20 NB  ERW B CLASS ROUND MS",
        "AsslyQty": 0.16
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A061A0060A061A0070A06F00060SSDFB1001",
        "id": "SSDFB1001",
        "ParentDescription": "FILTER PAPER 70 GSM X  1000 P/W X 1 MTR",
        "ChildKey": "A060A0050A061A0060A061A0070A06F00060SSDFB10010301032",
        "Child": "0301032",
        "ChildDescription": "PIPE 80 NB PVC (OD.90 X ID.85)",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A061A0060A061A0070A06F00060SSDFB1001",
        "id": "SSDFB1001",
        "ParentDescription": "FILTER PAPER 70 GSM X  1000 P/W X 1 MTR",
        "ChildKey": "A060A0050A061A0060A061A0070A06F00060SSDFB10011501003",
        "Child": 1501003,
        "ChildDescription": "FILTER PAPER THERMALLY BONDED 70 GSM, 1000 P/W",
        "AsslyQty": 8
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A061A0060A06BA0010A06BA0020A06BA0030",
        "id": "A06BA0030",
        "ParentDescription": "VH 1.66 SQM  CHAMBER   BTM PLATE BENDING",
        "ChildKey": "A060A0050A061A0060A06BA0010A06BA0020A06BA00300203006",
        "Child": "0203006",
        "ChildDescription": "PLATE MS 5 MM THK HR",
        "AsslyQty": 2.15
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A061A0060A06BA0010A06BA0020A24080002",
        "id": "A24080002",
        "ParentDescription": "80 NB FLG BOTH OPEN    WITH STY 59 GASKET",
        "ChildKey": "A060A0050A061A0060A06BA0010A06BA0020A240800020101053",
        "Child": "0101053",
        "ChildDescription": "HEX BOLT STD M16 X 75  L MS PLATED",
        "AsslyQty": 4
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A061A0060A06BA0010A06BA0020A24080002",
        "id": "A24080002",
        "ParentDescription": "80 NB FLG BOTH OPEN    WITH STY 59 GASKET",
        "ChildKey": "A060A0050A061A0060A06BA0010A06BA0020A240800020102009",
        "Child": "0102009",
        "ChildDescription": "HEX NUT M16, M.S,      STANDARD",
        "AsslyQty": 4
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A061A0060A06BA0010A06BA0020A24080002",
        "id": "A24080002",
        "ParentDescription": "80 NB FLG BOTH OPEN    WITH STY 59 GASKET",
        "ChildKey": "A060A0050A061A0060A06BA0010A06BA0020A240800020103009",
        "Child": "0103009",
        "ChildDescription": "SPRING WASHER, SIZE-   M16, M.S , PLATED",
        "AsslyQty": 4
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A061A0060A06BA0010A06BA0020A24080002",
        "id": "A24080002",
        "ParentDescription": "80 NB FLG BOTH OPEN    WITH STY 59 GASKET",
        "ChildKey": "A060A0050A061A0060A06BA0010A06BA0020A240800020103022",
        "Child": "0103022",
        "ChildDescription": "PLAIN WASHER, SIZE- M16, M.S , PLATED",
        "AsslyQty": 4
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A061A0060A06BA0010A06BA0020A24080002",
        "id": "A24080002",
        "ParentDescription": "80 NB FLG BOTH OPEN    WITH STY 59 GASKET",
        "ChildKey": "A060A0050A061A0060A06BA0010A06BA0020A240800020305019",
        "Child": "0305019",
        "ChildDescription": "FLANGE 80 NB OPEN      VEERAJA STD MS",
        "AsslyQty": 2
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A061A0060A06BA0010A06BA0020A24080002",
        "id": "A24080002",
        "ParentDescription": "80 NB FLG BOTH OPEN    WITH STY 59 GASKET",
        "ChildKey": "A060A0050A061A0060A06BA0010A06BA0020A240800020311008",
        "Child": "0311008",
        "ChildDescription": "GASKET RING 80 NB,     STYLE 59",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06400030M32100030",
        "id": "M32100030",
        "ParentDescription": "LASER CUT FOR VH 1000  SIDE WALL",
        "ChildKey": "A060A0050A06300030A06301010A06400030M321000300203019",
        "Child": "0203019",
        "ChildDescription": "SHEET MS (10 G)  3.15  MM THK",
        "AsslyQty": 1.21
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06500020A06500050",
        "id": "A06500050",
        "ParentDescription": "VH 1000 DRIVE SIDE     SPROCKET ASS",
        "ChildKey": "A060A0050A06300030A06301010A06500020A06500050M32100020",
        "Child": "M32100020",
        "ChildDescription": "CONVEYOR SPKT 2.5\" X 6 T- LASER",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06500020A06500050",
        "id": "A06500050",
        "ParentDescription": "VH 1000 DRIVE SIDE     SPROCKET ASS",
        "ChildKey": "A060A0050A06300030A06301010A06500020A06500050M34100010",
        "Child": "M34100010",
        "ChildDescription": "HUB OD 60 ID 35 THK 47",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06500020M01400010",
        "id": "M01400010",
        "ParentDescription": "SHAFT OD 40 L 1267 BRG  30",
        "ChildKey": "A060A0050A06300030A06301010A06500020M014000100206001",
        "Child": "0206001",
        "ChildDescription": "BAR EN8 DIA 40 MM, BRIGHT, LOCAL MAKE- 9.86 KG/MTR",
        "AsslyQty": 1.27
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06500020M03100080",
        "id": "M03100080",
        "ParentDescription": "WASHER",
        "ChildKey": "A060A0050A06300030A06301010A06500020M031000800206030",
        "Child": "0206030",
        "ChildDescription": "BAR MS STD DIA 35 MM       BRIGHT - 7.15  KG/MTR",
        "AsslyQty": 0.01
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06500020M06100160",
        "id": "M06100160",
        "ParentDescription": "FLG OD 100 ID 32 L 12",
        "ChildKey": "A060A0050A06300030A06301010A06500020M061001600206045",
        "Child": "0206045",
        "ChildDescription": "BAR MS STD DIA 100  MM     BLACK - 61.66  KG/MTR",
        "AsslyQty": 0.01
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06500020M12100060",
        "id": "M12100060",
        "ParentDescription": "SPROCKET 3/4\" 21 T 24  BORE NA THK",
        "ChildKey": "A060A0050A06300030A06301010A06500020M121000600602009",
        "Child": "0602009",
        "ChildDescription": "SPROCKET STD 3/4\" X 21     T WITH STANDARD HUB",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06500020M19100010",
        "id": "M19100010",
        "ParentDescription": "BRG HSG 6206-2Z BRG NO 3 MTG HOLES",
        "ChildKey": "A060A0050A06300030A06301010A06500020M191000100206045",
        "Child": "0206045",
        "ChildDescription": "BAR MS STD DIA 100  MM     BLACK - 61.66  KG/MTR",
        "AsslyQty": 0.03
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06600030A013C0020",
        "id": "A013C0020",
        "ParentDescription": "CHAIN TENSIONER        ASSEMBLY FOR MAG. DRUM",
        "ChildKey": "A060A0050A06300030A06301010A06600030A013C00200101008",
        "Child": "0101008",
        "ChildDescription": "HEX BOLT STD M8 X 15 L, M.S, PLATED.",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06600030A013C0020",
        "id": "A013C0020",
        "ParentDescription": "CHAIN TENSIONER        ASSEMBLY FOR MAG. DRUM",
        "ChildKey": "A060A0050A06300030A06301010A06600030A013C00200101014",
        "Child": "0101014",
        "ChildDescription": "HEX BOLT M8 X 30 L, M.S, PLATED.",
        "AsslyQty": 2
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06600030A013C0020",
        "id": "A013C0020",
        "ParentDescription": "CHAIN TENSIONER        ASSEMBLY FOR MAG. DRUM",
        "ChildKey": "A060A0050A06300030A06301010A06600030A013C00200103003",
        "Child": "0103003",
        "ChildDescription": "SPRING WASHER, SIZE- M8, M.S , PLATED",
        "AsslyQty": 3
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06600030A013C0020",
        "id": "A013C0020",
        "ParentDescription": "CHAIN TENSIONER        ASSEMBLY FOR MAG. DRUM",
        "ChildKey": "A060A0050A06300030A06301010A06600030A013C00200103015",
        "Child": "0103015",
        "ChildDescription": "PLAIN WASHER, SIZE- M8, M.S , PLATED",
        "AsslyQty": 3
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06600030A013C0020",
        "id": "A013C0020",
        "ParentDescription": "CHAIN TENSIONER        ASSEMBLY FOR MAG. DRUM",
        "ChildKey": "A060A0050A06300030A06301010A06600030A013C00200103052",
        "Child": "0103052",
        "ChildDescription": "PLAIN WASHER, SIZE- 3/8 (3MM THK 25OD 10 ID)",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06600030A013C0020",
        "id": "A013C0020",
        "ParentDescription": "CHAIN TENSIONER        ASSEMBLY FOR MAG. DRUM",
        "ChildKey": "A060A0050A06300030A06301010A06600030A013C00200108009",
        "Child": "0108009",
        "ChildDescription": "CIRCLIP-INTERNAL, B-42, LIGHT SERIES,  M.S, ",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06600030A013C0020",
        "id": "A013C0020",
        "ParentDescription": "CHAIN TENSIONER        ASSEMBLY FOR MAG. DRUM",
        "ChildKey": "A060A0050A06300030A06301010A06600030A013C00201701015",
        "Child": 1701015,
        "ChildDescription": "BEARING 6004-2Z LOCAL  42 O.D.X 20 I.D. X 12 THK",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06600030A013C0020",
        "id": "A013C0020",
        "ParentDescription": "CHAIN TENSIONER        ASSEMBLY FOR MAG. DRUM",
        "ChildKey": "A060A0050A06300030A06301010A06600030A013C0020M02100300",
        "Child": "M02100300",
        "ChildDescription": "SHAFT STUB 22.5 OD 35 L",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06600030A013C0020",
        "id": "A013C0020",
        "ParentDescription": "CHAIN TENSIONER        ASSEMBLY FOR MAG. DRUM",
        "ChildKey": "A060A0050A06300030A06301010A06600030A013C0020M03100090",
        "Child": "M03100090",
        "ChildDescription": "WASHER OD 30 ID 9 THK 3",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06600030A013C0020",
        "id": "A013C0020",
        "ParentDescription": "CHAIN TENSIONER        ASSEMBLY FOR MAG. DRUM",
        "ChildKey": "A060A0050A06300030A06301010A06600030A013C0020M07100210",
        "Child": "M07100210",
        "ChildDescription": "MTG PLATE AS PER DWG   M07100210 5 MM THK",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06600030A013C0020",
        "id": "A013C0020",
        "ParentDescription": "CHAIN TENSIONER        ASSEMBLY FOR MAG. DRUM",
        "ChildKey": "A060A0050A06300030A06301010A06600030A013C0020M26100210",
        "Child": "M26100210",
        "ChildDescription": "ROLLER OD 75 ID 32     THK 20",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06600030M12100080",
        "id": "M12100080",
        "ParentDescription": "SPROCKET 3/4\" 38 T 60  BORE NA THK",
        "ChildKey": "A060A0050A06300030A06301010A06600030M121000800203006",
        "Child": "0203006",
        "ChildDescription": "PLATE MS 5 MM THK HR",
        "AsslyQty": 0.01
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06600030M12100080",
        "id": "M12100080",
        "ParentDescription": "SPROCKET 3/4\" 38 T 60  BORE NA THK",
        "ChildKey": "A060A0050A06300030A06301010A06600030M121000800602015",
        "Child": "0602015",
        "ChildDescription": "SPROCKET STD 3/4\" X 38     TEETH WITHOUT HUB",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06600030M12100120",
        "id": "M12100120",
        "ParentDescription": "SPROCKET 3/4\" 17 T 28  BORE 35 THK",
        "ChildKey": "A060A0050A06300030A06301010A06600030M121001200105007",
        "Child": "0105007",
        "ChildDescription": "SCREW GRUB M6  X 15 L, M.S, PLATED",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06600030M12100120",
        "id": "M12100120",
        "ParentDescription": "SPROCKET 3/4\" 17 T 28  BORE 35 THK",
        "ChildKey": "A060A0050A06300030A06301010A06600030M121001200602004",
        "Child": "0602004",
        "ChildDescription": "SPROCKET STD 3/4\" X 17 T   WITH STANDARD HUB",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06600030M34100020",
        "id": "M34100020",
        "ParentDescription": "HUB OD 35 ID 25 THK 40",
        "ChildKey": "A060A0050A06300030A06301010A06600030M341000200206030",
        "Child": "0206030",
        "ChildDescription": "BAR MS STD DIA 35 MM       BRIGHT - 7.15  KG/MTR",
        "AsslyQty": 0.05
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06600030SSDHA1006",
        "id": "SSDHA1006",
        "ParentDescription": "HEX BOLT STD SET, M10 X 30 L MS PLATED",
        "ChildKey": "A060A0050A06300030A06301010A06600030SSDHA10060101024",
        "Child": "0101024",
        "ChildDescription": "HEX BOLT STD M10  X 30 L, M.S, PLATED.",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06600030SSDHA1006",
        "id": "SSDHA1006",
        "ParentDescription": "HEX BOLT STD SET, M10 X 30 L MS PLATED",
        "ChildKey": "A060A0050A06300030A06301010A06600030SSDHA10060102004",
        "Child": "0102004",
        "ChildDescription": "HEX NUT M10, M.S,      STANDARD",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06600030SSDHA1006",
        "id": "SSDHA1006",
        "ParentDescription": "HEX BOLT STD SET, M10 X 30 L MS PLATED",
        "ChildKey": "A060A0050A06300030A06301010A06600030SSDHA10060103005",
        "Child": "0103005",
        "ChildDescription": "SPRING WASHER, SIZE-   M10, M.S , PLATED",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06600030SSDHA1006",
        "id": "SSDHA1006",
        "ParentDescription": "HEX BOLT STD SET, M10 X 30 L MS PLATED",
        "ChildKey": "A060A0050A06300030A06301010A06600030SSDHA10060103017",
        "Child": "0103017",
        "ChildDescription": "PLAIN WASHER, SIZE- M10, M.S , PLATED",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06700040",
        "id": "A06700040",
        "ParentDescription": "VH 1000 WINDING SHAFT  PIPE ASS",
        "ChildKey": "A060A0050A06300030A06301010A06700020A067000400301003",
        "Child": "0301003",
        "ChildDescription": "PIPE 100 NB  ERW B     CLASS ROUND MS",
        "AsslyQty": 0.93
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06700040",
        "id": "A06700040",
        "ParentDescription": "VH 1000 WINDING SHAFT  PIPE ASS",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06700040M26100070",
        "Child": "M26100070",
        "ChildDescription": "ROLLER OD 114.3 ID NA  THK 10",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06700040",
        "id": "A06700040",
        "ParentDescription": "VH 1000 WINDING SHAFT  PIPE ASS",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06700040M35100010",
        "Child": "M35100010",
        "ChildDescription": "MACHINED BAR OD 5 L 23.2",
        "AsslyQty": 20
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06H00020",
        "id": "A06H00020",
        "ParentDescription": "VH 1000 BOW PIPE ASS",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06H000200101012",
        "Child": "0101012",
        "ChildDescription": "HEX BOLT STD M8 X 25 L, M.S, PLATED.",
        "AsslyQty": 4
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06H00020",
        "id": "A06H00020",
        "ParentDescription": "VH 1000 BOW PIPE ASS",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06H000200102002",
        "Child": "0102002",
        "ChildDescription": "HEX NUT M8, M.S,       STANDARD",
        "AsslyQty": 4
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06H00020",
        "id": "A06H00020",
        "ParentDescription": "VH 1000 BOW PIPE ASS",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06H000200103003",
        "Child": "0103003",
        "ChildDescription": "SPRING WASHER, SIZE- M8, M.S , PLATED",
        "AsslyQty": 4
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06H00020",
        "id": "A06H00020",
        "ParentDescription": "VH 1000 BOW PIPE ASS",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06H000200103015",
        "Child": "0103015",
        "ChildDescription": "PLAIN WASHER, SIZE- M8, M.S , PLATED",
        "AsslyQty": 4
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06H00020",
        "id": "A06H00020",
        "ParentDescription": "VH 1000 BOW PIPE ASS",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06H000200205010",
        "Child": "0205010",
        "ChildDescription": "FLAT MS 40 MM WIDTH 5  MM THK",
        "AsslyQty": 0.13
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06H00020",
        "id": "A06H00020",
        "ParentDescription": "VH 1000 BOW PIPE ASS",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06H000200206023",
        "Child": "0206023",
        "ChildDescription": "BAR MS STD DIA 12 MM       BRIGHT - 0.89 KG/MTR",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06I00010",
        "id": "A06I00010",
        "ParentDescription": "CHAIN TENSIONER",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06I000100101012",
        "Child": "0101012",
        "ChildDescription": "HEX BOLT STD M8 X 25 L, M.S, PLATED.",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06I00010",
        "id": "A06I00010",
        "ParentDescription": "CHAIN TENSIONER",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06I000100101031",
        "Child": "0101031",
        "ChildDescription": "HEX BOLT M12 X 30 L, M.S, PLATED. STD",
        "AsslyQty": 2
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06I00010",
        "id": "A06I00010",
        "ParentDescription": "CHAIN TENSIONER",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06I000100102006",
        "Child": "0102006",
        "ChildDescription": "HEX NUT M12, M.S,      STANDARD",
        "AsslyQty": 2
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06I00010",
        "id": "A06I00010",
        "ParentDescription": "CHAIN TENSIONER",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06I000100103003",
        "Child": "0103003",
        "ChildDescription": "SPRING WASHER, SIZE- M8, M.S , PLATED",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06I00010",
        "id": "A06I00010",
        "ParentDescription": "CHAIN TENSIONER",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06I000100103007",
        "Child": "0103007",
        "ChildDescription": "SPRING WASHER, SIZE-   M12, M.S , PLATED",
        "AsslyQty": 2
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06I00010",
        "id": "A06I00010",
        "ParentDescription": "CHAIN TENSIONER",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06I000100103015",
        "Child": "0103015",
        "ChildDescription": "PLAIN WASHER, SIZE- M8, M.S , PLATED",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06I00010",
        "id": "A06I00010",
        "ParentDescription": "CHAIN TENSIONER",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06I000100103019",
        "Child": "0103019",
        "ChildDescription": "PLAIN WASHER, SIZE- M12, M.S , PLATED",
        "AsslyQty": 2
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06I00010",
        "id": "A06I00010",
        "ParentDescription": "CHAIN TENSIONER",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06I000100108011",
        "Child": "0108011",
        "ChildDescription": "CIRCLIP-INTERNAL, B-52,LIGHT SERIES",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06I00010",
        "id": "A06I00010",
        "ParentDescription": "CHAIN TENSIONER",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06I000101701019",
        "Child": 1701019,
        "ChildDescription": "BEARING 6205-2Z LOCAL  52 O.D.X 25 I.D. X 15 THK",
        "AsslyQty": 2
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06I00010",
        "id": "A06I00010",
        "ParentDescription": "CHAIN TENSIONER",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06I00010A06I00050",
        "Child": "A06I00050",
        "ChildDescription": "CHAIN TENSIONER SPKT   ASSEMBLY",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06I00010",
        "id": "A06I00010",
        "ParentDescription": "CHAIN TENSIONER",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06I00010M02100070",
        "Child": "M02100070",
        "ChildDescription": "SHAFT STUB 30 DIA 73.5 L",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06I00010",
        "id": "A06I00010",
        "ParentDescription": "CHAIN TENSIONER",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06I00010M03100090",
        "Child": "M03100090",
        "ChildDescription": "WASHER OD 30 ID 9 THK 3",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06I00010",
        "id": "A06I00010",
        "ParentDescription": "CHAIN TENSIONER",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06I00010M07100040",
        "Child": "M07100040",
        "ChildDescription": "MTG PLATE AS PER       M07100040 DWG 8 THK",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06I00010",
        "id": "A06I00010",
        "ParentDescription": "CHAIN TENSIONER",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06I00010M12100130",
        "Child": "M12100130",
        "ChildDescription": "SPROCKET 3/4\" 18 T 74  BORE  DIA NA THK",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020M02100060",
        "id": "M02100060",
        "ParentDescription": "SHAFT STUB 30 DIA 128.5 L",
        "ChildKey": "A060A0050A06300030A06301010A06700020M021000600206028",
        "Child": "0206028",
        "ChildDescription": "BAR MS STD DIA 30 MM       BRIGHT - 5.55 KG/MTR",
        "AsslyQty": 0.14
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020M03100060",
        "id": "M03100060",
        "ParentDescription": "WASHER OD 30 ID 20.2   THK 11",
        "ChildKey": "A060A0050A06300030A06301010A06700020M031000600206028",
        "Child": "0206028",
        "ChildDescription": "BAR MS STD DIA 30 MM       BRIGHT - 5.55 KG/MTR",
        "AsslyQty": 0.01
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020M03100070",
        "id": "M03100070",
        "ParentDescription": "WASHER OD 30 ID 25.5   THK 5",
        "ChildKey": "A060A0050A06300030A06301010A06700020M031000700206028",
        "Child": "0206028",
        "ChildDescription": "BAR MS STD DIA 30 MM       BRIGHT - 5.55 KG/MTR",
        "AsslyQty": 0.01
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020M04100060",
        "id": "M04100060",
        "ParentDescription": "BUSH OD 30 ID 14 THK 30 CLR",
        "ChildKey": "A060A0050A06300030A06301010A06700020M041000600206028",
        "Child": "0206028",
        "ChildDescription": "BAR MS STD DIA 30 MM       BRIGHT - 5.55 KG/MTR",
        "AsslyQty": 0.04
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020M05100030",
        "id": "M05100030",
        "ParentDescription": "BUSH TAPPED 30 OD M16  THRD 23 THK",
        "ChildKey": "A060A0050A06300030A06301010A06700020M051000300206028",
        "Child": "0206028",
        "ChildDescription": "BAR MS STD DIA 30 MM       BRIGHT - 5.55 KG/MTR",
        "AsslyQty": 0.04
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020M05100150",
        "id": "M05100150",
        "ParentDescription": "BUSH TAPPED 25 OD M16  THREAD 26 THK",
        "ChildKey": "A060A0050A06300030A06301010A06700020M051001500206027",
        "Child": "0206027",
        "ChildDescription": "BAR MS STD DIA 25 MM       BRIGHT - 3.85 KG/MTR",
        "AsslyQty": 0.04
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020M12100050",
        "id": "M12100050",
        "ParentDescription": "SPROCKET 3/4\" 19 T 35  BORE 0 THK",
        "ChildKey": "A060A0050A06300030A06301010A06700020M121000500602008",
        "Child": "0602008",
        "ChildDescription": "SPROCKET 3/4\" X 19     T WITHOUT HUB",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020M19100020",
        "id": "M19100020",
        "ParentDescription": "BRG HSG 6205-2Z BRG NO 4 MTG HOLES",
        "ChildKey": "A060A0050A06300030A06301010A06700020M191000200206046",
        "Child": "0206046",
        "ChildDescription": "BAR MS DIA 110  MM     BLACK - 74.60  KG/MTR",
        "AsslyQty": 0.04
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020M26100060",
        "id": "M26100060",
        "ParentDescription": "ROLLER OD 102.2 ID 25  THK 20",
        "ChildKey": "A060A0050A06300030A06301010A06700020M261000600206046",
        "Child": "0206046",
        "ChildDescription": "BAR MS DIA 110  MM     BLACK - 74.60  KG/MTR",
        "AsslyQty": 0.03
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020M27100030",
        "id": "M27100030",
        "ParentDescription": "THRD BAR OD 16 L 90    M16X90",
        "ChildKey": "A060A0050A06300030A06301010A06700020M271000300101086",
        "Child": "0101086",
        "ChildDescription": "HEX BOLT M16 X 100  L  MS PLATED",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020M27100030",
        "id": "M27100030",
        "ParentDescription": "THRD BAR OD 16 L 90    M16X90",
        "ChildKey": "A060A0050A06300030A06301010A06700020M271000300102009",
        "Child": "0102009",
        "ChildDescription": "HEX NUT M16, M.S,      STANDARD",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020M27100030",
        "id": "M27100030",
        "ParentDescription": "THRD BAR OD 16 L 90    M16X90",
        "ChildKey": "A060A0050A06300030A06301010A06700020M271000300206023",
        "Child": "0206023",
        "ChildDescription": "BAR MS STD DIA 12 MM       BRIGHT - 0.89 KG/MTR",
        "AsslyQty": 0.07
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020M32102944",
        "id": "M32102944",
        "ParentDescription": "LASER CUT FOR WINDING  SHAFT PLATE",
        "ChildKey": "A060A0050A06300030A06301010A06700020M321029440203006",
        "Child": "0203006",
        "ChildDescription": "PLATE MS 5 MM THK HR",
        "AsslyQty": 0.01
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020SSDHA0805",
        "id": "SSDHA0805",
        "ParentDescription": "HEX BOLT STD SET, M8 X 25 L MS PLATED",
        "ChildKey": "A060A0050A06300030A06301010A06700020SSDHA08050101012",
        "Child": "0101012",
        "ChildDescription": "HEX BOLT STD M8 X 25 L, M.S, PLATED.",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020SSDHA0805",
        "id": "SSDHA0805",
        "ParentDescription": "HEX BOLT STD SET, M8 X 25 L MS PLATED",
        "ChildKey": "A060A0050A06300030A06301010A06700020SSDHA08050102002",
        "Child": "0102002",
        "ChildDescription": "HEX NUT M8, M.S,       STANDARD",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020SSDHA0805",
        "id": "SSDHA0805",
        "ParentDescription": "HEX BOLT STD SET, M8 X 25 L MS PLATED",
        "ChildKey": "A060A0050A06300030A06301010A06700020SSDHA08050103003",
        "Child": "0103003",
        "ChildDescription": "SPRING WASHER, SIZE- M8, M.S , PLATED",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06700020SSDHA0805",
        "id": "SSDHA0805",
        "ParentDescription": "HEX BOLT STD SET, M8 X 25 L MS PLATED",
        "ChildKey": "A060A0050A06300030A06301010A06700020SSDHA08050103015",
        "Child": "0103015",
        "ChildDescription": "PLAIN WASHER, SIZE- M8, M.S , PLATED",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06800020A06800040",
        "id": "A06800040",
        "ParentDescription": "ROLLER PIPE ASSEMBLY - 1000P/W",
        "ChildKey": "A060A0050A06300030A06301010A06800020A068000400301003",
        "Child": "0301003",
        "ChildDescription": "PIPE 100 NB  ERW B     CLASS ROUND MS",
        "AsslyQty": 0.96
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06800020A06800040",
        "id": "A06800040",
        "ParentDescription": "ROLLER PIPE ASSEMBLY - 1000P/W",
        "ChildKey": "A060A0050A06300030A06301010A06800020A06800040M02100040",
        "Child": "M02100040",
        "ChildDescription": "SHAFT STUB OD 30 L 101.5",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06800020A06800040",
        "id": "A06800040",
        "ParentDescription": "ROLLER PIPE ASSEMBLY - 1000P/W",
        "ChildKey": "A060A0050A06300030A06301010A06800020A06800040M02100050",
        "Child": "M02100050",
        "ChildDescription": "SHAFT STUB OD 30 L 47",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06800020A06800040",
        "id": "A06800040",
        "ParentDescription": "ROLLER PIPE ASSEMBLY - 1000P/W",
        "ChildKey": "A060A0050A06300030A06301010A06800020A06800040M26100050",
        "Child": "M26100050",
        "ChildDescription": "ROLLER OD 114.3 ID 25  THK 10",
        "AsslyQty": 2
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06800020M04100090",
        "id": "M04100090",
        "ParentDescription": "BUSH OD 30 ID 23.1 THK 22 CLR",
        "ChildKey": "A060A0050A06300030A06301010A06800020M041000900206028",
        "Child": "0206028",
        "ChildDescription": "BAR MS STD DIA 30 MM       BRIGHT - 5.55 KG/MTR",
        "AsslyQty": 0.03
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06800020M12100070",
        "id": "M12100070",
        "ParentDescription": "SPROCKET 3/4\" 19 T 23  BORE 32 THK",
        "ChildKey": "A060A0050A06300030A06301010A06800020M121000700602007",
        "Child": "0602007",
        "ChildDescription": "SPROCKET STD 3/4\" X 19     T WITH STANDARD HUB",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06800020M19100140",
        "id": "M19100140",
        "ParentDescription": "BRG HSG 6205-2Z BRG NO 2 MTG HOLES",
        "ChildKey": "A060A0050A06300030A06301010A06800020M191001400205029",
        "Child": "0205029",
        "ChildDescription": "FLAT MS STD  63 MM     WIDTH 19 MM THK BRIGHT",
        "AsslyQty": 0.12
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06900020A06900040",
        "id": "A06900040",
        "ParentDescription": "VH 1000 FREE END SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A06900020A06900040M19100030",
        "Child": "M19100030",
        "ChildDescription": "BRG HSG 6205-2Z BRG NO 4 MTG HOLES",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06900020A06900040",
        "id": "A06900040",
        "ParentDescription": "VH 1000 FREE END SHAFT ASS",
        "ChildKey": "A060A0050A06300030A06301010A06900020A06900040M26100040",
        "Child": "M26100040",
        "ChildDescription": "ROLLER OD 295 ID 75 THK 12",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06900020A06900050",
        "id": "A06900050",
        "ParentDescription": "FREE END SHAFT ASS -   UPTO 1000 P/W",
        "ChildKey": "A060A0050A06300030A06301010A06900020A06900050M07100010",
        "Child": "M07100010",
        "ChildDescription": "MTG PLATE AS PER DWG 8 THK",
        "AsslyQty": 2
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06900020A06900050",
        "id": "A06900050",
        "ParentDescription": "FREE END SHAFT ASS -   UPTO 1000 P/W",
        "ChildKey": "A060A0050A06300030A06301010A06900020A06900050M20100010",
        "Child": "M20100010",
        "ChildDescription": "BRG BUSH 40 OD 25.1 ID 30 THK",
        "AsslyQty": 2
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06900020M01100090",
        "id": "M01100090",
        "ParentDescription": "SHAFT OD 35 L 994 BRG  25",
        "ChildKey": "A060A0050A06300030A06301010A06900020M011000900206031",
        "Child": "0206031",
        "ChildDescription": "BAR MS DIA 36 MM       BRIGHT - 7.99 KG/MTR",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06900020M03100040",
        "id": "M03100040",
        "ParentDescription": "WASHER OD 35 ID 25.5   THK 10",
        "ChildKey": "A060A0050A06300030A06301010A06900020M031000400206030",
        "Child": "0206030",
        "ChildDescription": "BAR MS STD DIA 35 MM       BRIGHT - 7.15  KG/MTR",
        "AsslyQty": 0.01
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06900020M05100020",
        "id": "M05100020",
        "ParentDescription": "BUSH TAPPED 25 OD  M12 THRD 30 THK",
        "ChildKey": "A060A0050A06300030A06301010A06900020M051000200206027",
        "Child": "0206027",
        "ChildDescription": "BAR MS STD DIA 25 MM       BRIGHT - 3.85 KG/MTR",
        "AsslyQty": 0.04
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06900020M06100150",
        "id": "M06100150",
        "ParentDescription": "FLG OD 80 ID 35.2 L 8",
        "ChildKey": "A060A0050A06300030A06301010A06900020M061001501201002",
        "Child": 1201002,
        "ChildDescription": "PROFILE MS ROUND 12THK 95 OD",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06A000301901004",
        "id": 1901004,
        "ParentDescription": "ARROW FOR DIRECTION OF ROTATION",
        "ChildKey": "A060A0050A06300030A06301010A06A0003019010040203019",
        "Child": "0203019",
        "ChildDescription": "SHEET MS (10 G)  3.15  MM THK",
        "AsslyQty": 0.02
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06A00030M35100280",
        "id": "M35100280",
        "ParentDescription": "MACHINED BAR 16 OD 80 L",
        "ChildKey": "A060A0050A06300030A06301010A06A00030M351002800206024",
        "Child": "0206024",
        "ChildDescription": "BAR MS STD DIA 16 MM       BRIGHT - 1.58 KG/MTR",
        "AsslyQty": 0.36
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06E00020SSDHA0803",
        "id": "SSDHA0803",
        "ParentDescription": "HEX BOLT STD SET, M8 X 15 L MS PLATED",
        "ChildKey": "A060A0050A06300030A06301010A06E00020SSDHA08030101008",
        "Child": "0101008",
        "ChildDescription": "HEX BOLT STD M8 X 15 L, M.S, PLATED.",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06E00020SSDHA0803",
        "id": "SSDHA0803",
        "ParentDescription": "HEX BOLT STD SET, M8 X 15 L MS PLATED",
        "ChildKey": "A060A0050A06300030A06301010A06E00020SSDHA08030102002",
        "Child": "0102002",
        "ChildDescription": "HEX NUT M8, M.S,       STANDARD",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06E00020SSDHA0803",
        "id": "SSDHA0803",
        "ParentDescription": "HEX BOLT STD SET, M8 X 15 L MS PLATED",
        "ChildKey": "A060A0050A06300030A06301010A06E00020SSDHA08030103003",
        "Child": "0103003",
        "ChildDescription": "SPRING WASHER, SIZE- M8, M.S , PLATED",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301010A06E00020SSDHA0803",
        "id": "SSDHA0803",
        "ParentDescription": "HEX BOLT STD SET, M8 X 15 L MS PLATED",
        "ChildKey": "A060A0050A06300030A06301010A06E00020SSDHA08030103015",
        "Child": "0103015",
        "ChildDescription": "PLAIN WASHER, SIZE- M8, M.S , PLATED",
        "AsslyQty": 1
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301020M11100010SSDTA0065",
        "id": "SSDTA0065",
        "ParentDescription": "SPANNER FOR 65M2 TORQUE LIMITER",
        "ChildKey": "A060A0050A06300030A06301020M11100010SSDTA00650203008",
        "Child": "0203008",
        "ChildDescription": "PLATE MS 8 MM THK, HR",
        "AsslyQty": 0.01
    },
    {
        "BomLevel": 5,
        "ParentKey": "A060A0050A06300030A06301020M11100020SSDTA0125",
        "id": "SSDTA0125",
        "ParentDescription": "SPANNER FOR 125M2      TORQUE LIMITER",
        "ChildKey": "A060A0050A06300030A06301020M11100020SSDTA01250203009",
        "Child": "0203009",
        "ChildDescription": "PLATE MS 10MM THK, HR",
        "AsslyQty": 0.02
    },
    {
        "BomLevel": 6,
        "ParentKey": "A060A0050A06300030A06301010A06500020A06500050M32100020",
        "id": "M32100020",
        "ParentDescription": "CONVEYOR SPKT 2.5\" X 6 T- LASER",
        "ChildKey": "A060A0050A06300030A06301010A06500020A06500050M321000200203010",
        "Child": "0203010",
        "ChildDescription": "PLATE MS 12 MM THK,  HR",
        "AsslyQty": 0.02
    },
    {
        "BomLevel": 6,
        "ParentKey": "A060A0050A06300030A06301010A06500020A06500050M34100010",
        "id": "M34100010",
        "ParentDescription": "HUB OD 60 ID 35 THK 47",
        "ChildKey": "A060A0050A06300030A06301010A06500020A06500050M341000100206039",
        "Child": "0206039",
        "ChildDescription": "BAR MS DIA 63 MM       BRIGHT - 24.47 KG/MTR",
        "AsslyQty": 0.05
    },
    {
        "BomLevel": 6,
        "ParentKey": "A060A0050A06300030A06301010A06600030A013C0020M02100300",
        "id": "M02100300",
        "ParentDescription": "SHAFT STUB 22.5 OD 35 L",
        "ChildKey": "A060A0050A06300030A06301010A06600030A013C0020M021003000206027",
        "Child": "0206027",
        "ChildDescription": "BAR MS STD DIA 25 MM       BRIGHT - 3.85 KG/MTR",
        "AsslyQty": 0.04
    },
    {
        "BomLevel": 6,
        "ParentKey": "A060A0050A06300030A06301010A06600030A013C0020M03100090",
        "id": "M03100090",
        "ParentDescription": "WASHER OD 30 ID 9 THK 3",
        "ChildKey": "A060A0050A06300030A06301010A06600030A013C0020M031000900103052",
        "Child": "0103052",
        "ChildDescription": "PLAIN WASHER, SIZE- 3/8 (3MM THK 25OD 10 ID)",
        "AsslyQty": 2
    },
    {
        "BomLevel": 6,
        "ParentKey": "A060A0050A06300030A06301010A06600030A013C0020M07100210",
        "id": "M07100210",
        "ParentDescription": "MTG PLATE AS PER DWG   M07100210 5 MM THK",
        "ChildKey": "A060A0050A06300030A06301010A06600030A013C0020M071002100205016",
        "Child": "0205016",
        "ChildDescription": "FLAT MS STD 50 MM WIDTH 5  MM THK",
        "AsslyQty": 0.1
    },
    {
        "BomLevel": 6,
        "ParentKey": "A060A0050A06300030A06301010A06600030A013C0020M26100210",
        "id": "M26100210",
        "ParentDescription": "ROLLER OD 75 ID 32     THK 20",
        "ChildKey": "A060A0050A06300030A06301010A06600030A013C0020M261002100206042",
        "Child": "0206042",
        "ChildDescription": "BAR MS STD DIA 75  MM      BLACK - 34.66  KG/MTR",
        "AsslyQty": 0.03
    },
    {
        "BomLevel": 6,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06700040M26100070",
        "id": "M26100070",
        "ParentDescription": "ROLLER OD 114.3 ID NA  THK 10",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06700040M261000701201003",
        "Child": 1201003,
        "ChildDescription": "PROFILE MS ROUND 12THK 120 OD",
        "AsslyQty": 1
    },
    {
        "BomLevel": 6,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06700040M35100010",
        "id": "M35100010",
        "ParentDescription": "MACHINED BAR OD 5 L 23.2",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06700040M351000100206019",
        "Child": "0206019",
        "ChildDescription": "BAR MS DIA 5 MM BRIGHT 0.15 KG/MTR",
        "AsslyQty": 0.03
    },
    {
        "BomLevel": 6,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06I00010A06I00050",
        "id": "A06I00050",
        "ParentDescription": "CHAIN TENSIONER SPKT   ASSEMBLY",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06I00010A06I00050M12100130",
        "Child": "M12100130",
        "ChildDescription": "SPROCKET 3/4\" 18 T 74  BORE  DIA NA THK",
        "AsslyQty": 1
    },
    {
        "BomLevel": 6,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06I00010A06I00050",
        "id": "A06I00050",
        "ParentDescription": "CHAIN TENSIONER SPKT   ASSEMBLY",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06I00010A06I00050M34100430",
        "Child": "M34100430",
        "ChildDescription": "HUB 74 OD 43 ID 40  THK",
        "AsslyQty": 1
    },
    {
        "BomLevel": 6,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06I00010M02100070",
        "id": "M02100070",
        "ParentDescription": "SHAFT STUB 30 DIA 73.5 L",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06I00010M021000700206028",
        "Child": "0206028",
        "ChildDescription": "BAR MS STD DIA 30 MM       BRIGHT - 5.55 KG/MTR",
        "AsslyQty": 0.08
    },
    {
        "BomLevel": 6,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06I00010M07100040",
        "id": "M07100040",
        "ParentDescription": "MTG PLATE AS PER       M07100040 DWG 8 THK",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06I00010M071000400205011",
        "Child": "0205011",
        "ChildDescription": "FLAT MS STD 40 MM WIDTH 8  MM THK",
        "AsslyQty": 0.09
    },
    {
        "BomLevel": 6,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06I00010M12100130",
        "id": "M12100130",
        "ParentDescription": "SPROCKET 3/4\" 18 T 74  BORE  DIA NA THK",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06I00010M121001300206042",
        "Child": "0206042",
        "ChildDescription": "BAR MS STD DIA 75  MM      BLACK - 34.66  KG/MTR",
        "AsslyQty": 0.03
    },
    {
        "BomLevel": 6,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06I00010M12100130",
        "id": "M12100130",
        "ParentDescription": "SPROCKET 3/4\" 18 T 74  BORE  DIA NA THK",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06I00010M121001300602005",
        "Child": "0602005",
        "ChildDescription": "SPROCKET STD 3/4\" X 18     T WITH STANDARD HUB",
        "AsslyQty": 1
    },
    {
        "BomLevel": 6,
        "ParentKey": "A060A0050A06300030A06301010A06800020A06800040M02100040",
        "id": "M02100040",
        "ParentDescription": "SHAFT STUB OD 30 L 101.5",
        "ChildKey": "A060A0050A06300030A06301010A06800020A06800040M021000400206028",
        "Child": "0206028",
        "ChildDescription": "BAR MS STD DIA 30 MM       BRIGHT - 5.55 KG/MTR",
        "AsslyQty": 0.11
    },
    {
        "BomLevel": 6,
        "ParentKey": "A060A0050A06300030A06301010A06800020A06800040M02100050",
        "id": "M02100050",
        "ParentDescription": "SHAFT STUB OD 30 L 47",
        "ChildKey": "A060A0050A06300030A06301010A06800020A06800040M021000500206028",
        "Child": "0206028",
        "ChildDescription": "BAR MS STD DIA 30 MM       BRIGHT - 5.55 KG/MTR",
        "AsslyQty": 0.05
    },
    {
        "BomLevel": 6,
        "ParentKey": "A060A0050A06300030A06301010A06800020A06800040M26100050",
        "id": "M26100050",
        "ParentDescription": "ROLLER OD 114.3 ID 25  THK 10",
        "ChildKey": "A060A0050A06300030A06301010A06800020A06800040M261000501201003",
        "Child": 1201003,
        "ChildDescription": "PROFILE MS ROUND 12THK 120 OD",
        "AsslyQty": 1
    },
    {
        "BomLevel": 6,
        "ParentKey": "A060A0050A06300030A06301010A06900020A06900040M19100030",
        "id": "M19100030",
        "ParentDescription": "BRG HSG 6205-2Z BRG NO 4 MTG HOLES",
        "ChildKey": "A060A0050A06300030A06301010A06900020A06900040M191000300206044",
        "Child": "0206044",
        "ChildDescription": "BAR MS STD DIA 90  MM      BLACK - 49.94  KG/MTR",
        "AsslyQty": 0.05
    },
    {
        "BomLevel": 6,
        "ParentKey": "A060A0050A06300030A06301010A06900020A06900040M26100040",
        "id": "M26100040",
        "ParentDescription": "ROLLER OD 295 ID 75 THK 12",
        "ChildKey": "A060A0050A06300030A06301010A06900020A06900040M261000401201010",
        "Child": 1201010,
        "ChildDescription": "PROFILE MS ROUND 14THK 300 OD",
        "AsslyQty": 1
    },
    {
        "BomLevel": 6,
        "ParentKey": "A060A0050A06300030A06301010A06900020A06900050M07100010",
        "id": "M07100010",
        "ParentDescription": "MTG PLATE AS PER DWG 8 THK",
        "ChildKey": "A060A0050A06300030A06301010A06900020A06900050M071000100205018",
        "Child": "0205018",
        "ChildDescription": "FLAT MS STD 50 MM WIDTH 8  MM THK",
        "AsslyQty": 0.17
    },
    {
        "BomLevel": 6,
        "ParentKey": "A060A0050A06300030A06301010A06900020A06900050M20100010",
        "id": "M20100010",
        "ParentDescription": "BRG BUSH 40 OD 25.1 ID 30 THK",
        "ChildKey": "A060A0050A06300030A06301010A06900020A06900050M201000100206033",
        "Child": "0206033",
        "ChildDescription": "BAR MS DIA 40 MM       BRIGHT 9.86 KG/MTR",
        "AsslyQty": 0.04
    },
    {
        "BomLevel": 7,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06I00010A06I00050M12100130",
        "id": "M12100130",
        "ParentDescription": "SPROCKET 3/4\" 18 T 74  BORE  DIA NA THK",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06I00010A06I00050M121001300206042",
        "Child": "0206042",
        "ChildDescription": "BAR MS STD DIA 75  MM      BLACK - 34.66  KG/MTR",
        "AsslyQty": 0.03
    },
    {
        "BomLevel": 7,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06I00010A06I00050M12100130",
        "id": "M12100130",
        "ParentDescription": "SPROCKET 3/4\" 18 T 74  BORE  DIA NA THK",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06I00010A06I00050M121001300602005",
        "Child": "0602005",
        "ChildDescription": "SPROCKET STD 3/4\" X 18     T WITH STANDARD HUB",
        "AsslyQty": 1
    },
    {
        "BomLevel": 7,
        "ParentKey": "A060A0050A06300030A06301010A06700020A06I00010A06I00050M34100430",
        "id": "M34100430",
        "ParentDescription": "HUB 74 OD 43 ID 40  THK",
        "ChildKey": "A060A0050A06300030A06301010A06700020A06I00010A06I00050M341004300206042",
        "Child": "0206042",
        "ChildDescription": "BAR MS STD DIA 75  MM      BLACK - 34.66  KG/MTR",
        "AsslyQty": 0.04
    }
];

export function getBomRelationships() {
    return bomRelationships;
}

export function getProcessedBomElements() {
    let seen = new Map();

    // each element represents a relation.
    bomRelationships.forEach((element)=>{
        let parentNode = null;
        let parentKey = element["ParentKey"];
        if(seen.get(parentKey) !== undefined) {
            parentNode = seen.get(parentKey)
        } else {
            // build parent node
            parentNode = {
                id: element["ParentKey"],
                description: element["id"] + ":::" + element["ParentDescription"],
                children: []
            }
            seen.set(parentKey, parentNode);
        }

        let childNode = null;
        let childKey = element["ChildKey"];
        if(seen.get(childKey) !== undefined) {
            childNode = seen.get(childKey);
        } else {
            // build child node
            childNode = {
                id: element["ChildKey"],
                description: element["Child"] + ":::" + element["ChildDescription"],// + ":::" + element["AsslyQty"],
                quantity: element["AsslyQty"],
                children: []
            };
            seen.set(element["ChildKey"], childNode);
        }

        parentNode["children"].push(childNode);
        
    });
    let procesedElements = [];
    for(let key of seen.keys()) {
        procesedElements.push(seen.get(key))
    }
    return procesedElements.slice(0,1);
}