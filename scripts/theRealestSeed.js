// const API = require("../client/src/Utils/correlation_function");
const _ = require("lodash");
const givenPairs = require('../models/givenPairs');
const givenPairsData = require('../models/givenPairsData');

const moment = require("moment");
moment().format();
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/pairs";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true
});




//2010 tickers
const russell = [
'AAC',
'AAN',
'AAOI',
'AAON',
'AAT',
'AAWW',
'AAXN',
'ABAX',
'ABCB',
'ABCD',
'ABCO',
'ABEO',
'ABG',
'ABM',
'ABTX',
'AC',
'ACBI',
'ACCO',
'ACET',
'ACHN',
'ACIA',
'ACIW',
'ACLS',
'ACNB',
'ACOR',
'ACRE',
'ACRS',
'ACTA',
'ACTG',
'ACXM',
'ADC',
'ADES',
'ADMS',
'ADRO',
'ADSW',
'ADTN',
'ADUS',
'ADXS',
'AE',
'AEGN',
'AEIS',
'AEL',
'AEO',
'AERI',
'AF',
'AFAM',
'AFH',
'AFI',
'AFSI',
'AGEN',
'AGFS',
'AGII',
'AGM',
'AGX',
'AGYS',
'AHH',
'AHP',
'AHT',
'AI',
'AIMC',
'AIMT',
'AIN',
'AIR',
'AIT',
'AJRD',
'AJX',
'AKAO',
'AKBA',
'AKR',
'AKS',
'AKTS',
'ALCO',
'ALDR',
'ALE',
'ALEX',
'ALG',
'ALGT',
'ALJ',
'ALOG',
'ALRM',
'ALX',
'AMAG',
'AMBA',
'AMBC',
'AMBR',
'AMC',
'AMED',
'AMKR',
'AMN',
'AMNB',
'AMOT',
'AMPH',
'AMRC',
'AMRI',
'AMSF',
'AMSWA',
'AMWD',
'ANAB',
'ANCX',
'ANDE',
'ANF',
'ANGI',
'ANGO',
'ANH',
'ANIK',
'ANIP',
'AOBC',
'AOSL',
'AP',
'APAM',
'APEI',
'APOG',
'APPF',
'APTI',
'APTS',
'AQMS',
'ARA',
'ARAY',
'ARC',
'ARCB',
'ARCH',
'ARDX',
'AREX',
'ARI',
'ARII',
'ARNA',
'AROC',
'AROW',
'ARR',
'ARRY',
'ARTNA',
'ASBB',
'ASC',
'ASCMA',
'ASGN',
'ASIX',
'ASMB',
'ASNA',
'ASPS',
'AST',
'ASTE',
'AT',
'ATEN',
'ATGE',
'ATHX',
'ATI',
'ATKR',
'ATLO',
'ATNI',
'ATRA',
'ATRC',
'ATRI',
'ATRO',
'ATRS',
'ATSG',
'ATU',
'ATW',
'AVA',
'AVAV',
'AVD',
'AVHI',
'AVID',
'AVX',
'AVXL',
'AVXS',
'AWR',
'AXAS',
'AXDX',
'AXE',
'AXGN',
'AXL',
'AXON',
'AXTI',
'AYR',
'AYX',
'AZPN',
'AZZ',
'B',
'BABY',
'BANC',
'BANF',
'BANR',
'BAS',
'BATRA',
'BATRK',
'BBG',
'BBGI',
'BBSI',
'BBW',
'BCBP',
'BCC',
'BCEI',
'BCO',
'BCOR',
'BCOV',
'BCPC',
'BCRH',
'BCRX',
'BDC',
'BDE',
'BDGE',
'BEAT',
'BECN',
'BEL',
'BELFB',
'BETR',
'BFIN',
'BFS',
'BGC',
'BGFV',
'BGG',
'BGS',
'BGSF',
'BH',
'BHB',
'BHBK',
'BHE',
'BHLB',
'BHVN',
'BID',
'BIG',
'BIOS',
'BJRI',
'BKE',
'BKH',
'BKMU',
'BKS',
'BL',
'BLBD',
'BLCM',
'BLD',
'BLDR',
'BLKB',
'BLMN',
'BLMT',
'BLUE',
'BLX',
'BMCH',
'BMI',
'BMRC',
'BMTC',
'BNCL',
'BNED',
'BNFT',
'BOBE',
'BOCH',
'BOFI',
'BOJA',
'BOLD',
'BOOM',
'BOOT',
'BOX',
'BPFH',
'BPI',
'BPMC',
'BRC',
'BREW',
'BRG',
'BRKL',
'BRKS',
'BRS',
'BRSS',
'BSET',
'BSF',
'BSFT',
'BSRR',
'BSTC',
'BTU',
'BTX',
'BUSE',
'BV',
'BW',
'BWFG',
'BWINB',
'BWLD',
'BXS',
'BYD',
'BZH',
'CAC',
'CACI',
'CACQ',
'CADE',
'CAI',
'CAKE',
'CAL',
'CALA',
'CALD',
'CALM',
'CALX',
'CAMP',
'CAR',
'CARA',
'CARB',
'CARO',
'CARS',
'CASC',
'CASH',
'CASS',
'CATM',
'CATO',
'CATY',
'CBB',
'CBF',
'CBI',
'CBL',
'CBM',
'CBPX',
'CBRL',
'CBU',
'CBZ',
'CCBG',
'CCC',
'CCF',
'CCMP',
'CCN',
'CCNE',
'CCO',
'CCOI',
'CCP',
'CCRN',
'CCS',
'CCXI',
'CDE',
'CDR',
'CDXS',
'CDZI',
'CECE',
'CECO',
'CEMP',
'CENT',
'CENTA',
'CENX',
'CERS',
'CETV',
'CEVA',
'CFFI',
'CFFN',
'CFI',
'CFMS',
'CFNB',
'CHCO',
'CHCT',
'CHDN',
'CHE',
'CHEF',
'CHFC',
'CHFN',
'CHGG',
'CHMG',
'CHMI',
'CHRS',
'CHS',
'CHSP',
'CHUBA',
'CHUBK',
'CHUY',
'CIA',
'CIEN',
'CIO',
'CIR',
'CIVB',
'CIVI',
'CIX',
'CJ',
'CKH',
'CLCT',
'CLD',
'CLDR',
'CLDT',
'CLDX',
'CLF',
'CLFD',
'CLI',
'CLNE',
'CLPR',
'CLSD',
'CLVS',
'CLW',
'CMC',
'CMCO',
'CMD',
'CMO',
'CMP',
'CMPR',
'CMRE',
'CMRX',
'CMT',
'CMTL',
'CNAT',
'CNBKA',
'CNCE',
'CNMD',
'CNO',
'CNOB',
'CNS',
'CNSL',
'CNTY',
'CNXN',
'COBZ',
'COGT',
'COHU',
'COKE',
'COLB',
'COLL',
'COLM',
'CONN',
'CORE',
'CORI',
'CORR',
'CORT',
'COTV',
'COUP',
'COWN',
'CPE',
'CPF',
'CPK',
'CPLA',
'CPRX',
'CPS',
'CPSI',
'CRAI',
'CRAY',
'CRBP',
'CRC',
'CRCM',
'CRD.B',
'CREE',
'CRIS',
'CRMT',
'CROX',
'CRR',
'CRS',
'CRUS',
'CRVL',
'CRVS',
'CRY',
'CRZO',
'CSBK',
'CSFL',
'CSGS',
'CSII',
'CSLT',
'CSOD',
'CSS',
'CSTE',
'CSTR',
'CSU',
'CSV',
'CSWI',
'CTB',
'CTBI',
'CTLT',
'CTMX',
'CTO',
'CTRE',
'CTRL',
'CTRN',
'CTS',
'CTT',
'CTWS',
'CUB',
'CUBI',
'CUBN',
'CUDA',
'CUNB',
'CUTR',
'CUZ',
'CVA',
'CVBF',
'CVCO',
'CVCY',
'CVG',
'CVGI',
'CVGW',
'CVI',
'CVLT',
'CVLY',
'CVNA',
'CVRS',
'CVTI',
'CW',
'CWCO',
'CWH',
'CWST',
'CWT',
'CYBE',
'CYH',
'CYS',
'CYTK',
'CZNC',
'CZR',
'DAKT',
'DAN',
'DAR',
'DBD',
'DCO',
'DCOM',
'DDD',
'DDS',
'DEA',
'DECK',
'DEL',
'DENN',
'DEPO',
'DERM',
'DF',
'DFIN',
'DFRG',
'DGAS',
'DGI',
'DGICA',
'DGII',
'DHIL',
'DHT',
'DHX',
'DIN',
'DIOD',
'DJCO',
'DK',
'DLA',
'DLTH',
'DLX',
'DMRC',
'DNBF',
'DNOW',
'DNR',
'DO',
'DOC',
'DOOR',
'DORM',
'DPLO',
'DRH',
'DRQ',
'DRRX',
'DS',
'DSKE',
'DSPG',
'DSW',
'DVAX',
'DX',
'DXPE',
'DY',
'DYN',
'EARN',
'EAT',
'EBF',
'EBIX',
'EBS',
'EBSB',
'EBTC',
'ECHO',
'ECOL',
'ECOM',
'ECPG',
'ECR',
'EDGE',
'EDIT',
'EDR',
'EE',
'EEX',
'EFII',
'EFSC',
'EGBN',
'EGHT',
'EGL',
'EGLE',
'EGOV',
'EGP',
'EGRX',
'EHTH',
'EIG',
'EIGI',
'ELF',
'ELGX',
'ELLI',
'ELVT',
'ELY',
'EMCI',
'EME',
'EMKR',
'EML',
'ENFC',
'ENOC',
'ENS',
'ENSG',
'ENT',
'ENTA',
'ENTG',
'ENTL',
'ENV',
'ENVA',
'ENZ',
'EPAM',
'EPAY',
'EPE',
'EPM',
'EPZM',
'EQBK',
'ERA',
'ERI',
'ERII',
'EROS',
'ESCA',
'ESE',
'ESGR',
'ESIO',
'ESL',
'ESND',
'ESNT',
'ESPR',
'ESSA',
'ESTE',
'ESV',
'ESXB',
'ETH',
'ETM',
'ETSY',
'EVBG',
'EVBN',
'EVC',
'EVH',
'EVI',
'EVR',
'EVRI',
'EVTC',
'EXA',
'EXAC',
'EXAS',
'EXLS',
'EXPO',
'EXPR',
'EXTN',
'EXTR',
'EXXI',
'EZPW',
'FARM',
'FARO',
'FATE',
'FBC',
'FBIO',
'FBIZ',
'FBK',
'FBM',
'FBMS',
'FBNC',
'FBNK',
'FBP',
'FC',
'FCB',
'FCBC',
'FCF',
'FCFP',
'FCFS',
'FCH',
'FCN',
'FCNCA',
'FCPT',
'FDEF',
'FDP',
'FELE',
'FET',
'FF',
'FFBC',
'FFG',
'FFIC',
'FFIN',
'FFKT',
'FFNW',
'FFWM',
'FGBI',
'FGEN',
'FGL',
'FI',
'FIBK',
'FICO',
'FINL',
'FISI',
'FIT',
'FIVE',
'FIVN',
'FIX',
'FIZZ',
'FLDM',
'FLIC',
'FLOW',
'FLWS',
'FLXN',
'FLXS',
'FMAO',
'FMBH',
'FMBI',
'FMI',
'FMNB',
'FMSA',
'FN',
'FNBG',
'FNFV',
'FNGN',
'FNHC',
'FNLC',
'FNSR',
'FNWB',
'FOE',
'FOGO',
'FOLD',
'FONR',
'FOR',
'FORM',
'FORR',
'FOSL',
'FOXF',
'FPI',
'FPO',
'FPRX',
'FR',
'FRAC',
'FRAN',
'FRBK',
'FRED',
'FRGI',
'FRME',
'FRO',
'FRP',
'FRPH',
'FRPT',
'FRTA',
'FSAM',
'FSB',
'FSP',
'FSS',
'FSTR',
'FTD',
'FTK',
'FTR',
'FUEL',
'FUL',
'FULT',
'FWRD',
'GABC',
'GAIA',
'GATX',
'GBCI',
'GBL',
'GBLI',
'GBNK',
'GBT',
'GBX',
'GCAP',
'GCBC',
'GCI',
'GCO',
'GCP',
'GDEN',
'GDOT',
'GEF',
'GEF.B',
'GEN',
'GENC',
'GEO',
'GEOS',
'GERN',
'GES',
'GFF',
'GHDX',
'GHL',
'GHM',
'GIFI',
'GIII',
'GIMO',
'GKOS',
'GLBL',
'GLDD',
'GLNG',
'GLOG',
'GLRE',
'GLT',
'GLUU',
'GMED',
'GMRE',
'GMS',
'GNBC',
'GNC',
'GNCA',
'GNCMA',
'GNE',
'GNK',
'GNL',
'GNMK',
'GNRC',
'GNRT',
'GNTY',
'GNW',
'GOGO',
'GOLF',
'GOOD',
'GORO',
'GOV',
'GPI',
'GPRE',
'GPRO',
'GPT',
'GPX',
'GRBK',
'GRC',
'GRIF',
'GRPN',
'GRUB',
'GSAT',
'GSBC',
'GSIT',
'GSOL',
'GST',
'GTLS',
'GTN',
'GTS',
'GTT',
'GTY',
'GUID',
'GVA',
'GWB',
'GWRS',
'HA',
'HABT',
'HAE',
'HAFC',
'HALL',
'HALO',
'HASI',
'HAWK',
'HAYN',
'HBCP',
'HBHC',
'HBMD',
'HBNC',
'HBP',
'HCC',
'HCCI',
'HCHC',
'HCI',
'HCKT',
'HCOM',
'HCSG',
'HDNG',
'HDP',
'HDSN',
'HEES',
'HELE',
'HF',
'HFWA',
'HI',
'HIBB',
'HIFR',
'HIFS',
'HIIQ',
'HIL',
'HIVE',
'HK',
'HL',
'HLI',
'HLIT',
'HLNE',
'HLS',
'HLX',
'HMHC',
'HMN',
'HMST',
'HMSY',
'HMTV',
'HNH',
'HNI',
'HNRG',
'HOFT',
'HOMB',
'HOME',
'HONE',
'HOPE',
'HOV',
'HQY',
'HR',
'HRG',
'HRI',
'HRTG',
'HRTX',
'HSC',
'HSII',
'HSKA',
'HSNI',
'HSTM',
'HT',
'HTBI',
'HTBK',
'HTH',
'HTLD',
'HTLF',
'HTZ',
'HUBG',
'HUBS',
'HURC',
'HURN',
'HVT',
'HWKN',
'HY',
'HYH',
'HZN',
'HZNP',
'HZO',
'I',
'IART',
'IBCP',
'IBKC',
'IBOC',
'IBP',
'IBTX',
'ICBK',
'ICD',
'ICFI',
'ICHR',
'ICON',
'ICUI',
'IDA',
'IDCC',
'IDRA',
'IDT',
'IDTI',
'IESC',
'IHC',
'III',
'IIIN',
'IIVI',
'ILG',
'IMAX',
'IMDZ',
'IMGN',
'IMH',
'IMKTA',
'IMMR',
'IMMU',
'IMPV',
'INAP',
'INBK',
'INCR',
'INDB',
'INFN',
'INGN',
'INN',
'INO',
'INOV',
'INSE',
'INSM',
'INST',
'INSW',
'INSY',
'INTL',
'INVA',
'INWK',
'IOSP',
'IPAR',
'IPCC',
'IPHI',
'IPHS',
'IPI',
'IPXL',
'IRBT',
'IRDM',
'IRET',
'IRT',
'IRTC',
'IRWD',
'ISBC',
'ISCA',
'ISRL',
'ISTR',
'ITCI',
'ITG',
'ITGR',
'ITI',
'ITIC',
'ITRI',
'IVAC',
'IVC',
'IVR',
'IXYS',
'JACK',
'JAG',
'JAX',
'JBSS',
'JBT',
'JCAP',
'JCOM',
'JCP',
'JELD',
'JILL',
'JJSF',
'JNCE',
'JOE',
'JONE',
'JOUT',
'JRVR',
'KAI',
'KALU',
'KAMN',
'KBAL',
'KBH',
'KBR',
'KCG',
'KE',
'KEG',
'KELYA',
'KEM',
'KERX',
'KEYW',
'KFRC',
'KFY',
'KIN',
'KINS',
'KIRK',
'KITE',
'KLDX',
'KLXI',
'KMG',
'KMPR',
'KMT',
'KN',
'KND',
'KNL',
'KNSL',
'KNX',
'KODK',
'KOP',
'KOPN',
'KPTI',
'KRA',
'KREF',
'KRG',
'KRNY',
'KRO',
'KS',
'KTOS',
'KTWO',
'KURA',
'KVHI',
'KW',
'KWR',
'LABL',
'LAD',
'LADR',
'LANC',
'LAUR',
'LAWS',
'LAYN',
'LBAI',
'LBIO',
'LBY',
'LC',
'LCI',
'LCII',
'LCNB',
'LCUT',
'LDL',
'LDR',
'LE',
'LFGR',
'LFUS',
'LGIH',
'LGND',
'LHCG',
'LHO',
'LIND',
'LION',
'LITE',
'LIVN',
'LJPC',
'LKFN',
'LKSD',
'LL',
'LLEX',
'LLNW',
'LMAT',
'LMIA',
'LMNR',
'LMNX',
'LMOS',
'LNCE',
'LNDC',
'LNN',
'LNTH',
'LOB',
'LOCO',
'LOPE',
'LORL',
'LOXO',
'LPG',
'LPSN',
'LPX',
'LQ',
'LQDT',
'LRN',
'LSCC',
'LTC',
'LTRPA',
'LTS',
'LTXB',
'LWAY',
'LXP',
'LXRX',
'LXU',
'LYTS',
'LZB',
'MACK',
'MANT',
'MASI',
'MATW',
'MATX',
'MB',
'MBCN',
'MBFI',
'MBI',
'MBTF',
'MBUU',
'MBWM',
'MC',
'MCBC',
'MCF',
'MCFT',
'MCRB',
'MCRI',
'MCRN',
'MCS',
'MDC',
'MDCA',
'MDCO',
'MDGL',
'MDLY',
'MDP',
'MDR',
'MDRX',
'MDSO',
'MDXG',
'MED',
'MEDP',
'MEET',
'MEI',
'METC',
'MFSF',
'MG',
'MGEE',
'MGEN',
'MGI',
'MGLN',
'MGNX',
'MGPI',
'MGRC',
'MHLD',
'MHO',
'MINI',
'MITK',
'MITT',
'MJCO',
'MKSI',
'MLAB',
'MLHR',
'MLI',
'MLP',
'MLR',
'MLVF',
'MMI',
'MMS',
'MMSI',
'MNOV',
'MNR',
'MNRO',
'MNTA',
'MOBL',
'MOD',
'MODN',
'MOFG',
'MOG.A',
'MOH',
'MORE',
'MOV',
'MPAA',
'MPO',
'MPWR',
'MPX',
'MRC',
'MRCY',
'MRLN',
'MRT',
'MRTN',
'MSA',
'MSBI',
'MSEX',
'MSFG',
'MSGN',
'MSL',
'MSTR',
'MTDR',
'MTG',
'MTGE',
'MTH',
'MTNB',
'MTOR',
'MTRN',
'MTRX',
'MTSC',
'MTSI',
'MTW',
'MTX',
'MTZ',
'MULE',
'MVIS',
'MWA',
'MXL',
'MXWL',
'MYCC',
'MYE',
'MYGN',
'MYOK',
'MYRG',
'NAME',
'NANO',
'NAT',
'NATH',
'NATR',
'NAV',
'NAVG',
'NBHC',
'NBN',
'NBTB',
'NC',
'NCBS',
'NCI',
'NCIT',
'NCMI',
'NCOM',
'NCS',
'NCSM',
'NDLS',
'NE',
'NEFF',
'NEO',
'NEOG',
'NEOS',
'NERV',
'NEWM',
'NEWR',
'NEWS',
'NFBK',
'NGHC',
'NGS',
'NGVC',
'NGVT',
'NH',
'NHC',
'NHI',
'NHTC',
'NJR',
'NK',
'NKSH',
'NKTR',
'NL',
'NLNK',
'NLS',
'NM',
'NMIH',
'NNA',
'NNBR',
'NNI',
'NODK',
'NOVT',
'NP',
'NPK',
'NPO',
'NPTN',
'NR',
'NRCIA',
'NRE',
'NRIM',
'NSA',
'NSIT',
'NSM',
'NSP',
'NSR',
'NSSC',
'NSTG',
'NTB',
'NTCT',
'NTGR',
'NTLA',
'NTNX',
'NTRA',
'NTRI',
'NUTR',
'NUVA',
'NVAX',
'NVCR',
'NVEC',
'NVEE',
'NVLN',
'NVRO',
'NVTA',
'NWBI',
'NWE',
'NWFL',
'NWHM',
'NWLI',
'NWN',
'NWPX',
'NX',
'NXEO',
'NXRT',
'NXST',
'NXTM',
'NYLD',
'NYLD.A',
'NYMT',
'NYMX',
'NYNY',
'NYT',
'OAS',
'OB',
'OBLN',
'OCFC',
'OCLR',
'OCN',
'OCUL',
'OCX',
'ODC',
'ODP',
'OFED',
'OFG',
'OFIX',
'OFLX',
'OGS',
'OIS',
'OKSB',
'OKTA',
'OLBK',
'OLLI',
'OLP',
'OMAM',
'OMCL',
'OME',
'OMER',
'OMI',
'OMN',
'OMNT',
'ONB',
'ONCE',
'ONDK',
'ONVO',
'OOMA',
'OPB',
'OPOF',
'OPY',
'ORA',
'ORBC',
'ORC',
'ORIT',
'ORM',
'ORN',
'ORRF',
'OSBC',
'OSG',
'OSIS',
'OSTK',
'OSUR',
'OTIC',
'OTTR',
'OVBC',
'OVID',
'OXFD',
'OXM',
'PACB',
'PAHC',
'PARR',
'PATK',
'PAY',
'PAYC',
'PBH',
'PBIP',
'PBNC',
'PBPB',
'PBYI',
'PCBK',
'PCH',
'PCMI',
'PCO',
'PCRX',
'PCSB',
'PCTY',
'PCYG',
'PCYO',
'PDCE',
'PDFS',
'PDLI',
'PDVW',
'PEB',
'PEBK',
'PEBO',
'PEGA',
'PEGI',
'PEI',
'PEIX',
'PEN',
'PENN',
'PERY',
'PES',
'PETS',
'PETX',
'PFBC',
'PFBI',
'PFGC',
'PFIS',
'PFPT',
'PFS',
'PFSI',
'PGC',
'PGEM',
'PGNX',
'PGTI',
'PHH',
'PHIIK',
'PHX',
'PI',
'PICO',
'PIR',
'PIRS',
'PJC',
'PJT',
'PKBK',
'PKD',
'PKE',
'PKOH',
'PKY',
'PLAB',
'PLAY',
'PLCE',
'PLNT',
'PLOW',
'PLPC',
'PLPM',
'PLSE',
'PLT',
'PLUG',
'PLUS',
'PLXS',
'PMBC',
'PMC',
'PMT',
'PMTS',
'PNK',
'PNM',
'PODD',
'POL',
'POR',
'POWI',
'POWL',
'PPBI',
'PRAA',
'PRAH',
'PRFT',
'PRGS',
'PRI',
'PRIM',
'PRK',
'PRLB',
'PRMW',
'PRO',
'PROV',
'PRSC',
'PRTA',
'PRTK',
'PRTY',
'PRXL',
'PSB',
'PSDO',
'PSMT',
'PSTB',
'PSTG',
'PTCT',
'PTGX',
'PTLA',
'PUB',
'PUMP',
'PVAC',
'PVBC',
'PWOD',
'PXLW',
'PZN',
'PZZA',
'QADA',
'QCP',
'QCRH',
'QDEL',
'QLYS',
'QNST',
'QSII',
'QTM',
'QTNA',
'QTNT',
'QTS',
'QTWO',
'QUAD',
'QUOT',
'RAIL',
'RARE',
'RARX',
'RAS',
'RATE',
'RAVN',
'RBCAA',
'RCII',
'RCM',
'RDC',
'RDI',
'RDN',
'RDNT',
'RDUS',
'RECN',
'REGI',
'REI',
'REIS',
'REN',
'REPH',
'RESI',
'RETA',
'REV',
'REVG',
'REX',
'REXR',
'RGCO',
'RGEN',
'RGNX',
'RGR',
'RGS',
'RH',
'RHP',
'RICK',
'RIGL',
'RILY',
'RLGT',
'RLH',
'RLI',
'RLJ',
'RM',
'RMAX',
'RMBS',
'RMR',
'RMTI',
'RNET',
'RNG',
'RNST',
'RNWK',
'ROCK',
'ROG',
'ROIC',
'ROLL',
'ROSE',
'ROX',
'RP',
'RPD',
'RPT',
'RPXC',
'RRD',
'RRGB',
'RRR',
'RRTS',
'RSO',
'RST',
'RSYS',
'RT',
'RTEC',
'RTIX',
'RTRX',
'RUBI',
'RUN',
'RUSHA',
'RUSHB',
'RUTH',
'RVLT',
'RVNC',
'RVSB',
'RWT',
'RXDX',
'RXN',
'RYAM',
'RYI',
'SAFM',
'SAFT',
'SAGE',
'SAH',
'SAIA',
'SAIC',
'SALM',
'SALT',
'SAM',
'SAMG',
'SANM',
'SASR',
'SB',
'SBBP',
'SBCF',
'SBCP',
'SBGI',
'SBOW',
'SBRA',
'SBSI',
'SCHL',
'SCHN',
'SCL',
'SCLN',
'SCMP',
'SCS',
'SCSC',
'SCSS',
'SCVL',
'SCWX',
'SD',
'SEAS',
'SELB',
'SEM',
'SEMG',
'SENEA',
'SF',
'SFBS',
'SFE',
'SFL',
'SFLY',
'SFNC',
'SFR',
'SFS',
'SFST',
'SGA',
'SGBK',
'SGC',
'SGMO',
'SGMS',
'SGRY',
'SGY',
'SGYP',
'SHAK',
'SHBI',
'SHEN',
'SHLD',
'SHLM',
'SHLO',
'SHO',
'SHOO',
'SHOR',
'SIEN',
'SIFI',
'SIGI',
'SIGM',
'SIR',
'SITE',
'SJI',
'SJW',
'SKYW',
'SLAB',
'SLCA',
'SLD',
'SLP',
'SMBC',
'SMBK',
'SMCI',
'SMHI',
'SMMF',
'SMP',
'SMTC',
'SN',
'SNBC',
'SNC',
'SNCR',
'SND',
'SNDR',
'SNDX',
'SNHY',
'SNOW',
'SNR',
'SNX',
'SOI',
'SONA',
'SONC',
'SONS',
'SP',
'SPA',
'SPAR',
'SPKE',
'SPN',
'SPNC',
'SPOK',
'SPPI',
'SPSC',
'SPTN',
'SPWH',
'SPWR',
'SPXC',
'SQBG',
'SR',
'SRCE',
'SRCI',
'SRDX',
'SREV',
'SRG',
'SRI',
'SRPT',
'SRT',
'SSB',
'SSD',
'SSNI',
'SSP',
'SSTK',
'SSYS',
'STAA',
'STAG',
'STAR',
'STBA',
'STBZ',
'STC',
'STFC',
'STL',
'STML',
'STMP',
'STNG',
'STRA',
'STRL',
'STRP',
'STRS',
'STS',
'SUM',
'SUP',
'SUPN',
'SVU',
'SWFT',
'SWM',
'SWX',
'SXC',
'SXI',
'SXT',
'SYBT',
'SYKE',
'SYNA',
'SYNT',
'SYRS',
'SYX',
'TACO',
'TAST',
'TAX',
'TBBK',
'TBI',
'TBK',
'TBNK',
'TBPH',
'TCBI',
'TCBK',
'TCFC',
'TCI',
'TCMD',
'TCS',
'TCX',
'TDOC',
'TECD',
'TELL',
'TEN',
'TERP',
'TESO',
'TG',
'TGH',
'TGI',
'TGTX',
'THC',
'THFF',
'THR',
'THRM',
'TIER',
'TILE',
'TIME',
'TIPT',
'TIS',
'TISI',
'TITN',
'TIVO',
'TK',
'TLGT',
'TLRD',
'TLYS',
'TMHC',
'TMP',
'TMST',
'TNAV',
'TNC',
'TNET',
'TNK',
'TOCA',
'TOWN',
'TOWR',
'TPB',
'TPC',
'TPH',
'TPHS',
'TPIC',
'TPRE',
'TR',
'TRC',
'TRCB',
'TREC',
'TREE',
'TREX',
'TRHC',
'TRK',
'TRMK',
'TRNC',
'TRNO',
'TROX',
'TRS',
'TRST',
'TRTN',
'TRUE',
'TRUP',
'TRVN',
'TSBK',
'TSC',
'TSE',
'TSQ',
'TTD',
'TTEC',
'TTEK',
'TTGT',
'TTI',
'TTMI',
'TTPH',
'TTS',
'TUSK',
'TVPT',
'TVTY',
'TWI',
'TWIN',
'TWLO',
'TWNK',
'TWOU',
'TXMD',
'TXRH',
'TYPE',
'UBA',
'UBFO',
'UBNK',
'UBNT',
'UBSH',
'UBSI',
'UCBI',
'UCFC',
'UCP',
'UCTT',
'UE',
'UEC',
'UEIC',
'UFCS',
'UFI',
'UFPI',
'UFPT',
'UHT',
'UIHC',
'UIS',
'ULH',
'UMBF',
'UMH',
'UMPQ',
'UNB',
'UNF',
'UNFI',
'UNT',
'UNTY',
'UPL',
'UPLD',
'USAT',
'USCR',
'USLM',
'USNA',
'USPH',
'UTL',
'UTMD',
'UVE',
'UVSP',
'UVV',
'VAC',
'VALU',
'VBIV',
'VBTX',
'VCRA',
'VCYT',
'VDSI',
'VEC',
'VECO',
'VERI',
'VG',
'VGR',
'VHC',
'VHI',
'VIAV',
'VICR',
'VIRT',
'VIVE',
'VIVO',
'VLGEA',
'VLY',
'VNDA',
'VOXX',
'VPG',
'VRA',
'VRAY',
'VREX',
'VRNS',
'VRNT',
'VRS',
'VRTS',
'VRTU',
'VRTV',
'VSAR',
'VSAT',
'VSEC',
'VSH',
'VSI',
'VSLR',
'VSTO',
'VTVT',
'VVI',
'VYGR',
'WAAS',
'WABC',
'WAFD',
'WAGE',
'WAIR',
'WASH',
'WATT',
'WBMD',
'WD',
'WDFC',
'WDR',
'WEB',
'WERN',
'WETF',
'WEYS',
'WFBI',
'WG',
'WGL',
'WGO',
'WHG',
'WIFI',
'WIN',
'WINA',
'WING',
'WINS',
'WIRE',
'WK',
'WLB',
'WLDN',
'WLFC',
'WLH',
'WMAR',
'WMC',
'WMGI',
'WMIH',
'WMK',
'WMS',
'WNC',
'WNEB',
'WOR',
'WPG',
'WRD',
'WRE',
'WRLD',
'WSBC',
'WSBF',
'WSFS',
'WSR',
'WSTC',
'WTBA',
'WTFC',
'WTI',
'WTS',
'WTTR',
'WTW',
'WVE',
'WWD',
'WWE',
'WWW',
'XBIT',
'XBKS',
'XCRA',
'XENT',
'XHR',
'XLRN',
'XNCR',
'XONE',
'XOXO',
'XPER',
'XTLY',
'YELP',
'YEXT',
'YORW',
'YRCW',
'ZAGG',
'ZEN',
'ZEUS',
'ZGNX',
'ZIOP',
'ZIXI',
'ZOES',
'ZUMZ',
'ZYNE', 
    ]

const sp500 = []; 
     
function getStockInfo(passedSymbol, res) {
    const Alpaca = require("@alpacahq/alpaca-trade-api");

    const alpaca = new Alpaca({
      keyID: process.env.APCA_API_KEY_ID,
      secretKey: process.env.APCA_API_SECRET_KEY,
      paper: true
    });

    const symbol = passedSymbol;
   
    alpaca
      .getBars("day", symbol, {
        limit: 200,
        //start and end format = YYYY-M-D
       
      })
      .then(barset => {
        console.log(barset);
        statsArray = [];
        barset[symbol].forEach(day => {
          stats = {};
          stats.timestamp = moment.unix(day.t).format("MM/DD/YYYY");
          stats.dayClose = day.c;
          stats.dayOpen = day.o;
          stats.volume = day.v;
          stats.dayHigh = day.h;
          stats.dayLow = day.l;
          statsArray.push(stats);
        });

        givenPairsData
          .findOneAndUpdate(
            { symbol },
            {
              symbol,
              stats: statsArray
            },
            { upsert: true }
          )
          .then(function(dbStock) {
            console.log(`${symbol} was created!`);
            
          })
       
      });
  }



  


  const correlationObject = {
    correlate: function(firstStock, secondStock) {
      //the price histories are going to be in an array
      let xHistory = firstStock;
      let yHistory = secondStock;
      let xMean = xHistory.reduce(this.getSum) / xHistory.length;
      let yMean = yHistory.reduce(this.getSum) / yHistory.length;
  
      const numerator = this.calcNumerator(xHistory, yHistory, xMean, yMean);
      const denominator = this.calcDenominator(xHistory, yHistory, xMean, yMean);
      const coefficient = numerator / denominator;
    //   console.log("firststock mean:", xMean);
    //   console.log("secondstock mean:", yMean);
    //   console.log("numerator:", numerator);
    //   console.log("denominator:", denominator);
      return coefficient;
    },
  
    getSum: function(acc, val) {
      return acc + val;
    },
  
    calcNumerator: function(xHistory, yHistory, xMean, yMean) {
      let sumCount = 0;
      xHistory.forEach((price, index) => {
        sumCount += (price - xMean) * (yHistory[index] - yMean);
      });
      return sumCount;
    },
  
    calcDenominator: function(xHistory, yHistory, xMean, yMean) {
      const xDenominator = this.calcSquare(xHistory, xMean);
      const yDenominator = this.calcSquare(yHistory, yMean);
    //   console.log("first stock denominator:", xDenominator);
    //   console.log("second stock denominator:", yDenominator);
      const trueDenominator = Math.pow(xDenominator * yDenominator, 0.5);
      return trueDenominator;
    },
  
    calcSquare: function(history, mean) {
      let square = 0;
      history.forEach(price => {
        square += Math.pow(price - mean, 2);
      });
      return square;
    }
  };
























// let counter = 0;
// const intervalVar = setInterval(() => 
// {   
//     if (counter < russell.length) {
//         getStockInfo(russell[counter]);
        
//         counter++
//     } else {
//         clearInterval(intervalVar);
//     }
//    }, 1000)
    
givenPairsData.find().then((dbStock) => {
    const testArray = dbStock.map(obj => {
      const stats = obj.stats.map(day => {
        return day.dayClose;
        });
        return { symbol: obj.symbol, stats: stats }
    });
   
    //last done (350, -1610) go to 400 -1560
    testArray.slice(0, -1960).forEach(stock => {
        if (stock.stats.length > 0) {
            testArray.forEach(otherStock => {
                // console.log("[DEBUG] computing correlation for ", stock.symbol, otherStock.symbol);
                if (otherStock.stats.length > 0) {
                    let correlation = correlationObject.correlate(stock.stats, otherStock.stats);
                    // console.log("[DEBUG] about to create a given pair", correlation);
                    givenPairs.create({ symbolGroup: [stock.symbol, otherStock.symbol], correlations: correlation }, function(err, res) {
                        console.log("err: " + err);
                        console.log(res, 'completed');
                    });
                };
                
            
        })
        } 
       
    })

})
        
    
  



