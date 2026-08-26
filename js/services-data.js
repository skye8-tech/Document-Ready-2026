/* All government services data loaded from this file */

const SERVICES = [
  {
    id: "national-id",
    name: "National ID Card",
    category: "Identity",
    icon: "🪪",
    short: "Apply for or renew your Cameroon National Identity Card.",
    feeNote: "Fee varies by office",
    documents: [
      {
        title: "Birth Certificate",
        tip: "Original or certified copy, less than 3 months old if possible.",
        sample: "REPUBLIC OF CAMEROON\nBIRTH CERTIFICATE\nName: Jean Mbarga\nDate of Birth: 12/03/1995\nPlace: Yaounde\nFather: Paul Mbarga\nMother: Marie Ngo\nRegistry No: BC-2010-88421"
      },
      {
        title: "Proof of Residence",
        tip: "Recent utility bill or landlord attestation.",
        sample: "ATTESTATION OF RESIDENCE\nI certify that Jean Mbarga resides at Quartier Mvog-Ada, Yaounde.\nSigned: Landlord / Chief\nDate: 15/01/2025"
      },
      {
        title: "Passport Photos",
        tip: "4 recent colour photos, white background, 4x4 cm.",
        sample: "[Photo sample]\nWhite background\nFacing camera\nNo glasses or hat\nClear face"
      },
      {
        title: "Old ID (if renewal)",
        tip: "Bring the expired or damaged card if renewing.",
        sample: "NATIONAL IDENTITY CARD\nNo: 123456789\nName: Jean Mbarga\nIssued: 2015\nExpires: 2025"
      }
    ]
  },
  {
    id: "passport",
    name: "Passport",
    category: "Identity",
    icon: "🛂",
    short: "Request a new Cameroonian passport or renewal.",
    feeNote: "Ordinary passport fee applies",
    documents: [
      {
        title: "National ID Card",
        tip: "Valid national identity card required.",
        sample: "NATIONAL ID\nNo: 987654321\nName: Amina Njoya\nValid until: 2028"
      },
      {
        title: "Birth Certificate",
        tip: "Certified copy of birth certificate.",
        sample: "BIRTH CERTIFICATE\nName: Amina Njoya\nDOB: 05/07/1990\nPlace: Bamenda"
      },
      {
        title: "Passport Application Form",
        tip: "Filled and signed form from immigration office.",
        sample: "PASSPORT APPLICATION FORM\nFull Name: Amina Njoya\nProfession: Teacher\nAddress: Bamenda\nSignature: ________"
      },
      {
        title: "Passport Photos",
        tip: "2 recent photos meeting ICAO standards.",
        sample: "[ICAO photo]\n35x45 mm\nNeutral expression\nLight background"
      }
    ]
  },
  {
    id: "drivers-licence",
    name: "Driver's Licence",
    category: "Transport",
    icon: "🚗",
    short: "Apply for a new driving licence or category upgrade.",
    feeNote: "Includes medical and test fees",
    documents: [
      {
        title: "National ID",
        tip: "Valid national identity card.",
        sample: "ID CARD\nNo: 456789123\nName: Paul Essomba"
      },
      {
        title: "Medical Certificate",
        tip: "From an approved doctor, confirming fitness to drive.",
        sample: "MEDICAL CERTIFICATE\nPatient: Paul Essomba\nFit for driving: YES\nDoctor stamp and signature\nDate: 10/02/2025"
      },
      {
        title: "Driving School Certificate",
        tip: "Proof of completed training if first licence.",
        sample: "DRIVING SCHOOL CERTIFICATE\nTrainee: Paul Essomba\nHours completed: 30\nSchool: Safe Drive Yaounde"
      },
      {
        title: "Passport Photos",
        tip: "3 recent colour photos.",
        sample: "[3 photos]\nWhite background\n4x4 cm"
      }
    ]
  },
  {
    id: "birth-certificate",
    name: "Birth Certificate",
    category: "Civil Status",
    icon: "📜",
    short: "Request a copy or late registration of birth.",
    feeNote: "Stamp duty may apply",
    documents: [
      {
        title: "Hospital Birth Notification",
        tip: "From the hospital where the child was born.",
        sample: "BIRTH NOTIFICATION\nChild: Baby Tchoumi\nDate: 20/01/2025\nHospital: Central Hospital Yaounde\nMother: Grace Tchoumi"
      },
      {
        title: "Parents' IDs",
        tip: "National ID of father and mother.",
        sample: "Father ID: 111222333\nMother ID: 444555666"
      },
      {
        title: "Marriage Certificate (if any)",
        tip: "If parents are married, bring the certificate.",
        sample: "MARRIAGE CERTIFICATE\nGroom: Marc Tchoumi\nBride: Grace Ngo\nDate: 12/06/2020"
      }
    ]
  },
  {
    id: "business-registration",
    name: "Business Registration",
    category: "Business",
    icon: "🏢",
    short: "Register a new business or company with the relevant authority.",
    feeNote: "Depends on company type",
    documents: [
      {
        title: "Application Form",
        tip: "Filled business registration form.",
        sample: "BUSINESS REGISTRATION FORM\nBusiness Name: Green Agro Ltd\nType: SARL\nAddress: Douala\nShare capital: 1,000,000 FCFA"
      },
      {
        title: "ID of Founders",
        tip: "National ID or passport of all shareholders.",
        sample: "Founder 1: ID 777888999\nFounder 2: ID 111000222"
      },
      {
        title: "Statutes / Articles",
        tip: "Signed company statutes.",
        sample: "ARTICLES OF ASSOCIATION\nCompany: Green Agro Ltd\nObject: Agriculture trade\nSigned by all partners"
      },
      {
        title: "Proof of Address",
        tip: "Lease or ownership document for business location.",
        sample: "LEASE AGREEMENT\nLandlord: ...\nTenant: Green Agro Ltd\nLocation: Akwa, Douala"
      }
    ]
  },
  {
    id: "marriage-certificate",
    name: "Marriage Certificate",
    category: "Civil Status",
    icon: "💍",
    short: "Obtain an official marriage certificate after civil marriage.",
    feeNote: "Civil status fees apply",
    documents: [
      {
        title: "Birth Certificates of Both",
        tip: "Recent certified copies for both spouses.",
        sample: "Groom BC: No. 12345\nBride BC: No. 67890"
      },
      {
        title: "National IDs",
        tip: "Valid IDs of both parties.",
        sample: "Groom ID: 123123123\nBride ID: 456456456"
      },
      {
        title: "Witnesses IDs",
        tip: "IDs of at least two witnesses.",
        sample: "Witness 1 ID: ...\nWitness 2 ID: ..."
      },
      {
        title: "Residence Proof",
        tip: "Proof of residence for both.",
        sample: "Residence attestation for each spouse"
      }
    ]
  },
  {
    id: "residence-permit",
    name: "Residence Permit",
    category: "Immigration",
    icon: "🏠",
    short: "Apply for or renew a residence permit for foreigners.",
    feeNote: "Varies by nationality and duration",
    documents: [
      {
        title: "Valid Passport",
        tip: "Passport with at least 6 months validity.",
        sample: "PASSPORT\nNo: P1234567\nNationality: ...\nExpires: 2030"
      },
      {
        title: "Entry Visa / Stamp",
        tip: "Proof of legal entry into Cameroon.",
        sample: "Visa stamp page\nEntry date: 01/03/2025"
      },
      {
        title: "Proof of Means",
        tip: "Bank statement or employment letter.",
        sample: "BANK STATEMENT\nAccount holder: ...\nBalance sufficient for stay"
      },
      {
        title: "Photos",
        tip: "4 recent passport-size photos.",
        sample: "[4 photos]\nWhite background"
      }
    ]
  },
  {
    id: "tax-clearance",
    name: "Tax Clearance Certificate",
    category: "Finance",
    icon: "🧾",
    short: "Request a tax clearance for business or personal use.",
    feeNote: "Usually free if taxes are up to date",
    documents: [
      {
        title: "National ID or Business ID",
        tip: "Identification of the taxpayer.",
        sample: "Taxpayer ID / NIU: 1234567890\nName: ..."
      },
      {
        title: "Previous Tax Receipts",
        tip: "Proof of recent tax payments if available.",
        sample: "Tax receipt 2024\nAmount: ... FCFA\nDate: ..."
      },
      {
        title: "Application Letter",
        tip: "Simple request letter addressed to the tax office.",
        sample: "To the Tax Director\nSubject: Request for Tax Clearance\nI respectfully request...\nSignature"
      }
    ]
  },
  {
    id: "vehicle-registration",
    name: "Vehicle Registration",
    category: "Transport",
    icon: "🚙",
    short: "Register a new or imported vehicle and get number plates.",
    feeNote: "Registration and plate fees apply",
    documents: [
      {
        title: "Purchase Invoice / Title",
        tip: "Proof of ownership of the vehicle.",
        sample: "SALE INVOICE\nVehicle: Toyota Corolla\nChassis: ...\nBuyer: ..."
      },
      {
        title: "Customs Documents (if imported)",
        tip: "Import declaration and duty payment proof.",
        sample: "CUSTOMS DECLARATION\nVehicle cleared\nDuties paid: ... FCFA"
      },
      {
        title: "Owner ID",
        tip: "National ID of the vehicle owner.",
        sample: "ID No: 555666777\nName: ..."
      },
      {
        title: "Insurance Certificate",
        tip: "Valid third-party or comprehensive insurance.",
        sample: "INSURANCE CERTIFICATE\nPolicy No: ...\nValid until: ..."
      }
    ]
  },
  {
    id: "police-clearance",
    name: "Police Clearance Certificate",
    category: "Security",
    icon: "🛡️",
    short: "Obtain a certificate of good conduct from the police.",
    feeNote: "Stamp and processing fee",
    documents: [
      {
        title: "National ID",
        tip: "Valid national identity card.",
        sample: "ID CARD\nNo: 888999000\nName: Sarah Fotso"
      },
      {
        title: "Application Form",
        tip: "Filled form from the police station.",
        sample: "POLICE CLEARANCE REQUEST\nFull name: Sarah Fotso\nPurpose: Job application\nAddress: ..."
      },
      {
        title: "Passport Photos",
        tip: "2 recent photos.",
        sample: "[2 photos]\nWhite background"
      }
    ]
  },
  {
    id: "death-certificate",
    name: "Death Certificate",
    category: "Civil Status",
    icon: "📋",
    short: "Request an official death certificate for administrative use.",
    feeNote: "Civil status fees may apply",
    documents: [
      {
        title: "Hospital Death Notice",
        tip: "Medical certificate of death from hospital or doctor.",
        sample: "MEDICAL CERTIFICATE OF DEATH\nDeceased: ...\nDate and time of death: ...\nCause: ...\nDoctor signature"
      },
      {
        title: "ID of Deceased",
        tip: "National ID or any identity document of the deceased.",
        sample: "ID of deceased\nNo: ..."
      },
      {
        title: "Requester ID",
        tip: "ID of the person requesting the certificate.",
        sample: "Requester ID\nRelationship: Son / Daughter / Spouse"
      }
    ]
  },
  {
    id: "land-title",
    name: "Land Title / Certificate",
    category: "Property",
    icon: "🗺️",
    short: "Apply for a land title or certificate of occupancy.",
    feeNote: "Survey and registration fees",
    documents: [
      {
        title: "Land Survey Plan",
        tip: "Approved survey plan from a licensed surveyor.",
        sample: "SURVEY PLAN\nParcel No: ...\nArea: ... m2\nLocation: ...\nSurveyor stamp"
      },
      {
        title: "Proof of Acquisition",
        tip: "Sale agreement, inheritance papers or allocation letter.",
        sample: "SALE AGREEMENT\nSeller: ...\nBuyer: ...\nPlot description: ..."
      },
      {
        title: "Owner ID",
        tip: "National ID of the applicant.",
        sample: "ID No: ...\nName: ..."
      },
      {
        title: "Tax Receipts",
        tip: "Land tax or related payment proofs if any.",
        sample: "Land tax receipt\nYear: ...\nAmount: ..."
      }
    ]
  }
];

function getServiceById(id) {
  return SERVICES.find(function (s) {
    return s.id === id;
  });
}

function getCategories() {
  var cats = [];
  SERVICES.forEach(function (s) {
    if (cats.indexOf(s.category) === -1) {
      cats.push(s.category);
    }
  });
  return cats;
}
