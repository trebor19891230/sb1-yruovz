import { NextApiRequest, NextApiResponse } from 'next';

const clinics = [
  {
    id: 1,
    name: "Universitätsklinikum Heidelberg - Institut für Humangenetik",
    address: "Im Neuenheimer Feld 366, 69120 Heidelberg",
    phone: "+49 6221 56-5087",
    website: "https://www.klinikum.uni-heidelberg.de/zentrum-fuer-humangenetik"
  },
  {
    id: 2,
    name: "Charité - Universitätsmedizin Berlin, Institut für Medizinische Genetik und Humangenetik",
    address: "Augustenburger Platz 1, 13353 Berlin",
    phone: "+49 30 450 569 132",
    website: "https://humangenetik.charite.de"
  },
  {
    id: 3,
    name: "Universitätsklinikum Hamburg-Eppendorf - Institut für Humangenetik",
    address: "Martinistraße 52, 20246 Hamburg",
    phone: "+49 40 7410-54597",
    website: "https://www.uke.de/kliniken-institute/institute/humangenetik"
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(clinics);
}