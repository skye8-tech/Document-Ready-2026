/* All government services data loaded from this file */

const SERVICES = [
  {
    id: "national-id",
    name: "National ID Card",
    nameFr: "Carte Nationale d'Identite",
    category: "Identity",
    icon: "🪪",
    short: "Apply for or renew your Cameroon National Identity Card.",
    shortFr: "Demander ou renouveler votre carte nationale d'identite camerounaise.",
    feeNote: "Fee varies by office",
    feeNoteFr: "Les frais varient selon le bureau",
    documents: [
      {
        title: "Birth Certificate",
        titleFr: "Acte de naissance",
        tip: "Original or certified copy, less than 3 months old if possible.",
        tipFr: "Original ou copie certifiee, de moins de 3 mois si possible.",
        howTo: "Get a recent extract from the civil status registry where you were born. If the original is old or damaged, request a certified copy.",
        howToFr: "Obtenez un extrait recent aupres du registre d'etat civil de votre lieu de naissance. Si l'original est ancien, demandez une copie certifiee.",
        offices: "Civil Status Office of your place of birth, or the council (mairie). For certification: same office or court clerk.",
        officesFr: "Centre d'etat civil de votre lieu de naissance, ou la mairie. Pour certification: meme bureau ou greffe."
      },
      {
        title: "Proof of Residence",
        titleFr: "Justificatif de domicile",
        tip: "Recent utility bill or landlord attestation.",
        tipFr: "Facture recente ou attestation du proprietaire.",
        howTo: "Ask your landlord or quarter head for a signed attestation of residence, or use a recent electricity or water bill.",
        howToFr: "Demandez a votre proprietaire ou chef de quartier une attestation de residence, ou utilisez une facture recente.",
        offices: "Quarter head, landlord, or the council of your current residence.",
        officesFr: "Chef de quartier, proprietaire, ou mairie de residence."
      },
      {
        title: "Passport Photos",
        titleFr: "Photos d'identite",
        tip: "4 recent colour photos, white background, 4x4 cm.",
        tipFr: "4 photos couleur recentes, fond blanc, 4x4 cm.",
        howTo: "Go to a photo studio and request ID photos: white background, face clear, no glasses or hat, 4x4 cm.",
        howToFr: "Allez dans un studio photo et demandez des photos d'identite: fond blanc, visage clair, 4x4 cm.",
        offices: "Any photo studio that does official ID photos.",
        officesFr: "Tout studio photo qui fait des photos d'identite officielles."
      },
      {
        title: "Old ID (if renewal)",
        titleFr: "Ancienne CNI (si renouvellement)",
        tip: "Bring the expired or damaged card if renewing.",
        tipFr: "Apportez la carte expiree ou endommagee en cas de renouvellement.",
        howTo: "If renewing, keep the old card. If it is lost, prepare a loss declaration from the police.",
        howToFr: "En cas de renouvellement, conservez l'ancienne carte. En cas de perte, declaration a la police.",
        offices: "Police station for loss declaration; identification centre for the ID application.",
        officesFr: "Commissariat pour declaration de perte; centre d'identification pour la CNI."
      }
    ]
  },
  {
    id: "passport",
    name: "Passport",
    nameFr: "Passeport",
    category: "Identity",
    icon: "🛂",
    short: "Request a new Cameroonian passport or renewal.",
    shortFr: "Demander un nouveau passeport camerounais ou un renouvellement.",
    feeNote: "Ordinary passport fee applies",
    feeNoteFr: "Frais de passeport ordinaire applicables",
    documents: [
      {
        title: "National ID Card",
        titleFr: "Carte nationale d'identite",
        tip: "Valid national identity card required.",
        tipFr: "Carte nationale d'identite valide requise.",
        howTo: "Ensure your national ID is valid. If expired, renew it first before applying for a passport.",
        howToFr: "Assurez-vous que votre CNI est valide. Si expiree, renouvelez-la avant de demander un passeport.",
        offices: "Identification centre or police ID office.",
        officesFr: "Centre d'identification ou bureau de police."
      },
      {
        title: "Birth Certificate",
        titleFr: "Acte de naissance",
        tip: "Certified copy of birth certificate.",
        tipFr: "Copie certifiee de l'acte de naissance.",
        howTo: "Request a certified extract from the civil status office of your place of birth.",
        howToFr: "Demandez un extrait certifie au centre d'etat civil de votre lieu de naissance.",
        offices: "Civil status office or mairie of your place of birth.",
        officesFr: "Centre d'etat civil ou mairie de votre lieu de naissance."
      },
      {
        title: "Passport Application Form",
        titleFr: "Formulaire de demande de passeport",
        tip: "Filled and signed form from immigration office.",
        tipFr: "Formulaire rempli et signe du service d'immigration.",
        howTo: "Collect the form from immigration or passport office, fill in capital letters, and sign.",
        howToFr: "Retirez le formulaire au service d'immigration, remplissez en majuscules et signez.",
        offices: "Immigration / DGSN passport office.",
        officesFr: "Service d'immigration / DGSN."
      },
      {
        title: "Passport Photos",
        titleFr: "Photos de passeport",
        tip: "2 recent photos meeting ICAO standards.",
        tipFr: "2 photos recentes aux normes OACI.",
        howTo: "Take photos that meet ICAO rules: neutral expression, light background, correct size.",
        howToFr: "Photos conformes OACI: expression neutre, fond clair, format correct.",
        offices: "Photo studios that advertise ICAO or passport photos.",
        officesFr: "Studios photo OACI ou passeport."
      }
    ]
  },
  {
    id: "drivers-licence",
    name: "Driver's Licence",
    nameFr: "Permis de conduire",
    category: "Transport",
    icon: "🚗",
    short: "Apply for a new driving licence or category upgrade.",
    shortFr: "Demander un nouveau permis de conduire ou une categorie supplementaire.",
    feeNote: "Includes medical and test fees",
    feeNoteFr: "Comprend les frais medicaux et d'examen",
    documents: [
      {
        title: "National ID",
        titleFr: "Carte nationale d'identite",
        tip: "Valid national identity card.",
        tipFr: "Carte nationale d'identite valide.",
        howTo: "Bring your valid national ID. Photocopy it if the office asks.",
        howToFr: "Apportez votre CNI valide. Photocopiez-la si demande.",
        offices: "Identification centre if you need to renew your ID first.",
        officesFr: "Centre d'identification si renouvellement de CNI necessaire."
      },
      {
        title: "Medical Certificate",
        titleFr: "Certificat medical",
        tip: "From an approved doctor, confirming fitness to drive.",
        tipFr: "D'un medecin agree, confirmant l'aptitude a conduire.",
        howTo: "Visit a doctor approved for driving fitness exams for vision and health check.",
        howToFr: "Consultez un medecin agree pour l'aptitude a la conduite.",
        offices: "Approved medical centres or hospitals.",
        officesFr: "Centres medicaux ou hopitaux agrees."
      },
      {
        title: "Driving School Certificate",
        titleFr: "Attestation d'auto-ecole",
        tip: "Proof of completed training if first licence.",
        tipFr: "Preuve de formation terminee pour un premier permis.",
        howTo: "Complete required hours at a licensed driving school and keep the certificate.",
        howToFr: "Suivez les heures dans une auto-ecole agreee et conservez l'attestation.",
        offices: "Licensed driving schools in your town.",
        officesFr: "Auto-ecoles agreees de votre ville."
      },
      {
        title: "Passport Photos",
        titleFr: "Photos d'identite",
        tip: "3 recent colour photos.",
        tipFr: "3 photos couleur recentes.",
        howTo: "Get three recent colour photos with white background.",
        howToFr: "Faites trois photos couleur recentes sur fond blanc.",
        offices: "Any official photo studio.",
        officesFr: "Tout studio photo officiel."
      }
    ]
  },
  {
    id: "birth-certificate",
    name: "Birth Certificate",
    nameFr: "Acte de naissance",
    category: "Civil Status",
    icon: "📜",
    short: "Request a copy or late registration of birth.",
    shortFr: "Demander une copie ou un enregistrement tardif de naissance.",
    feeNote: "Stamp duty may apply",
    feeNoteFr: "Des droits de timbre peuvent s'appliquer",
    documents: [
      {
        title: "Hospital Birth Notification",
        titleFr: "Notification de naissance de l'hopital",
        tip: "From the hospital where the child was born.",
        tipFr: "De l'hopital ou l'enfant est ne.",
        howTo: "Ask the maternity ward for the birth notification form filled at birth.",
        howToFr: "Demandez a la maternite le formulaire de notification de naissance.",
        offices: "Hospital or health centre where the child was born.",
        officesFr: "Hopital ou centre de sante de la naissance."
      },
      {
        title: "Parents' IDs",
        titleFr: "Pieces d'identite des parents",
        tip: "National ID of father and mother.",
        tipFr: "CNI du pere et de la mere.",
        howTo: "Bring valid national IDs of both parents.",
        howToFr: "Apportez les CNI valides des deux parents.",
        offices: "Identification centres if IDs need renewal.",
        officesFr: "Centres d'identification si renouvellement necessaire."
      },
      {
        title: "Marriage Certificate (if any)",
        titleFr: "Acte de mariage (le cas echeant)",
        tip: "If parents are married, bring the certificate.",
        tipFr: "Si les parents sont maries, apportez l'acte.",
        howTo: "Bring the civil marriage certificate or a certified copy.",
        howToFr: "Apportez l'acte de mariage civil ou une copie certifiee.",
        offices: "Civil status office where the marriage was registered.",
        officesFr: "Centre d'etat civil ou le mariage a ete enregistre."
      }
    ]
  },
  {
    id: "business-registration",
    name: "Business Registration",
    nameFr: "Immatriculation d'entreprise",
    category: "Business",
    icon: "🏢",
    short: "Register a new business or company with the relevant authority.",
    shortFr: "Immatriculer une nouvelle entreprise aupres de l'autorite competente.",
    feeNote: "Depends on company type",
    feeNoteFr: "Depend du type d'entreprise",
    documents: [
      {
        title: "Application Form",
        titleFr: "Formulaire de demande",
        tip: "Filled business registration form.",
        tipFr: "Formulaire d'immatriculation rempli.",
        howTo: "Obtain and fill the registration form for your business type.",
        howToFr: "Obtenez et remplissez le formulaire selon le type d'entreprise.",
        offices: "CFCE or competent commercial registry.",
        officesFr: "CFCE ou registre du commerce competent."
      },
      {
        title: "ID of Founders",
        titleFr: "Pieces d'identite des fondateurs",
        tip: "National ID or passport of all shareholders.",
        tipFr: "CNI ou passeport de tous les associes.",
        howTo: "Collect valid IDs of all founders. Make photocopies if required.",
        howToFr: "Rassemblez les pieces d'identite de tous les fondateurs.",
        offices: "Identification centres or immigration.",
        officesFr: "Centres d'identification ou immigration."
      },
      {
        title: "Statutes / Articles",
        titleFr: "Statuts de la societe",
        tip: "Signed company statutes.",
        tipFr: "Statuts signes de la societe.",
        howTo: "Prepare company statutes with a notary if required, and ensure all partners sign.",
        howToFr: "Preparez les statuts avec un notaire si necessaire et faites signer les associes.",
        offices: "Notary or lawyer; then CFCE or registry.",
        officesFr: "Notaire ou avocat; puis CFCE ou registre."
      },
      {
        title: "Proof of Address",
        titleFr: "Justificatif d'adresse",
        tip: "Lease or ownership document for business location.",
        tipFr: "Bail ou titre de propriete du local.",
        howTo: "Prepare a lease agreement or ownership title for the premises.",
        howToFr: "Preparez un contrat de bail ou un titre de propriete.",
        offices: "Landlord or notary for formal lease.",
        officesFr: "Proprietaire ou notaire pour un bail formel."
      }
    ]
  },
  {
    id: "marriage-certificate",
    name: "Marriage Certificate",
    nameFr: "Acte de mariage",
    category: "Civil Status",
    icon: "💍",
    short: "Obtain an official marriage certificate after civil marriage.",
    shortFr: "Obtenir un acte de mariage officiel apres le mariage civil.",
    feeNote: "Civil status fees apply",
    feeNoteFr: "Frais d'etat civil applicables",
    documents: [
      {
        title: "Birth Certificates of Both",
        titleFr: "Actes de naissance des deux",
        tip: "Recent certified copies for both spouses.",
        tipFr: "Copies certifiees recentes pour les deux epoux.",
        howTo: "Request recent certified birth extracts for both spouses.",
        howToFr: "Demandez des extraits d'acte de naissance certifies pour les deux epoux.",
        offices: "Civil status offices of each place of birth.",
        officesFr: "Centres d'etat civil des lieux de naissance."
      },
      {
        title: "National IDs",
        titleFr: "Cartes nationales d'identite",
        tip: "Valid IDs of both parties.",
        tipFr: "Pieces d'identite valides des deux parties.",
        howTo: "Both spouses must present valid national identity cards.",
        howToFr: "Les deux epoux doivent presenter des CNI valides.",
        offices: "Identification centres if renewal is needed.",
        officesFr: "Centres d'identification si renouvellement necessaire."
      },
      {
        title: "Witnesses IDs",
        titleFr: "Pieces d'identite des temoins",
        tip: "IDs of at least two witnesses.",
        tipFr: "Pieces d'identite d'au moins deux temoins.",
        howTo: "Choose at least two adult witnesses and bring their valid IDs.",
        howToFr: "Choisissez au moins deux temoins majeurs et apportez leurs CNI.",
        offices: "Identification centres for witnesses needing valid ID.",
        officesFr: "Centres d'identification pour les temoins."
      },
      {
        title: "Residence Proof",
        titleFr: "Justificatif de domicile",
        tip: "Proof of residence for both.",
        tipFr: "Justificatif de domicile pour les deux.",
        howTo: "Prepare residence attestations or utility bills for each spouse.",
        howToFr: "Preparez des attestations de residence ou factures pour chaque epoux.",
        offices: "Quarter head, landlord, or council.",
        officesFr: "Chef de quartier, proprietaire ou mairie."
      }
    ]
  },
  {
    id: "residence-permit",
    name: "Residence Permit",
    nameFr: "Permis de sejour",
    category: "Immigration",
    icon: "🏠",
    short: "Apply for or renew a residence permit for foreigners.",
    shortFr: "Demander ou renouveler un permis de sejour pour etrangers.",
    feeNote: "Varies by nationality and duration",
    feeNoteFr: "Varie selon la nationalite et la duree",
    documents: [
      {
        title: "Valid Passport",
        titleFr: "Passeport valide",
        tip: "Passport with at least 6 months validity.",
        tipFr: "Passeport valide au moins 6 mois.",
        howTo: "Check passport validity. Renew at your embassy if needed.",
        howToFr: "Verifiez la validite du passeport. Renouvelez a l'ambassade si besoin.",
        offices: "Your embassy; then immigration in Cameroon.",
        officesFr: "Votre ambassade; puis immigration au Cameroun."
      },
      {
        title: "Entry Visa / Stamp",
        titleFr: "Visa / cachet d'entree",
        tip: "Proof of legal entry into Cameroon.",
        tipFr: "Preuve d'entree legale au Cameroun.",
        howTo: "Keep the page with your entry visa or stamp. Photocopy if required.",
        howToFr: "Conservez la page avec le visa ou cachet d'entree.",
        offices: "Immigration / DGSN offices.",
        officesFr: "Bureaux d'immigration / DGSN."
      },
      {
        title: "Proof of Means",
        titleFr: "Preuve de moyens",
        tip: "Bank statement or employment letter.",
        tipFr: "Releve bancaire ou lettre d'emploi.",
        howTo: "Get a recent bank statement or employment letter.",
        howToFr: "Obtenez un releve bancaire recent ou une lettre d'emploi.",
        offices: "Your bank or employer; then immigration.",
        officesFr: "Votre banque ou employeur; puis immigration."
      },
      {
        title: "Photos",
        titleFr: "Photos",
        tip: "4 recent passport-size photos.",
        tipFr: "4 photos format passeport recentes.",
        howTo: "Take four recent passport-size photos with white background.",
        howToFr: "Faites quatre photos format passeport sur fond blanc.",
        offices: "Any official photo studio.",
        officesFr: "Tout studio photo officiel."
      }
    ]
  },
  {
    id: "tax-clearance",
    name: "Tax Clearance Certificate",
    nameFr: "Attestation de non redevance",
    category: "Finance",
    icon: "🧾",
    short: "Request a tax clearance for business or personal use.",
    shortFr: "Demander une attestation fiscale pour usage personnel ou professionnel.",
    feeNote: "Usually free if taxes are up to date",
    feeNoteFr: "Souvent gratuit si les impots sont a jour",
    documents: [
      {
        title: "National ID or Business ID",
        titleFr: "CNI ou identifiant fiscal",
        tip: "Identification of the taxpayer.",
        tipFr: "Identification du contribuable.",
        howTo: "Bring your national ID or taxpayer number (NIU).",
        howToFr: "Apportez votre CNI ou votre NIU.",
        offices: "Tax centre where you are registered.",
        officesFr: "Centre des impots ou vous etes enregistre."
      },
      {
        title: "Previous Tax Receipts",
        titleFr: "Recus d'impots precedents",
        tip: "Proof of recent tax payments if available.",
        tipFr: "Preuve des paiements d'impots recents si disponible.",
        howTo: "Gather receipts of recent tax payments.",
        howToFr: "Rassemblez les recus de paiements d'impots recents.",
        offices: "Your records or the same tax centre.",
        officesFr: "Vos archives ou le meme centre des impots."
      },
      {
        title: "Application Letter",
        titleFr: "Lettre de demande",
        tip: "Simple request letter addressed to the tax office.",
        tipFr: "Courte lettre adressee au service des impots.",
        howTo: "Write a short formal letter with your name, NIU, and purpose.",
        howToFr: "Redigez une courte lettre avec votre nom, NIU et motif.",
        offices: "Local tax centre (Centre des impots).",
        officesFr: "Centre des impots local."
      }
    ]
  },
  {
    id: "vehicle-registration",
    name: "Vehicle Registration",
    nameFr: "Immatriculation de vehicule",
    category: "Transport",
    icon: "🚙",
    short: "Register a new or imported vehicle and get number plates.",
    shortFr: "Immatriculer un vehicule neuf ou importe et obtenir les plaques.",
    feeNote: "Registration and plate fees apply",
    feeNoteFr: "Frais d'immatriculation et de plaques applicables",
    documents: [
      {
        title: "Purchase Invoice / Title",
        titleFr: "Facture d'achat / titre",
        tip: "Proof of ownership of the vehicle.",
        tipFr: "Preuve de propriete du vehicule.",
        howTo: "Keep the original sale invoice showing you as the buyer.",
        howToFr: "Conservez la facture d'achat originale.",
        offices: "Seller; then transport registration office.",
        officesFr: "Vendeur; puis bureau d'immatriculation."
      },
      {
        title: "Customs Documents (if imported)",
        titleFr: "Documents de douane (si importe)",
        tip: "Import declaration and duty payment proof.",
        tipFr: "Declaration d'importation et preuve de paiement des droits.",
        howTo: "Collect customs declaration and proof that duties were paid.",
        howToFr: "Recuperez la declaration en douane et la preuve de paiement.",
        offices: "Customs office where the vehicle was cleared.",
        officesFr: "Bureau de douane du dedouanement."
      },
      {
        title: "Owner ID",
        titleFr: "Piece d'identite du proprietaire",
        tip: "National ID of the vehicle owner.",
        tipFr: "CNI du proprietaire du vehicule.",
        howTo: "Bring the valid national ID of the registered owner.",
        howToFr: "Apportez la CNI valide du proprietaire.",
        offices: "Identification centre if renewal needed.",
        officesFr: "Centre d'identification si renouvellement necessaire."
      },
      {
        title: "Insurance Certificate",
        titleFr: "Attestation d'assurance",
        tip: "Valid third-party or comprehensive insurance.",
        tipFr: "Assurance RC ou tous risques valide.",
        howTo: "Buy at least third-party insurance and keep the certificate.",
        howToFr: "Souscrivez au moins une assurance RC et conservez l'attestation.",
        offices: "Licensed insurance companies.",
        officesFr: "Compagnies d'assurance agreees."
      }
    ]
  },
  {
    id: "police-clearance",
    name: "Police Clearance Certificate",
    nameFr: "Certificat de bonne conduite",
    category: "Security",
    icon: "🛡️",
    short: "Obtain a certificate of good conduct from the police.",
    shortFr: "Obtenir un certificat de bonne conduite aupres de la police.",
    feeNote: "Stamp and processing fee",
    feeNoteFr: "Frais de timbre et de traitement",
    documents: [
      {
        title: "National ID",
        titleFr: "Carte nationale d'identite",
        tip: "Valid national identity card.",
        tipFr: "Carte nationale d'identite valide.",
        howTo: "Present your valid national ID. Photocopy if asked.",
        howToFr: "Presentez votre CNI valide. Photocopie si demandee.",
        offices: "Identification centre if you need a valid ID first.",
        officesFr: "Centre d'identification si CNI a renouveler."
      },
      {
        title: "Application Form",
        titleFr: "Formulaire de demande",
        tip: "Filled form from the police station.",
        tipFr: "Formulaire rempli au commissariat.",
        howTo: "Collect and fill the form at the police station with your details and purpose.",
        howToFr: "Retirez et remplissez le formulaire au commissariat.",
        offices: "Police station of your place of residence.",
        officesFr: "Commissariat de votre lieu de residence."
      },
      {
        title: "Passport Photos",
        titleFr: "Photos d'identite",
        tip: "2 recent photos.",
        tipFr: "2 photos recentes.",
        howTo: "Bring two recent colour photos with white background.",
        howToFr: "Apportez deux photos couleur recentes sur fond blanc.",
        offices: "Any official photo studio.",
        officesFr: "Tout studio photo officiel."
      }
    ]
  },
  {
    id: "death-certificate",
    name: "Death Certificate",
    nameFr: "Acte de deces",
    category: "Civil Status",
    icon: "📋",
    short: "Request an official death certificate for administrative use.",
    shortFr: "Demander un acte de deces officiel pour usage administratif.",
    feeNote: "Civil status fees may apply",
    feeNoteFr: "Des frais d'etat civil peuvent s'appliquer",
    documents: [
      {
        title: "Hospital Death Notice",
        titleFr: "Certificat medical de deces",
        tip: "Medical certificate of death from hospital or doctor.",
        tipFr: "Certificat medical de deces de l'hopital ou du medecin.",
        howTo: "Obtain the medical certificate of death from the doctor or hospital.",
        howToFr: "Obtenez le certificat medical de deces aupres du medecin ou de l'hopital.",
        offices: "Hospital or clinic where the death was certified.",
        officesFr: "Hopital ou clinique du constat de deces."
      },
      {
        title: "ID of Deceased",
        titleFr: "Piece d'identite du defunt",
        tip: "National ID or any identity document of the deceased.",
        tipFr: "CNI ou document d'identite du defunt.",
        howTo: "Bring any available identity document of the deceased.",
        howToFr: "Apportez tout document d'identite disponible du defunt.",
        offices: "Family records; civil status if needed.",
        officesFr: "Archives familiales; etat civil si besoin."
      },
      {
        title: "Requester ID",
        titleFr: "Piece d'identite du demandeur",
        tip: "ID of the person requesting the certificate.",
        tipFr: "Piece d'identite de la personne qui demande l'acte.",
        howTo: "Present your valid national ID and state your relationship to the deceased.",
        howToFr: "Presentez votre CNI valide et indiquez votre lien avec le defunt.",
        offices: "Civil status office of the place of death or residence.",
        officesFr: "Centre d'etat civil du lieu de deces ou de residence."
      }
    ]
  },
  {
    id: "land-title",
    name: "Land Title / Certificate",
    nameFr: "Titre foncier / certificat",
    category: "Property",
    icon: "🗺️",
    short: "Apply for a land title or certificate of occupancy.",
    shortFr: "Demander un titre foncier ou un certificat d'occupation.",
    feeNote: "Survey and registration fees",
    feeNoteFr: "Frais de levee et d'enregistrement",
    documents: [
      {
        title: "Land Survey Plan",
        titleFr: "Plan de levee topographique",
        tip: "Approved survey plan from a licensed surveyor.",
        tipFr: "Plan de levee approuve d'un geometre agree.",
        howTo: "Hire a licensed surveyor to measure the land and produce an approved plan.",
        howToFr: "Engagez un geometre agree pour mesurer le terrain et produire un plan.",
        offices: "Licensed surveyor; then Cadastre or land registry.",
        officesFr: "Geometre agree; puis Cadastre ou registre foncier."
      },
      {
        title: "Proof of Acquisition",
        titleFr: "Preuve d'acquisition",
        tip: "Sale agreement, inheritance papers or allocation letter.",
        tipFr: "Acte de vente, pieces de succession ou lettre d'attribution.",
        howTo: "Gather the sale agreement, inheritance judgment, or allocation letter.",
        howToFr: "Rassemblez l'acte de vente, le jugement de succession ou la lettre d'attribution.",
        offices: "Notary, court, or allocating authority.",
        officesFr: "Notaire, tribunal ou autorite d'attribution."
      },
      {
        title: "Owner ID",
        titleFr: "Piece d'identite du proprietaire",
        tip: "National ID of the applicant.",
        tipFr: "CNI du demandeur.",
        howTo: "Bring your valid national identity card.",
        howToFr: "Apportez votre carte nationale d'identite valide.",
        offices: "Identification centre if renewal is needed.",
        officesFr: "Centre d'identification si renouvellement necessaire."
      },
      {
        title: "Tax Receipts",
        titleFr: "Recus d'impots fonciers",
        tip: "Land tax or related payment proofs if any.",
        tipFr: "Recus d'impots fonciers ou preuves de paiement.",
        howTo: "Collect any land tax receipts you already have.",
        howToFr: "Rassemblez les recus d'impots fonciers deja en votre possession.",
        offices: "Tax office or treasury; then land registry.",
        officesFr: "Service des impots ou tresorerie; puis registre foncier."
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
