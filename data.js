var APP_DATA = {
  "scenes": [
    {
      "id": "0-queue-entrance",
      "name": "Queue Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.23698386237544078,
        "pitch": 0.039752589048855924,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.9255504968222983,
          "pitch": 0.016017085099203854,
          "rotation": 2.356194490192345,
          "target": "1-queue-p1"
        },
        {
          "yaw": 0.5337996605648971,
          "pitch": -0.03884756835472203,
          "rotation": 4.71238898038469,
          "target": "2-queue-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-queue-p1",
      "name": "Queue P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.2356154561170598,
        "pitch": 0.03591779974169995,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.9868515667304454,
          "pitch": 0.02230991153642492,
          "rotation": 4.71238898038469,
          "target": "0-queue-entrance"
        },
        {
          "yaw": -1.0447396373206317,
          "pitch": 0.13051569012470132,
          "rotation": 3.141592653589793,
          "target": "69-maze-exit-p3"
        },
        {
          "yaw": -0.6370843048525536,
          "pitch": 0.08486565453784323,
          "rotation": 5.497787143782138,
          "target": "6-maze-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-queue-p2",
      "name": "Queue P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.055833992658573806,
        "pitch": -0.015555360932156148,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.8536226893448529,
          "pitch": -0.15893973472455514,
          "rotation": 3.141592653589793,
          "target": "0-queue-entrance"
        },
        {
          "yaw": 0.18131335420546968,
          "pitch": 0.3507357968668341,
          "rotation": 5.497787143782138,
          "target": "3-queue-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-queue-p3",
      "name": "Queue P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.5012651785348474,
        "pitch": -0.10543077965131431,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.7253670107788572,
          "pitch": 0.18823364264677167,
          "rotation": 3.141592653589793,
          "target": "2-queue-p2"
        },
        {
          "yaw": -0.6918101341984766,
          "pitch": 0.2771829457010053,
          "rotation": 0,
          "target": "4-queue-p4"
        },
        {
          "yaw": -2.138509139174637,
          "pitch": -0.12004847125110274,
          "rotation": 2.356194490192345,
          "target": "0-queue-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-queue-p4",
      "name": "Queue P4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.0438566057188403,
        "pitch": 0.12120501843368814,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.3286566600892105,
          "pitch": 0.08993114412669811,
          "rotation": 3.141592653589793,
          "target": "3-queue-p3"
        },
        {
          "yaw": 2.9993788578973772,
          "pitch": 0.06933118970305685,
          "rotation": 1.5707963267948966,
          "target": "5-queue-p5"
        },
        {
          "yaw": -2.3727837718532943,
          "pitch": 0.0021043549466899236,
          "rotation": 2.356194490192345,
          "target": "6-maze-entrance"
        },
        {
          "yaw": -0.864859766466239,
          "pitch": 0.11578016150213344,
          "rotation": 2.356194490192345,
          "target": "8-pathway-1-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-queue-p5",
      "name": "Queue P5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.3777123734208025,
        "pitch": 0.1847122494302056,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.19087779889142809,
          "pitch": 0.1936806541234084,
          "rotation": 4.71238898038469,
          "target": "4-queue-p4"
        },
        {
          "yaw": -1.7545935756669753,
          "pitch": 0.24131906737073017,
          "rotation": 1.5707963267948966,
          "target": "6-maze-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-maze-entrance",
      "name": "Maze Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.05992120876592821,
          "pitch": 0.16569726787737693,
          "rotation": 0,
          "target": "7-pathway-1-p1"
        },
        {
          "yaw": 1.550940399399158,
          "pitch": 0.1659600916396542,
          "rotation": 3.141592653589793,
          "target": "5-queue-p5"
        },
        {
          "yaw": -0.908869157118172,
          "pitch": 0.2893952058710543,
          "rotation": 3.9269908169872414,
          "target": "69-maze-exit-p3"
        },
        {
          "yaw": -3.099543367429259,
          "pitch": 0.016623769697039492,
          "rotation": 3.9269908169872414,
          "target": "1-queue-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-pathway-1-p1",
      "name": "Pathway 1 P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0472800388991743,
          "pitch": 0.19010023034766377,
          "rotation": 3.141592653589793,
          "target": "6-maze-entrance"
        },
        {
          "yaw": -0.032021606423898064,
          "pitch": 0.2785969369797847,
          "rotation": 1.5707963267948966,
          "target": "8-pathway-1-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-pathway-1-p2",
      "name": "Pathway 1 P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.07692683432960479,
        "pitch": 0.03118283276088185,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.4639722180407642,
          "pitch": 0.3725505037644261,
          "rotation": 3.141592653589793,
          "target": "7-pathway-1-p1"
        },
        {
          "yaw": -0.10805250367561925,
          "pitch": 0.34775933114237034,
          "rotation": 0,
          "target": "9-pathway-1-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-pathway-1-p3",
      "name": "Pathway 1 P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.10546420835510162,
        "pitch": 0.129628007767991,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 3.0479316606711393,
          "pitch": 0.30048435872752144,
          "rotation": 3.141592653589793,
          "target": "8-pathway-1-p2"
        },
        {
          "yaw": -0.09615553302572799,
          "pitch": 0.418538583152106,
          "rotation": 4.71238898038469,
          "target": "10-pathway-1-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-pathway-1-p4",
      "name": "Pathway 1 P4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.05585621623117554,
        "pitch": 0.006913493747624955,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.4713262557739881,
          "pitch": 0.3780726552642548,
          "rotation": 3.141592653589793,
          "target": "9-pathway-1-p3"
        },
        {
          "yaw": 0.10008797947678438,
          "pitch": 0.4073870404193336,
          "rotation": 0,
          "target": "11-pathway-1-p5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-pathway-1-p5",
      "name": "Pathway 1 P5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.5744697466871997,
        "pitch": 0.2990123529008031,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -3.0953893043422536,
          "pitch": 0.4549836656115236,
          "rotation": 3.141592653589793,
          "target": "10-pathway-1-p4"
        },
        {
          "yaw": -1.0295100991467052,
          "pitch": 0.7090921095265728,
          "rotation": 3.9269908169872414,
          "target": "14-pathway-2-p1"
        },
        {
          "yaw": 1.4070006812165943,
          "pitch": 0.6784632325032955,
          "rotation": 0,
          "target": "12-pathway-1-p6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-pathway-1-p6",
      "name": "Pathway 1 P6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.08809363286132665,
        "pitch": 0.020739246976095416,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.5565775522089886,
          "pitch": 0.2693626963942215,
          "rotation": 1.5707963267948966,
          "target": "11-pathway-1-p5"
        },
        {
          "yaw": -1.6715070114271047,
          "pitch": 0.28963851068644075,
          "rotation": 0,
          "target": "13-boh"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-boh",
      "name": "BOH",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6027269097754449,
          "pitch": 0.08570791390539867,
          "rotation": 0,
          "target": "12-pathway-1-p6"
        },
        {
          "yaw": 1.695948180620098,
          "pitch": 0.18949948064671318,
          "rotation": 5.497787143782138,
          "target": "41-pathway-3-p11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-pathway-2-p1",
      "name": "Pathway 2 P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.11837791833729838,
        "pitch": 0.3207181749133188,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.2676929090247846,
          "pitch": 0.7503114927154577,
          "rotation": 3.9269908169872414,
          "target": "11-pathway-1-p5"
        },
        {
          "yaw": 0.03778078552988973,
          "pitch": 0.4163358300425344,
          "rotation": 1.5707963267948966,
          "target": "15-pathway-2-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-pathway-2-p2",
      "name": "Pathway 2 P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.022333597063433075,
        "pitch": 0.28518161708959866,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.7741077929884819,
          "pitch": 0.6464510980365059,
          "rotation": 3.141592653589793,
          "target": "14-pathway-2-p1"
        },
        {
          "yaw": 0.10762210480987022,
          "pitch": 0.415039077385428,
          "rotation": 0,
          "target": "16-pathway-2-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-pathway-2-p3",
      "name": "Pathway 2 P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.03474115098756769,
        "pitch": 0.27308300303125854,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 3.0618477021777206,
          "pitch": 0.38544132112819796,
          "rotation": 3.141592653589793,
          "target": "15-pathway-2-p2"
        },
        {
          "yaw": 0.57180566239645,
          "pitch": 0.6256472026172712,
          "rotation": 4.71238898038469,
          "target": "17-pathway-2-p4"
        },
        {
          "yaw": 2.152969257913192,
          "pitch": 0.01622918877244217,
          "rotation": 3.9269908169872414,
          "target": "24-pathway-2-p11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-pathway-2-p4",
      "name": "Pathway 2 P4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.13003042044685031,
        "pitch": 0.3152420520366306,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.0682510150285065,
          "pitch": 0.5785392973256638,
          "rotation": 3.141592653589793,
          "target": "16-pathway-2-p3"
        },
        {
          "yaw": 0.22828676697750439,
          "pitch": 0.6281035264477985,
          "rotation": 1.5707963267948966,
          "target": "18-pathway-2-p5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-pathway-2-p5",
      "name": "Pathway 2 P5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.03016717205778363,
        "pitch": 0.35251262106460146,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.6132936153895763,
          "pitch": 0.6362253403790277,
          "rotation": 3.141592653589793,
          "target": "17-pathway-2-p4"
        },
        {
          "yaw": 0.2846765396115938,
          "pitch": 0.7239126665091149,
          "rotation": 0.7853981633974483,
          "target": "19-pathway-2-p6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-pathway-2-p6",
      "name": "Pathway 2 P6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.426828114551963,
        "pitch": 0.22295530460077195,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.4649836610829414,
          "pitch": 0.5777281524802707,
          "rotation": 8.63937979737193,
          "target": "18-pathway-2-p5"
        },
        {
          "yaw": 0.42999958208674904,
          "pitch": 0.5877284955061128,
          "rotation": 1.5707963267948966,
          "target": "20-pathway-2-p7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-pathway-2-p7",
      "name": "Pathway 2 P7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.0012407553924127512,
        "pitch": 0.2143337847400133,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.7679750877660396,
          "pitch": 0.5119784093492861,
          "rotation": 3.141592653589793,
          "target": "19-pathway-2-p6"
        },
        {
          "yaw": 0.05086663327809582,
          "pitch": 0.5236316306035285,
          "rotation": 0,
          "target": "22-pathway-2-p9"
        },
        {
          "yaw": 3.0512772394466907,
          "pitch": 0.3826506508684915,
          "rotation": 3.141592653589793,
          "target": "21-pathway-2-p8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-pathway-2-p8",
      "name": "Pathway 2 P8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.6040994705699791,
        "pitch": 0.3605307432618119,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.8956434558739073,
          "pitch": 0.64490692525486,
          "rotation": 0,
          "target": "20-pathway-2-p7"
        },
        {
          "yaw": -0.312020318471502,
          "pitch": 0.6448407639106044,
          "rotation": 0,
          "target": "27-pathway-2-p14"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-pathway-2-p9",
      "name": "Pathway 2 P9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0.13481312807872214,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.01310723045208917,
          "pitch": 0.5827797662614618,
          "rotation": 4.71238898038469,
          "target": "23-pathway-2-p10"
        },
        {
          "yaw": 3.103393510432084,
          "pitch": 0.538989340277988,
          "rotation": 3.141592653589793,
          "target": "20-pathway-2-p7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-pathway-2-p10",
      "name": "Pathway 2 P10",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.06824083682751869,
        "pitch": 0.34740306081823924,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.7520717748485364,
          "pitch": 0.6415735559004645,
          "rotation": 3.141592653589793,
          "target": "22-pathway-2-p9"
        },
        {
          "yaw": 2.9992576337858114,
          "pitch": 0.5801274217773393,
          "rotation": 3.141592653589793,
          "target": "24-pathway-2-p11"
        },
        {
          "yaw": 0.23653620023522492,
          "pitch": 0.6769177183933124,
          "rotation": 5.497787143782138,
          "target": "25-pathway-2-p12"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-pathway-2-p11",
      "name": "Pathway 2 P11",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.633606805587359,
          "pitch": 0.3237942849682245,
          "rotation": 0,
          "target": "23-pathway-2-p10"
        },
        {
          "yaw": -0.2062958519257858,
          "pitch": 0.40083026532722954,
          "rotation": 0.7853981633974483,
          "target": "16-pathway-2-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-pathway-2-p12",
      "name": "Pathway 2 P12",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.05459323726616461,
        "pitch": 0.3041937248955886,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.2842058645811747,
          "pitch": 0.6644052917910219,
          "rotation": 2.356194490192345,
          "target": "23-pathway-2-p10"
        },
        {
          "yaw": -0.019842056342374903,
          "pitch": 0.4288388340800253,
          "rotation": 11.780972450961727,
          "target": "26-pathway-2-p13"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-pathway-2-p13",
      "name": "Pathway 2 P13",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.02109284167101677,
        "pitch": 0.31111507463081267,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -3.0223397050396414,
          "pitch": 0.47093542434942925,
          "rotation": 3.9269908169872414,
          "target": "25-pathway-2-p12"
        },
        {
          "yaw": -0.06193559984728836,
          "pitch": 0.5389331147288612,
          "rotation": 2.356194490192345,
          "target": "27-pathway-2-p14"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-pathway-2-p14",
      "name": "Pathway 2 P14",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.3982524100826144,
        "pitch": 0.35540350618565064,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 3.004017574145971,
          "pitch": 0.4795663390908782,
          "rotation": 9.42477796076938,
          "target": "26-pathway-2-p13"
        },
        {
          "yaw": -0.9497167145680834,
          "pitch": 0.4608342858369596,
          "rotation": 5.497787143782138,
          "target": "21-pathway-2-p8"
        },
        {
          "yaw": 1.9150643151442779,
          "pitch": 0.7451438896306204,
          "rotation": 0.7853981633974483,
          "target": "28-pathway-2-p15"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-pathway-2-p15",
      "name": "Pathway 2 P15",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.829020612481747,
          "pitch": 0.7882100772800662,
          "rotation": 3.9269908169872414,
          "target": "27-pathway-2-p14"
        },
        {
          "yaw": 0.02498771341190853,
          "pitch": 0.5085601570890415,
          "rotation": 0,
          "target": "29-pathway-2-p16"
        },
        {
          "yaw": -3.1081152104261953,
          "pitch": 0.1047096649702155,
          "rotation": 3.141592653589793,
          "target": "67-maze-exit-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-pathway-2-p16",
      "name": "Pathway 2 P16",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.00992604313930201,
        "pitch": 0.21086155930261086,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.0662069606572544,
          "pitch": 0.5026267716721726,
          "rotation": 0,
          "target": "30-pathway-2-p17"
        },
        {
          "yaw": 3.1253981265914597,
          "pitch": 0.5510481491251564,
          "rotation": 3.141592653589793,
          "target": "28-pathway-2-p15"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-pathway-2-p17",
      "name": "Pathway 2 P17",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.0062037769620655325,
        "pitch": 0.31802346448035657,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 3.1114240233103825,
          "pitch": 0.4373513273267218,
          "rotation": 3.141592653589793,
          "target": "29-pathway-2-p16"
        },
        {
          "yaw": -0.010590028729041023,
          "pitch": 0.3631372192980127,
          "rotation": 4.71238898038469,
          "target": "31-pathway-3-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-pathway-3-p1",
      "name": "Pathway 3 P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.022333597063429522,
        "pitch": 0.23505878741929997,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.03536570586553367,
          "pitch": 0.35350107049819,
          "rotation": 0.7853981633974483,
          "target": "32-pathway-3-p2"
        },
        {
          "yaw": -2.9640670736645482,
          "pitch": 0.16635025149030191,
          "rotation": 3.141592653589793,
          "target": "30-pathway-2-p17"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-pathway-3-p2",
      "name": "Pathway 3 P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.202245273626378,
        "pitch": 0.21431830617643755,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.005548916912831,
          "pitch": 0.33610750750213825,
          "rotation": 9.42477796076938,
          "target": "31-pathway-3-p1"
        },
        {
          "yaw": -0.20269254513942592,
          "pitch": 0.41633934091075275,
          "rotation": 5.497787143782138,
          "target": "33-pathway-3-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-pathway-3-p3",
      "name": "Pathway 3 P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.08188902295188782,
        "pitch": 0.31456280522053426,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.7155250179331674,
          "pitch": 0.4839784389069184,
          "rotation": 9.42477796076938,
          "target": "32-pathway-3-p2"
        },
        {
          "yaw": -0.3525896908303725,
          "pitch": 0.5993886355615334,
          "rotation": 10.210176124166829,
          "target": "34-pathway-3-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-pathway-3-p4",
      "name": "Pathway 3 P4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.08936501058940038,
        "pitch": 0.32645837468953687,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.2265929395656148,
          "pitch": 0.7412263125750087,
          "rotation": 10.210176124166829,
          "target": "33-pathway-3-p3"
        },
        {
          "yaw": 0.5058822366365607,
          "pitch": 0.5745154868925582,
          "rotation": 2.356194490192345,
          "target": "35-pathway-3-p5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-pathway-3-p5",
      "name": "Pathway 3 P5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.059893664762697085,
        "pitch": 0.3171957801232477,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.1955199085270323,
          "pitch": 0.6806502752913222,
          "rotation": 8.63937979737193,
          "target": "34-pathway-3-p4"
        },
        {
          "yaw": 0.030061544046290578,
          "pitch": 0.46238072180747203,
          "rotation": 7.853981633974483,
          "target": "36-pathway-3-p6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-pathway-3-p6",
      "name": "Pathway 3 P6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.14144611473507673,
        "pitch": 0.3491314342551508,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.741187555499999,
          "pitch": 0.45074109796120965,
          "rotation": 3.141592653589793,
          "target": "35-pathway-3-p5"
        },
        {
          "yaw": 0.13181084418718214,
          "pitch": 0.6002189466246381,
          "rotation": 0,
          "target": "37-pathway-3-p7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-pathway-3-p7",
      "name": "Pathway 3 P7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.014889064708953015,
        "pitch": 0.3162923389539287,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 3.0198504148196825,
          "pitch": 0.5811246503018328,
          "rotation": 3.141592653589793,
          "target": "36-pathway-3-p6"
        },
        {
          "yaw": 0.006510825147804766,
          "pitch": 0.5902616727407981,
          "rotation": 1.5707963267948966,
          "target": "38-pathway-3-p8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-pathway-3-p8",
      "name": "Pathway 3 P8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.09926043139304497,
        "pitch": 0.29728023114795477,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.6231359429018788,
          "pitch": 0.5021385214306022,
          "rotation": 3.141592653589793,
          "target": "37-pathway-3-p7"
        },
        {
          "yaw": -0.10612657755568478,
          "pitch": 0.49770901996681793,
          "rotation": 4.71238898038469,
          "target": "39-pathway-3-p9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-pathway-3-p9",
      "name": "Pathway 3 P9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.04158082676809016,
        "pitch": 0.46101284089244743,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.6285308687049067,
          "pitch": 0.4986793618190326,
          "rotation": 3.141592653589793,
          "target": "38-pathway-3-p8"
        },
        {
          "yaw": -0.4396988248696587,
          "pitch": 0.7589237851801354,
          "rotation": 10.995574287564278,
          "target": "40-pathway-3-p10"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-pathway-3-p10",
      "name": "Pathway 3 P10",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.024869149951753045,
        "pitch": 0.19530619837045826,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.5700033577960344,
          "pitch": 0.6087453191169949,
          "rotation": 4.71238898038469,
          "target": "39-pathway-3-p9"
        },
        {
          "yaw": -0.03734303814566431,
          "pitch": 0.48749533489125696,
          "rotation": 4.71238898038469,
          "target": "41-pathway-3-p11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-pathway-3-p11",
      "name": "Pathway 3 P11",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.026053346240271225,
        "pitch": 0.28345324365269775,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.628964792237424,
          "pitch": 0.38956115310629436,
          "rotation": 3.141592653589793,
          "target": "40-pathway-3-p10"
        },
        {
          "yaw": 3.0317342069843907,
          "pitch": 0.2685001447777893,
          "rotation": 0,
          "target": "13-boh"
        },
        {
          "yaw": -0.07812350697147252,
          "pitch": 0.4815588221811886,
          "rotation": 0,
          "target": "42-pathway-3-p12"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-pathway-3-p12",
      "name": "Pathway 3 P12",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.0483894603040973,
        "pitch": 0.22296017336096519,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 3.097014607246421,
          "pitch": 0.5767090612640438,
          "rotation": 3.141592653589793,
          "target": "41-pathway-3-p11"
        },
        {
          "yaw": 0.24428496442790149,
          "pitch": 0.3377176576658645,
          "rotation": 2.356194490192345,
          "target": "43-pathway-3-p13"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-pathway-3-p13",
      "name": "Pathway 3 P13",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.03970417255720804,
        "pitch": 0.27826812334198436,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.209621838893911,
          "pitch": 0.6013026683917211,
          "rotation": 8.63937979737193,
          "target": "42-pathway-3-p12"
        },
        {
          "yaw": -0.005083797410675217,
          "pitch": 0.3992966339266317,
          "rotation": 4.71238898038469,
          "target": "44-pathway-3-p14"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-pathway-3-p14",
      "name": "Pathway 3 P14",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.09553884119629608,
        "pitch": 0.17110991189524327,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.6102808201691303,
          "pitch": 0.2979214257906584,
          "rotation": 3.141592653589793,
          "target": "43-pathway-3-p13"
        },
        {
          "yaw": -0.06325738433224792,
          "pitch": 0.49094263415692296,
          "rotation": 4.71238898038469,
          "target": "45-pathway-3-p15"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "45-pathway-3-p15",
      "name": "Pathway 3 P15",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.07444532354477218,
        "pitch": 0.2799891765422782,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.6430505711921928,
          "pitch": 0.47287844181009575,
          "rotation": 3.141592653589793,
          "target": "44-pathway-3-p14"
        },
        {
          "yaw": -0.601747786370721,
          "pitch": 0.46478760707768707,
          "rotation": 0.7853981633974483,
          "target": "46-pathway-3-p16"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "46-pathway-3-p16",
      "name": "Pathway 3 P16",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.09928242196035875,
        "pitch": 0.22469620501814624,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.3801046837463087,
          "pitch": 0.5910426990548245,
          "rotation": 11.780972450961727,
          "target": "47-pathway-3-p17"
        },
        {
          "yaw": 2.0177512075565742,
          "pitch": 0.6844347988848867,
          "rotation": 3.9269908169872414,
          "target": "45-pathway-3-p15"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "47-pathway-3-p17",
      "name": "Pathway 3 P17",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.23450276916605262,
        "pitch": 0.21777505305023936,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.5964545445535947,
          "pitch": 0.4405720320992472,
          "rotation": 0.7853981633974483,
          "target": "48-pathway-3-p18"
        },
        {
          "yaw": -1.927624743028094,
          "pitch": 0.6493769679417696,
          "rotation": 2.356194490192345,
          "target": "46-pathway-3-p16"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "48-pathway-3-p18",
      "name": "Pathway 3 P18",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.05707447040400915,
        "pitch": 0.34041318946590593,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.16518572022432743,
          "pitch": 0.8216895155428627,
          "rotation": 6.283185307179586,
          "target": "49-pathway-3-p19"
        },
        {
          "yaw": 2.2765566763490366,
          "pitch": 0.6703326104174465,
          "rotation": 4.71238898038469,
          "target": "47-pathway-3-p17"
        },
        {
          "yaw": 0.08348889496434886,
          "pitch": 0.14189678270892792,
          "rotation": 0,
          "target": "50-pathway-4-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "49-pathway-3-p19",
      "name": "Pathway 3 P19",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.019852086278607572,
        "pitch": 0.1866643311859182,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 3.141557340360083,
          "pitch": 0.7785574970360454,
          "rotation": 3.141592653589793,
          "target": "48-pathway-3-p18"
        },
        {
          "yaw": -0.11459330522784761,
          "pitch": 0.2818156867120418,
          "rotation": 0,
          "target": "50-pathway-4-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "50-pathway-4-p1",
      "name": "Pathway 4 P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.2146523619456353,
        "pitch": 0.31974908582774475,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.4173726914868183,
          "pitch": 0.08172079198309312,
          "rotation": 3.141592653589793,
          "target": "49-pathway-3-p19"
        },
        {
          "yaw": -0.760024130825478,
          "pitch": 0.3462442426888721,
          "rotation": 5.497787143782138,
          "target": "51-pathway-4-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "51-pathway-4-p2",
      "name": "Pathway 4 P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.026055863240667776,
        "pitch": 0.1555536093216041,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.028722807729167243,
          "pitch": 0.5441950154997954,
          "rotation": 7.0685834705770345,
          "target": "52-pathway-4-p3"
        },
        {
          "yaw": 2.86549871094749,
          "pitch": 0.26360265832368057,
          "rotation": 3.9269908169872414,
          "target": "50-pathway-4-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "52-pathway-4-p3",
      "name": "Pathway 4 P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.033499172861288784,
        "pitch": 0.269624552888013,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.5128078345025173,
          "pitch": 0.5448506203122285,
          "rotation": 3.141592653589793,
          "target": "51-pathway-4-p2"
        },
        {
          "yaw": -0.04975703093434447,
          "pitch": 0.5625549103460781,
          "rotation": 0.7853981633974483,
          "target": "54-pathway-4-p5"
        },
        {
          "yaw": -1.4083698768692674,
          "pitch": 0.12169689731397604,
          "rotation": 0,
          "target": "53-pathway-4-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "53-pathway-4-p4",
      "name": "Pathway 4 P4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5602997681500064,
          "pitch": 0.18505443984065728,
          "rotation": 3.9269908169872414,
          "target": "52-pathway-4-p3"
        },
        {
          "yaw": 0.15013737875998778,
          "pitch": 0.14789201823236375,
          "rotation": 0,
          "target": "67-maze-exit-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "54-pathway-4-p5",
      "name": "Pathway 4 P5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.9949194204004943,
        "pitch": 0.20149593302295443,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.7053108021429821,
          "pitch": 0.6131479788030312,
          "rotation": 4.71238898038469,
          "target": "55-pathway-4-p6"
        },
        {
          "yaw": 2.1279724140594247,
          "pitch": 0.1815604903194199,
          "rotation": 3.141592653589793,
          "target": "52-pathway-4-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "55-pathway-4-p6",
      "name": "Pathway 4 P6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.5440225438545987,
        "pitch": 0.19213067726228594,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.7116751292623462,
          "pitch": 0.6494804489736197,
          "rotation": 2.356194490192345,
          "target": "56-pathway-4-p7"
        },
        {
          "yaw": -1.0542787790672214,
          "pitch": 0.5540722769395199,
          "rotation": 3.141592653589793,
          "target": "54-pathway-4-p5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "56-pathway-4-p7",
      "name": "Pathway 4 P7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.28340310034976746,
        "pitch": 0.25511581286451346,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.709182811364343,
          "pitch": 0.5531279554325632,
          "rotation": 3.9269908169872414,
          "target": "57-pathway-4-p8"
        },
        {
          "yaw": 1.5330624847600998,
          "pitch": 0.8445999830011992,
          "rotation": 2.356194490192345,
          "target": "55-pathway-4-p6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "57-pathway-4-p8",
      "name": "Pathway 4 P8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.1340015823806162,
        "pitch": 0.2955467094561399,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.342001507544083,
          "pitch": 0.674817424675549,
          "rotation": 3.9269908169872414,
          "target": "56-pathway-4-p7"
        },
        {
          "yaw": -0.13315434784417235,
          "pitch": 0.4626792689623951,
          "rotation": 0,
          "target": "58-pathway-4-p9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "58-pathway-4-p9",
      "name": "Pathway 4 P9",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.15757593483644072,
        "pitch": 0.24542642895637812,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.9838802429767153,
          "pitch": 0.38572261864098856,
          "rotation": 3.141592653589793,
          "target": "57-pathway-4-p8"
        },
        {
          "yaw": -0.59305379129529,
          "pitch": 0.6495388864325538,
          "rotation": 11.780972450961727,
          "target": "59-pathway-4-p10"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "59-pathway-4-p10",
      "name": "Pathway 4 P10",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.1489871396060387,
        "pitch": 0.21284919707478167,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.639731416614868,
          "pitch": 0.645948141994424,
          "rotation": 3.9269908169872414,
          "target": "58-pathway-4-p9"
        },
        {
          "yaw": -0.5205757273278859,
          "pitch": 0.6617817585876526,
          "rotation": 5.497787143782138,
          "target": "60-pathway-4-p11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "60-pathway-4-p11",
      "name": "Pathway 4 P11",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.06446377637708522,
        "pitch": 0.34221794050753296,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.06312942016450229,
          "pitch": 0.6799859760800153,
          "rotation": 7.0685834705770345,
          "target": "61-pathway-4-p12"
        },
        {
          "yaw": 2.819640925975756,
          "pitch": 0.5996148599021751,
          "rotation": 9.42477796076938,
          "target": "59-pathway-4-p10"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "61-pathway-4-p12",
      "name": "Pathway 4 P12",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.0210928416710221,
        "pitch": 0.25061414835147033,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.175264724854147,
          "pitch": 0.7563816214462751,
          "rotation": 8.63937979737193,
          "target": "60-pathway-4-p11"
        },
        {
          "yaw": -0.02636268731655278,
          "pitch": 0.6223602515143831,
          "rotation": 0,
          "target": "62-pathway-4-p13"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "62-pathway-4-p13",
      "name": "Pathway 4 P13",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.10920498743984908,
        "pitch": 0.319800662823134,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.043461722293997695,
          "pitch": 0.3641981170169757,
          "rotation": 3.9269908169872414,
          "target": "63-pathway-4-p14"
        },
        {
          "yaw": 3.0663002216135364,
          "pitch": 0.5885719343415587,
          "rotation": 9.42477796076938,
          "target": "61-pathway-4-p12"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "63-pathway-4-p14",
      "name": "Pathway 4 P14",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.1725693271708,
        "pitch": 0.4257066958849496,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 3.1022231319424787,
          "pitch": 0.3685831357281728,
          "rotation": 9.42477796076938,
          "target": "62-pathway-4-p13"
        },
        {
          "yaw": -2.140964689344713,
          "pitch": 0.6429019055693548,
          "rotation": 7.0685834705770345,
          "target": "64-pathway-4-p15"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "64-pathway-4-p15",
      "name": "Pathway 4 P15",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.008685287746889259,
        "pitch": 0.2195034264871456,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.2654699637477567,
          "pitch": 0.5310066221502225,
          "rotation": 9.42477796076938,
          "target": "63-pathway-4-p14"
        },
        {
          "yaw": 0.04865367799191134,
          "pitch": 0.42915380795137636,
          "rotation": 0,
          "target": "65-pathway-4-p16"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "65-pathway-4-p16",
      "name": "Pathway 4 P16",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.5493522009729706,
        "pitch": 0.3564986311017879,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.7944093548225144,
          "pitch": 0.5797630569620082,
          "rotation": 5.497787143782138,
          "target": "66-pathway-4-p17"
        },
        {
          "yaw": 0.16338522769822994,
          "pitch": 0.1566355621747384,
          "rotation": 3.141592653589793,
          "target": "64-pathway-4-p15"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "66-pathway-4-p17",
      "name": "Pathway 4 P17",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.11539025149440363,
        "pitch": 0.31110721864320645,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.0006503771806318781,
          "pitch": 0.19942468843742667,
          "rotation": 6.283185307179586,
          "target": "67-maze-exit-p1"
        },
        {
          "yaw": -2.766828827298756,
          "pitch": 0.5709657567398079,
          "rotation": 3.141592653589793,
          "target": "65-pathway-4-p16"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "67-maze-exit-p1",
      "name": "Maze Exit P1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.051022238577781,
          "pitch": 0.13924817086050467,
          "rotation": 3.141592653589793,
          "target": "53-pathway-4-p4"
        },
        {
          "yaw": 2.722431778710149,
          "pitch": 0.2276554919865248,
          "rotation": 3.9269908169872414,
          "target": "66-pathway-4-p17"
        },
        {
          "yaw": -1.3186242408095499,
          "pitch": 0.1807435554314587,
          "rotation": 0,
          "target": "28-pathway-2-p15"
        },
        {
          "yaw": 0.10554494477547394,
          "pitch": 0.39717322071370376,
          "rotation": 0,
          "target": "68-maze-exit-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "68-maze-exit-p2",
      "name": "Maze Exit P2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.0868528774689068,
        "pitch": 0.11407440953665393,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -3.0643557479965047,
          "pitch": 0.3027203208279161,
          "rotation": 3.141592653589793,
          "target": "67-maze-exit-p1"
        },
        {
          "yaw": -0.041733661583620574,
          "pitch": 0.21037176878100894,
          "rotation": 0,
          "target": "69-maze-exit-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "69-maze-exit-p3",
      "name": "Maze Exit P3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7714773872735226,
          "pitch": 0.15082571137205214,
          "rotation": 3.9269908169872414,
          "target": "6-maze-entrance"
        },
        {
          "yaw": -0.24220610855057245,
          "pitch": 0.0723722739595587,
          "rotation": 3.9269908169872414,
          "target": "1-queue-p1"
        },
        {
          "yaw": 3.0505003050506154,
          "pitch": 0.23507826835653844,
          "rotation": 3.141592653589793,
          "target": "68-maze-exit-p2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "HELLBILLY 2026",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
