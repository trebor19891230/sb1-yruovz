import { NextApiRequest, NextApiResponse } from 'next';

const preventionEvents = [
  {
    id: "1",
    title: "Informationsveranstaltung zum Lynch-Syndrom",
    date: "15. September 2023",
    location: "Universitätsklinikum Frankfurt"
  },
  {
    id: "2",
    title: "Vorsorge-Aktionstag: Darmkrebsfrüherkennung",
    date: "3. Oktober 2023",
    location: "Klinikum rechts der Isar, München"
  },
  {
    id: "3",
    title: "Webinar: Neueste Erkenntnisse zur Prävention bei Lynch-Syndrom",
    date: "20. November 2023",
    location: "Online (Zoom)"
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(preventionEvents);
}